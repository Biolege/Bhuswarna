import React from "react";

const settings = () => {
  return (
    <div class="col-12 col-lg-7 ml-lg-4 mt-4 text-center text-lg-left">
      <p class="innerHeading">Absence Settings</p>
      <ul class="no_bullet ml-4 mt-4">
        <li class="innerul text-left">
          In case you are unavailable, you can block the date for no
          appointments.
        </li>
        <li class="innerul mt-2 text-left">
          Provide the date(s) and clinics in which we will not be available.
        </li>
        <li class="innerul mt-2 text-left">
          Provide the reason that will let your patients and clinic know about
          your leave.
        </li>
      </ul>
    </div>
  );
};

export default settings;
