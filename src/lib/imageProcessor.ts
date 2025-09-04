import { RGB, EffectType, ColorPalette, ProcessedImage, FileValidation } from '@/types/editor';

// 根据需求文档定义的颜色值
export const COLORS = {
  BRAVE_PINK: { r: 247, g: 132, b: 197 },
  HERO_GREEN: { r: 27, g: 96, b: 47 },
  BRAVE_PINK_FRIENDLY: { r: 249, g: 159, b: 210 },
  HERO_GREEN_FRIENDLY: { r: 22, g: 80, b: 39 }
};

export const EFFECTS = {
  classic: {
    name: 'Classic Colors',
    type: 'classic' as EffectType,
    colors: {
      shadow: COLORS.HERO_GREEN,
      highlight: COLORS.BRAVE_PINK
    }
  },
  reverse: {
    name: 'Reverse Duotone',
    type: 'reverse' as EffectType,
    colors: {
      shadow: COLORS.BRAVE_PINK,
      highlight: COLORS.HERO_GREEN
    }
  },
  colorblind: {
    name: 'Color-blind Friendly',
    type: 'colorblind' as EffectType,
    colors: {
      shadow: COLORS.HERO_GREEN_FRIENDLY,
      highlight: COLORS.BRAVE_PINK_FRIENDLY
    }
  }
};

export function validateFile(file: File): FileValidation {
  const MAX_SIZE = 10 * 1024 * 1024; // 10MB
  const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

  if (!file) {
    return { isValid: false, error: 'No file selected' };
  }

  if (file.size > MAX_SIZE) {
    return { isValid: false, error: 'File size must be less than 10MB' };
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return { isValid: false, error: 'File must be JPEG, PNG, or WebP format' };
  }

  return { isValid: true };
}

export function loadImageFromFile(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Failed to load image'));
    };

    img.src = url;
  });
}

// 核心双色调处理算法 - 按照需求文档实现
export function applyDuotone(
  imageData: ImageData,
  shadowColor: RGB,
  highlightColor: RGB
): ImageData {
  const data = imageData.data;
  
  for (let i = 0; i < data.length; i += 4) {
    // 计算灰度值
    const gray = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    const normalizedGray = gray / 255;
    
    // 线性插值计算新颜色
    data[i] = shadowColor.r + (highlightColor.r - shadowColor.r) * normalizedGray;
    data[i + 1] = shadowColor.g + (highlightColor.g - shadowColor.g) * normalizedGray;
    data[i + 2] = shadowColor.b + (highlightColor.b - shadowColor.b) * normalizedGray;
    // Alpha通道保持不变 (data[i + 3])
  }
  
  return imageData;
}

export function processImage(
  img: HTMLImageElement,
  effectType: EffectType
): ProcessedImage {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d')!;
  
  // 设置画布尺寸为原图尺寸
  canvas.width = img.width;
  canvas.height = img.height;
  
  // 绘制原图到画布
  ctx.drawImage(img, 0, 0);
  
  // 获取图像数据
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  
  // 应用双色调效果
  const effect = EFFECTS[effectType];
  const processedData = applyDuotone(
    imageData,
    effect.colors.shadow,
    effect.colors.highlight
  );
  
  // 将处理后的数据绘制回画布
  ctx.putImageData(processedData, 0, 0);
  
  return {
    canvas,
    dataUrl: canvas.toDataURL('image/png')
  };
}

export function downloadImage(canvas: HTMLCanvasElement, originalFileName: string) {
  // 生成文件名，按需求文档格式：原文件名_pinkgreen.png
  const nameWithoutExt = originalFileName.replace(/\.[^/.]+$/, '');
  const fileName = `${nameWithoutExt}_pinkgreen.png`;
  
  canvas.toBlob((blob) => {
    if (!blob) return;
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, 'image/png');
}