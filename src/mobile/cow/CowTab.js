import { Tab } from "../ref/Tab.js";
import { CowCard } from "./CowCard.js";

export class OutlineTab extends Tab {
  $mainDiv = null;

  constructor($target) {
    super($target);

    this.$mainDiv = document.createElement("div");
    this.$mainDiv.className = "Tab";

    this.render($target);
  }

  renderCards($target) {
    const $totalCowCard = new CowCard($target, {
      title: "전체 개체",
      type: "all",
    });
  }

  render($target) {
    // header
    const $header = document.createElement("header");
    $header.className = "Header";

    // title
    const $title = document.createElement("h1");
    $title.className = "Title";
    $title.innerText = "Cow_Manager";

    this.$mainDiv.appendChild($header);
    $header.appendChild($title);

    this.renderCards(this.$mainDiv);

    $target.appendChild(this.$mainDiv);
  }
}
