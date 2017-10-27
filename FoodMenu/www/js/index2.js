 function newItem() {
	var item = document.getElementById('input').value;
	var ul = document.getElementById("list");
	var li = document.createElement('li');
  li.appendChild(document.createTextNode("- "+item));
  ul.appendChild(li);
  document.getElementById('input').value="";
  li.onclick = removeItem;
  }

  document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }

  document.getElementById
  }
  function newItem() {
  var item = document.getElementById('input').value;
  var ul = document.getElementById("list");
  var li = document.createElement('li');
  li.appendChild(document.createTextNode("- "+item));
  ul.appendChild(li);
  document.getElementById('input').value="";
  li.onclick = removeItem;
  }

  document.body.onkeyup = function(e){
      if(e.keyCode == 13){
        newItem();
      }
  }

  function removeItem(e) {
  e.target.parentElement.removeChild(e.target);
  }

  // 1. Create the button
var button = document.createElement("button");
button.innerHTML = "Click To Order";

// 2. Append somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// 3. Add event handler
button.addEventListener ("click", function() {
  alert("Your order is on process, click OK to proceed");
});

/* Read 

https://css-tricks.com/use-button-element/
*/
