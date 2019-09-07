import React from "react";
import { DatePicker } from "react-materialize";
import { Link } from "react-router-dom";

import "./CabinetPage.css";

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function requestToDB(userEmail) {
    let data = {
        email: userEmail
    };

    function requestDataToString(dataArr) {
        let out = "";
        for (let key in dataArr) {
            out += `${key}=${dataArr[key]}&`;
        }
        return out;
    }

    fetch("backend/get_user_data.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: requestDataToString(data)
    })
        .then(result => result.json())
        .then(result => refreshFields(result))
        .catch(error => console.log(error.message));
}

function refreshFields(result) {
    document.querySelector("#cabinet-name").value = result.name;
    document.querySelector("#cabinet-pass").value = result.password;
    document.querySelector("#cabinet-birthday").value = result.birthday;
    let sex = document.querySelectorAll(".sex");
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].value == result.sex) {
            sex[i].checked = true;
            break;
        }
    }
}

function logout() {
    let c = document.cookie;
    let d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`;
}

function updateUserData(event) {
    event.preventDefault();
    
    const form = document.forms.cabinetForm;
    const name = form.name.value;
    const pass = form.pass.value;
    const birthday = form.birthday.value;
    let sex = document.querySelectorAll(".sex");
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let userEmail = getCookie("email");

    let data = {
        email: userEmail,
        name: name,
        pass: pass,
        birthday: birthday,
        sex: sex
    };

    function requestDataToString(dataArr) {
        let out = "";
        for (let key in dataArr) {
            out += `${key}=${dataArr[key]}&`;
        }
        return out;
    }

    function alertUpdateResult(result) {
        if (result == 1) { alert('Success!') }
        else { alert('Error, please, try later!') }
    }

    fetch("backend/update_user_data.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: requestDataToString(data)
    })
        .then(result => result.json())
        .then(result => alertUpdateResult(result))
        .catch(error => console.log(error.message));
}

class CabinetPage extends React.Component {
    componentDidMount() {
        let userEmail = getCookie("email");
        requestToDB(userEmail);
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col l12 left-align">
                            <h1 className="user-cabinet-header">
                                User cabinet
                            </h1>
                        </div>
                        <div className="col l12  left-align">
                            <button
                                id="logout"
                                className="waves-effect waves-light btn lighten-1"
                            >
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: "none",
                                        color: "white"
                                    }}
                                    onClick= {logout}
                                >
                                    Logout
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col l6">
                            <form name='cabinetForm'>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <input
                                            id="cabinet-name"
                                            type="text"
                                            className="validate"
                                            name= "name"
                                        />
                                        <label
                                            className="active"
                                            for="cabinet-name"
                                        >
                                            Name
                                        </label>
                                    </div>
                                    <div className="input-field col s6">
                                        <input
                                            id="cabinet-pass"
                                            type="text"
                                            className="validate"
                                            name= "pass"
                                        />
                                        <label
                                            className="active"
                                            for="cabinet-pass"
                                        >
                                            Password
                                        </label>
                                    </div>
                                    <DatePicker
                                        placeholder="Your birthday"
                                        name="birthday"
                                        id="cabinet-birthday"
                                        classNameName="datepicker"
                                        options={{}}
                                    />
                                    <div className="col l12">
                                        <p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="male"
                                                    name="sex"
                                                    className="sex"
                                                />
                                                <span>Male</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="female"
                                                    name="sex"
                                                    className="sex"
                                                />
                                                <span>Female</span>
                                            </label>
                                        </p>
                                        <p>
                                            <label>
                                                <input
                                                    type="radio"
                                                    value="other"
                                                    name="sex"
                                                    className="sex"
                                                />
                                                <span>Other</span>
                                            </label>
                                        </p>
                                    </div>
                                    <div className="col l12 left-align">
                                        <button
                                            id="cabinet-submit"
                                            className="waves-effect waves-light btn lighten-1"
                                            onClick= {(event) => {updateUserData(event)}}
                                        >
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default CabinetPage;
