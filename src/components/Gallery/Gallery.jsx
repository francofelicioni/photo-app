import "./Gallery.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite } from "../../features/favourite/favouriteSlice";
import ModalComponent from "../Modal/Modal";
// import { getPhotos } from "../../features/tasks/taskSlice";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const savedPhotos = JSON.parse(localStorage.getItem("collection"));
  const initialState = useSelector((state) => state.favourite);
  console.log("initial state", initialState);

  const dispatch = useDispatch();

  const getFromStorage = () => {
    return localStorage.getItem("collection")
      ? JSON.parse(localStorage.getItem("collection"))
      : [];
  };

  const favourites = getFromStorage();
  console.log(favourites);

  const handleDelete = (photo, id) => {
    console.log("id desde dato", photo.id);
    dispatch(deleteFavourite(photo.id));
    favourites.splice(id, 1);
    console.log(favourites);
    localStorage.setItem("collection", JSON.stringify(favourites));
  };

  // const handleClick = () => {
  //   <ModalComponent />
  // }



  // const renderPhotos = (array) => {
  //   console.log('desde render', array);
  //   array.map((photo, index) => {
  //     return (
  //       <div className="grid-img-container" key={index}>
  //         <img className='grid-img' src={photo.img} alt="Photo from Unsplash" />
  //         <div className="grid-img__info-icon">
  //           <p>{photo.description} </p>
  //           <DeleteIcon
  //             style={{ color: "FFFFFF" , cursor: 'pointer'}}
  //             onClick = {()=>handleDelete(photo,index)}
  //           />
  //         </div>
  //       </div>
  //     )
  //   })
  // }

  // useEffect (()=> {
  //   renderPhotos(favourites);
  // },[favourites])

  return (
    <>
      <ModalComponent />
      <div className="searchBar">
        <div className="searchBar__h2-select">
          <h2>My Gallery</h2>
          <select className="select" defaultValue={"date"}>
            <option value="date">By date</option>
            <option value="width">By width</option>
            <option value="height">By height</option>
            <option value="likes">By likes</option>
          </select>
        </div>
        <div className="searchBar__seachContainer-icon">
          <div className="searchBar__searchContainer">
            <SearchIcon style={{ color: "77AD78" }} />
            <input
              className="search-input"
              type="text"
              placeholder="Search by descrptions"
            />
          </div>
        </div>
        <Link to="/explorer">
          <ImageSearchIcon
            style={{ width: 40, height: 40, color: "77AD78" }}
            className="search-icon"
          />
        </Link>
      </div>
      <div className="main-content">
        <div className="main-content__grid">
          {
            favourites.map((photo, index) => {
              return (
                <div className="grid-img-container" key={index}>
                  <img
                    className="grid-img"
                    src={photo.img}
                    alt="Photo from Unsplash"
                  />
                  <div className="grid-img__info-icon">
                    <EditIcon
                      style={{ color: "FFFFFF", cursor: "pointer" }}
                      // onClick={() => handleClick()}
                    />
                    <p>{photo.description} </p>
                    <DeleteIcon
                      style={{ color: "FFFFFF", cursor: "pointer" }}
                      onClick={() => handleDelete(photo, index)}
                    />
                  </div>
                </div>
              );
            })
            // renderPhotos (favourites)
          }
        </div>
      </div>
    </>
  );
};

export default Gallery;
