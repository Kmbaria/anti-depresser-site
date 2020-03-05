
$(document).ready(function(){
  $("h3#hmajor").click(function(){
    $("#ulmajor").toggle();
    $("#hhmajor").toggle();
  })
  $("h3#hpersistent").click(function(){
    $("#ulpersistent").toggle();
    $("#hhpersistent").toggle();
  })
  $("h3#hmanic").click(function(){
    $("#hhmanic").toggle();
    $("#hhbipolar").toggle();
  })
  $("#spmanic").click(function(){
    $("#ulmanic").toggle();
  })
  $("#spbipolar").click(function(){
    $("#ulbipolar").toggle();
  })
  $("#hdepressive").click(function(){
    $("#uldepressive").toggle();
    $("#hhdepressive").toggle();
  })
  $("#hperinatal").click(function(){
    $("#hhfeelperinatal").toggle();
    $("#hhsignsperinatal").toggle();
  })
  $("#spfeelperinatal").click(function(){
    $("#ulfeelperinatal").toggle();
  })
  $("#spsignsperinatal").click(function(){
    $("#ulsignsperinatal").toggle();
  })
  $("h3#hseasonal").click(function(){
    $("#hhseasonal").toggle();
    $("#hhfall").toggle();
    $("#pfall").toggle();
    $("#hhspring").toggle();
    $("#pspring").toggle();
    $("#ulseasonal").toggle();
  })
  $("#spfall").click(function(){
    $("#ulfall").toggle();
  })
  $("#spspring").click(function(){
    $("#ulspring").toggle();
  })
  $("h3#hpremenstrual").click(function(){
    $("#ulpremenstrual").toggle();
    $("#hhpremenstrual").toggle();
  })
  $("h3#hsituational").click(function(){
    $("#hheventsituational").toggle();
    $("#hhsituational").toggle();
  })
  $("#spevent").click(function(){
    $("#uleventsituational").toggle();
  })
  $("#spsituational").click(function(){
    $("#ulsituational").toggle();
  })



})


//therapist register function

// business logic
function Contact(first, last, specialization, email,phone) {
  this.firstName = first;
  this.lastName = last;
  this.specialization = specialization;
  this.email = email;
  this.phone = phone;

}


Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName + " " + this.specialization + " Email address is " + this.email + "and phone No is:" + this.phone +" click to see our therapist details";
}


// user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input#firstname").val();
    var userLastName = $("input#lastname").val();
    var specialization = $("input#prof").val();
    var userEmail = $("input#email").val();
    var userPhone = $("input#phone").val();

    var newContact = new Contact(userFirstName, userLastName, specialization, userEmail,userPhone);
    alert("Confirm that you are a registered and qualified " + newContact.specialization);
    alert("You Have been registered as therapist in the field of " + newContact.specialization);
    $("ul#contlist").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  
  $(".contact").last().click(function() {
      $("#showcontacts").show();

      $(".firstname").text(newContact.firstName);
      $(".lastname").text(newContact.lastName);
      $(".prof").text(newContact.specialization);
      $(".email").text(newContact.email);
      $(".phone").text(newContact.phone);
    }); 

}); 
});





// user register  function

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
  return " Name is " + this.first + "" + this.last + " gender is: " + this.sex + " age in years " + this.age + " Email: " + this.email + "  and phone No:" + this.phone;
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
    confirm(newuserContact.finalName());
  

}); 
});

// contact message function

function userName(submit) {
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  alert("Hi " + name + " ,thank for contacting us we have recieved your message .");

};



$("document").ready(function(){
        $("#med-icon").click(function(){
          $("#med-icon").hide();
          $("#medication").show();
        });
        $("#medication").click(function(){
          $("#medication").hide();
          $("#med-icon").show();
        });
      });
      $("document").ready(function(){
        $("#psycho-icon").click(function(){
          $("#psycho-icon").hide();
          $("#psycho").show();
        });
        $("#psycho").click(function(){
          $("#psycho").hide();
          $("#psycho-icon").show();
        });
      });
      $("document").ready(function(){
        $("#hos-icon").click(function(){
          $("#hos-icon").hide();
          $("#hospital").show();
        });
        $("#hospital").click(function(){
          $("#hospital").hide();
          $("#hos-icon").show();
        });
      });
      $("document").ready(function(){
        $("#life-image").click(function(){
          $("#life-image").hide();
          $("#lifestyle").show();
        });
        $("#lifestyle").click(function(){
          $("#lifestyle").hide();
          $("#life-image").show();
        });
      });
      $("document").ready(function(){
        $("#mind-icon").click(function(){
          $("#mind-icon").hide();
          $("#mindbody").show();
        });
        $("#mindbody").click(function(){
          $("#mindbody").hide();
          $("#mind-icon").show();
        });
      });
      $("document").ready(function(){
        $("#cop-image").click(function(){
          $("#cop-image").hide();
          $("#support").show();
        });
        $("#support").click(function(){
          $("#support").hide();
          $("#cop-image").show();
        });
      });
      $("document").ready(function(){
        $("#suicide-image").click(function(){
          $("#suicide-image").hide();
          $("#survovors").show();
        });
        $("#survovors").click(function(){
          $("#survovors").hide();
          $("#suicide-image").show();
        });
      });
      
