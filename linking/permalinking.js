function read_query(entry) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var snippet_encoded = url.searchParams.get(entry);
  return snippet_encoded;
};

function generate_permalink(snippet, map, viztool) {
  var encoded_snippet = map(snippet);
  var permalink = "https://blocks-to-text.github.io/"+viztool+"/?snippet="+encoded_snippet;
  return permalink
};

function encode_query(string_challenge) {
  var encoded = encodeURIComponent(string_challenge);
  var sanitized = encoded.replace(/\(/g, '%28').replace(/\)/g, '%29');
  var de_tabbed = sanitized.replace(/%09/g, '%20%20');
  return de_tabbed
};

// sanitization from:  https://github.com/pgbovine/OnlinePythonTutor/blob/0dcdacc7ff5be504dd6a47236ebc69dc0069f991/v5-unity/js/opt-frontend.ts#L62

function decode_query(coded_challenge) {
  var decoded = decodeURIComponent(coded_challenge);
  var desanitized = decoded.replace(/\%28/g, '(').replace(/\%29/g, ')');
  return desanitized;
};

function gen_permalink() {

  var code = Blockly.Python.workspaceToCode();
  var url = generate_permalink(code, encode_query, 'code-along'); 
  var _notes = notes.getValue();
  url += '&notes=' + encode_query(_notes);
  var perma_display = document.getElementById("display-perma");
  perma_display.value = url;
  copy_to_clipboard(url); 
  alert('copied permalink');

}

function open_in(viztool) {
  var code = Blockly.Python.workspaceToCode();
  var url = generate_permalink(code, encode_query, viztool);
  window.open(url, '_blank');
};


