import "./Explorer.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//Redux
import { useDispatch, useSelector } from "react-redux";
import { searchReducer } from "../../features/search/searchSlice";
import { addFavourite } from "../../features/favourite/favouriteSlice";
import { getPhotos } from "../../features/search/searchSlice";
import { selectPhotos } from "../../features/search/searchSlice";


//Import from MUI
import CollectionsIcon from "@mui/icons-material/Collections";
import SearchIcon from "@mui/icons-material/Search";


//Components
import Card from "../Card/Card";

const Explorer = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const photoDataResult = useSelector(selectPhotos);

  useEffect (()=> {
    dispatch(getPhotos({value: value}));
  }, [value, dispatch])

  const savedPhotos = [];
  
  const handleSave = (data) => {
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
  }

  return (
    <>
      <div className="searchBar">
        <h2>Explore photos</h2>
        <div className="search-container">
          <SearchIcon
            style={{ color: "77AD78" }}
            // onClick={() => searchResults()}
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
          {photoDataResult && photoDataResult.length ? (
             photoDataResult.map((photo, index) => (
              <Card photo={photo} callFrom='explorer' key={index}/>
             ))
          ) : (
            <h2>❌ 404: No photos to show </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Explorer;
