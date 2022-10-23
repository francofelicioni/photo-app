import './Modal.css';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalComponent = (prop) => {

    const [input, setInput] = useState ('');
    const dispatch = useDispatch();

    const handleChange = (e)=> {
        setInput (e);
        console.log(input);
    }

    
  const handleEdit = (photo) => {
    // console.log (photo)
    // console.log (id)
    // dispatch (editDescription())
    // dispatch (editDescription({id: photo.id, change:'cambio'}))
    console.log (photo.id)
  }




    return (
        <>
           {/* <div className="modal"> */}
                <div className='modal-container'>
                    <h3 className='modal-input'> Change description of your favourite photo:</h3>
                    <input className='modal-input' type='text' onKeyUp={(e)=>setInput(e.target.value)}/>
                    <button onClick={()=>handleEdit}className='modal-button'>SAVE</button>
                </div>
           {/* </div> */}
        </>
    )
}

export default ModalComponent; 