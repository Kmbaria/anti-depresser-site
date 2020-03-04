
// contact message function
function userName(submit) {
    event.preventDefault();
    var name = $("input#name").val();
    var email = $("input#email").val();
    alert("Hi " + name + " ,thank for contacting us we have recieved your message .");
  
  };

// business logic
function Contact(first, last, email,phone) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phone = phone;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " Email address is " + this.email + "and phone No is:" + this.phone +"click to see therapist contact";
}


// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input#firstname").val();
    var userLastName = $("input#lastname").val();
    var userEmail = $("input#email").val();
    var userPhone = $("input#phone").val();

    var newContact = new Contact(userFirstName, userLastName,userEmail,userPhone);
    $("ul#contlist").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  
  $(".contact").last().click(function() {
      $("#showcontacts").show();

      $(".firstname").text(newContact.firstName);
      $(".lastname").text(newContact.lastName);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
    }); 

}); 
});





// user contacts


//business logic
function Contact(first, last, email,phone) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phone = phone;
}


Contact.prototype.finalName = function() {
  return this.firstName + " " + this.lastName + " Email address is " + this.email + "and phone No is:" + this.phone +"click to see user contact";
}


// user interface logic
$(document).ready(function() {
  $("form#userform").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input#firstname").val();
    var userLastName = $("input#lastname").val();
    var userEmail = $("input#email").val();
    var userPhone = $("input#phone").val();

    var newuserContact = new Contact(userFirstName, userLastName,userEmail,userPhone);
    // $("ul#contlist").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  $("ol#usercontlist").append("<li><span class='contactuser'>" + newuserContact.finalName() + "</span></li>");
  
  $(".contactuser").last().click(function() {
      $("#usershowcontacts").show();

      $(".firstname").text(usernewContact.firstName);
      $(".lastname").text(usernewContact.lastName);
      $(".email").text(usernewContact.email);
      $(".phone").text(usernewContact.phone);
    }); 

}); 
});

