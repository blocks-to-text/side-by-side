var model = { // sets the functions in init_session
  save_snippet: null,
  get_snippets: null,
  clear_snippets: null,
  save_notes: null,
  get_notes: null,
  clear_notes: null
};

// https://stackoverflow.com/questions/16427636/check-if-localstorage-is-available/16427725
function init_session() {
  var instance_model = {};

  // if (localStorage_exists()) {
  //   alert("using localStorage \nyou can come back to this session later");

  //   localStorage.setItem("snippets", JSON.stringify([]));
  //   instance_model.save_snippet = function (new_snippet) {
  //       var JSON_snippets = localStorage.getItem("snippets");
  //       var snippets = JSON.parse(JSON_snippets);
  //       snippets.push(new_snippet);
  //       var stringified = JSON.stringify(snippets);
  //       localStorage.setItem("snippets", stringified);
  //     };
  //   instance_model.get_snippets = function () {
  //       return JSON.parse(localStorage.getItem("snippets"));
  //     };
  //   instance_model.clear_snippets = function () {
  //       localStorage.setItem("snippets", JSON.stringify([]));
  //     };

  //   localStorage.setItem("notes", "");    
  //   instance_model.save_notes = function (new_notes) {
  //       localStorage.setItem("notes", new_notes);
  //     };
  //   instance_model.get_notes = function () {
  //       return localStorage.getItem("notes");
  //     };
  //   instance_model.clear_notes = function () {
  //       localStorage.setItem("notes", "");
  //     };


  // } else {
  //   alert("no localStorage available \nyou will lose this session when you refresh");

    alert("code-along session has begun \nyou will loose your changes if you refresh");

    instance_model.snippets = [];
    instance_model.save_snippet = function (new_snippet) { this.snippets.push(new_snippet) };
    instance_model.get_snippets = function () { 
        var copy_of_snippets = JSON.parse(JSON.stringify(this.snippets));
        return copy_of_snippets;
      };
    instance_model.clear_snippets = function () { this.snippets = [] };

    instance_model.notes = "";
    instance_model.save_notes = function (new_notes) { this.notes = new_notes };
    instance_model.get_notes = function () { return this.notes };
    instance_model.clear_notes = function () { this.notes = "" };

  // }

  return instance_model;

  // function localStorage_exists(){
  //   var test = 'test';
  //   try {
  //     localStorage.setItem(test, test);
  //     localStorage.removeItem(test);
  //     return true;
  //   } catch(e) {
  //     return false;
  //   }
  // }

}