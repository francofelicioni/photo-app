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
import Spinner from "../Spinner/Spinner";

const Explorer = () => {
  const [phRepeat, setPhRepeat] = useState([]);
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const photoDataResult = useSelector(selectPhotos);
  const favourites = useSelector((state) => state.favourite);
  const width = window.innerWidth;

  useEffect(() => {
    dispatch(getPhotos({ value: value }));
  }, [value, dispatch]);

  useEffect(() => {
    let repeatPhotosArray = [];
    let sw = false;

    for (let index = 0; index < photoDataResult.length; index++) {
      sw = false;

      for (let i = 0; i < favourites.length; i++) {
        if (photoDataResult[index].id === favourites[i].id) {
          sw = true;
          break;
        }
      }
      sw === true
        ? repeatPhotosArray.push(true)
        : repeatPhotosArray.push(false);
      setPhRepeat(repeatPhotosArray);
    }
  }, [photoDataResult]);

  return (
    <>
      <div className="searchBar-explorer">
        <h2 className="h2-title">
          {width > 1000 ? "Explore photos" : "Explore"}
        </h2>
        <div className="search-container">
          <SearchIcon style={{ color: "77AD78" }} />
          <input
            className="search-container__input"
            type="text"
            placeholder={width > 756 ? "Search anything" : "Search"}
            onKeyUp={(e) => setValue(e.target.value)}
          />
        </div>
        <Link
          to="/my_photos"
          style={{
            display: "flex",
            textDecoration: "none",
            gap: ".5rem",
            alignItems: "center",
          }}
        >
          {" "}
          <h2 className="h2-title">
            {width > "1000" ? "Go to gallery" : "Gallery"}
          </h2>
          <CollectionsIcon style={{ height: 35, width: 35, color: "77AD78" }} />{" "}
        </Link>
      </div>
      <div className="main-content">
        <div className="main-content__grid">
          {photoDataResult && photoDataResult.length ? (
            photoDataResult.map((photo, index) => (
              <Card
                key={index}
                photo={photo}
                callFrom="explorer"
                phRepeat={phRepeat[index]}
                dateImported={new Date().getTime()}
              />
            ))
          ) : (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Explorer;
