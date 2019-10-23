
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
        })
    })


