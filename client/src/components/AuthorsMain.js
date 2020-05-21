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

        <div>
            {loaded && authors.sort((a, b) => (a.name > b.name) ? 1 : -1).map((author, idx)=>{return <p key={idx}>author :&nbsp;&nbsp;{author.name}
            <Link to={"/update/"+author._id} className="updateLink">update</Link>
            <button className="deletebtn" onClick={(e)=>{deleteAuthor(author._id)}}>delete</button></p>})}
        </div>

    )
}

export default AuthorsMain;
