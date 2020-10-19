import React from 'react';

function TestSelected(){
    return(
        <div className="card">
            <div className="card-body mb-n3">
                <div className="row">
                    <div className="col-12">
                        <p className="px24 wt600">Test Selected</p>
                        <hr/>
                        <p className="text-muted mt-n2">0 tests selected</p>
                        <p><a href="/#" className="colorGreen">+ ADD MORE TESTS</a></p>
                        <button className="btn buttonGrey px-4 mt-5 mb-3 float-right">Proceed</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TestSelected;