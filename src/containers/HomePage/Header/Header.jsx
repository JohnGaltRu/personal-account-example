import React from "react";

function showModal(elementClass) {
    document.querySelector(`#${elementClass}`).classList.remove('hide');
    document.onkeydown = function (event) {
        //закрываем окно на кнопку Esc
        if (event.keyCode == 27) closeModal();
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null;
}

function Header() {
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
							onClick= {() => showModal('signup')}
						>
							Signup
						</button>
					</div>
					<div className="col l2 right-align">
						<button
							className="modal-show waves-effect waves-light btn"
							onClick= {() => showModal('login')}
						>
							Login
						</button>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
