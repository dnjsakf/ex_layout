$(document).ready(function(){
  var textarea = $('#editor');
  var editor = CodeMirror.fromTextArea(textarea[0], {
    lineNumbers: true,
    lineWrapping: true,
    matchBrackets: true,
    theme: "midnight",
    val: textarea.val()
  });
  $.get('init/java.txt', function(data){
    editor.setValue(data);
  });
  $(".select_compiler").change(function(){
    var language = $(".select_compiler option:selected").val();
    console.log(language);
    $.post('init/python3.txt', function(data){
      editor.setValue(data);
    });
  });
});
