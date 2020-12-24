container = document.getElementById("container");
div = document.creteElement("div");
div.onclick = function () {
  alert("This is the box #" + i);
}
container.appendChild(div);
