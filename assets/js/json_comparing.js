$("#input1").on("keydown", function(e) {
  if (e.which === 13 && e.shiftKey === false) {
    //Prevent insertion of a return
    //You could do other things here, for example
    //focus on the next field
    $("#divID").html($("#divID").text() + "<br />");
  }
});

var s1 = document.getElementById("input1");
var s2 = document.getElementById("input2");

function handlePaste(e) {
  // var clipboardData, pastedData;

  // // Stop data actually being pasted into div
  // e.stopPropagation();
  // e.preventDefault();

  // // Get pasted data via clipboard API
  // clipboardData = e.clipboardData || window.clipboardData;
  // pastedData = clipboardData.getData("Text");

  // // Do whatever with pasteddata
  // alert(pastedData);
  // pastedData.replace("\r\n", "<br />")
  // document.execCommand("insertHTML", false, pastedData);
}

function select_scroll_1(e) {
  if (s1.matches(":focus")) {
    s2.scrollTop = s1.scrollTop;
  }
}
function select_scroll_2(e) {
  if (s2.matches(":focus")) {
    s1.scrollTop = s2.scrollTop;
  }
}

s1.addEventListener("mousewheel", function(evt) {
  if (!s1.matches(":focus")) {
    evt.preventDefault();
  }
});
s2.addEventListener("mousewheel", function(evt) {
  if (!s2.matches(":focus")) {
    evt.preventDefault();
  }
});

$("#btn_comparing").click(function() {
  var dmp = new diff_match_patch();

  alert("comparing");
  var text1 = s1.textContent;
  var text2 = s2.textContent;
  // var text1 = JSON.stringify(s1.childNodes);
  // var text2 = JSON.stringify(s2.childNodes);
  alert("text1:" + text1);
  alert("text2:" + text2);


  // var d1 = dmp.diff_main(text1, text2);
  // dmp.diff_cleanupSemantic(d1);
  // // dmp.diff_cleanupEfficiency(d);
  // var ds = dmp.diff_prettyHtml(d1);

  var a = dmp.diff_linesToChars_(text1, text2);
  console.error("lineTediff_linesToChars");
  var lineText1 = a.chars1;
  var lineText2 = a.chars2;
  var lineArray = a.lineArray;
  var diffs = dmp.diff_main(lineText1, lineText2, false);
  dmp.diff_charsToLines_(diffs, lineArray);
  dmp.diff_cleanupSemantic(diffs);
  alert(diffs);
  // dmp.diff_cleanupEfficiency(d);
  // var ds = dmp.diff_prettyHtml(diffs);
  // s1.remove();
  // s2.remove()
  $("#input1").empty();
  $("#input1").append(diffs);
});

s1.addEventListener("scroll", select_scroll_1, false);
s1.addEventListener('paste', handlePaste);
s2.addEventListener("scroll", select_scroll_2, false);
