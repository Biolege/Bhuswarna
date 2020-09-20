import React from 'react';

function analytics(props) { 
    return (
        <div className="card border-0" style={{height: '9rem'}}>
            <div className="card-body">
                <p className="px24">{props.title}</p>
            </div>
        </div>
    );
}

export default analytics;