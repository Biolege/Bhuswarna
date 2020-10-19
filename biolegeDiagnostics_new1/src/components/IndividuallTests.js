import React from 'react';

function IndividualTests(props){
    return(
        <div className="row">
            <div className="col-6 col-md-3">
                <p className="px18 text-left mt-2">{props.testName}</p>
            </div>
            <div className="col-6 col-md-3 ml-auto mt-2">
                <div className="text-right"><button className="btn btn-sm addBtn px-3">Add</button></div>
            </div>
            <div className="col-12">
                <hr className="mt-n2"/>
            </div>
        </div>
    );
}

export default IndividualTests;