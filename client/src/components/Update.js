import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, navigate } from '@reach/router';

const UpdateProduct = props => {

    const [name, setName] = useState(); 
    const [errors, setErrors] = useState([]);


    useEffect(() => {
        axios.get('http://localhost:8000/api/author/' + props.id)
            .then(res => {
            setName(res.data.name);
        })
    }, [props.id])

    const cancelBtn = e => {
        navigate("/");
    }
    const onSubmitHandler= e => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/author/update/' + props.id, {
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

    }

    return (
        <div className="row">
        <div className="col"></div>
            <div className="col">
                <form onSubmit={onSubmitHandler}>
                    <table>
                        <thead>
                            <th><Link style={{marginRight: "32px"}} to="/" className="thlink">Name</Link></th>
                        </thead>
                        {errors.map((err, index) => <p className="myerror" style={{color:'red'}} key={index}>{err}</p>)}
                        <tbody>
                            <tr>
                                <td className="tdinput"><input autoFocus spellCheck="false" className="myinput" type="text" value={name} onChange = {(e)=>setName(e.target.value)}/></td>
                            </tr>
                            <tr>
                                <td className="tdbutt">
                                    <button style={{padding: "8px 18px"}} className="tablebtnupd" type="submit">submit</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="tablebtndel" onClick={cancelBtn} >cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        <div className="col"></div>
    </div>
    )
}

export default UpdateProduct;


