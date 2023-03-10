
//A page can't be manipulated safely until the document is "ready

$(document).ready(function () {
	var _dockPanel;
	var content = document.createElement('div');
	content.innerHTML = "";
	var liststart = document.createElement('ul');
	var listelement1 = document.createElement('li');
	var listelement2 = document.createElement('li');
	listelement1.innerHTML = '<a href="#tabs-1">One</a>';
	listelement2.innerHTML = '<a href="#tabs-2">Two</a>';
	liststart.appendChild(listelement1);
	liststart.appendChild(listelement2);
	var t1 = document.createElement('div');
	var t2 = document.createElement('div');




	t1.id = "tabs-1";
	t2.id = "tabs-2";

	t1.innerHTML = "Tab 1";
	t2.innerHTML = "Tab 2";

	content.appendChild(liststart);
	content.appendChild(t1);
	content.appendChild(t2);

	const para = document.createElement("section");
	para.innerHTML = "Im john doe";
	document.getElementById("mySection").appendChild(para);


	const paraSec = document.createElement("section");
	paraSec.innerHTML = "And I'm a";
	document.getElementById("mySection2").appendChild(paraSec);


	const paraSec3 = document.createElement("section");
	paraSec3.innerHTML = "photographer";
	document.getElementById("mySection3").appendChild(paraSec3);

	const paraSec4 = document.createElement("section");
	paraSec4.innerHTML = "<img src='images/girlSurfing.jpg'>";
	document.getElementById("mySection4").appendChild(paraSec4);

	const paraSec5 = document.createElement("section");
	paraSec5.innerHTML = "<p> Learn how to surf in 8 steps Watch the waves.,</p ><p > One of the hardest things for a beginner is getting in the right position to catch a wave.</p ><p> ...Practice the 'POP-UP'</p ><p> ...Start small. </p ><p>...Paddle like you mean it!</p ><p> ...Take up a fighting stance.</p ><p> ...Don't look down.</p ><p> ...Start out straight.</p ><p> ...Learn the rules.</p>";
	document.getElementById("mySection5").appendChild(paraSec5);

	const footerHTML = document.createElement("footer");
	footerHTML.innerHTML = "Reaby Industries";
	document.getElementById("footerId").appendChild(footerHTML);



	var html = [
		'<div>',
		'<nav class="navbar navbar-default">',

		'<ul class="nav navbar-nav">',
		'<li><button onclick="scrollFunction(1)"> Home </button> </li>',
		'<li><button onclick="scrollFunction(2)"> photpgrapher </button>  </li>',
		'<li><button onclick="scrollFunction(4)"> girl surfing </button></li>',
		'<li><button onclick="scrollFunction(5)"> Learn to surf </button></li>',
		'</ul>',

		'</nav>',
		'</div>'
	].join('\n');
	$("#navbar1").append(html);
	//$("#navbar2").append(content);
});



function scrollFunction(x) {

	if (x === 1 ) {
		const element = document.getElementById("mySection");
		element.scrollIntoView();
	} else if (x === 2) {
		const element = document.getElementById("mySection2");
		element.scrollIntoView();
		//  block of code to be executed if the condition1 is false and condition2 is true
	} else if (x === 4) {
		const element = document.getElementById("mySection4");
		element.scrollIntoView();
		//  block of code to be executed if the condition1 is false and condition2 is true
	} else if (x === 5) {
		const element = document.getElementById("mySection5");
		element.scrollIntoView();
		//  block of code to be executed if the condition1 is false and condition2 is true
	} 


}