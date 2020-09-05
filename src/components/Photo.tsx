import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import cropImage from "../utils/cropImage";

interface Props {
  onChange: (blob: Blob) => void;
}

const Photo: React.FC<Props> = ({ onChange }) => {
  const [crop, setCrop] = useState<ReactCrop.Crop>({
    aspect: 16 / 9,
    unit: "%",
    width: 70,
  });
  const [src, setSrc] = useState("");
  const [imgRef, setImgRef] = useState<HTMLImageElement>();

  const handleSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result as string));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleComplete = async () => {
    if (imgRef && crop.width && crop.height) {
      const newImgBlob = await cropImage(imgRef, crop);
      onChange(newImgBlob);
    }
  };

  return (
    <div>
      <Form.Group>
        <Form.File
          name="file"
          label="Upload a photo"
          onChange={handleSelectFile}
        />
      </Form.Group>

      {src && (
        <ReactCrop
          src={src}
          crop={crop}
          ruleOfThirds
          onChange={setCrop}
          onImageLoaded={setImgRef}
          onComplete={handleComplete}
        />
      )}
    </div>
  );
};

export default Photo;
