import React from 'react'
import './style/inp.css'

function Inp(props) {
    return ( 
            <div className="inp ">
                <input 
                    type="text" 
                    className="form-control" 
                    name="city" id="focusedInput city" 
                    placeholder ="Enter City Name" 
                    value ={props.city}
                    onChange={props.nameChange}
                /> 
                <button 
                    className="btn btn-primary" 
                    onClick={props.clickHandler}
                >Search</button>
            </div> 
    )
}

export default Inp
