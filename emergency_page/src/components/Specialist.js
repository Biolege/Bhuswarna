import React from 'react';

function Specialist(props){
    return(
        <div className="container space">
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="heading2">12 Specialist in "{props.pin}"</h2>
                </div>
                <div className="col-sm-12 text-muted">
                    Book now with predicted waiting time
                </div>
            </div>
        </div>
    );
}

export default  Specialist;