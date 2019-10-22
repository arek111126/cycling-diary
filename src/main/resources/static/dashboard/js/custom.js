$(function () {
    $('input[id="traningDate"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().format('YYYY-MM-DD'),
        locale: {
            format: 'YYYY-MM-DD'
        }
    });

    $('input[id="traningDate1"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().format('YYYY-MM-DD'),
        locale: {
            format: 'YYYY-MM-DD'
        }
    });
    $('input[id="traningDate2"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        startDate: moment().format('YYYY-MM-DD'),
        locale: {
            format: 'YYYY-MM-DD'
        }
    });


    $("#trainingTableBody").on('click', 'tr', function () {
        console.log($(this).find(":last-child"));


        var trainingId = $(this).find(">:first-child").attr("specialId");


        $("#addTrainingLLabel").remove();
        $("#trainingDiv").remove();
        var map = "<div id=\"mapid\"></div>";
        //$(".card-body").prepend("<div class=\"map\" id=\"mapid\"></div>");
        $(".card-body").prepend("<section id=\"demo\" class=\"gpx\" data-gpx-source=\"demo.gpx\" data-map-target=\"demo-map\">\n" +
            "      <header>\n" +
            "        <h3>Loading...</h3>\n" +
            "        <span class=\"start\"></span>\n" +
            "      </header>\n" +
            "\n" +
            "      <article>\n" +
            "        <div class=\"map\" id=\"demo-map\"></div>\n" +
            "      </article>\n" +
            "\n" +
            "      <footer>\n" +
            "        <ul class=\"info\">\n" +
            "          <li>Distance:&nbsp;<span class=\"distance\"></span>&nbsp;</li>\n" +
            "          &mdash; <li>Duration:&nbsp;<span class=\"duration\"></span></li>\n" +
            "          &mdash; <li>Pace:&nbsp;<span class=\"pace\"></span>/mi</li>\n" +
            "          &mdash; <li>Avg&nbsp;HR:&nbsp;<span class=\"avghr\"></span>&nbsp;bpm</li>\n" +
            "          &mdash; <li>Elevation:&nbsp;+<span class=\"elevation-gain\"></span>&nbsp;ft,\n" +
            "            -<span class=\"elevation-loss\"></span>&nbsp;ft\n" +
            "            (net:&nbsp;<span class=\"elevation-net\"></span>&nbsp;ft)</li>\n" +
            "        </ul>\n" +
            "      </footer>\n" +
            "    </section>");


        function display_gpx(elt, training) {


            var mapid = elt.getAttribute('data-map-target');
            if (!training.gpxXml || !mapid) return;

            function _t(t) {
                return elt.getElementsByTagName(t)[0];
            }

            function _c(c) {
                return elt.getElementsByClassName(c)[0];
            }

            var map = L.map(mapid);
            L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>'
            }).addTo(map);

            var control = L.control.layers(null, null).addTo(map);

            new L.GPX(training.gpxXml, {
                async: true,
                marker_options: {
                    startIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-start.png',
                    endIconUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-icon-end.png',
                    shadowUrl: 'http://github.com/mpetazzoni/leaflet-gpx/raw/master/pin-shadow.png',
                },
            }).on('loaded', function (e) {
                var gpx = e.target;
                map.fitBounds(gpx.getBounds());
                control.addOverlay(gpx, gpx.get_name());

                /*
                 * Note: the code below relies on the fact that the demo GPX file is
                 * an actual GPS track with timing and heartrate information.
                 */
                console.log(training)
                _t('h3').textContent = training.name;
                _c('start').textContent = training.trainingDate;
                _c('distance').textContent = training.distance;
                _c('duration').textContent = gpx.get_duration_string(gpx.get_moving_time());
                _c('pace').textContent = gpx.get_duration_string(gpx.get_moving_pace_imp(), true);
                _c('avghr').textContent = gpx.get_average_hr();
                _c('elevation-gain').textContent = gpx.to_ft(gpx.get_elevation_gain()).toFixed(0);
                _c('elevation-loss').textContent = gpx.to_ft(gpx.get_elevation_loss()).toFixed(0);
                _c('elevation-net').textContent = gpx.to_ft(gpx.get_elevation_gain()
                    - gpx.get_elevation_loss()).toFixed(0);
            }).addTo(map);
        }

        $.ajax({
            url: "/app/getTraining?id=" + trainingId,
            data: {},
            type: "GET",
            dataType: "text"
        }).done(function (result) {
            var obj = jQuery.parseJSON(result);
            display_gpx(document.getElementById('demo'), obj);
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)

        }).always(function (xhr, status) {
        });


    })


    $('.selectForDelete').on('click', function (event) {
        event.stopPropagation();

    });


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
        $("#kcal").val("");
        $("#averageNew").val("");
    });


    $('#saveNewTrening').on('click', function (e) {
        e.preventDefault();
        var trainingName = $("#trainingName").val();
        var trainingPlace = $("#trainingPlace").val();
        var trainingDistance = $("#trainingDistance").val();
        var traningDate = $("#traningDate").val();
        var choosedFile = $("#choosedFile").val();
        var kcal = $("#kcal").val();
        var averageNew = $("#averageNew").val();

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
        if (kcal == null || kcal == "") {
            $("#kcalAlert").show();
        } else {
            $("#kcalAlert").hide();
        }
        if (averageNew == null || averageNew == "") {
            $("#averageNewAlert").show();
        } else {
            $("#averageNewAlert").hide();
        }

        console.log(kcal);


        if (!((trainingName == null || trainingName == "") ||
            (trainingPlace == null || trainingPlace == "") ||
            (trainingDistance == null || trainingDistance == "") ||
            (traningDate == null || traningDate == "") ||
            (choosedFile == null || choosedFile == "") ||
            (kcal == null || kcal == "") ||
            (averageNew == null || averageNew == ""))) {


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
            }).done(function (result) {
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();

                today = yyyy + '-' + mm + '-' + dd;
                var newTr = $(" <tr class=\"trainingOnList\">\n" +
                    "                                            <td specialId=\"" + result + "\">\n"
                    + (parseInt($("#trainingTableBody").children().length) + 1) +
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingName +
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingPlace +
                    "                                            </td>\n" +
                    "                                            <td >\n" +
                    trainingDistance +
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    today +
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    traningDate +
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    kcal +
                    "                                            </td>\n" +
                    "                                            <td>\n" +
                    averageNew +
                    "                                            </td>\n" +
                    "<td class=\"selectForDelete\">\n" +
                    "<label class=\"container\">\n" +
                    "<input type=\"checkbox\">\n" +
                    "<span class=\"checkmark\"></span>\n" +
                    "</label>\n" +
                    "</td>" +
                    "</tr>");
                $("#trainingTableBody").fadeIn(300, function () {
                    $("#trainingTableBody").append(newTr);
                })

                $("#addTrainingModal").modal("toggle");

                $('.selectForDelete').on('click', function (event) {
                    event.stopPropagation();
                })
                $("#trainingAddedSuccesfullAlert").show();
            }).fail(function (xhr, status, err) {
                console.log(xhr);
                console.log(status);
                console.log(err);
                $("#errorDuringAddedNewTrainingAlert").show();
                $("#addTrainingModal").modal("toggle");


            });
        }
    });

    $("#deleteButton").on('click', function () {
        var checboxes = $(".trainingOnList .selectForDelete .deleteInput[isChecked=true]");
        var tab = [];
        if (checboxes != '') {


            checboxes.each(function (index, element) {
                tab[index] = $(element).attr("trainingId");
            })
            $.ajax({
                url: "/app/deleteTraining",
                data: {
                    "listId": tab
                },
                traditional: true,
                dataType: "text",
                type: "POST"

            }).done(function (result) {


                checboxes.each(function (index, element) {
                    $(element).parent().parent().parent().fadeOut(300, function () {
                        $(element).parent().parent().parent().remove();
                    });
                })

            }).fail(function (xhr, status, err) {
                console.log(xhr);
                console.log(status);
                console.log(err);

            }).always(function (xhr, status) {
            });

        }


    });

    $(".deleteInput").on('click', function () {

        if ($(this).attr('isChecked') == 'false') {
            $(this).attr('isChecked', 'true');
        } else {
            $(this).attr('isChecked', 'false');
        }

    });


});
