// copied from https://codesandbox.io/s/72py4jlll6?file=/src/index.js

const cropImage = (image: HTMLImageElement, crop: ReactCrop.Crop) => {
  const canvas = document.createElement("canvas");
  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;
  canvas.width = crop.width as number;
  canvas.height = crop.height as number;
  const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

  ctx.drawImage(
    image,
    crop.x! * scaleX,
    crop.y! * scaleY,
    crop.width! * scaleX,
    crop.height! * scaleY,
    0,
    0,
    crop.width!,
    crop.height!
  );

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("error creating image"));
        return;
      }

      //resolve with new image url
      resolve(blob);
    }, "image/jpeg");
  });
};

export default cropImage;
