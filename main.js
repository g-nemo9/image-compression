const imagemin = require('imagemin');
// const imageminPngquant = require('imagemin-pngquant');
const imageminMozjpeg = require('imagemin-mozjpeg');

// async function compressPng(input_dir, output_dir) {
//   await imagemin([input_dir + '/*.png'], {
//     destination: output_dir,
//     plugins: [
//       imageminPngquant()
//     ]
//   });
//   console.log('PNG optimized!');
// }

async function compressJpeg(input_dir, output_dir) {
  await imagemin([input_dir + '/*.jpg'], {
    destination: output_dir,
    plugins: [
      imageminMozjpeg()
    ]
  });
  console.log('JPG optimized!');
}

// compressPng('images', 'images_compressed');
compressJpeg('images', 'images_compressed');
