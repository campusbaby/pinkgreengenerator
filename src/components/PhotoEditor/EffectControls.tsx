'use client';

import { EffectType } from '@/types/editor';
import { EFFECTS } from '@/lib/imageProcessor';

interface EffectControlsProps {
  selectedEffect: EffectType;
  onEffectChange: (effect: EffectType) => void;
  disabled?: boolean;
}

export default function EffectControls({ 
  selectedEffect, 
  onEffectChange, 
  disabled = false 
}: EffectControlsProps) {
  const effectOptions = Object.entries(EFFECTS) as [EffectType, typeof EFFECTS[EffectType]][];

  return (
    <div className="w-full bg-white border-2 border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-4">Color Options</h3>
      
      <div className="space-y-4">
        {effectOptions.map(([key, effect]) => (
          <label
            key={key}
            className={`
              flex items-start space-x-3 p-3 rounded-lg border cursor-pointer transition-all
              ${selectedEffect === key 
                ? 'border-brave-pink bg-brave-pink/5' 
                : 'border-gray-200 hover:border-gray-300'
              }
              ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
          >
            <input
              type="radio"
              name="effect"
              value={key}
              checked={selectedEffect === key}
              onChange={(e) => !disabled && onEffectChange(e.target.value as EffectType)}
              disabled={disabled}
              className="mt-1 text-brave-pink focus:ring-brave-pink"
            />
            
            <div className="flex-1">
              <div className={`font-medium mb-1 ${
                selectedEffect === key ? 'text-black' : 'text-white'
              }`}>
                {effect.name}
              </div>
              <div className={`text-sm ${
                selectedEffect === key ? 'text-black/70' : 'text-white/60'
              }`}>
                {key === 'classic' && '(Pink highlights, Green shadows)'}
                {key === 'reverse' && '(Green highlights, Pink shadows)'}
                {key === 'colorblind' && '(Accessible colors)'}
              </div>
            </div>
            
            {selectedEffect === key && (
              <div className="text-brave-pink">
                ⚫
              </div>
            )}
          </label>
        ))}
      </div>
      
      {disabled && (
        <p className="mt-4 text-sm text-gray-500 text-center">
          Upload an image to enable effect options
        </p>
      )}
    </div>
  );
}