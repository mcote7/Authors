import React from "react";
import { Link } from '@reach/router';

const Header = () => {

    return(
        <>
        <div className="myheader">
            <div className="row navrow">
            <div className="mylinkwrapper">
                <Link to="/" className="mynavlinks">home</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/addauthor" className="mynavlinks">add an author</Link>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="mynavlinks">contact</Link>
            </div>
                <div className="mytitle">
                    <div className="mytitleinner">
                    <h1 className="a">My&nbsp;&nbsp;favorite&nbsp;&nbsp;authors</h1>&nbsp;
                    <i class="fab fa-twitter fa-3x"></i>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        </>
    );
}

export default Header;