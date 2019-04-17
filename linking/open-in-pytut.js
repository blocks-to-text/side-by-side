function open_in_pytut() {

  var code = Blockly.Python.workspaceToCode()
  var encoded = encodeURIComponent(code);
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var de_tabbed = sanitized.replace(/%09/g, '%20%20');
  var url = "http://www.pythontutor.com/visualize.html#code="+sanitized+"&curInstr=0&mode=display";
  window.open(url, '_blank');

};
