import imageConfig from '@/config/images';

export const imageUtils = {
  /**
   * Validate if file format is supported
   */
  isValidFormat(file: File): boolean {
    const extension = file.name.split('.').pop()?.toLowerCase();
    return extension ? imageConfig.supportedFormats.includes(extension) : false;
  },

  /**
   * Check if file size is within limits
   */
  isValidSize(file: File): boolean {
    return file.size <= imageConfig.maxFileSize;
  },

  /**
   * Get formatted file size string
   */
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  },

  /**
   * Get max file size string
   */
  getMaxFileSizeString(): string {
    return this.formatFileSize(imageConfig.maxFileSize);
  },

  /**
   * Get supported formats as string
   */
  getSupportedFormatsString(): string {
    return imageConfig.supportedFormats.map(format => format.toUpperCase()).join(', ');
  },

  /**
   * Validate file for upload
   */
  validateFile(file: File): { valid: boolean; error?: string } {
    if (!this.isValidFormat(file)) {
      return {
        valid: false,
        error: `Unsupported format. Please use: ${this.getSupportedFormatsString()}`
      };
    }

    if (!this.isValidSize(file)) {
      return {
        valid: false,
        error: `File too large. Maximum size: ${this.getMaxFileSizeString()}`
      };
    }

    return { valid: true };
  },

  /**
   * Get gallery image by ID
   */
  getGalleryImage(id: number) {
    return imageConfig.galleryImages.find(img => img.id === id);
  },

  /**
   * Get random gallery images
   */
  getRandomGalleryImages(count: number) {
    const shuffled = [...imageConfig.galleryImages].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  },

  /**
   * Get gallery images by category
   */
  getGalleryImagesByCategory(category: string) {
    return imageConfig.galleryImages.filter(img => 
      img.category.toLowerCase() === category.toLowerCase()
    );
  }
};

export default imageUtils;