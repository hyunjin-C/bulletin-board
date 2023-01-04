const Editor = toastui.Editor;

const editor = new Editor({
  el: document.querySelector("#editor"),
  height: "600px",
  initialEditType: "markdown",
  previewStyle: "vertical",
});

editor.getMarkdown();
