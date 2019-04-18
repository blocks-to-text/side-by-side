function open_in_pytut() {
  // update for each page
  if (editor.session.currentlyUsingBlocks) {
    editor.toggleBlocks(cb);
  } else {
    cb();
  };

  function cb() {
    var code = editor.aceEditor.getValue();
    var encoded = encodeURIComponent(code);
    var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
    var de_tabbed = sanitized.replace(/%09/g, '%20%20');
    var url = "http://www.pythontutor.com/javascript.html#code="+sanitized+"&curInstr=0&mode=display&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D";
    window.open(url, '_blank');
  }

};
