container = document.getElementById("container");
div = document.creteElement("div");
div.onclick = function () {
  alert("This is the box #" + i);
}
container.appendChild(div);

// on clicking on each block 5 will appear since value of i os global 5
// using let will block off the scope of i

// the scope of i is protected with let

// # Function Parameters
const logCompliment = function (name) {
	alert(`${name} is awesome!`);
}

logCompliment('Shubham');
