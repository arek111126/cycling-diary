$(function () {

function  removeStatisticTable(){



    $("#addTrainingLLabel").fadeOut(200, function () {
        $("#addTrainingLLabel").remove();
   })
    $("#trainingDiv").fadeOut(200, function () {
        $("#trainingDiv").remove();
    })
    $("#demo").fadeOut(200, function () {
        $("#demo").remove();
    })
    $("#traningDate1").remove();
    $("#traningDate2").remove();
}


function addStatisticTable(res){


    var tableSkeleton =  "   <div class=\"card\" id=\"cardToDelate1\">" +
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
    $.each(res,function(index,elem) {

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
    $('select[name="agregationTab_length"]').attr("id","agregationTabItem");
}
    $("#classification").on('click', function () {
        UncheckAllOverlap();
        $(this).addClass("active");
        removeStatisticTable();

        $.ajax({
            url: "/app/getUsersInfo",
            data: {},
            type: "GET",
            dataType: "json"

        }).done(function (result) {

            addStatisticTable(result);



        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)

        }).always(function (xhr, status) {
        });

    })


    $(".content").on("click","#btnFilter",function () {
       var   fromDate = $("#traningDate1").val();
       var   toDate = $("#traningDate2").val();
        removeStatisticTable();
        $("#cardToDelate1").remove();

        $.ajax({
            url: "/app/getUsersInfo",
            data: {
                fromDate : fromDate,
                toDate  : toDate
            },
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            console.log(result);
            addStatisticTable(result);
            var callendars = $(" <span class=\"nearDateSpan\"><span class=\"additionalWords\">From:</span></span></span> <input type=\"text\" id=\"traningDate1\" class=\"addTreningStyle callendarNew\" />\n" +
                "            <span id=\"additionalWords\">To:</span>  <input type=\"text\"    id=\"traningDate2\" class=\"addTreningStyle callendarNew\"/>" +
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
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)
        })
    })
    function UncheckAllOverlap() {
        $(".nav li").removeClass("active");
    }


})
