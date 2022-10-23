import "./Modal.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalComponent = (prop) => {
  {
    /* <div className="img-info">
            <h3>- Photo information -</h3>
            <p>🏷️ Full description: {photo.description}</p>
            <p>📏 Width: {photo.width}px / Heigth: {photo.height}px</p>
            <p>❤️ Likes: {photo.likes}</p>
            <p>📅 Date saved</p>
            <p><a href={photo.links} download='phgrm.png'>⬇️ Download photo </a></p>
            <button className="closeBtn">CLOSE ✖️</button>
          </div> */
  }

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e);
    console.log(input);
  };

  const handleEdit = (photo) => {
    // console.log (photo)
    // console.log (id)
    // dispatch (editDescription())
    // dispatch (editDescription({id: photo.id, change:'cambio'}))
    console.log(photo.id);
  };

  return (
    <>
      {/* <div className="modal"> */}
      <div className="modal-container">
        <h3 className="modal-input">
          {" "}
          Change description of your favourite photo:
        </h3>
        <input
          className="modal-input"
          type="text"
          onKeyUp={(e) => setInput(e.target.value)}
        />
        <button onClick={() => handleEdit} className="modal-button">
          SAVE
        </button>
      </div>
      {/* </div> */}
    </>
  );
};

export default ModalComponent;
