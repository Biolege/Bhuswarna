import React from "react";
import Logo from "./dummy.jpg";

const appointment = () => {
  return (
    <div class="container border border-light shad mt-4 doc-card">
      <div class="row">
        <img
          src={Logo}
          class="col-3 col-sm-2 col-md-3 col-lg-2 img-fluid mt-sm-5 mt-4 ml-sm-4 mr-sm-5"
          alt="Responsive"
        />
        <div class="col-9 mt-sm-5 mt-3 doc-details">
          <div class="row">
            <div class="col-sm-6">
              <div class="row">
                <div class="col-12 d-flex">
                  <div class="col-7 col-sm-12 ml-n3 mt-sm-0 mt-3">
                    <h5 class="Doc-name">Dr Radhaswami Iyer</h5>
                  </div>
                  <div
                    class="ml-auto text-primary col-5 Available d-md-none d-lg-none d-xl-none"
                    style={{ fontSize: "10px" }}
                  >
                    Available Today
                  </div>
                </div>
                <div class="col-sm-12 text-muted mt-sm-1">Speciality</div>
                <div class="col-sm-12 text-muted mt-sm-1">
                  Degree and Course Details
                </div>
                <div class="col-sm-12 text-muted mt-sm-1">
                  12 years experience
                </div>
                <div class="col-sm-12 text-muted mt-sm-1">
                  <i
                    class="fas fa-check-circle"
                    style={{ color: "#008505" }}
                  ></i>
                  Verified
                </div>
              </div>
            </div>
            <div class="col-sm-4 offset-sm-2">
              <div class="row">
                <div class="col-sm-12 text-primary mb-4 text-center Available d-none d-sm-none d-md-block">
                  <h5>Available Today</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex mt-sm-5 mt-3 px-sm-4">
        <h5 class="bb pr-3 mr-3 pb-2">Clinic appointment</h5>
        <h5 class="lb pl-3">Tele-consultation appointment</h5>
      </div>

      <h5 class="mt-sm-5 px-sm-4">Choose clinic</h5>
      <div class="row">
        <div class="col-12">
          <div class="table-responsive">
            <table class="table-responsive">
              <tr>
                <td>
                  <a href="#">
                    <button class="btn btn-lg clinic-btn mt-3 ml-3 mb-4">
                      Done Clinic
                      <div class="text-muted small-btntext">lorem ipsum</div>
                    </button>
                  </a>
                </td>
                <td>
                  <a href="#">
                    <button class="btn btn-lg clinic-btn mt-3 ml-3 mb-4">
                      Done Clinic
                      <div class="text-muted small-btntext">lorem ipsum</div>
                    </button>
                  </a>
                </td>
                <td>
                  <a href="#">
                    <button class="btn btn-lg clinic-btn mt-3 ml-3 mb-4">
                      Done Clinic
                      <div class="text-muted small-btntext">lorem ipsum</div>
                    </button>
                  </a>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>

      <h5 class="mt-sm-2 px-sm-4">Available On</h5>
      <div class="row">
        <div class="col-sm-12 mb-3">
          <table class="table-responsive">
            <tr>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week shad mt-3 ml-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Monday
                    <div class="text-muted small-btntext">March 02</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week shad mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Tuesday
                    <div class="text-muted small-btntext">March 03</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week shad wednesday mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Wednesday
                    <div class="text-muted small-btntext">March 04</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week shad mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Thursday
                    <div class="text-muted small-btntext">March 05</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week friday shad mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    &nbsp;Friday&nbsp;
                    <div class="text-muted small-btntext">March 06</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week shad mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Saturday
                    <div class="text-muted small-btntext">March 07</div>
                  </button>
                </a>
              </td>
              <td>
                <a href="#">
                  <button
                    class="btn btn-sm week friday shad mt-3 mb-4"
                    id="days"
                    onclick="toggleSlot()"
                  >
                    Sunday
                    <div class="text-muted small-btntext">March 08</div>
                  </button>
                </a>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="row mt-sm-3 mb-5 px-sm-4" id="slotAvailable">
        <h5 class="mt-sm-2 px-3 mb-4">Slot Available</h5>
        <div class="col-sm-12">
          <ul class="nav nav-tabs totd-list" role="tablist">
            <li class="nav-item">
              <a class="nav-link active totd" data-toggle="tab" href="#morning">
                Morning
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link totd" data-toggle="tab" href="#noon">
                Noon
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link totd" data-toggle="tab" href="#evening">
                Evening
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link totd" data-toggle="tab" href="#night">
                Night
              </a>
            </li>
          </ul>
          <div class="tab-content px-sm-2">
            <div id="morning" class="container tab-pane active">
              <table class="slot-time mt-4 ml-n4 table-responsive">
                <tr>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        11:00 am
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        11:15 am
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        11:30 am
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        11:45 am
                      </button>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div id="noon" class="container tab-pane fade">
              <table class="slot-time mt-4 ml-n4 table-responsive">
                <tr>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        12:00 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        12:15 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        12:30 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        12:45 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        1:00 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        1:15 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        1:30 pm
                      </button>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div id="evening" class="container tab-pane fade">
              <table class="slot-time mt-4 ml-n4 table-responsive">
                <tr>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        3:30 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        3:45 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        4:00 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        4:15 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        4:30 pm
                      </button>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
            <div id="night" class="container tab-pane fade">
              <table class="slot-time mt-4 ml-n4 table-responsive">
                <tr>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        8:15 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        8:30 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        8:45 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        9:00 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        9:15 pm
                      </button>
                    </a>
                  </td>
                  <td>
                    <a href="#">
                      <button class="btn btn-sm border border-rounded btn-time text-muted">
                        9:30 pm
                      </button>
                    </a>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="row d-sm-block d-none mb-4">
        <div class="col-sm-4 col-12 offset-sm-9">
          <button
            type="button"
            class="btn btn-warning btn-sm px-3 btn-block-xs-only"
          >
            <b>Book Appointment</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default appointment;
