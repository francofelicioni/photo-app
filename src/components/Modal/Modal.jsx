
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ModalComponent = () => {

    const [input, setInput] = useState ('');
    const dispatch = useDispatch();
    const handleChange = (e)=> {
        setInput (e)
    }

    return (
        <>
           <div className="Modal">
                <input type='text' onChange={(e)=>handleChange(e.target.value)}/>
           </div>
        </>
    )
}

export default ModalComponent; 