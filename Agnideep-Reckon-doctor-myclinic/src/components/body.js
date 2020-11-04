import React from "react";
import Address from "./bodyComponents/addressCard";
import Settings from "./bodyComponents/settings";
import Calender from "./bodyComponents/calender";
import Blocked from "./bodyComponents/blockedDates";
import Other from "./bodyComponents/otherSettings";
const body = () => {
  return (
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="col-12 col-md-2 ml-md-4 text-center text-lg-left innerHeading mb-5 mb-md-0">
            Clinics
          </div>
          <div class="col-12 col-md-3 col-lg-2 mr-lg-n4 ml-md-auto text-center text-md-left text-muted innerHeading mt-n5">
            Requests(2)
          </div>
        </div>
        <div class="row mb-5 ml-1 align-items-center justify-content-between">
          <Address />
          <Address />
          <Address />
        </div>
        <div class="row">
          <div class="col-12 ml-4 pr-5">
            <hr />
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row">
              <Settings />

              <Calender />
            </div>
          </div>
        </div>

        <Blocked />

        <div class="row mt-n3">
          <div class="col-12 ml-4 pr-5">
            <hr />
          </div>
        </div>
        <Other />
      </div>
    </div>
  );
};

export default body;
