"use client";
import { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

/**
 * PhotoCapture Component
 * @returns
 */
export default function PhotoCapture() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [photoTaken, setPhotoTaken] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);

  /**
   * startCamera method
   */
  const startCamera = () => {
    if (videoRef.current) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          videoRef.current!.srcObject = stream;
        })
        .catch((error) => {
          console.error("Error accessing camera: ", error);
        });
    }
  };

  /**
   * stopCamera method
   */
  const takePhoto = async () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      console.log("context", context);
      if (context) {
        await context.drawImage(videoRef.current, 0, 0, 640, 480);
        setPhotoTaken(true);

        const imageData = canvasRef.current.toDataURL("image/png");
        setPhoto(imageData);
      }
    }
  };

  /**
   * applyFilter method
   * @param filter
   */
  const applyFilter = (filter: string) => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.filter = filter;
        context.drawImage(videoRef.current, 0, 0, 640, 480);
      }
    }
  };

  return (
    <div className="flex flex-col items-center">
      {!photoTaken && (
        <>
          <video ref={videoRef} autoPlay className="w-full max-w-md" />
          <div className="flex mt-4 space-x-4">
            <button onClick={startCamera} className="btn btn-blue">
              Start Camera
            </button>
            <button
              onClick={takePhoto}
              className="btn btn-green flex items-center space-x-2"
            >
              <FaCamera /> <span>Take Photo</span>
            </button>
          </div>
        </>
      )}
      <canvas
        ref={canvasRef}
        width="640"
        height="480"
        className="mt-4 border"
      />
      {photoTaken && (
        <>
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => applyFilter("grayscale(100%)")}
              className="btn btn-gray"
            >
              Grayscale
            </button>
            <button
              onClick={() => applyFilter("sepia(100%)")}
              className="btn btn-sepia"
            >
              Sepia
            </button>
            <button
              onClick={() => applyFilter("none")}
              className="btn btn-normal"
            >
              Normal
            </button>
          </div>
          <div className="mt-4 space-x-4">
            <a
              target="_blank"
              href="https://warpcast.com/mashharuki/0x636c4ddd"
            >
              <button className="btn btn-blue">Mint NFT</button>
            </a>
          </div>
        </>
      )}
      {photo && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Captured Photo</h3>
          <img src={photo} alt="Captured" className="w-full max-w-md border" />
        </div>
      )}
    </div>
  );
}
