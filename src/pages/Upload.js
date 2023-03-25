import {useDropzone} from "react-dropzone";
import { useState } from "react";
import "./Upload.scss";
import uploadImg from "../assets/Upload icon.svg";

const Upload = () => {
  const [isDrag, setIsDrag] = useState(false);
  const [isAccepted, setIsAccepted] = useState(null);
  const [acceptedFiles, setAccepted] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    onDropAccepted: (accepted) => {
      setIsAccepted(true);
      setAccepted(accepted[0]);
    },
    onDropRejected: () => {
      setIsAccepted(false);
    },
    accept: {
      "application/pdf": [".pdf"],
    },
    onDragEnter: () => {
      setIsDrag(true);
    },
    onDragLeave: () => {
      setIsDrag(false);
    },
    onDrop: (acceptedFiles) => {
      setIsDrag(false);
    },
    maxFiles: 1,
    multiple: false,
  });
  return (
    <div className="upload height100 flex-grow-1 d-flex flex-column">
      <section className="d-flex flex-grow-1 align-items-stretch">
        <div className="container-fluid p-lg-0 d-flex justify-content-center align-items-center flex-column">
          <div className="upload-card">
            <h1 className="text-center">Upload</h1>

            <div
              {...getRootProps({
                className: `dropzone ${isDrag ? "dropzone-hover" : ""}`,
              })}
            >
              <input {...getInputProps()} />
              <div className="dropzone_content">
                <img src={uploadImg} alt="" />
                <div className="dropzone-text">
                  Drag and drop your resume here or
                  <button className="browse-btn">Browse</button>
                  <p>Supported Formats: .PDF</p>
                </div>
              </div>
            </div>
            {isAccepted === false && <div>Only .PDF files are accepted.</div>}
            {isAccepted === true && <div>{acceptedFiles.path}</div>}
            <button
              disabled={!isAccepted}
              className={`upload-submit ${isAccepted ? "dragged" : ""}`}
            >
              Upload
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Upload;
