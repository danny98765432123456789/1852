$(document).ready(function() {

  process_drop();
  process_drop1();
  process_sumit();

  function process_sumit() {
    // var oform = document.forms['form'];
    // var name = oform.elements['name'].value;
    // var account = oform.elements['account'].value;
    // var coor1 = oform.elements['coor1'].value;
    // var coor2 = oform.elements['coor2'].value;
    // var coor6 = oform.elements['coor6'].value;
    $("#buttonsubmit").click(function() {
      alert("123123123")
      var oform = document.forms['form'];
      var name = oform.elements['name'].value;
      var phone = oform.elements['phone'].value;
      var email = oform.elements['email'].value;
      var note = oform.elements['note'].value;
      // alert(phone.toString()+ email.toString()+ note.toString()+ datefromcalendar+ adultfromdrop+ kidfromdrop);
      // alert(email.toString());
      alert(name.toString());
      alert(phone.toString());
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3000/reservation_online',
        data: {
          name: name.toString(),
          phone: phone.toString(),
          email: email.toString(),
          note: note.toString(),
          date: datefromcalendar,
          adult: adultfromdrop,
          kid: kidfromdrop
        },
        success: function(data) {
          alert("Success!!");
        },
        error: function(err) {
          alert(err);
        },
        contentType: "application/x-www-form-urlencoded",
        dataType: "Text"

      });
    })
  }

  function process_drop1() {
    $(".drop1 .option").click(function() {
      var val1 = $(this).attr("data-value"),
        $drop = $(".drop1"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;
      $drop.find(".option.active").addClass("mini-hack");
      $drop.toggleClass("visible");
      $drop.removeClass("withBG");
      $(this).css("top");
      $drop.toggleClass("opacity");
      $(".mini-hack").removeClass("mini-hack");
      if ($drop.hasClass("visible")) {
        setTimeout(function() {
          $drop.addClass("withBG");
        }, 400 + options * 100);
      }
      kidfromdrop = val1;
      triggerAnimation1();
      if (val1 !== "placeholder" || prevActive === "placeholder") {
        $(".drop1 .option").removeClass("active");
        $(this).addClass("active");
      };
    });
  }

  function process_drop() {
    $(".drop .option").click(function() {
      var val = $(this).attr("data-value"),
        $drop = $(".drop"),
        prevActive = $(".drop .option.active").attr("data-value"),
        options = $(".drop .option").length;
      $drop.find(".option.active").addClass("mini-hack");
      $drop.toggleClass("visible");
      $drop.removeClass("withBG");
      $(this).css("top");
      $drop.toggleClass("opacity");
      $(".mini-hack").removeClass("mini-hack");
      if ($drop.hasClass("visible")) {
        setTimeout(function() {
          $drop.addClass("withBG");
        }, 400 + options * 100);
      }
      // alert(val);
      adultfromdrop = val;
      triggerAnimation();
      if (val !== "placeholder" || prevActive === "placeholder") {
        $(".drop .option").removeClass("active");
        $(this).addClass("active");
      };
    });
  }

  function triggerAnimation() {
    var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
    $(".drop").css("width", "24em");
    setTimeout(function() {
      $(".drop").css("width", finalWidth + "em");
    }, 400);
  }

  function triggerAnimation1() {
    var finalWidth = $(".drop1").hasClass("visible") ? 22 : 20;
    $(".drop1").css("width", "24em");
    setTimeout(function() {
      $(".drop1").css("width", finalWidth + "em");
    }, 400);
  }
});
