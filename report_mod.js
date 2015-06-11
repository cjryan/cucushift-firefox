function addboxes() {
  $(".paragraph").prepend("<input type='checkbox' class='strikeout' style='float: left; margin-right: 15px;' onclick='strikeout( $(this), this.checked );' />");
}

function strikeout(box, state) {
  if (state == true) {
    box.next().css( "text-decoration", "line-through" );
  }
  else {
    box.next().css( "text-decoration", "none");
  }
}
