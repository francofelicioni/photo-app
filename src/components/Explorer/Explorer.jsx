import "./Explorer.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addFavourite } from "../../features/favourite/favouriteSlice";

import CollectionsIcon from "@mui/icons-material/Collections";
import SearchIcon from "@mui/icons-material/Search";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Explorer = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [icon, setIcon] = useState('');

  const dispatch = useDispatch();

  useEffect(()=> {
    searchResults();
  },[]);

  const savedPhotos = [];

  const searchResults = async () => {
    const API_KEY = "f3_j5xaaagLteInPGf7sUqRFgJc8ulftP1UGe1ulBi0";
    const URL = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${value}&per_page=12`;
    const URL_RANDOM = `https://api.unsplash.com/photos/random/?client_id=${API_KEY}&count=12`;


    if (value && value !== '')  {
      const response = await fetch(URL) ;
      const data = await response.json();
      setResult(data.results);
    } else {
      const response = await fetch(URL_RANDOM);
      const data = await response.json();
      setResult(data);
    }
  };
  
  console.log(result);

  const handleSave = (data) => {
  
    // console.log(data);
    const dataToSave = {
      id: data.id,
      description: data.description,
      downloads: data.downloads,
      likes:data.likes,
      links:data.links.download,
      height:data.height,
      img: data.urls.regular,
      width: data.width
    }

    dispatch(addFavourite (dataToSave));
    savedPhotos.push (dataToSave)
    localStorage.setItem('collection', JSON.stringify(savedPhotos))
  }

  return (
    <>
      <div className="searchBar">
        <h2>Explore photos</h2>
        <div className="search-container">
          <SearchIcon
            style={{ color: "77AD78" }}
            onClick={() => searchResults()}
          />
          <input
            className="search-container__input"
            type="text"
            placeholder="Search anything"
            onKeyUp={(e) => setValue(e.target.value)}
          />
        </div>
        <Link to="/my_photos">
          {" "}
          <CollectionsIcon
            style={{ height: 35, width: 35, color: "77AD78" }}
          />{" "}
        </Link>
      </div>
      <div className="main-content">
        <div className="main-content__grid">
          {
          result.map((photo, index) => {
            return (
              <div key={index} className="grid-img-container" >
                <img className='grid-img'  src={photo.urls.regular} alt="Photo from Unsplash" />
                <div className="grid-img__info-icon">
                  <p>{photo.alt_description ? photo.alt_description : photo.description} </p>
                  <FavoriteIcon
                    style={{ color: "FFFFFF", cursor: 'pointer' }}
                    onClick = {()=>handleSave(photo, index)}
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

export default Explorer;
