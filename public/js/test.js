$(document).ready(function(){
  var textarea = $('#editor');
  var editor = CodeMirror.fromTextArea(textarea[0], {
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    theme: "midnight",
    val: textarea.val()
  });
  var language = 'java'
  $.get('./init/'+language+'.txt', function(data){
    editor.setValue(data);
  });
  $(".select_compiler").change(function(){
    var language = $(".select_compiler option:selected").val();
    console.log(language);
    $.get('./init/'+language+'.txt', function(data){
      editor.setValue(data);
    });
  });
});
