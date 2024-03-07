// image-processing-toolkit.js

const sharp = require('sharp');

class ImageProcessingToolkit {
  constructor() {}

  async resizeImage(inputPath, outputPath, width, height) {
    try {
      await sharp(inputPath)
        .resize(width, height)
        .toFile(outputPath);
      console.log(`Image resized successfully to ${width}x${height} and saved at ${outputPath}.`);
    } catch (error) {
      console.error('Error resizing image:', error);
      throw error;
    }
  }

  async cropImage(inputPath, outputPath, left, top, width, height) {
    try {
      await sharp(inputPath)
        .extract({ left, top, width, height })
        .toFile(outputPath);
      console.log(`Image cropped successfully and saved at ${outputPath}.`);
    } catch (error) {
      console.error('Error cropping image:', error);
      throw error;
    }
  }
}

module.exports = ImageProcessingToolkit;
