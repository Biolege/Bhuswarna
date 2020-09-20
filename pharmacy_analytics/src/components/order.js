import React from 'react';

function order() {
    return (
        <div className="card border-0">
            <div className="card-body mb-n2">
                <br/><br/><br/><br/>
                <div className="row px-18">
                    <div className="col-1">
                        <a href="/#"><div className="greycircle"></div></a>
                    </div>
                    <div className='col-10 col-sm-11 col-md-2 mr-md-auto'>
                        <a href="/#"><p className="px-18 ml-lg-n5 ml-md-n4">On shop order</p></a>
                    </div>
                    <div className="col-1">
                        <a href="/#"><div className="greycircle"></div></a>
                    </div>
                    <div className="col-10 col-sm-11 col-md-2">
                        <a href="/#"><p className="px-18 ml-lg-n5 ml-md-n4">Online order</p></a>
                    </div>
                    <div className="col-1 ml-md-auto">
                        <a href="/#"><div className="greycircle"></div></a>
                    </div>
                    <div className='col-10 col-sm-10 col-md-2'>
                        <a href="/#"><p className="px-18 ml-lg-n5 ml-md-n4">Shop pickup</p></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default order;