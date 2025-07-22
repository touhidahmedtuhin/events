document.addEventListener("DOMContentLoaded", () => {
  //creating heading
  const myh1 = document.createElement("h1");
  myh1.textContent = `Click here to change the theme`;
  document.body.prepend(myh1);
  //creating button
  const myButton = document.createElement("button");
  myButton.textContent = "Click here!";
  document.body.appendChild(myButton);

  //creating button style using object
  const buttonStyles = {
    backgroundColor: "yellow",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "1.5rem",
    borderRadius: "10px",
    margin: "50px 0 0 50px",
  };
  Object.assign(myButton.style, buttonStyles);

  //function for toggle
  myButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mood");
  });
});

//create a style html element abd add external CSS
const style = document.createElement("style");
style.textContent = `
    .dark-mood {
    background-color: #222;
    color: #fff;
  }
`;
//add this to the head like Internal CSS
document.head.appendChild(style);
