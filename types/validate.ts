interface ImageData {
  imgElement: HTMLImageElement,
  file: File
}

export type ValidateImgFunc = (imgData: ImageData) => true | string;
