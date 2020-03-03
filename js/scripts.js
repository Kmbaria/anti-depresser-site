
// contact message function
function userName(submit) {
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    alert("Hi " + name + " ,thank for contacting us we have recieved your message .");
  
  };