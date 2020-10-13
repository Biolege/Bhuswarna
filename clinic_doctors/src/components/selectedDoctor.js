import React from 'react';

function selectedDoctor(props) {
    return (
        <div className="card border-0">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-7 heading">{props.name}</div>
                    <div className="col-md-4 text-md-right px18 mt-md-1 mt-4 ml-md-4">Today, March 24 &nbsp;&nbsp;
                      <svg aria-hidden="true" focusable="false" data-prefix="far" height="25px" width="25px" data-icon="calendar" class="svg-inline--fa fa-calendar fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M400 64h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V160h352v298c0 3.3-2.7 6-6 6z"></path>
                      </svg></div>
                </div>

                <div className="row mt-5">
                    <div className="col-12 col-md-4">
                        <p className="px18">Total appointments &emsp;<b>{props.totAppointments}</b></p>
                    </div>
                    <div className="col-12 col-md-4 mx-md-auto">
                        <p className="px18 text-md-center">Completed &emsp;<b>{props.completed}</b></p>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="px18 text-md-right mr-5">Pending &emsp;<b>{props.pending}</b></p>
                    </div>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover table-borderless text-center">
                        <thead className="border-0">
                            <tr className="tableRowShadow">
                                <td></td>
                                <td>Patient name</td>
                                <td>Age</td>
                                <td>Gender</td>
                                <td>Visit</td>
                                <td>Timing</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-bottom">
                                <td><div className="tableCircle"></div></td>
                                <td>Babur Ahmed</td>
                                <td>34</td>
                                <td>F</td>
                                <td>1</td>
                                <td>09:30 am</td>
                            </tr>
                            <tr className="border-bottom">
                                <td><div className="tableCircle"></div></td>
                                <td>Rupali Domre</td>
                                <td>40</td>
                                <td>M</td>
                                <td>2</td>
                                <td>08:00 am</td>
                            </tr>
                            <tr className="border-bottom">
                                <td><div className="tableCircle"></div></td>
                                <td>Binni Gupta</td>
                                <td>30</td>
                                <td>M</td>
                                <td>2</td>
                                <td>08:00 am</td>
                            </tr>
                            <tr>
                                <td><div className="tableCircle"></div></td>
                                <td>Rupali Domre</td>
                                <td>40</td>
                                <td>F</td>
                                <td>1</td>
                                <td>09:00 pm</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default selectedDoctor;