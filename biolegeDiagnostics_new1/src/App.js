import React from 'react';
import './App.css';
import Packagetests from './components/PackageTests';
import ProfileTests from './components/ProfileTests';
import SingleTests from './components/SingleTests';
import TestSelected from './components/TestSelected';
import Thyrocare from './components/thyrocare';

function App() {
 return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row ml-lg-5">
          <div className="col-lg-8">
            <Thyrocare title="Thyrocare"/>
            <br/>
            <SingleTests/>
            <br/>
            <ProfileTests/>
            <br/>
            <Packagetests/>
          </div>
          <div className="col-lg-3 mt-3 mt-lg-0">
            <TestSelected/>
          </div>
        </div>
      </div>

</div>

  );
}

export default App;