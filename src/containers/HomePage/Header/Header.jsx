import React from "react";
import { Link } from "react-router-dom";

function showModal(elementClass) {
	document.querySelector(`#${elementClass}`).classList.remove("hide");
	document.onclick= function(event) {
		if (
        	event.target.classList.contains("modal-wrap") ||
        	event.target.classList.contains("modal-project-close")
    	) { closeModal(elementClass) }
	}
	document.onkeydown = function(event) {
		//Close modal window on press Esc
		if (event.keyCode == 27) closeModal(elementClass);
	};
}

function closeModal(elementClass) {
	document.querySelector(`#${elementClass}`).classList.add("hide")
	document.onkeydown = null;
	document.onclick= null;
}

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { approved: 0 };
		this.linkHandler = this.linkHandler.bind(this)
	}

	componentDidMount() {
		//If cookie exists we transite to cabinet at once. If not - send a request to DB
		if (document.cookie.split(';').filter((item) => item.trim().startsWith('email=')).length) { 
            this.setState({ approved: 1 }) 
        }
        else { this.setState({ approved: 0 }) };
	}

	linkHandler(event) { if (!this.state.approved) {event.preventDefault()} }

	render() {
		return (
			<header className="site-header">
				<div className="container">
					<div className="row">
						<div className="col l8">
							<h1 className="site-title">Account example</h1>
						</div>
						<div className="col l2 right-align">
							<button
								className="modal-show waves-effect waves-light btn"
								onClick={() => showModal("signup")}
							>
								Signup
							</button>
						</div>
						<div className="col l2 right-align">
							<Link
								to="/cabinet"
								style={{
									textDecoration: "none",
									color: "white"
								}}
								onClick={event => {
									this.linkHandler(event);
								}}
							>
								<button
									className="modal-show waves-effect waves-light btn"
									onClick={() => showModal("login")}
								>
									Login
								</button>
							</Link>
						</div>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
