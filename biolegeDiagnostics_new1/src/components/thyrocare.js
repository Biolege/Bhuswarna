import React from 'react';

function Thyrocare(props){
    return(
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-8 col-lg-9">
                        <p className="heading text-center text-md-left">{props.title}</p>
                    </div>
                    <div className="col-md-4 col-lg-2">
                        <div className="rect mx-auto mx-md-left"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Thyrocare;