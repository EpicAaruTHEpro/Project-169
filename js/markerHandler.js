AFRAME.registerComponent("marker-handler", {
    init: async function() {
      this.el.addEventListener("markerFound", () => {
        console.log("Marker is found")
        this.handleMarkerFound()
      })
      this.el.addEventListener("markerLost", () => {
        console.log("Marker is lost")
        this.handleMarkerLost()
    })
    },
    handleMarkerFound: function() {
        let buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"
        let orderSummaryButton = document.getElementById("order-summary-button")
        let orderButton = document.getElementById("order-button")
        orderSummaryButton.addEventListener("click", function () {
            swal({
                icon: "warning",
                title: "Order Summary",
                text: "Work in Progress"
            })
        })
        orderButton.addEventListener("click", function () {
            swal({
                icon: "success",
                title: "Thank you for Ordering!",
                text: "Your Order is on the Way!"
            })
        })
    },
    handleMarkerLost: function() {
        let buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
  });
  