import React from "react";

const otherSettings = () => {
  return (
    <div class="row mt-4 ml-lg-4 mb-5 pb-5">
      <div class="col-12">
        <p class="innerHeading text-center text-lg-left">Other Settings</p>
        <div class="row">
          <div class="col-10 col-lg-8">
            <p>Allow clinic to send you invitation.</p>
          </div>
          <div class="col-1 col-md-1 ml-md-auto">
            <div class="custom-control custom-switch">
              <input
                type="checkbox"
                class="custom-control-input"
                id="customSwitches1"
              />
              <label class="custom-control-label" for="customSwitches1"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default otherSettings;
