function preview_file() {

  var filename_input = document.getElementById("file-name").value;
  var filename;
  if (filename_input) {
    filename = filename_input;
  } else {
    filename = "study-session.js";
  };

  var notes = model.get_notes();
  var snippets = model.get_snippets();
  var file_text = stringify_for_download(notes, snippets);

  update_modal(filename, file_text);



}

function update_modal(file_name, file_contents) {

  var filename_zone = document.getElementById("filename-zone");
  filename_zone.innerHTML = file_name;

  var pre = document.createElement('pre');
  pre.className = "prettyprint prettyprinted";
  pre.innerHTML = PR.prettyPrintOne(file_contents, 'js', true);
  pre.style.width = "90%";

  var preview_zone = document.getElementById("preview-zone");
  while (preview_zone.firstChild) {
    preview_zone.removeChild(preview_zone.firstChild);
  };
  preview_zone.appendChild(pre);
  
};
