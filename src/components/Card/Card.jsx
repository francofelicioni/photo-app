import React, { useState } from "react";
import "./Card.css";

//Icons from MUI
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";

//Redux
import { useDispatch } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
  // editDescription,
} from "../../features/favourite/favouriteSlice";
import Modal from "../Modal/Modal";

const Card = (photo) => {
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const handleSave = (data) => {
    console.log("data", data);
    const dataToSave = {
      id: data.photo.id,
      description: data.photo.description,
      downloads: data.photo.downloads,
      likes: data.photo.likes,
      links: data.photo.links.download,
      height: data.photo.height,
      img: data.photo.urls.regular,
      width: data.photo.width,
      dateImported: new Date(data.dateImported).toLocaleDateString("es"),
    };
    dispatch(addFavourite(dataToSave));
    console.log("dataToSave", dataToSave);
  };

  const handleDelete = (photo) => {
    dispatch(deleteFavourite(photo.photo.id));
  };

  //Gallery Render
  if (photo.callFrom === "gallery") {
    return (
      <>
        <div className="grid-img-container" key={photo.photo.id}>
          <img
            className="grid-img"
            src={photo.photo.img}
            alt="Img from Unsplash"
          />
          <div className="grid-img__icons">
            <InfoIcon
              style={{ color: "FFFFFF", cursor: "pointer" }}
              onClick={() => setOpenModal(true)}
            />
            <p>{photo.photo.description} </p>
            <DeleteIcon
              style={{ color: "FFFFFF", cursor: "pointer" }}
              onClick={() => handleDelete(photo, photo.photo.id)}
            />
          </div>
        </div>
        {openModal && <Modal photo={photo} closeModal={setOpenModal} />}
      </>
    );
  } else {
  //Explorer Render
    return (
      <>
        <div className="grid-img-container" key={photo.photo.id}>
          <img
            className="grid-img"
            src={photo.photo.urls.regular}
            alt="Img from Unsplash"
          />
          <div className="grid-img__info-icon">
            <p>
              {photo.photo.description
                ? photo.photo.description
                : photo.photo.alt_description}{" "}
            </p>
            <FavoriteIcon
              style={{ color: "FFFFFF", cursor: "pointer" }}
              onClick={() => handleSave(photo, photo.photo.id)}
            />
          </div>
        </div>
      </>
    );
  }
};

export default Card;