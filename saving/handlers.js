function save_snippet() {

  var code = Blockly.Python.workspaceToCode();
  model.save_snippet(code);
  alert("snippet saved");

}

function save_notes() {
  var text = notes.getValue();
  model.save_notes(text);
  alert("notes saved");
}

function clear_session() {
  if (confirm("are you sure you want to clear this session ?")){
    model.clear_notes();
    model.clear_snippets();
    alert("notes & snippets are erased");
  }
}

function download_session() {

  var notes = model.get_notes();
  var snippets = model.get_snippets();

  if (notes.length === 0 && snippets.length === 0) {

    alert("session is empty, no downloading");

  } else {

    var text = stringify_for_download(notes, snippets);

    var filename_input = document.getElementById("file-name").value;
    var filename;
    if (filename_input) {
      filename = filename_input;
    } else {
      filename = "study-session.py";
    };

    download(filename, text);

    alert("successfully downloaded session");

  };
}

function stringify_for_download(notes, snippets) {
  var text = "";
  
  text += "'''\n";
  text += notes;
  text += "\n'''\n\n";

  for (var i = 0; i < snippets.length; i++) {
    var tabbed_snippet = '  ' + snippets[i].replace(/\n/g, '\n  ');
    text += "def snippet_"+i+" ():\n";
    text += tabbed_snippet;
    text += "\n\n";

  };

  return text;
}


// https://ourcodeworld.com/articles/read/189/how-to-create-a-file-and-generate-a-download-with-javascript-in-the-browser-without-a-server
function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
