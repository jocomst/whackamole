class App {
  points = 0;
  mole = document.querySelector(".mole-box");
  container = document.querySelector(".container");
  pointsText = document.querySelector(".points");
  restartButton = document.querySelector(".refresh");

  constructor() {
    this.clickHandler = this.whackedMole.bind(this);
    this.restartButton.addEventListener("click", this.restartGame.bind(this));
    this.container.addEventListener("click", this.clickHandler);
  }

  whackedMole(e) {
    if (e.target.classList.contains("mole-img")) {
      this.checkGame(e);
      const textBox = document.createElement("img");
      textBox.classList.add("mole-img");
      textBox.src = ".\\images\\boom.png";
      e.target.parentNode.appendChild(textBox);
      this.moleTimeout(e.target, textBox);
    }
  }

  moleTimeout(moleImg, textBox) {
    const number = Math.trunc(Math.random() * 4);
    setTimeout(() => {
      moleImg.style.display = "";
      textBox.remove();
    }, (number + 1) * 1000);
    moleImg.style.display = "none";
  }

  checkGame(e) {
    this.points++;
    if (this.points >= 10) {
      this.pointsText.innerText = "YOU WON THE GAME!";
      this.container.removeEventListener("click", this.clickHandler);
      this.restartButton.classList.toggle("hidden");
    } else {
      this.pointsText.innerText = `Points: ${this.points}`;
    }
  }

  restartGame() {
    this.pointsText.innerText = "Points: 0";
    this.points = 0;
    this.container.addEventListener("click", this.clickHandler);
    this.restartButton.classList.toggle("hidden");
  }
}

const app = new App();
