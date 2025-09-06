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
    <div className="w-full max-w-6xl mx-auto" id="editor">
      <div className="space-y-12">
        {/* Main Editor Area */}
        <div className="relative">
          <div
            onClick={handleClick}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`
              relative bg-card/50 backdrop-blur-sm rounded-3xl border border-white/10 cursor-pointer 
              min-h-[500px] flex flex-col items-center justify-center text-center p-12 transition-all duration-300
              ${isDragOver ? 'border-primary/50 bg-primary/5 scale-[1.02]' : ''}
              ${processedDataUrl ? 'border-primary/30' : ''}
              ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:border-white/20 hover:bg-card/70'}
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
              <div className="space-y-8">
                <div className="text-8xl opacity-60">📸</div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-foreground">
                    {isProcessing ? 'Processing Your Image...' : 'Upload Your Image'}
                  </h3>
                  <p className="text-xl text-foreground/70">
                    Drag & drop or click to browse files
                  </p>
                  <div className="text-foreground/50 space-y-2 text-lg">
                    <p>Supports JPEG, PNG, WebP formats</p>
                    <p>Maximum file size: 25MB</p>
                  </div>
                </div>
                {isDragOver && (
                  <div className="absolute inset-0 bg-gradient-accent/10 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <div className="text-6xl">✨</div>
                      <p className="text-2xl font-semibold text-white">Drop to upload</p>
                    </div>
                  </div>
                )}
                {isProcessing && (
                  <div className="absolute inset-0 bg-background/50 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-center space-y-4">
                      <div className="animate-spin rounded-full h-12 w-12 border-4 border-primary/30 border-t-primary mx-auto"></div>
                      <p className="text-xl font-semibold text-foreground">Processing...</p>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="w-full space-y-6">
                <div className="relative">
                  <img
                    src={processedDataUrl}
                    alt="Processed image"
                    className="max-w-full max-h-[450px] mx-auto rounded-2xl shadow-2xl"
                  />
                  {isProcessing && (
                    <div className="absolute inset-0 bg-background/50 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                      <div className="bg-card rounded-full p-4 shadow-xl">
                        <div className="animate-spin rounded-full h-8 w-8 border-4 border-primary/30 border-t-primary"></div>
                      </div>
                    </div>
                  )}
                </div>
                <p className="text-foreground/60 text-lg">
                  Drop a new image to replace, or adjust the effect below
                </p>
              </div>
            )}
          </div>
        </div>

        {/* macOS Style Effect Controls - Always Visible */}
        <div className="flex flex-col items-center space-y-8">
          <div className="bg-card/30 backdrop-blur-xl rounded-2xl p-2 border border-white/10 shadow-xl">
            <div className="flex bg-card/50 rounded-xl p-1 gap-1">
              {effectOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleEffectChange(option.value)}
                  disabled={isProcessing}
                  className={`
                    px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-w-[140px]
                    ${selectedEffect === option.value
                      ? 'bg-white text-card shadow-md transform scale-105'
                      : 'text-foreground/70 hover:text-foreground hover:bg-white/10'
                    }
                    ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                  `}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {/* Download Button - Always Visible */}
          <button
            onClick={handleDownload}
            disabled={!processedDataUrl || isProcessing}
            className="btn btn-primary px-12 py-4 text-xl font-semibold disabled:opacity-30 disabled:cursor-not-allowed min-w-[200px]"
          >
            {isProcessing ? (
              <div className="flex items-center space-x-3">
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white"></div>
                <span>Processing...</span>
              </div>
            ) : (
              <>
                <span className="mr-2">💾</span>
                Download PNG
              </>
            )}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-4 backdrop-blur-sm">
            <p className="text-destructive font-medium text-center">{error}</p>
          </div>
        )}
      </div>
    </div>
  );
}