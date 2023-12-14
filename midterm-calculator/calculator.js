      var mode = $("#scoringMode").val();
      var additiveDropdown = $("#scoringAdditive");
      var coreMode = $("#scoringCurve");
      var AP = $("option.AP");

      coreMode.click(function() {
	  AP.toggle();
	  if (additiveDropdown.prop("selectedIndex") == 2) {
              additiveDropdown.prop("selectedIndex", 1);
	  }
      });

      $("#scoringMode").on("change", function() {
	  mode = $("#scoringMode").val();

	  if (mode == 1) {
              $("#scoreInput2").show().text("");
	  } else {
              $("#scoreInput2").hide().text("");
	  }

      });

      $("#calculateScore").on("click", function() {
	  var scoreInput1 = $("#scoreInput").val();
	  var scoreInput2 = $("#scoreInput2").val();


	  var result;
	  var add = additiveDropdown.val();

	  if (mode == 1) {
              result = (scoreInput1 / scoreInput2);
              if (result == Infinity || result == NaN || result == undefined) {
		  $("#scoreOut").text("Enter non-undefined fractions and only numbers.");
              } else if (coreMode.prop("checked")) {
		  $("#scoreOut").text(Math.round(Math.cbrt(result) * 100 + Number(add)));
              } else {
		  $("#scoreOut").text(Math.round(Number(result) * 100 + Number(add)));
              }
	  } else {
              if (coreMode.prop("checked")) {
		  $("#scoreOut").text(Math.round(Math.cbrt(scoreInput1 / 100) * 100 + Number(add)));
              } else {
		  $("#scoreOut").text(Math.round(Number(scoreInput1) + Number(add)));
              }
          }

      });
