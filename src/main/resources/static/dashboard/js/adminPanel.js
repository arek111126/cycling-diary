$(function () {

    $(document).on("click","#adminPanel",function () {

        if ($("#adminPanel").hasClass("active")) {
            return
        }
        removeStatisticTable(this);

        $.ajax({
            url: "/app/users",
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


    function generateTrainingListView(users) {

        generateTrainingList();
        generateTrainingTable(users);
    }

    function generateTrainingList() {

        var tainingListLabel = $(" <div id=\"addTrainingLabelAdmin\" class=\"card-header card-header-primary\">\n" +
            "                                <h4 class=\"card-title \">Accounts</h4>\n" +
            "                                <a id=\"addTrainingButton\" class=\"nav-link\" href=\"#\" align=\"right\" data-toggle=\"modal\" style=\"float: right; width:176px\"\n" +
            "                                   data-target=\"#addTrainingModal\">\n" +
            "                                    <i class=\"material-icons\"></i>\n" +
            "                                </a>\n" +
            "                                <a id=\"deleteButton\" class=\"nav-link\" href=\"#\" align=\"right\" data-toggle=\"modal\" style=\"float: right; position: absolute; right:176px\">\n" +
            "                                    <i class=\"material-icons\"></i>\n" +
            "                                </a>\n" +
            "\n" +
            "                            </div>");
        $("#headerCard").prepend(tainingListLabel);
    }



    function generateTrainingTable(users) {
        var newTable = $("    <div id=\"trainingDiv\" class=\"table-responsive\">\n" +
            "                                    <table class=\"table\" id=\"trainingTable\">\n" +
            "                                        <thead class=\"text-primary\">\n" +
            "                                        <th>\n" +
            "                                            login\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            First Name\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Surname\n" +
            "                                        </th>\n" +
            "                                        <th>\n" +
            "                                            Email\n" +
            "                                        </th>\n" +
            "\n" +
            "                                        <th>\n" +
            "                                           Enabled\n" +
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

        var enabledTab = ["No","Yes"];
        $.each(users, function (index, element) {
            var newTr = $(" <tr class=\"trainingOnList\">\n" +
                "                                            <td specialId=\"" + element.id + "\">\n"
                + (parseInt(index) + 1) +
                "                                            </td>\n" +
                "                                            <td >\n" +
                element.firstName +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.sureName +
                "                                            </td>\n" +
                "                                            <td>\n" +
                element.email +
                "                                            </td>\n" +
                "                                            <td>\n" +
                enabledTab[element.enabled]  +
                "                                            </td>\n" +
                "<td class=\"selectForDelete\">\n" +
                "                                <a id=\"deleteUser\" userId="+ element.id + " class=\"nav-link\" href=\"#\" align=\"right\" data-toggle=\"modal\" style=\" position: absolute;margin-top: -22px;  right:152px\">\n" +
                "                                    <i class=\"material-icons\">delete</i>\n" +
                "                                </a>\n" +
                "                                            </td>" +

                "</td>" +

                "</tr>");
            $("#trainingTableBody").fadeIn(300, function () {
                $("#trainingTableBody").append(newTr);


            });





        });


    }
    $(document).on("click",'#deleteUser',function (e) {
        e.preventDefault();
        console.log("hej!!!")
        var id = $(this).attr("userId");
        var elem = $(this);
        console.log(id);
        $.ajax({
            url: "/app/deleteUser",
            data: {
                "id" : id
            },
            type: "POST",
            traditional: true,
            dataType: "text"
        }).done(function (result) {


        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        }).always(function () {
            $(elem).parent().parent().fadeOut(300, function () {
                $(elem).parent().parent().remove();
            });
        })

    });
})