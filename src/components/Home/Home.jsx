import './Home.css'
import { Button, ImageList, ImageListItem } from "@mui/material";
import { homeImg } from "../../resources/homeImg";
import { Link } from 'react-router-dom';

const Home = () => {
  
  return (
    <>
      <div className="home">
        <h1>WELCOME TO PHGRM.</h1>
        <div className='home-text'>
          <span> Explore images from unsplash. 
          Save, download and more! Enjoy.s</span> 
        </div>
        <ImageList sx={{ width: 800, height: 850 }} cols={3} rowHeight={200}>
          {homeImg.map((item) => (          
            <ImageListItem key={item.src}>
              <img
                src={`${item.src}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <div className='buttons-container'>
          <Link to="/explorer" style={{ textDecoration: 'none' }} ><button className='btn-explorer'>START EXPLORING</button></Link>
          <Link to="/my_photos" style={{ textDecoration: 'none' }} ><button className='btn-favourites'>GO TO FAVOURITES</button></Link>
        </div>
      </div>
  </>
    );
};


export default Home;