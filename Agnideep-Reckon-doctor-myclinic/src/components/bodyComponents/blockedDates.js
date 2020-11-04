import React from "react";

const blockedDates = () => {
  return (
    <div class="row mt-5 ml-lg-3 mb-5 text-center text-lg-left">
      <div class="col-12">
        <p class="innerHeading text-center text-lg-left">My blocked dates</p>
        <div class="row mt-4 justify-content-center justify-content-lg-start ml-2 ml-sm-5 ml-md-0">
          <div class="col-5 col-md-2 col-lg-1 ml-lg-0">
            <div class="card border-0 shadow blockedDates">
              <div class="card-body">
                <p class="card-text mt-n2 text-muted text-center blockMonth">
                  March
                </p>
                <p class="card-text mt-n3 text-center dateBlock">27</p>
                <p class="text-muted mt-n3 text-center blockDay">Sun</p>
              </div>
            </div>
          </div>
          <div class="col-5 col-md-2 col-lg-1 ml-lg-3">
            <div class="card border-0 shadow blockedDates">
              <div class="card-body">
                <p class="card-text mt-n2 text-muted text-center blockMonth">
                  April
                </p>
                <p class="card-text mt-n3 text-center dateBlock">01</p>
                <p class="text-muted mt-n3 text-center blockDay">Fri</p>
              </div>
            </div>
          </div>
          <div class="col-5 col-md-2 col-lg-1 ml-lg-3 mt-4 mt-md-0">
            <div class="card border-0 shadow blockedDates">
              <div class="card-body">
                <p class="card-text mt-n2 text-muted text-center blockMonth">
                  April
                </p>
                <p class="card-text mt-n3 text-center dateBlock">02</p>
                <p class="text-muted mt-n3 text-center blockDay">Sat</p>
              </div>
            </div>
          </div>
          <div class="col-5 col-md-2 col-lg-1 ml-lg-3 mt-4 mt-md-0">
            <div class="card border-0 shadow blockedDates">
              <div class="card-body">
                <p class="card-text mt-n2 text-muted text-center blockMonth">
                  April
                </p>
                <p class="card-text mt-n3 text-center dateBlock">03</p>
                <p class="text-muted mt-n3 text-center blockDay">Sun</p>
              </div>
            </div>
          </div>
          <div class="col col-md-1 ml-3 d-none d-md-block">
            <div class="rectangle border border-dark border-left-0"></div>
          </div>
          <div class="col-12 d-md-none d-sm-block d-none">
            <div class="rectangle2 border border-dark border-top-0"></div>
          </div>
          <div class="col-12 d-sm-none d-block">
            <div class="rectangle3 border border-dark border-top-0"></div>
          </div>
          <div class="col-12 col-md-2 col-lg-3 ml-lg-n5 ml-n5 ml-md-n3">
            <p class="blockMonth mt-4">Clinic name</p>
            <p class="blockMonth">Reason</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default blockedDates;
