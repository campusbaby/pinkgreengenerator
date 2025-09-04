'use client';

import Image from 'next/image';

interface ImagePreviewProps {
  dataUrl: string | null;
  isProcessing?: boolean;
}

export default function ImagePreview({ dataUrl, isProcessing = false }: ImagePreviewProps) {
  if (!dataUrl) {
    return (
      <div className="w-full min-h-[200px] md:min-h-[300px] border-2 border-gray-200 rounded-lg flex items-center justify-center bg-gray-50">
        <div className="text-center space-y-4">
          <div className="text-4xl">🖼️</div>
          <p className="text-gray-500">Preview</p>
          <p className="text-sm text-gray-400">
            Upload an image to see the pink green effect
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full relative">
      <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden bg-white min-h-[200px] md:min-h-[300px]">
        {isProcessing ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10">
            <div className="flex flex-col items-center space-y-3">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brave-pink"></div>
              <p className="text-sm text-gray-600">Applying effect...</p>
            </div>
          </div>
        ) : null}
        
        <div className="w-full h-full flex items-center justify-center p-4">
          <img
            src={dataUrl}
            alt="Processed image with pink green effect"
            className="max-w-full max-h-full object-contain rounded"
            style={{ maxHeight: '400px' }}
          />
        </div>
      </div>
    </div>
  );
}