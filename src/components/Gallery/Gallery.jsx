import "./Gallery.css";

import { Link } from "react-router-dom";

//Components import
import Card from "../Card/Card";

//Icons from MUI
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { useSelector } from "react-redux";

const Gallery = () => {
 
  const favourites = useSelector((state) => state.favourite);
  console.log("initial state", favourites);

  const handleChange = () => {
    // if (option.value ==='date') {
    //   console.log('bydate')
    // }
  };

  return (
    <>
      <div className="searchBar">
        <div className="searchBar__h2-select">
          <h2>My Gallery</h2>
          <select
            className="select"
            defaultValue={"date"}
            onChange={() => handleChange()}
          >
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
          {favourites && favourites.length ? (
            favourites.map((photo, index) => (
              <Card photo={photo} callFrom='gallery' key={index}/>
            ))
          ) : (
            <h2>✖️ No photos in favourites </h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
