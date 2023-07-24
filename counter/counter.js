let counter = 0;
    let intervalId = null;

    function updateCounter() {
      counter++;
      document.getElementById("counter").textContent = counter;
    }

    document.getElementById("startBtn").addEventListener("click", function() {
      if (!intervalId) {
        intervalId = setInterval(updateCounter, 1000);
      }
    });

    document.getElementById("stopBtn").addEventListener("click", function() {
      clearInterval(intervalId);
      intervalId = null;
    });

    document.getElementById("resumeBtn").addEventListener("click", function() {
      if (!intervalId) {
        intervalId = setInterval(updateCounter, 1000);
      }
    });

    document.getElementById("clearBtn").addEventListener("click", function() {
      counter = 0;
      document.getElementById("counter").textContent = counter;
      clearInterval(intervalId);
      intervalId = null;
    });