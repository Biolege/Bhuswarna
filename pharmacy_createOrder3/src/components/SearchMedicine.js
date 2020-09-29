import React from 'react';

function SearchMedicine() {
    return (
        <div className="card">
            <div className="card-body mb-n3">
                <div className="row">
                    <div className="col-12">
                        <div class="input-group md-form form-sm form-2 searchBar">
                            <input class="form-control my-0 border" type="text" placeholder="Search for medicines" aria-label="Search"/>
                        <div class="input-group-append">
                            <span class="input-group-text lighten-3 border" id="basic-text1"><i class="fa fa-search text-grey" aria-hidden="true"></i></span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                       <button className="btn btn-lg darkButton col-12">Scan barcode or QR code</button>
                    </div>
                    <div className="col-12 mt-4 justify-content-center mb-5 mt-5">
                       <div className="card" style={{maxheight: "30rem"}}>
                           <div className="card-body">
                                <p className="heading text-center">Product display area</p>
                           </div>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchMedicine;