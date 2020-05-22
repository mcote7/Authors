import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@reach/router';


const AuthorsMain = () => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
                console.log(res.data);
            });
    },[])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }
    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/author/delete/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
    }

    return (

        <div className="row maindisplay">
            <div className="col"></div>
            <div className="col tablewrapper">
            <table>
                <thead>
                    <th><Link to="/" className="thlink">Author Name</Link></th>
                    <th><Link to="/"className="thlink">Actions</Link></th>
                </thead>
                <tbody>
                {loaded && authors.sort((a, b) => (a.name > b.name) ? 1 : -1).map((author, idx)=>{
                return <tr key={idx}>
                            <td><p className="mynames" >{author.name}</p></td>
                            <td><Link to={"/update/"+author._id} className="tablebtnupd">update</Link>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button className="tablebtndel" onClick={(e)=>{deleteAuthor(author._id)}}>delete</button></td>
                        </tr>})}
                    </tbody>
            </table>
            </div>
            <div className="col"></div>
        </div>

    )
}

export default AuthorsMain;
