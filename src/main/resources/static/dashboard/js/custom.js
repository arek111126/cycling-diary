$(function () {
    $('input[id="traningDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().format('DD-MM-YYYY'),
        locale: {
            format: 'DD-MM-YYYY'
        }
    });


 $(".trainingOnList").on('click',function () {
        $(this).children().eq(0).attr("specialId");
     $(this).attr("specialId");
    console.log($(this).find(">:first-child").attr("specialId"))
     console.log($(this).children("td").eq(1).attr("specialId"))

        $("#addTrainingLLabel").remove();
        $("#trainingDiv").remove();
    })


    $("#addTrainingButton").on('click', function () {
        $("#nameAlert").hide();
        $("#placeAlert").hide();
        $("#distanceAlert").hide();
        $("#trainingDateAlert").hide();
        $("#fileAlert").hide();

        $("#trainingName").val("");
        $("#trainingPlace").val("");
        $("#trainingDistance").val("");
        $("#choosedFile").val("");
    });

    $('#saveNewTrening22').on('click', function (e) {

            e.preventDefault();

            //   var trainingName ="";
            var trainingName = $("#trainingName").val();
            var trainingPlace = $("#trainingPlace").val();
            var trainingDistance = $("#trainingDistance").val();
            var traningDate = $("#traningDate").val();
            var choosedFile = $("#choosedFile").val();

            if (trainingName == null || trainingName == "") {
                $('#nameAlert').show();
            } else {
                $('#nameAlert').hide();
            }
            if (trainingPlace == null || trainingPlace == "") {
                $('#placeAlert').show();
            } else {
                $('#placeAlert').hide();
            }
            if (trainingDistance == null || trainingDistance == "") {
                $('#distanceAlert').show();
            } else {
                $('#distanceAlert').hide();
            }
            if (traningDate == null || traningDate == "") {
                $('#trainingDateAlert').show();
            } else {
                $('#trainingDateAlert').hide();
            }
            if (choosedFile == null || choosedFile == "") {
                $('#fileAlert').show();
            } else {
                $('#fileAlert').hide();
            }

            if (!((trainingName == null || trainingName == "") ||
                (trainingPlace == null || trainingPlace == "") ||
                (trainingDistance == null || trainingDistance == "") ||
                (traningDate == null || traningDate == "") ||
                (choosedFile == null || choosedFile == ""))) {
                $("#newTrainingForm").submit();
            }


        }
    )


    $('#saveNewTrening').on('click', function (e) {
        e.preventDefault();
        var trainingName = $("#trainingName").val();
        var trainingPlace = $("#trainingPlace").val();
        var trainingDistance = $("#trainingDistance").val();
        var traningDate = $("#traningDate").val();
        var choosedFile = $("#choosedFile").val();

        if (trainingName == null || trainingName == "") {
            $('#nameAlert').show();
        } else {
            $('#nameAlert').hide();
        }
        if (trainingPlace == null || trainingPlace == "") {
            $('#placeAlert').show();
        } else {
            $('#placeAlert').hide();
        }
        if (trainingDistance == null || trainingDistance == "") {
            $('#distanceAlert').show();
        } else {
            $('#distanceAlert').hide();
        }
        if (traningDate == null || traningDate == "") {
            $('#trainingDateAlert').show();
        } else {
            $('#trainingDateAlert').hide();
        }
        if (choosedFile == null || choosedFile == "") {
            $('#fileAlert').show();
        } else {
            $('#fileAlert').hide();
        }

        if (!((trainingName == null || trainingName == "") ||
            (trainingPlace == null || trainingPlace == "") ||
            (trainingDistance == null || trainingDistance == "") ||
            (traningDate == null || traningDate == "") ||
            (choosedFile == null || choosedFile == ""))) {


            $.ajax({


                // Your server script to process the upload
                url: '/app/addNewTraining',
                type: 'POST',

                // Form data
                data: new FormData($('#newTrainingForm')[0]),

                // Tell jQuery not to process data or worry about content-type
                // You *must* include these options!
                cache: false,
                contentType: false,
                processData: false,

                // Custom XMLHttpRequest
                /* xhr: function () {
                      var myXhr = $.ajaxSettings.xhr();
                      if (myXhr.upload) {
                          // For handling the progress of the upload
                          myXhr.upload.addEventListener('progress', function (e) {
                              if (e.lengthComputable) {
                                  $('progress').attr({
                                      value: e.loaded,
                                      max: e.total,
                                  });
                              }
                          }, false);
                      }
                      console.log(myXhr)
                      return myXhr;
                  } */
            }).done(function () {

                var newTr = $(" <tr class=\"trainingOnList\">\n" +
                    "                                            <td >\n"
                    + (parseInt($("#trainingTableBody").children().length)+1)+
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingName+
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingPlace+
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingDistance+
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    Date.now().toString()+
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    traningDate+
                    "                                            </td>\n" +
                    "                                        </tr>");
                var  countElem =  $("#trainingTableBody").append(newTr);
                $("#addTrainingModal").modal("toggle");




                $("#trainingAddedSuccesfullAlert").show();
            }).fail(function () {
                $("#errorDuringAddedNewTrainingAlert").show();
                $("#addTrainingModal").modal("toggle")
            });
        }
    });


});
