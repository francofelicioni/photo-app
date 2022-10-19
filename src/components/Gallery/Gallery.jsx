import "./Gallery.css";

import { useState } from "react";
import { Link } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";

import DeleteIcon from '@mui/icons-material/Delete';

// import useDispatch from "react-redux";
// import { getPhotos } from "../../features/tasks/taskSlice";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const savedPhotos = JSON.parse(localStorage.getItem('collection'));

  const getFromStorage = () => {
    return localStorage.getItem('collection') ? JSON.parse(localStorage.getItem('collection')) : []
  }

  const favourites = getFromStorage();
  

  // const handlerDelete = (photo, id)=> {
  //   console.log (savedPhotos);
  //   // console.log(id);
  //   savedPhotos.splice(id, 1)  
  // }
  

  return (
    <>
      <div className="searchBar">
                <div className='searchBar__h2-select'>
                    <h2>My Gallery</h2>
                    <select className='select' defaultValue={'date'}>
                        <option value='date'>By date</option>
                        <option value='width'>By width</option>
                        <option value='height'>By height</option>
                        <option value='likes'>By likes</option>
                    </select>
                </div> 
                <div className='searchBar__seachContainer-icon'>                   
                    <div className="searchBar__searchContainer">
                        <SearchIcon style={{color:'77AD78'}} />
                        <input className='search-input' type="text" placeholder="Search by descrptions" />  
                    </div>
                </div>
                <Link to='/'><HomeIcon style={{width: 40, height: 40, color:'77AD78'}} className="search-icon" /></Link>
        </div>
      <div className="main-content">
        <div className="main-content__grid">
          {
          favourites.map((photo, index) => {
              return (
                <div className="grid-img-container" key={index}>
                  <img className='grid-img' src={photo.links} alt="Photo from Unsplash" />
                  <div className="grid-img__info-icon">
                    <p>{photo.description} </p>
                    <DeleteIcon
                      style={{ color: "FFFFFF" }}
                      // onClick = {()=>handlerDelete(photo,index)}
                    />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
};

export default Gallery;
