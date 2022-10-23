import "./Modal.css";
import EditIcon from "@mui/icons-material/Edit";
import { editDescription } from "../../features/favourite/favouriteSlice";
import { useDispatch } from "react-redux";

import { saveAs } from "file-saver";
import { useEffect, useState } from "react";

const Modal = ({ photo, downloadLink, closeModal }) => {
  const [downloadUrl, setDownloadUrl] = useState("");

  const dispatch = useDispatch();

  const downloadPhoto = (url, id) => {
    saveAs(url, `${id}.jpg`);
  };

  const handleEdit = (photo) => {
    // dispatch(editDescription(photo));
    console.log("handleEdit", photo);
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button onClick={() => closeModal(false)}>x</button>
          </div>
          <div className="title">
            <h1>Photo Information:</h1>
          </div>
          <div className="body">
            <p>
              Full description:
              {photo.photo.description
                ? photo.photo.description
                : " No description"}{" "}
              <EditIcon onClick={handleEdit(photo.photo)} />
            </p>
            <p>Width: {photo.photo.width}</p>
            <p>Height:{photo.photo.height}</p>
            <p>Likes: {photo.photo.likes}</p>
            <p>Date saved: {photo.photo.dateImported}</p>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}
              onClick={() => downloadPhoto(photo.photo.links, photo.photo.id)}
            >
              Download ⬇️
            </a>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                closeModal(false);
              }}
              id="cancelBtn"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
