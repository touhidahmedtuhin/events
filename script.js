// function happyBtn () {
//   const panel = document.querySelector('#panel');
//    panel.innerText = "I'm feeling happy!";
//    panel.style.background = "#f9f871";
// }

// function sadBtn () {
//   const panel = document.querySelector('#panel');
//   panel.innerText = `I'm feeling a bit down...`;
//   panel.style.background = "#a0c4ff";
// }

// function doubleClickBtn() {
//    const panel = document.querySelector('#panel');
//    panel.innerText = "I'm super excited!";
//    panel.style.background = "#ffadad";
// }
//..........................................................................
// Using an Object (Most Scalable)

const moods = {
  happy: {
    text: `I'm feeling happy!`,
    color: `#f9f871`,
  },
  sad: {
    text: `I'm feeling a bit down...`,
    color: `#a0c4ff`,
  },
  excited: {
    text: "I'm super excited!",
    color: "#ffadad",
  },
};

function changeMood(mood) {
  const panel = document.querySelector("#panel");
  const moodData = moods[mood];

  if (moodData) {
    panel.innerText = moodData.text;
    panel.style.background = moodData.color;
  }
}

document
  .querySelector("#happyBtn")
  .addEventListener("click", () => changeMood("happy"));
document
  .querySelector("#sadBtn")
  .addEventListener("click", () => changeMood("sad"));
document
  .querySelector("#doubleClickBtn")
  .addEventListener("dblclick", () => changeMood("excited"));
