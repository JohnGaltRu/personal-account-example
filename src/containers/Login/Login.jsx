import React from "react";

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

function Login() {
    return (
        <div className="modal-wrap hide" id="login" onClick={closeModal}>
            <div className="modal-project">
                <form>
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
                            <button
                                id="login-submit"
                                className="waves-effect waves-light btn"
                            >
                                Login
                            </button>
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
