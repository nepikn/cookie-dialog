import "./style.css";
import "../node_modules/normalize.css/normalize.css";
import { setupDialog } from "./dialog.js";

document.querySelector("#app").innerHTML = `
  <dialog>
    <form method='dialog'>
      <p>為了提供您最佳的服務，本網站會在您的電腦中放置並取用我們的 Cookie。</p>
      <button class='deny'>拒絕</button>
      <button autofocus class='consent'>同意</button>
    </form>
  </dialog>
  <button class='reset'>重設</button>
`;

setupDialog(
  document.querySelector("dialog"),
  document.querySelector(".consent"),
  document.querySelector(".deny"),
  document.querySelector(".reset")
);
