import { markdown } from "markdown";

export default {
  attachPreviewer: ($document, sourceId, previewId) => {
    return function($event) {
      const text = $document.getElementById(sourceId).value;
      const preview = $document.getElementById(previewId);

      preview.innerHTML = markdown.toHTML(text);
      event.preventDefault();
    };
  }
};
