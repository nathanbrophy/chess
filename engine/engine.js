function select(piece_html) {
  var piece = document.getElementById(piece_html.id);
  console.log(piece_html);
  piece.classList += " selected";
}
