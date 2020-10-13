import React from 'react';
import Slot from './Slot';

function DoctorInfo(props){
    return(
        <div className="container border border-light shad my-4">
       <div className="row" >
          <div className="col-sm-3 col-7 pt-5 text">
                <div className="rounded-circle circle1"></div>
            </div>
            <div className="col-sm-12 col-5 text-primary pt-4 text-right Available d-md-none d-lg-none d-xl-none">
              Available Today
           </div>
            <div className="col-sm-9 pt-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-12">
                                <h5>{props.docName}</h5>
                            </div>
                            <div className="col-sm-12 text-muted mt-sm-1">
                                Speciality
                            </div>
                            <div className="col-sm-12 text-muted mt-sm-1">
                                12 years experience
                            </div>
                            <div className="col-sm-12 mt-sm-1">
                                <l className="text-muted">Clinic / Hospital / Pharmacy Name</l> + 1 address
                            </div>
                            <div className="col-sm-12 text-muted mt-sm-1">
                                Full address of the location
                            </div>
                            <div className="col-sm-12 mt-sm-1">
                                <b>Consultation Fees Rs300</b>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 offset-sm-2">
                        <div className="row">
                            <div className="col-sm-12 text-primary mb-4 text-center Available d-none d-sm-none d-md-block">
                               <h5>Available Today</h5>
                            </div>
                            {/* <!--<div class="col-sm-12 text-center">
                                <button type="button" class="btn btn-sm btn-outline-secondary rounded-pill text-primary mt-sm-4">View Profile</button>
                            </div>
                            <div class="col-sm-12 text-center mt-3">
                                <button type="button" class="btn btn-dark btn-sm text-white px-3 py-1 rounded-pill">
                                    <div class="row mx-n5">
                                        <div class="col-sm-12 text-center my-n1">Tele-consultation</div>
                                        <div class="col-sm-12 text-center mb-n1 textsize">for Rs200</div>
                                    </div>
                                </button>
                            </div>--> */}
                            <div className="col-sm-12 text-md-center text-right mt-3 mb-3">
                                <button type="button" className="btn btn-warning btn-sm rounded-pill px-3"><b>Book Appointment</b></button>
                            </div> 
                        </div>
                    </div>
                    <div className="col-sm-11 mt-sm-4 d-none d-sm-none d-md-block">
                        <h5>Available on</h5>
                    </div>
                    <div className="col-sm-11 ml-sm-n2 mb-3 d-none d-sm-none d-md-block">
                        <table className="table-responsive">
                            <tr>
                              <td>
                                <a href="#dest"><button className="btn btn-sm week shad mt-3 ml-3">
                                  Monday
                                  <div className="text-muted small-btntext">March 02</div>
                                </button></a>
                                <div className=" timing-1 small-table mt-2 mb-3 ml-2">
                                    Slot Available : 10
                                </div>
                              </td>
                              <td>
                                <a href="/#"><button className="btn btn-sm week shad mt-3">
                                  Tuesday
                                  <div className="text-muted small-btntext">March 03</div>
                                </button></a>
                                <div className=" timing-2 small-table mt-2 mb-3 ml-2">
                                  No slot Available
                              </div>
                              </td>
                              <td>
                                <a href="#dest"><button className="btn btn-sm week shad wednesday mt-3">
                                  Wednesday
                                  <div className="text-muted small-btntext">March 04</div>
                                </button></a>
                                <div className=" timing-1 small-table mt-2 mb-3 ml-2">
                                  Slot Available : 12
                              </div>
                              </td>
                              <td>
                                <a href="/#"><button className="btn btn-sm week shad mt-3">
                                  Thursday
                                  <div className="text-muted small-btntext">March 05</div>
                                </button></a>
                                <div className="timing-2 small-table mt-2 mb-3 ml-2">
                                  No slot Available
                              </div>
                              </td>
                              <td>
                                <a href="/#"><button className="btn btn-sm week friday shad mt-3">
                                  &nbsp;Friday&nbsp;
                                  <div className="text-muted small-btntext">March 06</div>
                                </button></a>
                                <div className=" timing-2 small-table mt-2 mb-3 ml-2">
                                  No slot Available
                              </div>
                              </td>
                              <td>
                                <a href="#dest"><button className="btn btn-sm week shad mt-3">
                                  Saturday
                                  <div className="text-muted small-btntext">March 07</div>
                                </button></a>
                                <div className=" timing-2 small-table mt-2 mb-3 ml-2">
                                  .
                              </div>
                              </td>
                              <td>
                                <a href="#dest"><button className="btn btn-sm week friday shad mt-3">
                                  Sunday
                                  <div className="text-muted small-btntext">March 08</div>
                                </button></a>
                                <div className=" timing-2 small-table mt-2 mb-3 ml-2">
                                  .
                              </div>
                              </td>
                            </tr>
                          </table>
                    </div>
                </div>
                 
                <Slot/>
                
            </div>
       </div>
   </div>
    );
}

export default DoctorInfo;