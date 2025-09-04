'use client';

import { useRef, useState, useCallback } from 'react';
import { validateFile } from '@/lib/imageProcessor';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
  isProcessing?: boolean;
}

export default function ImageUpload({ onImageSelect, isProcessing = false }: ImageUploadProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = useCallback((file: File) => {
    const validation = validateFile(file);
    if (!validation.isValid) {
      setError(validation.error!);
      return;
    }
    
    setError(null);
    onImageSelect(file);
  }, [onImageSelect]);

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

  return (
    <div className="w-full">
      <div
        onClick={handleClick}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          relative upload-zone rounded-lg p-8 text-center cursor-pointer
          min-h-[200px] md:min-h-[300px] flex flex-col items-center justify-center
          ${isDragOver ? 'dragover' : ''}
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
        
        <div className="space-y-4">
          <div className="text-4xl">📁</div>
          <div>
            <p className="text-lg font-medium text-gray-700">
              {isProcessing ? 'Processing...' : 'Drop Your Image Here'}
            </p>
            <p className="text-gray-500 mt-2">
              or Click to Browse
            </p>
          </div>
          <div className="text-sm text-gray-400 space-y-1">
            <p>JPEG, PNG, WebP</p>
            <p>Max 10MB</p>
          </div>
        </div>
        
        {isDragOver && (
          <div className="absolute inset-0 bg-brave-pink/10 rounded-lg flex items-center justify-center">
            <p className="text-brave-pink font-medium">Release to upload</p>
          </div>
        )}
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-700 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}