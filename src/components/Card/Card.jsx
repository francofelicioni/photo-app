import React from "react";
import "./Card.css";

//Icons from MUI
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";

//Redux
import { useDispatch } from "react-redux";
import {
  addFavourite,
  deleteFavourite,
  // editDescription,
} from "../../features/favourite/favouriteSlice";

const Card = (photo) => {
  const dispatch = useDispatch();

  // const handleEdit = (photo) => {
  //   dispatch(editDescription());
  // };

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
    };
    dispatch(addFavourite(dataToSave));
  };

  const handleDelete = (photo) => {
    dispatch(deleteFavourite(photo.photo.id));
  };

  const handleEdit = (photo) => {
    console.log(photo);
  };

  if (photo.callFrom === "gallery") {
    return (
      <>
        <div className="grid-img-container" key={photo.photo.id}>
          <img
            className="grid-img"
            src={photo.photo.img}
            alt="Img from Unsplash"
          />
          <div className="grid-img__info-icon">
            <EditIcon
              style={{ color: "FFFFFF", cursor: "pointer" }}
              onClick={() => handleEdit(photo, photo.photo.id)}
            />
            <p>{photo.photo.description} </p>
            <DeleteIcon
              style={{ color: "FFFFFF", cursor: "pointer" }}
              onClick={() => handleDelete(photo, photo.photo.id)}
            />
          </div>
        </div>
      </>
    );
  } else {
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
