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
                    onKeyPress={e => {
                        if(e.charCode == 13)
                           {
                               props.clickHandler()
                           }
                    }}
                /> 
                <button 
                    className="btn btn-primary" 
                    onClick={props.clickHandler}
                >Search</button>
            </div> 
    )
}

export default Inp
