// $(document).ready(function() {
//   let temp_adult = 0;
//   let temp_kid = 0;
//   let flag1 = 0;
//   let flag2 = 0;
//   process_drop();
//   process_drop1();
//   process_sumit();
//   process_time_button();
//   // setInterval(function() {
//   //   generate_valid_time();
//   // }, 1000);
//
//   function process_time_button() {
//     $("#1130").click(function() {
//       temp_time_button = "1130";
//       alert(temp_time_button);
//     });
//     $("#0100").click(function() {
//       temp_time_button = "0100";
//     });
//     $("#0530").click(function() {
//       temp_time_button = "0530";
//     });
//     $("#0700").click(function() {
//       temp_time_button = "0700";
//     });
//   }
//
//   function generate_valid_time() {
//     $("#1130").hide(1000);
//     $("#0100").hide(1000);
//     $("#0530").hide(1000);
//     $("#0700").hide(1000);
//     if (remaining_obj.time1130 >= temp_total) {
//       // $("#1130").hide(1000);
//       // $("#0100").hide(1000);
//       // $("#0530").hide(1000);
//       // $("#0700").hide(1000);
//       $("#1130").show(1000);
//     }
//     if (remaining_obj.time0100 >= temp_total) {
//       // $("#1130").hide(1000);
//       // $("#0100").hide(1000);
//       // $("#0530").hide(1000);
//       // $("#0700").hide(1000);
//       $("#0100").show(1000);
//     }
//     if (remaining_obj.time0530 >= temp_total) {
//       // $("#1130").hide(1000);
//       // $("#0100").hide(1000);
//       // $("#0530").hide(1000);
//       // $("#0700").hide(1000);
//       $("#0530").show(1000);
//     }
//     if (remaining_obj.time0700 >= temp_total) {
//       // $("#1130").hide(1000);
//       // $("#0100").hide(1000);
//       // $("#0530").hide(1000);
//       // $("#0700").hide(1000);
//       $("#0700").show(1000);
//     }
//   }
//
//   function process_sumit() {
//     // var oform = document.forms['form'];
//     // var name = oform.elements['name'].value;
//     // var account = oform.elements['account'].value;
//     // var coor1 = oform.elements['coor1'].value;
//     // var coor2 = oform.elements['coor2'].value;
//     // var coor6 = oform.elements['coor6'].value;
//     $("#buttonsubmit").click(function() {
//
//       // const monthNames = ["January", "February", "March", "April", "May", "June",
//       //   "July", "August", "September", "October", "November", "December"
//       // ];
//       // temp_month = monthNames[datefromcalendar.slice(5, 7)-1];
//       // alert("123123123");
//       var oform = document.forms['form'];
//       var name = oform.elements['name'].value;
//       var phone = oform.elements['phone'].value;
//       var email = oform.elements['email'].value;
//       var note = oform.elements['note'].value;
//       console.log(datefromcalendar);
//       alert(datefromcalendar);
//       alert(adultfromdrop);
//       // alert(phone.toString()+ email.toString()+ note.toString()+ datefromcalendar+ adultfromdrop+ kidfromdrop);
//       // alert(email.toString());
//       // alert(name.toString());
//       // alert(phone.toString());
//       $.ajax({
//         type: 'POST',
//         url: 'http://localhost:3000/reservation_online',
//         data: {
//           name: name.toString(),
//           phone: "+886"+phone.toString().slice(1,9),
//           email: email.toString(),
//           note: note.toString(),
//           date: datefromcalendar,
//           adult: adultfromdrop,
//           kid: kidfromdrop,
//           time: temp_time_button
//         },
//         success: function(data) {
//           alert("您已訂位成功!!\nYou have successfully booked the seats!!");
//         },
//         error: function(err) {
//           alert(err);
//         },
//         contentType: "application/x-www-form-urlencoded",
//         dataType: "Text"
//
//       });
//     })
//   }
//
//   function process_drop1() {
//     $(".drop1 .option").click(function() {
//       if (flag2 == 0) {
//         flag2 = 1
//       } else {
//         flag2 = 0
//       }
//       var val1 = $(this).attr("data-value"),
//         $drop = $(".drop1"),
//         prevActive = $(".drop .option.active").attr("data-value"),
//         options = $(".drop .option").length;
//       $drop.find(".option.active").addClass("mini-hack");
//       $drop.toggleClass("visible");
//       $drop.removeClass("withBG");
//       $(this).css("top");
//       $drop.toggleClass("opacity");
//       $(".mini-hack").removeClass("mini-hack");
//       if ($drop.hasClass("visible")) {
//         setTimeout(function() {
//           $drop.addClass("withBG");
//         }, 400 + options * 100);
//       }
//       kidfromdrop = val1;
//       if (kidfromdrop == 'placeholder') {
//         temp_kid = 0;
//       }
//       if (kidfromdrop == 'Zero') {
//         temp_kid = 0;
//       }
//       if (kidfromdrop == 'One') {
//         temp_kid = 1;
//       }
//       if (kidfromdrop == 'Two') {
//         temp_kid = 2;
//       }
//       if (kidfromdrop == 'Three') {
//         temp_kid = 3;
//       }
//       if (kidfromdrop == 'Four') {
//         temp_kid = 4;
//       }
//       temp_total = temp_adult + temp_kid;
//       if (!flag2) {
//         generate_valid_time()
//       }
//       // alert(temp_total);
//       triggerAnimation1();
//       if (val1 !== "placeholder" || prevActive === "placeholder") {
//         $(".drop1 .option").removeClass("active");
//         $(this).addClass("active");
//       };
//     });
//   }
//
//   function process_drop() {
//     $(".drop .option").click(function() {
//       if (flag1 == 0) {
//         flag1 = 1
//       } else {
//         flag1 = 0
//       }
//       var val = $(this).attr("data-value"),
//         $drop = $(".drop"),
//         prevActive = $(".drop .option.active").attr("data-value"),
//         options = $(".drop .option").length;
//       $drop.find(".option.active").addClass("mini-hack");
//       $drop.toggleClass("visible");
//       $drop.removeClass("withBG");
//       $(this).css("top");
//       $drop.toggleClass("opacity");
//       $(".mini-hack").removeClass("mini-hack");
//       if ($drop.hasClass("visible")) {
//         setTimeout(function() {
//           $drop.addClass("withBG");
//         }, 400 + options * 100);
//       }
//       // alert(val);
//       adultfromdrop = val;
//       if (adultfromdrop != "placeholder") {
//         if (adultfromdrop == 'One') {
//           temp_adult = 1;
//         }
//         if (adultfromdrop == 'Two') {
//           temp_adult = 2;
//         }
//         if (adultfromdrop == 'Three') {
//           temp_adult = 3;
//         }
//         if (adultfromdrop == 'Four') {
//           temp_adult = 4;
//         }
//         if (adultfromdrop == 'Five') {
//           temp_adult = 5;
//         }
//       }
//       temp_total = temp_adult + temp_kid;
//       if (!flag1) {
//         generate_valid_time()
//       } // alert(temp_total);
//       triggerAnimation();
//       if (val !== "placeholder" || prevActive === "placeholder") {
//         $(".drop .option").removeClass("active");
//         $(this).addClass("active");
//       };
//     });
//   }
//
//   function triggerAnimation() {
//     var finalWidth = $(".drop").hasClass("visible") ? 22 : 20;
//     $(".drop").css("width", "24em");
//     setTimeout(function() {
//       $(".drop").css("width", finalWidth + "em");
//     }, 400);
//   }
//
//   function triggerAnimation1() {
//     var finalWidth = $(".drop1").hasClass("visible") ? 22 : 20;
//     $(".drop1").css("width", "24em");
//     setTimeout(function() {
//       $(".drop1").css("width", finalWidth + "em");
//     }, 400);
//   }
// });
