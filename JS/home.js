import { Ui } from "./ui.js";

export class Home {
  constructor() {
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        this.changeLink(link);

        const category = link.dataset.category;
        this.getGames(category)
      });
    });

    this.ui = new Ui();

    this.getGames("mmorpg")
  }

   changeLink(link) {
    document.querySelector(".navbar-nav .active").classList.remove("active");
    link.classList.add("active");
  }

  async getGames(category) {
    const options = {
      method: "get",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );

    const response = await api.json();

    this.ui.displayGames(response);

  }
}
