AFRAME.registerComponent("create-buttons", {
    init: function() {
        alert("in")
      var button1 = document.createElement("button")
      button1.innerHTML = "Order Now!"
      button1.setAttribute("id", "order-button")
      button1.setAttribute("class", "btn btn-warning")

      var button2 = document.createElement("button")
      button2.innerHTML = "Order Summary!"
      button2.setAttribute("id", "order-summary-button")
      button2.setAttribute("class", "btn btn-warning")

      var buttonDiv = document.getElementById("button-div")
      buttonDiv.appendChild(button1)
      buttonDiv.appendChild(button2)
    },
  });
  