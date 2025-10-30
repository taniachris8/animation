export default class Collapse {
  constructor(parentEl) {
    this.parentEl = parentEl;

    this.collapseContainer = document.createElement("div");
    this.collapseContainer.classList.add("collapse-container");
    this.collapseContainer.innerHTML = `
        <button class="collapse-btn">Collapse</button>
        <div class="text-container">
        <p class="collapse-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, quo atque qui at doloremque odit hic nobis voluptatem fugiat quibusdam, cumque magni soluta dolor modi architecto eos veritatis impedit? Fugit! Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <div>
        `;

    this.parentEl.append(this.collapseContainer);

    this.textContainer =
      this.collapseContainer.querySelector(".text-container");

    this.button = this.collapseContainer.querySelector(".collapse-btn");

    this.button.addEventListener("click", () => {
      this.textContainer.classList.toggle("active");
    });
  }
}
