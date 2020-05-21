import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const Create = () => {

    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);

    const cancelBtn = e => {
        navigate("/");
    }
    const onSubmitHandler = e => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/author/create', {
            name
        })
            .then(res=>console.log(res))
            .catch(err=>{
                console.log(err.response.data.errors);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
            if(name.length > 2){
                navigate("/");
            }
    };

    return (

        <form onSubmit={onSubmitHandler}>
                <label>Name</label><br/>
                <input  type="text" value={name} onChange = {(e)=>setName(e.target.value)}/><br/>
                {errors.map((err, index) => <span style={{color:'red'}} key={index}>{err}</span>)}
                <button className="createbtn" type="submit">submit</button>
                <button className="cancelbtn" onClick={cancelBtn} >cancel</button>
        </form>

    )
}

export default Create;
