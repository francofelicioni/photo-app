import "./Home.css";
import { Button, ImageList, ImageListItem } from "@mui/material";
import { homeImg } from "../../resources/homeImg";
import { Link } from "react-router-dom";

const Home = () => {
  const width = window.innerWidth;

  return (
    <>
      <div className="home">
        <h1 className="h1-title">WELCOME TO PHGRM.</h1>
        <div className="home-text">
          <span> Explore images from unsplash. Save, download and more!</span>
        </div>
        <div className="home-text-responsive">
          <span> Explore images from unsplash!</span>
        </div>
        <div className="buttons-container">
          <Link to="/explorer" style={{ textDecoration: "none" }}>
            <button className="btn-explorer">START EXPLORING</button>
          </Link>
          <Link to="/my_photos" style={{ textDecoration: "none" }}>
            <button className="btn-favourites">GO TO FAVOURITES</button>
          </Link>
        </div>
        <div className="imageList">
          <ImageList
            sx={
              width > 800
                ? { width: 800, height: 850 }
                : { width: 400, height: 600 }
            }
            cols={width > 858 ? 3 : 2}
            rowHeight={200}
          >
            {homeImg.map((item) => (
              <ImageListItem key={item.id}>
                {console.log(item)}
                <img src={`${item.src}`} loading="lazy" />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      </div>
    </>
  );
};

export default Home;
