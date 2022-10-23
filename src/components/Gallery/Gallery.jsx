import "./Gallery.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//Icons from MUI
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from '@mui/icons-material/Info';


//Redux
import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite, editDescription } from "../../features/favourite/favouriteSlice";
import { favouritesPhotos } from "../../features/favourite/favouriteSlice";
import ModalComponent from "../Modal/Modal";


const Gallery = () => {
  const [modal, setModal] = useState (false);
  // const [infoClicked, setInfoClicked] = useState('hide');
  // const favourites = useSelector (favouritesPhotos);
  const favourites = useSelector((state) => state.favourite);
  console.log("initial state", favourites);
  
  const dispatch = useDispatch();
  
  const handleDelete = (photo, id) => {
    dispatch(deleteFavourite(photo.id));
    // favourites.splice(id, 1);
    // localStorage.setItem("collection", JSON.stringify(favourites));
  };
  

  const handleEdit = (photo) => {
    // console.log (photo)
    // console.log (id)

    dispatch (editDescription())
    // dispatch (editDescription({id: photo.id, change:'cambio'}))
    // console.log (photo.id)
  }

  const handleInfo = (photo, id) => {
    // info-icon.classList.toggle('active')
  }

  const handleChange = ()=> {
    // if (option.value ==='date') {  
    //   console.log('bydate')
    // }
  }

 
  return (
    <>
      <div className="searchBar">
        <div className="searchBar__h2-select">
          <h2>My Gallery</h2>
          <select className="select" defaultValue={"date"} onChange={()=> handleChange()}>
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
      {/* <ModalComponent prop={false}/> */}
        <div className="main-content__grid">
          {
            (favourites) && (favourites.length > 0) ? 
              // {
              favourites.map((photo, index) => {
                return (
                  <div className="grid-img-container" key={index}>
                    {/* <InfoIcon 
                      className='info-icon'
                      style={{ color: "FFFFFF", cursor: "pointer" }}
                      onClick={() => handleInfo(photo, index)}
                    /> */}
                    <img
                      className="grid-img"
                      src={photo.img}
                      alt="Photo from Unsplash"
                    />
                    <div className="img-info">
                      <h3>- Photo information -</h3>
                      <p>🏷️ Full description: {photo.description}</p>
                      <p>📏 Width: {photo.width}px / Heigth: {photo.height}px</p>
                      <p>❤️ Likes: {photo.likes}</p>
                      <p>📅 Date saved</p>
                      <p><a href={photo.links} download='phgrm.png'>⬇️ Download photo </a></p>
                      <button className="closeBtn">CLOSE ✖️</button>
                    </div>
                    <div className="grid-img__info-icon">
                      <EditIcon
                        style={{ color: "FFFFFF", cursor: "pointer" }}
                        onClick={() => handleEdit(photo, index)}
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
              :
              <div> 
                <h3 style={{ fontSize: '1.8rem', color: "77AD78", padding: '2rem 0' }}>No photos in gallery! ☹️</h3>
              </div>
          }
        </div>
      </div>
    </>
  );
};

export default Gallery;
