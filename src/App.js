import "./App.css";

import { Routes, Route } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Explorer from "./components/Explorer/Explorer";
import Gallery from "./components/Gallery/Gallery";


//Redux
// import { useDispatch, useSelector } from 'react-redux';

function App() {
  // const tasksState = useSelector(state => state.tasks);

  
  return (
    <>
      <Header />
        <Routes>
            <Route path ='/' element={<Explorer/>} />
            <Route path='/my_photos' element={<Gallery />}/>
        </Routes>
      <Footer />
    </>
  );
}

export default App;
