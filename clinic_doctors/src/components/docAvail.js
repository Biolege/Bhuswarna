import React from 'react';

function docAvail(props) {
    return (
            <div className="card border-0">
                <div className="card-body mb-n4">
                    <div className="row">
                        <div className="col-12 col-md-2">
                            <div className="smallCircleBlack mx-auto ml-md-0 mr-md-0"></div>
                        </div>
                        <div className="col-12 col-md-8 ml-n4">
                            <div className="mt-2 text-center text-md-left ml-5 ml-md-0">{props.name}</div>
                        </div>
                        <div className="col-12 col-md-3 ml-auto mt-2">
                            <p className="colorGreen text-right">Available</p>
                        </div>
                    </div>
                    
                </div>
            </div>
    );
}

export default docAvail;