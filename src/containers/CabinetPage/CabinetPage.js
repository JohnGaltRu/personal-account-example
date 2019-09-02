import React from 'react';
import { DatePicker } from "react-materialize";
import { Link } from 'react-router-dom';

import './CabinetPage.css';


function CabinetPage() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
            <div className="col l12 left-align">
                <h1 className="user-cabinet-header">User cabinet</h1>
            </div>
            <div className="col l12  left-align">
                <button id="logout" className="waves-effect waves-light btn lighten-1">
                	<Link to= "/" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
                </button>
            </div>	
        </div>
        <div className="row">
            <div className="col l6">
                <form>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="signup-name" type="text" className="validate" />
                            <label className="active" for="signup-name">Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="signup-pass" type="text" className="validate" />
                            <label className="active" for="signup-pass">Password</label>
                        </div>
                        	<DatePicker
								placeholder="Your birthday"
								name="birthday"
								id="signup-birthday"
								classNameName="datepicker"
								options={{}}
							/>
                        <div className="col l12">
                            <p>
                                <label>
                                <input name="group1" type="radio" />
                                <span>Male</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input name="group1" type="radio" />
                                <span>Female</span>
                                </label>
                            </p>
                            <p>
                                <label>
                                <input name="group1" type="radio"  />
                                <span>Other</span>
                                </label>
                            </p>
                        </div>
                        <div className="col l12 left-align">
                            <button id="signup-submit" className="waves-effect waves-light btn lighten-1">Update</button>
                        </div>
                    </div>
                </form>
            </div>    
        </div>
    </div>
    </React.Fragment>
  );
}

export default CabinetPage;
