export class Keyboard {
  #swichEl; //privateField
  constructor() {
    this.#assignElement();
    this.#addEvent();
  }
  #assignElement() {
    this.#swichEl = document.getElementById("switch");
  }

  #addEvent() {
    this.#swichEl.addEventListener("change", (event) => {
      document.documentElement.setAttribute(
        "theme",
        event.target.checked ? "dark-mode" : ""
      );
    });
  }
}
