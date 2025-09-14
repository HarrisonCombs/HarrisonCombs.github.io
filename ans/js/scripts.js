function showSection(sectionId) {
      var sections = document.getElementsByClassName('section');
      for (var i = 0; i < sections.length; i++) {
        sections[i].classList.remove('active');
      }

      var selectedSection = document.getElementById(sectionId);
      selectedSection.classList.add('active');
    }

    var counter = 0;
    function increaseCounter() {
      counter = counter + 1;
      document.getElementById('counter').textContent = counter;
    }

let count1 = 0;
function increaseCounter1() {
  count1++;
  document.getElementById("counter1").textContent = count1;
}

function changeBackground() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random()*16777215).toString(16);
}

function generateRandom() {
  let num = Math.floor(Math.random() * 100);
  document.getElementById("randomOutput").textContent = "Number: " + num;
}

let toggled = true;
function toggleText() {
  let p = document.getElementById("toggleText");
  toggled = !toggled;
  p.textContent = toggled ? "Hello World!" : "Goodbye World!";
}

function updateClock() {
  let now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
