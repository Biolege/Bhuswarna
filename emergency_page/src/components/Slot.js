import React from 'react';

function Slot(){
    return (
        <div className="row mt-3 mb-5" id="slotAvailable">
                  <div className="col-sm-12" >
                    <p className="wt-and-size">Slot Available</p>
                    <ul className="nav nav-tabs totd-list" role="tablist">
                        <li className="nav-item">
                          <a className="nav-link active totd" data-toggle="tab" href="#morning">Morning</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link totd" data-toggle="tab" href="#noon">Noon</a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link totd" data-toggle="tab" href="#evening">Evening</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link totd" data-toggle="tab" href="#night">Night</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="morning" className="container tab-pane active">
                            <table className="slot-time mt-4 ml-n4 table-responsive">
                                <tr>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">11:00 am</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">11:15 am</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">11:30 am</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">11:45 am</button></a>
                                  </td>
                                </tr>
                            </table>
                        </div>
                        <div id="noon" className="container tab-pane fade">
                            <table className="slot-time mt-4 ml-n4 table-responsive">
                                <tr>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">12:00 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">12:15 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">12:30 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">12:45 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">1:00 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">1:15 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">1:30 pm</button></a>
                                  </td>
                                </tr>
                              </table>
                        </div>
                        <div id="evening" className="container tab-pane fade">
                            <table className="slot-time mt-4 ml-n4 table-responsive">
                                <tr>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">3:30 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">3:45 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">4:00 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">4:15 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">4:30 pm</button></a>
                                  </td>
                                </tr>
                            </table>
                        </div>
                        <div id="night" className="container tab-pane fade">
                            <table className="slot-time mt-4 ml-n4 table-responsive">
                                <tr>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">8:15 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">8:30 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">8:45 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">9:00 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">9:15 pm</button></a>
                                  </td>
                                  <td>
                                    <a href="/#"><button className="btn btn-sm border border-rounded btn-time text-muted">9:30 pm</button></a>
                                  </td>
                                </tr>
                            </table>
                        </div>
                     </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row mt-5 ml-4">
                      <div className="col-1 mt-2">
                        <div className="rounded-circle circle2"></div>
                      </div>
                      <div className="col-2 ml-n5 text-muted">
                        Available
                      </div>
                      <div className="col-1 mt-2 offset-1">
                        <div className="rounded-circle circle2"></div>
                      </div>
                      <div className="col-2 ml-n5 text-muted">
                        Booked
                      </div>
                    </div>
                  </div>
                </div>
    );
}

export default Slot;