// *timer-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// Set the date we're counting down to
var countDownDate = new Date("Nov 11, 2022 19:00:00").getTime();

// Update the count down every 1 second
var xi = setInterval(function () {
	// Get today's date and time
	var now = new Date().getTime();

	// Find the distance between now and the count down date
	var distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("day").innerHTML =
		days + ' : <br> <p class="timer-text">Hari</p>';
	document.getElementById("hour").innerHTML =
		hours + ' : <br> <p class="timer-text">Jam</p>';
	document.getElementById("minute").innerHTML =
		minutes + ' : <br> <p class="timer-text">Menit</p>';
	document.getElementById("sec").innerHTML =
		seconds + '<br> <p class="timer-text">Detik</p>';

	// If the count down is finished, write some text
	if (distance < 0) {
		clearInterval(xi);
		document.getElementsById("day").innerHTML = "EXPIRED";
	}
}, 1000);

// *end-timer-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// *dropdown-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
	selElmnt = x[i].getElementsByTagName("select")[0];
	ll = selElmnt.length;
	/*for each element, create a new DIV that will act as the selected item:*/
	a = document.createElement("DIV");
	a.setAttribute("class", "select-selected");
	a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
	x[i].appendChild(a);
	/*for each element, create a new DIV that will contain the option list:*/
	b = document.createElement("DIV");
	b.setAttribute("class", "select-items select-hide");
	for (j = 1; j < ll; j++) {
		/*for each option in the original select element,
    create a new DIV that will act as an option item:*/
		c = document.createElement("DIV");
		c.innerHTML = selElmnt.options[j].innerHTML;
		c.addEventListener("click", function (e) {
			/*when an item is clicked, update the original select box,
        and the selected item:*/
			var y, i, k, s, h, sl, yl;
			s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			sl = s.length;
			h = this.parentNode.previousSibling;
			for (i = 0; i < sl; i++) {
				if (s.options[i].innerHTML == this.innerHTML) {
					s.selectedIndex = i;
					h.innerHTML = this.innerHTML;
					y = this.parentNode.getElementsByClassName("same-as-selected");
					yl = y.length;
					for (k = 0; k < yl; k++) {
						y[k].removeAttribute("class");
					}
					this.setAttribute("class", "same-as-selected");
					break;
				}
			}
			h.click();
		});
		b.appendChild(c);
	}
	x[i].appendChild(b);
	a.addEventListener("click", function (e) {
		/*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
		e.stopPropagation();
		closeAllSelect(this);
		this.nextSibling.classList.toggle("select-hide");
		this.classList.toggle("select-arrow-active");
	});
}
function closeAllSelect(elmnt) {
	/*a function that will close all select boxes in the document,
   except the current select box:*/
	var x,
		y,
		i,
		xl,
		yl,
		arrNo = [];
	x = document.getElementsByClassName("select-items");
	y = document.getElementsByClassName("select-selected");
	xl = x.length;
	yl = y.length;
	for (i = 0; i < yl; i++) {
		if (elmnt == y[i]) {
			arrNo.push(i);
		} else {
			y[i].classList.remove("select-arrow-active");
		}
	}
	for (i = 0; i < xl; i++) {
		if (arrNo.indexOf(i)) {
			x[i].classList.add("select-hide");
		}
	}
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);

// *end-dropdown-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

// *owl-carousel-=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=-
$(document).ready(function () {
	$(".owl-carousel").owlCarousel();
});

var owl = $(".owl-carousel");
owl.owlCarousel({
	loop: false,
	margin: 10,
	nav: true,
	stagePadding: 32,
	autoHeight: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		960: {
			items: 5,
		},
		1200: {
			items: 6,
		},
	},
});
owl.on("mousewheel", ".owl-stage", function (e) {
	if (e.deltaY > 0) {
		owl.trigger("next.owl");
	} else {
		owl.trigger("prev.owl");
	}
	e.preventDefault();
});

// *copy
function copyToClipboard(element) {
	var $temp = $("<input>");
	$("body").append($temp);
	$temp.val($(element).text()).select();
	document.execCommand("copy");
	$temp.remove();
}
