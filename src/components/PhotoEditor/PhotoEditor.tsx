'use client';

import { useState, useCallback } from 'react';
import { EffectType } from '@/types/editor';
import { loadImageFromFile, processImage, downloadImage } from '@/lib/imageProcessor';
import ImageUpload from './ImageUpload';
import ImagePreview from './ImagePreview';
import EffectControls from './EffectControls';
import ExportButton from './ExportButton';

export default function PhotoEditor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedDataUrl, setProcessedDataUrl] = useState<string | null>(null);
  const [currentCanvas, setCurrentCanvas] = useState<HTMLCanvasElement | null>(null);
  const [selectedEffect, setSelectedEffect] = useState<EffectType>('classic');
  const [isProcessing, setIsProcessing] = useState(false);

  const processImageWithEffect = useCallback(async (file: File, effectType: EffectType) => {
    setIsProcessing(true);
    try {
      const img = await loadImageFromFile(file);
      const result = processImage(img, effectType);
      
      setProcessedDataUrl(result.dataUrl);
      setCurrentCanvas(result.canvas);
    } catch (error) {
      console.error('Error processing image:', error);
    } finally {
      setIsProcessing(false);
    }
  }, []);

  const handleImageSelect = useCallback(async (file: File) => {
    setSelectedFile(file);
    // 按需求文档要求：上传后自动应用Classic Colors效果
    await processImageWithEffect(file, 'classic');
  }, [processImageWithEffect]);

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

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="grid grid-cols-2 gap-8 mb-8">
          {/* Upload Area */}
          <div>
            <ImageUpload 
              onImageSelect={handleImageSelect}
              isProcessing={isProcessing}
            />
          </div>
          
          {/* Preview Area */}
          <div>
            <ImagePreview 
              dataUrl={processedDataUrl}
              isProcessing={isProcessing}
            />
          </div>
        </div>
        
        {/* Controls Area */}
        <div className="space-y-6">
          <EffectControls
            selectedEffect={selectedEffect}
            onEffectChange={handleEffectChange}
            disabled={!selectedFile || isProcessing}
          />
          
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ExportButton
                onDownload={handleDownload}
                disabled={!processedDataUrl}
                isProcessing={isProcessing}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden space-y-6">
        <ImageUpload 
          onImageSelect={handleImageSelect}
          isProcessing={isProcessing}
        />
        
        <ImagePreview 
          dataUrl={processedDataUrl}
          isProcessing={isProcessing}
        />
        
        <EffectControls
          selectedEffect={selectedEffect}
          onEffectChange={handleEffectChange}
          disabled={!selectedFile || isProcessing}
        />
        
        <ExportButton
          onDownload={handleDownload}
          disabled={!processedDataUrl}
          isProcessing={isProcessing}
        />
      </div>
    </div>
  );
}