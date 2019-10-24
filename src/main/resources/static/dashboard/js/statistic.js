$(function () {

    function renderBarChart(month, tab) {
        var dataPoints = [];

        var chart = new CanvasJS.Chart("chartContainer", {
            dataPointWidth: 40,
            animationEnabled: true,
            theme: "light1",
            title: {
                text: "Distance"
            }, axisX: {
                labelFontSize: 20
            },
            axisY: {
                title: "Km",
                titleFontSize: 24
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
            title: {
                text: "Kcal"
            },
            data: [{
                type: "pie",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
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
            title:{
                text: "Average speed"
            },
            axisY: {
                title: "Revenue in USD",
                valueFormatString:"#,##0.##",
                suffix: "km/h",
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



    $("#statisticButton").on("click", function () {
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

            var chart1 = $("<div id=\"chartContainer\"  style=\"height: 500px; width: 785px;\"></div>");
            var chart2 = $("<div id=\"chartContainer2\"  style=\"height: 500px; width: 785px;\"></div>");
            var chart3= $("</br><div id=\"chartContainer3\" style=\"height: 500px; width:  785px;\"></div>");
            $(".card-body").append(chart1);
            $(".card-body").append(chart2);
            $(".card-body").append(chart3);
            renderBarChart(month, result);
            renderPieChart(month,result);
            renderSplineAreaChart(month,result);
        }).fail(function (xhr, status, err) {
            console.log(xhr);
            console.log(status);
            console.log(err);
        })


        //https://canvasjs.com/html5-javascript-pie-chart/


    })


})
