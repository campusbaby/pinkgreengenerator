'use client';

import { useState, useCallback, useRef } from 'react';
import { EffectType } from '@/types/editor';
import { validateFile, loadImageFromFile, processImage, downloadImage } from '@/lib/imageProcessor';

export default function UnifiedEditor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedDataUrl, setProcessedDataUrl] = useState<string | null>(null);
  const [currentCanvas, setCurrentCanvas] = useState<HTMLCanvasElement | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<EffectType>('classic');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const processImageWithEffect = useCallback(async (file: File, effectType: EffectType) => {
    setIsProcessing(true);
    try {
      const img = await loadImageFromFile(file);
      const result = processImage(img, effectType);
      
      setProcessedDataUrl(result.dataUrl);
      setCurrentCanvas(result.canvas);
    } catch (error) {
      console.error('Error processing image:', error);
      setError('Failed to process image. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleFileSelect = useCallback(async (file: File) => {
    const validation = validateFile(file);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }
    
    setError(null);
    setSelectedFile(file);
    await processImageWithEffect(file, selectedEffect);
  }, [processImageWithEffect, selectedEffect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, [handleFileSelect]);

  const handleClick = () => {
    if (isProcessing) return;
    fileInputRef.current?.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleEffectChange = useCallback(async (effectType: EffectType) => {
    setSelectedEffect(effectType);
    if (selectedFile) {
      await processImageWithEffect(selectedFile, effectType);
    }
  }, [selectedFile, processImageWithEffect]);

  const handleDownload = useCallback(() => {
    if (currentCanvas && selectedFile) {
      downloadImage(currentCanvas, selectedFile.name);
    }
  }, [currentCanvas, selectedFile]);

  const effectOptions = [
    { value: 'classic' as EffectType, label: 'Classic', description: 'Pink highlights, Green shadows' },
    { value: 'reverse' as EffectType, label: 'Reverse', description: 'Green highlights, Pink shadows' },
    { value: 'colorblind' as EffectType, label: 'Colorblind', description: 'Accessible colors' }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="editor-container p-8">
        {/* Main Editor Area */}
        <div className="mb-8">
          <div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              upload-zone cursor-pointer min-h-[400px] flex flex-col items-center justify-center text-center p-8
              ${isDragOver ? 'dragover' : ''}
              ${processedDataUrl ? 'has-image' : ''}
              ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileInputChange}
              className="hidden"
              disabled={isProcessing}
            />
            
            {!processedDataUrl ? (
              <div className="space-y-6">
                <div className="text-6xl">📸</div>
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {isProcessing ? 'Processing...' : 'Drop Your Image Here'}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    or click to browse files
                  </p>
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>Supports JPEG, PNG, WebP</p>
                    <p>Maximum size: 10MB</p>
                  </div>
                </div>
                {isDragOver && (
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-green-500/10 rounded-2xl flex items-center justify-center">
                    <p className="text-pink-600 font-semibold text-lg">Release to upload</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full">
                <div className="relative">
                  <img
                    src={processedDataUrl}
                    alt="Processed image"
                    className="max-w-full max-h-[400px] mx-auto rounded-lg shadow-lg"
                  />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-black/20 rounded-lg flex items-center justify-center">
                      <div className="bg-white rounded-full p-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-pink-600"></div>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Drop a new image to replace, or adjust the effect below
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Effect Controls */}
        {selectedFile && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Choose Effect</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {effectOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleEffectChange(option.value)}
                    disabled={isProcessing}
                    className={`
                      p-4 rounded-lg border-2 text-left transition-all
                      ${selectedEffect === option.value
                        ? 'border-pink-500 bg-pink-50 text-pink-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                      }
                      ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                    `}
                  >
                    <div className="font-semibold">{option.label}</div>
                    <div className="text-sm mt-1 opacity-80">{option.description}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Download Button */}
            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                disabled={!processedDataUrl || isProcessing}
                className="btn-primary px-8 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </div>
                ) : (
                  'Download PNG'
                )}
              </button>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}