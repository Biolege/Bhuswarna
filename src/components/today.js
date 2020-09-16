import React from 'react';

function today(props) {
    return(
        <div className="card">
            <div className="card-body">
                <p className="heading">{props.title}</p>
                <p className="heading text-right mt-4 mb-n2">{props.amount}</p>
            </div>
        </div>
    );
}

export default today;