import classes from "./title.css";

const title = () => {
  const title = document.createElement("div");
  title.setAttribute("class", "title");
  title.innerHTML = "Calculator";

  const console = document.createElement("div");
  console.setAttribute("class", "console");

  title.appendChild(console);

  document.querySelector(".calculator").appendChild(title);
};

export default () => {
  title();
};
