$(function () {

    function renderBarChart(month, tab) {
        var dataPoints = [];

        var chart = new CanvasJS.Chart("chartContainer1", {
            dataPointWidth: 40,
            animationEnabled: true,
            backgroundColor: "#212842",

            theme: "light1",
            title: {
                text: "Distance",
                fontColor: "white"

            }, axisX: {
                labelFontSize: 14,
                labelFontColor: "white"
            },
            axisY: {
                title: " Km",
                titleFontSize: 14,
                labelFontColor: "white"
            },
            data: [{
                type: "column",
                dataPoints: dataPoints
            }]
        });

        for (var i = 0; i < tab.length; i++) {
            dataPoints.push({
                label: month[parseInt(tab[i].month)-1],
                y: parseFloat(tab[i].distance)
            });
        }
        chart.render();
    }

    function renderPieChart(month,tab) {
        var dataPoints2 = [];



        var chart = new CanvasJS.Chart("chartContainer2", {
            animationEnabled: true,
            backgroundColor: "#212842",
            title: {
                text: "Kcal",
                fontColor: "white"
            },
            legend:{
                fontColor: "white"

            },

            data: [{
                type: "pie",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabelFontColor: "white",
                indexLabel: " {y} kcal",
                dataPoints: dataPoints2
            }]
        });

        for (var i = 0; i < tab.length; i++) {

            dataPoints2.push({
                label: month[parseInt(tab[i].month)-1],
                y: parseFloat(tab[i].kcal)
            });
        }


        chart.render();
    }

    function renderSplineAreaChart(month,tab){
        var dataPoints = [];
        var chart = new CanvasJS.Chart("chartContainer3", {
            animationEnabled: true,
            backgroundColor: "#212842",
            title:{
                text: "Average speed",
                fontColor: "white"
            },
            axisY: {
                title: "",
                valueFormatString:"#,##0.##",
                suffix: " km/h",
                labelFontColor: "white"
            }, axisX: {
                labelFontColor: "white"
            },
            data: [{
                type: "splineArea",
                color: "rgba(54,158,173,.7)",
                markerSize: 5,
                xValueFormatString: "YYYY",
                yValueFormatString: "$#,##0.##",
                dataPoints: dataPoints
            }]
        });

        for (var i = 0; i < tab.length; i++) {

            dataPoints.push({
                label: month[parseInt(tab[i].month)-1],
                y: parseFloat(tab[i].averageNew)
            });
        }
        chart.render();

    }
    function renderLineChart(month,tab){
       var dataPoints = [];
        var chart = new CanvasJS.Chart("chartContainer4", {
            animationEnabled: true,
            backgroundColor: "#212842",
            theme: "light2",
            title:{
                text: "Counted trainings",
                fontColor: "white"
            },
            axisY:{
                includeZero: false,
                labelFontColor: "white"
            }, axisX: {
                labelFontColor: "white"
            },
            data: [{
                lineColor: "#49ADC4",
                type: "line",
                dataPoints: dataPoints
            }]
        });

        for (var i = 0; i < tab.length; i++) {

            dataPoints.push({
                label: month[parseInt(tab[i].month)-1],
                y: parseFloat(tab[i].numberOfTrainings)
            });
        }
        chart.render();

    }




    $("#statisticButton").on("click", function () {
        if($("#statisticButton").hasClass("active")){return}
        removeStatisticTable(this);
        var month = [" January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"];

        $.ajax({
            url: "/app/statistic",
            data: {},
            type: "GET",
            dataType: "json"
        }).done(function (result) {
            console.log(result);
            $(".content").attr("id","mainContentDiv");
            var chart1 = $("<div id=\"chartContainer1\"  style=\"height: 500px; width: 785px;\"></div>");
            var chart2 = $("<div id=\"chartContainer2\"  style=\"height: 500px; width: 785px;\"></div>");
            var chart3= $("</br><div id=\"chartContainer3\" style=\"height: 500px; width:  785px;\"></div>");
            var chart4= $("<div id=\"chartContainer4\" style=\"height: 500px; width: 785px;\"></div>");
            $(".card-body").append(chart1);
            $(".card-body").append(chart2);
            $(".card-body").append(chart3);
            $(".card-body").append(chart4);
            renderBarChart(month, result);
            renderPieChart(month,result);
            renderSplineAreaChart(month,result);
            renderLineChart(month,result);
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        })


        //https://canvasjs.com/html5-javascript-pie-chart/


    })


})
