function() {
  $.ajax({
    url: "/getJCI",
    type: "post",
    cache: false,
    data: {
      param0: "stuAdmission.stuAdmission",
      param1: "moodleLogin",
      param2: "2"

    },
    success: function(d) {
      var data = jQuery.parseJSON(d);
      if (!(data["MSG"])) {

        window.open(data["loginurl"], 'blank_')

      } else {
        jAlert(data["MSG"]);
      }


    },
    error: function() {
      error();
    }
  });

}