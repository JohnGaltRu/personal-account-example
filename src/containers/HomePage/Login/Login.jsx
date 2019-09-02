import React from "react";
import { Link } from "react-router-dom";

function closeModal(event) {
    if (
        event.target.classList.contains("modal-wrap") ||
        event.target.classList.contains("modal-project-close")
    ) {
        document.querySelectorAll(".modal-wrap").forEach(function(element) {
            element.classList.add("hide");
        });
        document.onkeydown = null;
    }
}

function sendData(event) {
    const form = document.forms.loginForm;
    const pass = form.pass.value;
    const email = form.email.value;
    if (!pass || !email) {
        alert("Fill all the fields!");
        event.preventDefault();
    }

    //CODE BELLOW IS FOR THE VERSION WITH BACKEND
    /*
    let data = {
        pass: pass,
        email: email
    };
    
    function requestDataToString(dataArr) {
        let out = "";
        for (let key in dataArr) {
            out += `${key}=${dataArr[key]}&`;
        }
        return out;
    }
    
    fetch("backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: requestDataToString(data)
    })
        .then(result => result.json())
        .then(result => login(result))
        .catch(error => console.log(error.message));

    function login(result) {
        if (result == 2) {
            alert('Fill all the fields!')
        }
        else if (result == 0) {
            alert('Account was not found!')

        }
        else {
            let d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;            
        }
    }*/
}

function Login() {
    return (
        <div className="modal-wrap hide" id="login" onClick={closeModal}>
            <div className="modal-project">
                <form name="loginForm">
                    <div className="row">
                        <div className="input-field col l12">
                            <input
                                placeholder="Your email"
                                name="email"
                                id="login-email"
                                type="text"
                                className="validate"
                            />
                            <label htmlFor="login-email" className="active">
                                Email
                            </label>
                        </div>
                        <div className="input-field col l12">
                            <input
                                placeholder="Your password"
                                name="pass"
                                id="login-pass"
                                type="password"
                            />
                            <label htmlFor="login-pass" className="active">
                                Password
                            </label>
                        </div>
                        <div className="col l12 right-align">
                            <Link
                                to="/cabinet"
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                            >
                                <button
                                    id="login-submit"
                                    className="waves-effect waves-light btn"
                                    onClick={sendData}
                                >
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </form>
                <button className="modal-project-close btn-floating waves-effect waves-light lighten-1">
                    X
                </button>
            </div>
        </div>
    );
}

export default Login;
