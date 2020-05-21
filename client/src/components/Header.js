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
                    <h1 className="a">M</h1><h1 className="b">y</h1>
                    &nbsp;&nbsp;
                    <h1 className="a">f</h1><h1 className="b">a</h1><h1 className="a">v</h1><h1 className="b">o</h1><h1 className="a">r</h1><h1 className="b">i</h1><h1 className="a">t</h1><h1 className="b">e</h1>
                    &nbsp;&nbsp;
                    <h1 className="a">a</h1><h1 className="b">u</h1><h1 className="a">t</h1><h1 className="b">h</h1><h1 className="a">o</h1><h1 className="b">r</h1><h1 className="a">s</h1>
                    &nbsp;
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