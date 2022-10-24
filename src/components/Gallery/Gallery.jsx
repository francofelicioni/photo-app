import "./Gallery.css";

import { Link } from "react-router-dom";

//Components import
import Card from "../Card/Card";

//Icons from MUI
import ImageSearchIcon from "@mui/icons-material/ImageSearch";
import SearchIcon from "@mui/icons-material/Search";

//Redux
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Gallery = () => {
  const [gallery, setGallery] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [orderBy, setOrderBy] = useState("");
  const favourites = useSelector((state) => state.favourite);
  let width = window.innerWidth;


  useEffect(() => {
    setGallery(favourites);
  }, [favourites]);

  const handleSelect = (e) => {
    if (e.target.value === "date") {
      setOrderBy("date");
    } else if (e.target.value === "width") {
      setOrderBy("width");
    } else if (e.target.value === "height") {
      setOrderBy("height");
    } else if (e.target.value === "likes") {
      setOrderBy("likes");
    }
  };

  useEffect(() => {
    let filteredPhotos;
    if (searchTerm.length) {
      filteredPhotos = favourites.filter(
        (p) =>
          p.description &&
          p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      filteredPhotos = favourites;
    }
    const arrOrderedPhotos = [...filteredPhotos];

    switch (orderBy) {
      case "width":
        arrOrderedPhotos.sort((a, b) => a.width - b.width);
        break;
      case "height":
        arrOrderedPhotos.sort((a, b) => a.height - b.height);
        break;
      case "likes":
        arrOrderedPhotos.sort((a, b) => a.likes - b.likes);
        break;
      case "date":
        arrOrderedPhotos.sort((a, b) => a.date - b.date);
      break;
      default:
      break;
    }
    setGallery(arrOrderedPhotos);
  }, [searchTerm, orderBy, favourites]);

  return (
    <>
      <div className="searchBar-gallery">
        <div className="searchBar__h2-select">
        <h2 className="h2-title-gallery">{(width > 1000) ? 'Gallery photos' : 'Gallery' }</h2>
          <select
            className="select"
            defaultValue={"date"}
            onChange={handleSelect}
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
              placeholder={width>850 ? "Search by descrptions" : "Search"}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <Link to="/explorer" style={{display:'flex', textDecoration:'none', gap:'.5rem', alignItems:'center'}}>
        <h2 className="h2-title-gallery">{width > 1000 ? 'Go to explorer' : 'Explorer' }</h2>
          <ImageSearchIcon
            style={{ width: 40, height: 40, color: "77AD78" }}
            className="search-icon"
          />
        </Link>
      </div>
      <div className="main-content">
        <div className="main-content__grid">
          {gallery && gallery.length ? (
            gallery.map((photo, index) => (
              <Card photo={photo} callFrom="gallery" key={index} />
            ))
          ) : (
            <h2>No photos in favourites yet</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
