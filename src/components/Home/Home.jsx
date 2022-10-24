import './Home.css'
import { Button, ImageList, ImageListItem } from "@mui/material";
import { homeImg } from "../../resources/homeImg";
import { Link } from 'react-router-dom';

const Home = () => {

  const width = window.innerWidth;
  const height = window.innerHeight;
  
  return (
    <>
      <div className="home">
        <h1 className='h1-title'>WELCOME TO PHGRM.</h1>
        <div className='home-text'>
          <span> Explore images from unsplash. 
          Save, download and more! Enjoy</span> 
        </div>
        <ImageList  sx={(width > 758) ? { width: 800, height: 850 } : { width: 400, height: 600 } } cols={(width > 758) ? 3 : 2} rowHeight={200} className='imageList'>
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