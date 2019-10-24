$(function () {

    function renderBarChart(month) {
        var dataPoints = [];

        var chart = new CanvasJS.Chart("chartContainer", {
            dataPointWidth: 40,
            animationEnabled: true,
            theme: "light1",
            title: {
                text: "Distance"
            },axisX:{
                labelFontSize: 20
            },
            axisY: {
                title: "Km",
                titleFontSize: 24
            },
            data: [{
                type: "column",
                dataPoints:  dataPoints
            }]
        });

        $.getJSON("/app/statistic", function addData(data) {
            for (var i = 0; i < data.length; i++) {
                dataPoints.push({
                    label: month[i],
                    y: parseFloat(data[i].distance)
                });
            }
            chart.render();

        });


        //$.getJSON("/app/statistic", addData);
    }



$("#statisticButton").on("click",function () {
    removeStatisticTable(this);
  var montch = [" January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "June",
      "August",
      "September",
      "October",
      "November",
      "December"];
    var chart1= $("<div id=\"chartContainer\" style=\"height: 500px; width: 760px;\"></div>");
    var chart2= $("<div id=\"chartContainer\" style=\"height: 370px; width: 100%;\"></div>");
    $(".card-body").append(chart1);
    $(".card-body").append(chart2);
        //https://canvasjs.com/html5-javascript-pie-chart/

    renderBarChart(montch);
})



})
