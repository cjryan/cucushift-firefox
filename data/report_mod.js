function strikeout(box, state) {
  if (state == true) {
    box.next().css( "text-decoration", "line-through" );
  }
  else {
    box.next().css( "text-decoration", "none");
  }
}

function addboxes() {
  $(".paragraph").prepend("<input type='checkbox' class='strikeout' style='float: left; margin-right: 15px;'/>");
  //The jquery '.click' method requires a callback function, hence the 'function' statement after .click.
  $(".strikeout").click(
      function(){
        var clickobj = $(this)
        var clickobjstate = this.checked
        strikeout(clickobj, clickobjstate);
      }
  );
}

$(document).ready(function() {
  addboxes();
});
