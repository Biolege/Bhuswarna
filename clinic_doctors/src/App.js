import React from 'react';
import './App.css';
import DocAvail from './components/docAvail';
import SelectedDoctor from './components/selectedDoctor';
import Subnav from './components/Subnav';

function App() {
 return (
    <div>

        <div id="content">
          <nav className="navbar navbar-expand navbar-light backOrange">
                <div className="container-fluid">

                  <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><div className="circle"></div></a>
                        </li>
                        <li className="vl mx-2 mt-2"></li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/#"><p className="heading colorWhite">Clinic Name</p>
                            <p className="mt-n3 px12 colorWhite">Extra name if any</p></a>
                        </li>
                    </ul>
                  </div>

                  <a href="/#" className="heading home ml-auto"><h2 className="colorWhite">Logo</h2></a>
                </div>
          </nav>
            

            <div className="container-fluid mb-5">

              <Subnav />
              <div className="row ml-md-2">
                  <div className="col-lg-4 mt-5">
                    <div className="card border-0">
                        <div className="card-body mb-5">
                            <p className="heading">Doctors Available</p>
                              <DocAvail name="Dr. Champak Lal Singh"/>
                              <br/>
                              <DocAvail name="Dr. Jethalal Bhire"/>
                        </div>
                    </div>
                  </div>
                    <div className="col-lg-7 mt-5">
                      <SelectedDoctor name="Dr. Champak Lal Singh" totAppointments="20" completed="15" pending="05" />
                    </div>

              </div>
            </div>
          </div>

</div>

  );
}

export default App;