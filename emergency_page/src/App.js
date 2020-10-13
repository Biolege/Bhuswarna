import React from 'react';
import './App.css';
import DoctorInfo from './components/DoctorInfo';
import Specialist from './components/Specialist';

function App() {
 return (
    <div>
      <div className="container mt-5 t">
        <div className="row">
          <div className="col-lg-2 col-xs-12 ml-lg-n2 ml-0">
                <div className="form-group has-PIN ">
                    <span className="material-icons form-control-feedback">room</span>
                    <input type="text" className="form-control" placeholder="Enter PIN Code"/>
                  </div>
            </div>
            <div className="col-lg-5 col-xs-12 ml-lg-4">
                <div className="input-group md-form form-sm form-2">
                    <input className="form-control my-0 bordr" type="text" placeholder="Search for doctors, speciality, hospitals, clinic  etc" aria-label="Search"/>
                    <div className="input-group-append">
                      <div className="input-group-text" id="basic-text1"><i className="fa fa-search text-grey"
                       aria-hidden="true"></i></div>
                    </div>
                  </div>
            </div>
            <div className="col-lg-2 col-xs-12 ml-lg-5 mt-3 mt-lg-0">
                <form>
                    <select className="form-control bordr drpdn ">
                      <option selected>Speciality</option>
                      <option>...</option>
                    </select>
                </form>
              </div>
              <div className="col-lg-2 col-xs-12 ml-lg-4 mt-3 mt-lg-0">  
                <form >
                  <select className="form-control bordr drpdn">
                    <option selected>Hospital/Clinic</option>
                    <option>...</option>
                  </select>
              </form>
              </div>
        </div>
   </div>

   <Specialist pin="PIN Code"/>
   <DoctorInfo docName="Dr Radhaswami Iyer"/>
   <div className='mt-5'  id="dest"></div>
   <DoctorInfo docName="Dr Radhaswami Iyer"/>
    </div>

  );
}

export default App;