
    function removeStatisticTable(currentElem) {

        var navItem = $("#mainNav").children();

        if (navItem.eq(0).hasClass("active")) {
             $("#addTrainingLabel").fadeOut(200, function () {
                $("#addTrainingLabel").remove();})
            // $("#trainingDiv").fadeOut(200, function () {
            //     $("#trainingDiv").remove();
            // })
            // $("#demo").fadeOut(200, function () {
            //     $("#demo").remove();
            // })
            $(".card-body").empty();
            navItem.removeClass("active");
            $(currentElem).addClass("active")
        } else if (navItem.eq(1).hasClass("active")) {
            $("#cardToDelate1").remove();
            $("#traningDate1").remove();
            $("#traningDate2").remove();
            $("#btnFilter").remove();
            navItem.removeClass("active");
            $(currentElem).addClass("active");
        }


    }

    function addCalendarItem() {
        var callendars = $("<input type=\"text\" id=\"traningDate1\" class=\"addTreningStyle callendarNew\" />\n" +
            "            To: <input type=\"text\"    id=\"traningDate2\" class=\"addTreningStyle callendarNew\" />" +
            "       <button id=\"btnFilter\" type=\"button\" class=\"btn btn-primary\">Filter</button>");
        $(".content").prepend(callendars);
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

        $(document).on("click","#traningDate1",function (e) {
            e.stopPropagation();
            e.preventDefault();
        })

    }


    $("#classificationButton").on('click', function () {


        removeStatisticTable(this);

        $.ajax({
            url: "/app/getUsersInfo",
            data: {},
            type: "GET",
            dataType: "json"

        }).done(function (result) {
            addCalendarItem();
            addStatisticTable(result);


        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)

        }).always(function (xhr, status) {
        });

    });


    // training list button///
    $("#trainingListButton").on("click", function () {
        removeStatisticTable(this);
        $.ajax({
            url: "/app/trainingList",
            data: {},
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            console.log(result);
            generateTrainingListView(result);
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        })
    });


    $(".content").on("click", "#btnFilter", function () {
        var fromDate = $("#traningDate1").val();
        var toDate = $("#traningDate2").val();
        $("#cardToDelate1").remove()


        $.ajax({
            url: "/app/getUsersInfo",
            data: {
                fromDate: fromDate,
                toDate: toDate
            },
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            addStatisticTable(result);


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
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)
        });

    });





















    function addStatisticTable(res) {
        var tableSkeleton = "   <div class=\"card\" id=\"cardToDelate1\">" +
            "<div id=\"grouppedScore\" class=\"table-responsive\">\n" +
            "                                    <table  class=\"table  table-hover\" id=\"agregationTab\">\n" +
            "                                        <thead class=\"text-primary\">\n" +
            "                                        <th>\n" +
            "                                            Lp.\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                             User\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Number of workout\n" +
            "                                        </th>\n" +
            "\n" +
            "                                        <th>\n" +
            "                                            Distance Sum\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                           Kcal Sum\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                           Speed Average\n" +
            "                                        </th>\n" +
            "                                        </thead>\n" +
            "                                        <tbody>\n" +
            "                                      \n" +
            "\n" +
            "                                        </tbody>\n" +
            "                                    </table>\n" +
            "                                </div>"
        $(".card").append(tableSkeleton);
        $.each(res, function (index, elem) {

            var newTr = $(" <tr class=\"trainingOnList\">\n" +
                "                                            <td>\n"
                + (parseInt(index) + 1) +
                "                                            </td>\n" +
                "                                            <td >\n" +
                elem.login +
                "                                            </td>\n" +
                "                                            <td >\n" +
                elem.sumTrainings +
                "                                            </td>\n" +
                "                                            <td >\n" +
                elem.sumDistance +
                "                                            </td>\n" +
                "                                            <td>\n" +
                elem.sumKcal +
                "                                            </td>\n" +
                "                                            <td>\n" +
                elem.average +
                "                                            </td>\n" +

                "</tr>");
            $("#agregationTab tbody").append(newTr);

        })


        $("#agregationTab").DataTable();
        $('input[type="search"]').addClass("form-control");
        $('select[name="agregationTab_length"]').attr("id", "agregationTabItem");
    }

    function generateTrainingListView(trainings) {
        generateTrainingList();
        generateAddTrainingModal();
        generateTrainingTable(trainings);
    }

    function generateTrainingList() {

        var tainingListLabel = $(" <div id=\"addTrainingLabel\" class=\"card-header card-header-primary\">\n" +
            "                                <h4 class=\"card-title \">Training List</h4>\n" +
            "                                <a id=\"addTrainingButton\" class=\"nav-link\" href=\"#\" align=\"right\" data-toggle=\"modal\" style=\"float: right; width:176px\"\n" +
            "                                   data-target=\"#addTrainingModal\">\n" +
            "                                    <i class=\"material-icons\">control_point</i>\n" +
            "                                </a>\n" +
            "                                <a id=\"deleteButton\" class=\"nav-link\" href=\"#\" align=\"right\" data-toggle=\"modal\" style=\"float: right; position: absolute; right:176px\">\n" +
            "                                    <i class=\"material-icons\">delete</i>\n" +
            "                                </a>\n" +
            "\n" +
            "                            </div>");
        $("#headerCard").prepend(tainingListLabel);
    }

    function generateAddTrainingModal() {
        var modal = $(" <div class=\"modal fade right \" id=\"addTrainingModal\" tabindex=\"-1\" role=\"dialog\"\n" +
            "                                     aria-labelledby=\"exampleModalPreviewLabel\" aria-hidden=\"true\">\n" +
            "                                    <div class=\"modal-dialog modal-lg\" role=\"document\">\n" +
            "                                        <div class=\"modal-content\">\n" +
            "                                            <div class=\"modal-header\">\n" +
            "                                                <h5 class=\"modal-title\" id=\"exampleModalPreviewLabel\">Add training</h5>\n" +
            "                                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\"\n" +
            "                                                        aria-label=\"Close\">\n" +
            "                                                    <span aria-hidden=\"true\">&times;</span>\n" +
            "                                                </button>\n" +
            "                                            </div>\n" +
            "                                            <div class=\"modal-body\">\n" +
            "<form id=\"newTrainingForm\" action=\"/app/addNewTraining\" method=\"POST\" enctype=\"multipart/form-data\">\n" +
            "                                                    <div class=\"alert alert-danger collapse\" id=\"nameAlert\" role=\"alert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group\"><input type=\"text\" class=\"addTreningStyle\" id=\"trainingName\" placeholder=\"Enter the name of the workout\" name=\"name\" value=\"\"></span>\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"placeAlert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group\"><input type=\"text\" class=\"addTreningStyle\" id=\"trainingPlace\" placeholder=\"Where you been\" name=\"place\" value=\"\"></span>\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"distanceAlert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group\"><input type=\"text\" class=\"addTreningStyle\" id=\"trainingDistance\" placeholder=\"distance\" name=\"distance\" value=\"\"></span>\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"trainingDateAlert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group\"><input type=\"text\" id=\"traningDate\" class=\"addTreningStyle\" placeholder=\"Training date\" name=\"trainingDate\" value=\"\"></span>\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"kcalAlert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group is-filled\"><input type=\"text\" id=\"kcal\" class=\"addTreningStyle\" placeholder=\"kcal\" name=\"kcal\" value=\"\"></span>\n" +
            "\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"averageNewAlert\">\n" +
            "                                                        Complete the field !!!\n" +
            "                                                    </div>\n" +
            "                                                    <span class=\"bmd-form-group is-filled\"><input type=\"text\" id=\"averageNew\" class=\"addTreningStyle\" placeholder=\"average\" name=\"averageNew\" value=\"\"></span>\n" +
            "\n" +
            "\n" +
            "                                                    <small id=\"passwordHelpInline\" class=\"text-muted\">Enter training\n" +
            "                                                        date </small><br>\n" +
            "                                                    <div class=\"alert alert-danger collapse\" role=\"alert\" id=\"fileAlert\">\n" +
            "                                                        Add gpx file!!!\n" +
            "                                                    </div>\n" +
            "                                                    <input type=\"file\" id=\"choosedFile\" value=\"choose file\" class=\"addTreningStyle\" accept=\".gpx\" name=\"file\">\n" +
            "\n" +
            "                                                    <div class=\"modal-footer\">\n" +
            "                                                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">\n" +
            "                                                            Close\n" +
            "                                                        </button>\n" +
            "                                                        <button type=\"submit\" class=\"btn btn-primary\" id=\"saveNewTrening\">Save\n" +
            "                                                            changes\n" +
            "                                                        </button>\n" +
            "\n" +
            "                                                    </div>\n" +
            "                                                </form>" +
            "                                            </div>\n" +
            "\n" +
            "                                        </div>\n" +
            "                                    </div>\n" +
            "                                </div>");

        $(".card-body").prepend(modal);

        // $('input[id="traningDate"]').daterangepicker({
        //     singleDatePicker: true,
        //     showDropdowns: true,
        //     minYear: 1901,
        //     startDate: moment().format('YYYY-MM-DD'),
        //     locale: {
        //         format: 'YYYY-MM-DD'
        //     }
        // });
    }

    function generateTrainingTable(trainings) {
        var newTable = $("    <div id=\"trainingDiv\" class=\"table-responsive\">\n" +
            "                                    <table class=\"table\" id=\"trainingTable\">\n" +
            "                                        <thead class=\"text-primary\">\n" +
            "                                        <th>\n" +
            "                                            ID\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Name\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Place\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Distance\n" +
            "                                        </th>\n" +
            "\n" +
            "                                        <th>\n" +
            "                                            Creation Date\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Training Date\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Kcal\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                           Average\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Delete\n" +
            "                                        </th>\n" +
            "                                        </thead>\n" +
            "                                        <tbody id=\"trainingTableBody\">\n" +
            "                                        </tbody>\n" +
            "                                    </table>\n" +
            "                                </div>");

        $(".card-body").append(newTable);


        $.each(trainings, function (index, element) {
            var newTr = $(" <tr class=\"trainingOnList\">\n" +
                "                                            <td specialId=\"" + element.id + "\">\n"
                + (parseInt(index) + 1) +
                "                                            </td>\n" +
                "                                            <td >\n" +
                element.name +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.place +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.distance +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.trainingDate +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.creationDate +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.kcal +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.averageNew +
                "                                            </td>\n" +
                "<td class=\"selectForDelete\">\n" +
                "                                               <label class=\"container\">\n" +
                "                                                    <input type=\"checkbox\" class=\"deleteInput\" isChecked=\"false\" trainingId=" + element.id  + "  \">\n" +
                "                                                    <span class=\"checkmark\" checked=\"\"></span>\n" +
                "                                                </label>\n" +
                "                                            </td>" +
                "</td>" +

                "</tr>");
            $("#trainingTableBody").fadeIn(300, function () {
                $("#trainingTableBody").append(newTr);

            });


        });







    }


