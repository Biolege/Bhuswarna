import React from 'react';

function Hori_navbar() {
    return (
        <nav className="navbar navbar-expand navbar-light">
            <div className="container text-uppercase">
                <a href="/#" className="heading home">Home</a>
            
                <div>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><div className="circle"></div></a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><p className="px16">Pharmacy Name</p>
                            <p className="mt-n3 px12">Extra name if any</p></a>
                        </li>
                        <li className="vl mx-4"></li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><p className="heading">Logo</p></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Hori_navbar;