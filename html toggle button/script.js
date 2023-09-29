document.addEventListener("DOMContentLoaded", function () {
  const container1 = document.getElementById("redContainer");
  const container2 = document.getElementById("whiteContainer");
  const toggleButton = document.getElementById("toggleButton");
  let isContainer1Visible = true;

  toggleButton.addEventListener("click", function () {
      if (isContainer1Visible) {
          container1.classList.add("hidden");
          container2.classList.remove("hidden");
      } else {
          container1.classList.remove("hidden");
          container2.classList.add("hidden");
      }

      isContainer1Visible = !isContainer1Visible;
  });
});
