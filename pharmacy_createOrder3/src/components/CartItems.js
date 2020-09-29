import React from 'react';

function CartItems() {
    return(
        <div className="col-12 mt-2">
            <div className="card">
                <div className="card-body mb-n3">
                    <div className="row d-lg-none">
                        <div className="col-12 text-right">
                            <button className="btn btn-sm"><svg aria-hidden="true" focusable="false" height="18px" width="18px" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="grey" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg></button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="mx-auto greySquare mt-3"></p>
                        </div>
                        <div className="col-8 col-lg-5">
                            <p className="px20">Medicine Name</p>
                            <p>Salt composition</p>
                            <br/>
                            <p>QNTY - 2</p>
                        </div>
                        <div className="col-4 col-lg-2 ml-auto text-right">
                            <button className="btn btn-sm ml-3 d-none d-lg-block"><svg aria-hidden="true" focusable="false" height="18px" width="18px" data-prefix="fas" data-icon="times-circle" class="svg-inline--fa fa-times-circle fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="grey" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"></path></svg></button>
                            <br/><br/><br/><br/>
                            <p className="px20 mt-2 mt-lg-n3"><b>rs 366</b></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;