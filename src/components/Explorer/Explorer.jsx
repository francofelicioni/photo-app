import "./Explorer.css";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//Redux
import { useDispatch, useSelector } from "react-redux";
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
  const width = window.innerWidth;

  useEffect (()=> {
    dispatch(getPhotos({value: value}));
  }, [value, dispatch])
  
  return (
    <>
      <div className="searchBar-explorer">
        <h2 className="h2-title">{width > 800 ? 'Explore photos' : 'Explore' }</h2>
        <div className="search-container">
          <SearchIcon
            style={{ color: "77AD78" }}
          />
          <input
            className="search-container__input"
            type="text"
            placeholder="Search anything"
            onKeyUp={(e) => setValue(e.target.value)}
          />
        </div>
        <Link to="/my_photos" style={{display:'flex', textDecoration:'none', gap:'.5rem', alignItems:'center'}}>
          {" "}
          <h2 className="h2-title">{width > 800 ? 'Go to gallery' : 'Gallery' }</h2>
          <CollectionsIcon
            style={{ height: 35, width: 35, color: "77AD78" }}
          />{" "}
        </Link>
      </div>
      <div className="main-content">
        <div className="main-content__grid">
          {photoDataResult && photoDataResult.length ? (
             photoDataResult.map((photo, index) => (
              <Card photo={photo} callFrom='explorer' key={index} dateImported={new Date().getTime()}/>
             ))
          ) : (
            <h2>🖼️ Loading... </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Explorer;
