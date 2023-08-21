const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll("[data-form_change_to]");
const main = document.querySelector("main");

var login = sessionStorage.getItem('login');
if(login !== null && login) {
    window.location = "/" 
}
inputs.forEach((inp) => {
	inp.addEventListener("focus", () => {
		inp.classList.add("active");
	});
	inp.addEventListener("blur", () => {
		if (inp.value != "") return;
		inp.classList.remove("active");
	});
});

// toggle_btn.forEach(btn =>{
//     btn.addEventListener("click", ()=>{
//         main.classList.toggle("sign-up-mode");
//     })
// })

toggle_btn.forEach(function (e, i) {
	e.addEventListener("click", function (ee) {
		ee.preventDefault();
		this.closest("[data-form]").style.display = "none";
		document.querySelector(
			'[data-form="' + this.getAttribute("data-form_change_to") + '"]',
		).style.display = "block";
		if (this.getAttribute("data-form_change_to") == "signup") {
			this.closest(".innerbox").style.direction = "rtl";
		} else {
			this.closest(".innerbox").style.direction = "ltr";
		}
	});
});

function func(e) {
    // console.log(e);
	var email = document.getElementById("username").value;
	var pass = document.getElementById("password").value;
	if (email == "masoom0072003@gmail.com" && pass == "123456") {
		// alert("Successfull !");
		$('.error_login').hide();
		window.location = "/";
        sessionStorage.setItem('login', true);
	} else {
		$('.error_login').show();
	}
}
