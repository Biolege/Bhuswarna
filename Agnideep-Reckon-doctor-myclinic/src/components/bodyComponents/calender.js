import React from "react";

const calender = () => {
  return (
    <div class="col-12 col-md-7 mx-md-auto col-lg-4 mt-4 mt-lg-0">
      <div class="month">
        <ul>
          <li>March</li>
        </ul>
      </div>
      <table class="smallfont table table-sm table-borderless monthTable">
        <tbody>
          <tr>
            <td>
              <div class="text-center">Sun</div>
            </td>
            <td>
              <div class="text-center">Mon</div>
            </td>
            <td>
              <div class="text-center">Tue</div>
            </td>
            <td>
              <div class="text-center">Wed</div>
            </td>
            <td>
              <div class="text-center">Thu</div>
            </td>
            <td>
              <div class="text-center">Fri</div>
            </td>
            <td>
              <div class="text-center">Sat</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="text-center"></div>
            </td>
            <td>
              <div class="text-center"></div>
            </td>
            <td>
              <div class="text-center">01</div>
            </td>
            <td>
              <div class="text-center">02</div>
            </td>
            <td>
              <div class="text-center">03</div>
            </td>
            <td>
              <div class="text-center">04</div>
            </td>
            <td>
              <div class="text-center">05</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="text-center">06</div>
            </td>
            <td>
              <div class="text-center">07</div>
            </td>
            <td>
              <div class="text-center">08</div>
            </td>
            <td class="activeInTable">
              <div class="text-center">09</div>
            </td>
            <td>
              <div class="text-center">10</div>
            </td>
            <td>
              <div class="text-center">11</div>
            </td>
            <td>
              <div class="text-center">12</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="text-center">13</div>
            </td>
            <td>
              <div class="text-center">14</div>
            </td>
            <td>
              <div class="text-center">15</div>
            </td>
            <td>
              <div class="text-center">16</div>
            </td>
            <td>
              <div class="text-center">17</div>
            </td>
            <td>
              <div class="text-center">18</div>
            </td>
            <td>
              <div class="text-center">19</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="text-center">20</div>
            </td>
            <td>
              <div class="text-center">21</div>
            </td>
            <td>
              <div class="text-center">22</div>
            </td>
            <td>
              <div class="text-center">23</div>
            </td>
            <td>
              <div class="text-center">24</div>
            </td>
            <td>
              <div class="text-center">25</div>
            </td>
            <td>
              <div class="text-center">26</div>
            </td>
          </tr>
          <tr>
            <td>
              <div class="text-center">27</div>
            </td>
            <td>
              <div class="text-center">28</div>
            </td>
            <td>
              <div class="text-center">29</div>
            </td>
            <td>
              <div class="text-center">30</div>
            </td>
            <td>
              <div class="text-center"></div>
            </td>
            <td>
              <div class="text-center"></div>
            </td>
            <td>
              <div class="text-center"></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default calender;
