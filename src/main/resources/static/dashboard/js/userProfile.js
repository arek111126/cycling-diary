$(function () {

    $("#userProfile").on("click", function () {
        removeStatisticTable(this);

        $("#changePasswordButton").hide();
            $.ajax({
                url: "/app/userData",
                data: {},
                type: "GET",
                dataType: "json"
            }).done(function (result) {

            var editForm = $("<div class=\"alert alert-success\"  id=\"successUpdate\"  style=\"position: absolute; margin-left:38%; margin-top:50px; display:none\" role=\"alert\">\n" +
                "  Data Updated!\n" +
                "</div>" +
                "<div class=\"col-md-8\">\n" +
                "              <div class=\"card\">\n" +
                "                <div class=\"card-header card-header-primary\">\n" +
                "                  <h4 class=\"card-title\">Edit Profile</h4>\n" +
                "                  <p class=\"card-category\">Complete your profile</p>\n" +
                "                </div>\n" +
                "                <div class=\"card-body\">\n" +
                "                  <form>\n" +
                "                    <div class=\"row\">\n" +
                "                      <div class=\"col-md-5\">\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\">First Name</label>\n" +
                "                          <input type=\"text\" class=\"form-control\" name=\"firstName\" value=" + result.firstName + ">\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                      <div class=\"col-md-3\">\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\">Last Name</label>\n" +
                "                          <input type=\"text\" class=\"form-control\" name=\"sureName\" value=" + result.sureName + ">\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                      <div class=\"col-md-4\">\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\">Email address</label>\n" +
                "                          <input type=\"email\" class=\"form-control\" name=\"email\" value="+ result.email + ">\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                      <div class=\"col-md-6\" >\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\">Current Pasword</label>\n" +
                "                          <input type=\"password\" class=\"form-control pass\" name=\"currentPassword\" value>\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"row passwordClass \" style=\"display: none;\">\n" +
                "                      <div class=\"col-md-6\" >\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\">New Password</label>\n" +
                "                          <input type=\"password\" class=\"form-control pass\" name='password' value>\n" +
                "                        </div>\n" +
                "                      </div>\n" +

                "                    </div>\n" +
                "                    <div class=\"row passwordClass \" style=\"display: none;\">\n" +
                "                      <div class=\"col-md-6\">\n" +
                "                        <div class=\"form-group\">\n" +
                "                          <label class=\"bmd-label-floating\" >Confirm Password</label>\n" +
                "                          <input type=\"password\" class=\"form-control hidden pass\" name='retypePassword' value>\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +
                "                    <div class=\"row\">\n" +
                "                      <div class=\"col-md-6\">\n" +
                "                        <div class=\"form-group\">\n" +
                "                                <button  id=\"changePasswordButton\" class=\"btn btn-primary pull-right pass\" padding=\"20px\">Change Password</button>\n" +
                "                        </div>\n" +
                "                      </div>\n" +
                "                    </div>\n" +

                "                    <button id='updateUserDataButton' type=\"submit\" class=\"btn btn-primary pull-right \">Update Profile</button>\n" +
                "                    <div class=\"clearfix\"></div>\n" +
                "                  </form>\n" +
                "                </div>\n" +
                "              </div>\n" +
                "            </div>");

            $(".card-body").append(editForm);

        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        })
    });









    $(document).on('click',"#changePasswordButton",function (e) {
        e.preventDefault();
        $(".passwordClass").fadeToggle();
    })

    $(document).on('click','#updateUserDataButton',function(e) {
        e.preventDefault();
        var formData = $("form").serialize();
console.log(formData);
        $.ajax({
            type: 'POST',
            url: '/app/changeUserData',
            data: formData
        }).done(function (response) {
            console.log(response)
            $(".pass").val("");
            $("#successUpdate").toggle();
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        })
    })
});

