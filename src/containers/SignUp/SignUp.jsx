import React from "react";
import { DatePicker } from "react-materialize";

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

function SignUp() {
	return (
		<React.Fragment>
			<div className="modal-wrap hide" id="signup" onClick= {closeModal}>
				<div className="modal-project signup-modal">
					<button 
						className="modal-project-close btn-floating waves-effect waves-light  lighten-1"
					>X
					</button>
					<div className="form-slider-wrapper">
						<div className="form-slider">
							<div className="left-50">
								<form>
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
														checked
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
														onChange = {() => {document.querySelector('#signup-submit').classList.toggle('disabled')
														}}
													/>
													<span>Agree Rules</span>
												</label>
											</p>
										</div>
										<div 
											className="col l6"
											onClick = {function () {
    											document.querySelector('.form-slider').style.marginLeft = '-345px';
    										}}>
											<p className="read-rules">
												(read rules)
											</p>
										</div>
										<div className="col l12 right-align">
											<button
												id="signup-submit"
												className="waves-effect waves-light btn disabled"
											>
												Sign In
											</button>
										</div>
									</div>
								</form>
							</div>
							<div className="right-50"
								onClick= {() => {document.querySelector('.form-slider').style.marginLeft = '0'}}>
								<p className="read-rules-back">&#60;&#60;Back</p>
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

export default SignUp;
