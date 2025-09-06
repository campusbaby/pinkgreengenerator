// Image resource configuration
export const imageConfig = {
  gallery: {
    image2: {
      path: '/images/image2.jpg',
      alt: 'Pink-green duotone portrait of two people making peace signs',
      title: 'Friendship Portrait',
      description: 'Classic pink-green duotone effect on portrait'
    },
    image3: {
      path: '/images/image3.jpeg', 
      alt: 'Woman with flowing hair in artistic pink-green duotone effect',
      title: 'Dynamic Portrait',
      description: 'Artistic portrait with flowing hair in reverse pink-green'
    },
    image4: {
      path: '/images/image4.jpg',
      alt: 'Young person in contemplative pose with pink-green effect',
      title: 'Contemplative Mood', 
      description: 'Peaceful portrait showcasing color depth'
    }
  },
  
  // Available gallery images for rotation
  galleryImages: [
    {
      id: 1,
      imagePath: '/images/image2.jpg',
      alt: 'Two people making peace signs with pink-green duotone effect',
      title: 'Friendship Portrait',
      description: 'Classic pink-green duotone effect on portrait',
      category: 'Portrait'
    },
    {
      id: 2,
      imagePath: '/images/image3.jpeg',
      alt: 'Woman with flowing hair in pink-green duotone effect',
      title: 'Dynamic Portrait',
      description: 'Artistic portrait with flowing hair in reverse pink-green',
      category: 'Portrait'
    },
    {
      id: 3,
      imagePath: '/images/image4.jpg',
      alt: 'Young person in contemplative pose with pink-green effect',
      title: 'Contemplative Mood',
      description: 'Peaceful portrait showcasing color depth',
      category: 'Portrait'
    },
    {
      id: 4,
      imagePath: '/images/image2.jpg',
      alt: 'Portrait demonstrating classic pink-green duotone',
      title: 'Classic Effect',
      description: 'Perfect example of traditional pink-green processing',
      category: 'Classic'
    },
    {
      id: 5,
      imagePath: '/images/image3.jpeg',
      alt: 'Expressive portrait with artistic pink-green treatment',
      title: 'Artistic Expression',
      description: 'Creative use of pink highlights and green shadows',
      category: 'Art'
    },
    {
      id: 6,
      imagePath: '/images/image4.jpg',
      alt: 'Minimalist portrait with pink-green color scheme',
      title: 'Minimalist Style',
      description: 'Clean composition with striking color contrast',
      category: 'Minimalist'
    },
    {
      id: 7,
      imagePath: '/images/image2.jpg',
      alt: 'Portrait representing social solidarity with pink-green colors',
      title: 'Social Movement',
      description: 'Symbolic representation of courage and unity',
      category: 'Movement'
    },
    {
      id: 8,
      imagePath: '/images/image3.jpeg',
      alt: 'Digital art example of pink-green duotone processing',
      title: 'Digital Art',
      description: 'Modern digital processing technique demonstration',
      category: 'Digital'
    }
  ],
  
  // Supported image formats
  supportedFormats: ['jpeg', 'jpg', 'png', 'webp'],
  
  // Maximum file size (25MB)
  maxFileSize: 25 * 1024 * 1024,
  
  // Image quality settings
  quality: {
    thumbnail: 60,
    preview: 80,
    export: 95
  }
};

export default imageConfig;