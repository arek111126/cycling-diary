$(function () {


    $("#classification").on('click', function () {
        UncheckAllOverlap();
        $(this).addClass("active");
        $("#grouppedScore").fadeOut(200, function () {
            $("#grouppedScore").remove();
        })
        $("#addTrainingLLabel").fadeOut(200, function () {
            $("#addTrainingLLabel").remove();
        })
        $("#trainingDiv").fadeOut(200, function () {
            $("#trainingDiv").remove();
        })
        $("#demo").fadeOut(200, function () {
            $("#demo").remove();
        })

        $.ajax({
            url: "/app/getUsersInfo",
            data: {},
            type: "GET",
            dataType: "json"

        }).done(function (result) {


            var tableSkeleton =  "<div id=\"grouppedScore\" class=\"table-responsive\">\n" +
                "                                    <table class=\"table\" id=\"agregationTab\">\n" +
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
            $(".card-body").append(tableSkeleton);
            $.each(result,function(index,elem) {

                var newTr = $(" <tr class=\"trainingOnList\">\n" +
                    "                                            <td>\n"
                    + index + 1 +
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

                    console.log()
            })





        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status)
            console.log(err)

        }).always(function (xhr, status) {
        });

    })

    function UncheckAllOverlap() {
        $(".nav li").removeClass("active");
    }


})
