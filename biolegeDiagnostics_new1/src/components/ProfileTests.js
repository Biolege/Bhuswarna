import React from 'react';
import IndividualTests from './IndividuallTests';

function ProfileTests(){
    return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-inverse">
                                <div className="navbar-header">
                                    <a href="/#" className="navbar-toggle px24 wt600 text-dark" data-toggle="collapse" data-target="#myProfile">
                                        Profile Tests                     
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse" id="myProfile">
                                    <IndividualTests testName="ABO"/>
                                    <IndividualTests testName="ASO Titer"/>
                                    <IndividualTests testName="Albumin"/>
                                    <IndividualTests testName="Creatinine"/>
                                </div>
                            </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileTests;