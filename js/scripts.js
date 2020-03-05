
//therapist contact function

// business logic
function Contact(first, last, email,phone) {
  this.firstName = first;
  this.lastName = last;
  this.email = email;
  this.phone = phone;
}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " Email address is " + this.email + "and phone No is:" + this.phone +" click to see therapist contact";
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
    alert("You Have been registered as therapist");
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





// user contact function

//business logic
function Contact2(first, last, sex, age, email, phone) {
  this.first = first;
  this.last = last;
  this.sex = sex;
  this.age = age;
  this.email = email;
  this.phone = phone;
  
  
}


Contact2.prototype.finalName = function() {
  return " Name is " + this.first + "" + this.last + " gender is: " + this.sex + " age in years " + this.age + " Email: " + this.email + " and phone No:" + this.phone;
}


// user interface logic
$(document).ready(function() {
  $("#userform").submit(function(event) {
    event.preventDefault();

    var userFirstName2 = $("input#firstname2").val();
    var userLastName2 = $("input#lastname2").val();
    var userSex = $("input#sex2").val();
    var userAge = $("input#age2").val();
    var userEmail2 = $("input#email2").val();
    var userPhone2 = $("input#phone2").val();

    var newuserContact = new Contact2( userFirstName2,userLastName2,userSex,userAge,userEmail2,userPhone2);
    alert("You hare been registered as a user and your details is as follows:")
    alert(newuserContact.finalName());
  

}); 
});



// contact message function

function userName(submit) {
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  alert("Hi " + name + " ,thank for contacting us we have recieved your message .");

};


