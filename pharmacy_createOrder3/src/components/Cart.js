import React from 'react';
import CartItems from './CartItems';

function Cart() {
    return(
        <div>
            <div className="row mt-5 mt-lg-0">
                <div className="col-12">
                    <button className="btn btn-lg darkButton col-12 py-2 heading">Upload Prescription</button>
                </div>
            </div>
            <div className="card mt-3">
                <div className="card-body mb-n3">
                    <div className="row">
                        <div className="col-6">
                            <p className="heading">Cart</p>
                        </div>
                        <div className="col-5 ml-auto mt-2">
                            <p className="px20 text-right">07 items</p>
                        </div>
                        
                        <CartItems/>
                        <CartItems/>
                        <CartItems/>
                        <CartItems/>
                        <CartItems/>

                        <div className="col-12 mt-4">
                            <button className="btn btn-lg darkButton col-12 heading py-4">
                                <div className="row">
                                    <div className="col-6 col-lg-8 text-left ">
                                        Total
                                    </div>
                                    <div className="col-6 col-lg-4 ml-auto text-right">
                                        rs 366
                                    </div>
                                </div>
                            </button>
                        </div>

                        <div className="col-12 mt-4 mb-4">
                            <button className="btn btn-lg paymentbtn col-12 py-2">
                                <div className="row">
                                    <div className="col-10 col-lg-8 text-left px20">
                                        Proceed to payment
                                    </div>
                                    <div className="col-2 col-lg-4 ml-auto text-right">
                                        <a href="/#"><svg aria-hidden="true" focusable="false" height="25px" width="25px" data-prefix="fas" data-icon="arrow-circle-right" class="svg-inline--fa fa-arrow-circle-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-28.9 143.6l75.5 72.4H120c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24h182.6l-75.5 72.4c-9.7 9.3-9.9 24.8-.4 34.3l11 10.9c9.4 9.4 24.6 9.4 33.9 0L404.3 273c9.4-9.4 9.4-24.6 0-33.9L271.6 106.3c-9.4-9.4-24.6-9.4-33.9 0l-11 10.9c-9.5 9.6-9.3 25.1.4 34.4z"></path></svg></a>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;