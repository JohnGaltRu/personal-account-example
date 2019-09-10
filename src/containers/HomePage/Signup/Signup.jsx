import React from "react";
import { DatePicker } from "react-materialize";

function closeModal(elementClass) {
	document.querySelector(`#${elementClass}`).classList.add("hide")
	document.onkeydown = null;
	document.onclick= null;
}

function sendData(event) {
	event.preventDefault();
	const form = document.forms.signupForm;
	const name = form.name.value;
	const pass = form.pass.value;
	const email = form.email.value;
	const birthday = form.birthday.value;
	let sex = document.querySelectorAll(".sex");
	for (let i = 0; i < sex.length; i++) {
		if (sex[i].checked) {
			sex = sex[i].value;
			break;
		}
	}

	if (!name || !pass || !email || !birthday || !sex) {
		alert("Fill all the fields!");
		return false;
	}

	let data = {
		name: name,
		pass: pass,
		email: email,
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

	fetch("backend/signup.php", {
		method: "POST",
		headers: { "Content-Type": "application/x-www-form-urlencoded" },
		body: requestDataToString(data)
	})
		.then(result => result.json())
		.then(result => signup(result))
		.catch(error => console.log(error.message));

	function signup(result) {
		if (result == 2) {
			alert("Fill all the fields!");
		} else if (result == 1) {
			alert("Успех. Теперь можно войти!");
			closeModal('signup');
		} else {
			alert("Error, please, try later!");
		}
	}
}

function Signup() {
	return (
		<React.Fragment>
			<div className="modal-wrap hide" id="signup">
				<div className="modal-project signup-modal">
					<button
						className="modal-project-close btn-floating waves-effect waves-light  lighten-1"
						onClick={() => {closeModal('signup')}}
					>
						X
					</button>
					<div className="form-slider-wrapper">
						<div className="form-slider">
							<div className="left-50">
								<form name="signupForm">
									<div className="row">
										<div className="input-field col l6">
											<input
												placeholder="Your name"
												name="name"
												id="signup-name"
												type="text"
												className="validate"
											/>
											<label
												htmlFor="signup-name"
												className="active"
											>
												Name
											</label>
										</div>
										<div className="input-field col l6">
											<input
												placeholder="Your password"
												name="pass"
												id="signup-pass"
												type="password"
												className="validate"
											/>
											<label
												htmlFor="signup-pass"
												className="active"
											>
												Password
											</label>
										</div>
										<div className="input-field col l6">
											<input
												placeholder="Your email"
												name="email"
												id="signup-email"
												type="email"
												className="validate"
											/>
											<label
												htmlFor="signup-email"
												className="active"
											>
												Email
											</label>
										</div>
										<div className="col l6">
											<DatePicker
												placeholder="Your birthday"
												name="birthday"
												id="signup-birthday"
												className="datepicker"
												options={{}}
											/>
										</div>
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
										<div className="col l6">
											<p>
												<label>
													<input
														type="checkbox"
														id="agree-rules"
														onChange={() => {
															document
																.querySelector(
																	"#signup-submit"
																)
																.classList.toggle(
																	"disabled"
																);
														}}
													/>
													<span>Agree Rules</span>
												</label>
											</p>
										</div>
										<div
											className="col l6"
											onClick={function() {
												document.querySelector(
													".form-slider"
												).style.marginLeft = "-345px";
											}}
										>
											<p className="read-rules">
												(read rules)
											</p>
										</div>
										<div className="col l12 right-align">
											<button
												id="signup-submit"
												className="waves-effect waves-light btn disabled"
												onClick={sendData}
											>
												Sign In
											</button>
										</div>
									</div>
								</form>
							</div>
							<div
								className="right-50"
								onClick={() => {
									document.querySelector(
										".form-slider"
									).style.marginLeft = "0";
								}}
							>
								<p className="read-rules-back">
									&#60;&#60;Back
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Doloremque dolores odio
									nobis omnis. Dolor, impedit? Eaque enim
									illum at.{" "}
								</p>
								<p>
									Exercitationem unde aperiam soluta minus
									aliquid at deleniti quas facilis ipsam.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Doloremque dolores odio
									nobis omnis. Dolor, impedit? Eaque enim
									illum at.{" "}
								</p>
								<p>
									Exercitationem unde aperiam soluta minus
									aliquid at deleniti quas facilis ipsam.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Doloremque dolores odio
									nobis omnis. Dolor, impedit? Eaque enim
									illum at.{" "}
								</p>
								<p>
									Exercitationem unde aperiam soluta minus
									aliquid at deleniti quas facilis ipsam.
								</p>
								<p>
									Lorem ipsum dolor sit amet consectetur
									adipisicing elit. Doloremque dolores odio
									nobis omnis. Dolor, impedit? Eaque enim
									illum at.{" "}
								</p>
								<p>
									Exercitationem unde aperiam soluta minus
									aliquid at deleniti quas facilis ipsam.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Signup;
