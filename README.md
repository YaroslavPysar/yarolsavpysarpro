```markdown
# Image Processing Toolkit

A simple JavaScript toolkit for image processing tasks such as resizing and cropping using the Sharp library.

## Installation

Install the package using npm:

```bash
npm install sharp
```

## Usage

```javascript
const ImageProcessingToolkit = require('image-processing-toolkit');

// Create an instance of ImageProcessingToolkit
const toolkit = new ImageProcessingToolkit();

// Example: Resize an image
toolkit.resizeImage('input.jpg', 'output-resized.jpg', 300, 200)
  .then(() => console.log('Image resized successfully'))
  .catch((error) => console.error('Error:', error));

// Example: Crop an image
toolkit.cropImage('input.jpg', 'output-cropped.jpg', 100, 50, 300, 200)
  .then(() => console.log('Image cropped successfully'))
  .catch((error) => console.error('Error:', error));
```

Replace `'input.jpg'`, `'output-resized.jpg'`, `'output-cropped.jpg'`, `300`, `200`, `100`, `50` with your actual input image path, output resized image path, output cropped image path, and crop/resize dimensions respectively.

## API

### `resizeImage(inputPath, outputPath, width, height)`

Resize an image to the specified dimensions.

- `inputPath`: Path to the input image file.
- `outputPath`: Path to save the resized image.
- `width`: Desired width of the resized image.
- `height`: Desired height of the resized image.

### `cropImage(inputPath, outputPath, left, top, width, height)`

Crop an image to the specified dimensions.

- `inputPath`: Path to the input image file.
- `outputPath`: Path to save the cropped image.
- `left`: The left edge of the cropping rectangle.
- `top`: The top edge of the cropping rectangle.
- `width`: Width of the cropping rectangle.
- `height`: Height of the cropping rectangle.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
