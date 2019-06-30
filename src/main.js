import markdownPreviewer from "./markdownPreviewer";

window.onload = () => {
  document
    .getElementById("editor")
    .addEventListener(
      "submit",
      markdownPreviewer.attachPreviewer(document, "source", "preview")
    );
};
