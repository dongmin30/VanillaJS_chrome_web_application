// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const titleTag = document.querySelector("h2");
const superEventHandler = {
  handleMouseup: () => {
    titleTag.innerText = "The mouse is here!";
    titleTag.style.color = colors[0];
  },
  handleMouseLeave: () => {
    titleTag.innerText = "The mouse us gone!";
    titleTag.style.color = colors[1];
  },
  handleResize: () => {
    titleTag.innerText = "You just resized!";
    titleTag.style.color = colors[2];
  },
  handleContextMenu: () => {
    titleTag.innerText = "That was a right click!";
    titleTag.style.color = colors[4];
  }
};
titleTag.addEventListener("mouseenter", superEventHandler["handleMouseup"]);
titleTag.addEventListener("mouseleave", superEventHandler["handleMouseLeave"]);
window.addEventListener("resize", superEventHandler["handleResize"]);
window.addEventListener("contextmenu", superEventHandler["handleContextMenu"]);
