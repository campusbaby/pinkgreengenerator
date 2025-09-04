'use client';

interface ExportButtonProps {
  onDownload: () => void;
  disabled?: boolean;
  isProcessing?: boolean;
}

export default function ExportButton({ 
  onDownload, 
  disabled = false, 
  isProcessing = false 
}: ExportButtonProps) {
  return (
    <div className="w-full">
      <button
        onClick={onDownload}
        disabled={disabled || isProcessing}
        className={`
          w-full btn-primary
          ${disabled || isProcessing
            ? 'bg-gray-400 cursor-not-allowed hover:transform-none hover:shadow-none' 
            : ''
          }
          focus:outline-none focus:ring-2 focus:ring-brave-pink focus:ring-offset-2
        `}
      >
        {isProcessing ? (
          <div className="flex items-center justify-center space-x-2">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
            <span>Processing...</span>
          </div>
        ) : (
          'Download PNG'
        )}
      </button>
      
      {disabled && !isProcessing && (
        <p className="mt-2 text-sm text-gray-500 text-center">
          Upload and process an image to download
        </p>
      )}
    </div>
  );
}