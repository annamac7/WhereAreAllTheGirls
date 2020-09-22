console.log('scripts loaded');

var modal = document.getElementById("myModal");
var btn = document.getElementById("sourceBtn");
var close = document.getElementById("close");

sourceBtn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function () {
  if(event.target == modal) {
    modal.style.display = "none";
  }
}

function getSize()
{
var w = document.documentElement.clientWidth;
var h = document.documentElement.clientHeight;
  console.log(w + " " +h);
}


$(document).ready(function() {



$(function() {
  console.log('jquery loaded');
});



var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  var value = this.value;


  console.log(value);


  switch(value) {
// maybe try using the replace function in js
//that could help with the layout issues
    case "10":
    case "11":
    case "12":
    case "13":
    case "14":
    case "15":
    case "16":
    case "17":
    case "18":
    case "19":
       $("#k-8").show("slow");
       $("#highschool").hide("slow");
       $("#university").hide("slow");
       $("#workplace").hide("slow");
      break;
    case "20":
    case "21":
    case "22":
    case "23":
    case "24":
    case "25":
    case "26":
    case "27":
    case "28":
    case "29":
     $("#highschool").show("slow");
     $("#k-8").hide("slow");
     $("#university").hide("slow");
     $("#workplace").hide("slow");
      break;
    case "30":
    case "31":
    case "32":
    case "33":
    case "34":
    case "35":
    case "36":
    case "37":
    case "38":
    case "39":
      $("#university").show("slow");
      $("#k-8").hide("slow");
      $("#highschool").hide("slow");
      $("#workplace").hide("slow");
      break;
    case "40":
    case "41":
    case "42":
    case "43":
    case "44":
    case "45":
    case "46":
    case "47":
    case "48":
      $("#workplace").show("slow");
      $("#k-8").hide("slow");
      $("#highschool").hide("slow");
      $("#university").hide("slow");
  }
};





google.charts.load('current', {'packages':['corechart']});
     google.charts.setOnLoadCallback(drawVisualization);

     function drawVisualization() {
       // Some raw data (not necessarily accurate)
       var data = google.visualization.arrayToDataTable([
         ['Occupation', 'Women', 'Men'],

         ['Computer Science',  .26,      .74],
         ['Economists', .29, .71],
         ['Chemical Engineers',  .18,      .82],
         ['Software Developers',  .19,      .81],
         ['Chemists',  .39,      .61],
         ['Physicians & Surgeons',  .36,      .64]

       ]);

       var options = {
         title : 'STEM Occupations by Gender',
         vAxis: {title: 'Percentage', format: 'percent'},
         hAxis: {title: 'Occupations'},
         seriesType: 'bars',
         colors: ['pink', 'lightblue'],
         backgroundColor: 'DarkTurquoise',
         chartArea: {backgroundColor: 'white', width: 700, height: 500},
         width: 900,
         height: 600,
         fontSize: 12,
         titleTextSize: 40


       };

       var chart = new google.visualization.ComboChart(document.getElementById('chartDiv'));
       chart.draw(data, options);
     }


  $(window).resize(function(){
  drawVisualization();
});

$(document).ready(function (){
  $("#chart").hide();
});

$("#chartBtn").click(function(){
  $("#chart").show();
});

$("#closeAgain").click(function (){
  $("#chart").hide();
});



});


console.log(getSize());

// (function blink() {
//   $("#load").fadeOut(500).fadeIn(500, blink);
// })();
//
// $("#load").click(function(){
//   $("#load").stop();

  // var i = 0;
  // var txt = 'The number of women in the field of computer science are significantly lower than the number of men. Why?  In the tech industry men are given a huge advantage over their female counterparts.'
  // var speed = 1000;
  // var empty = '';
  //
  // if(i < txt.length) {
  //   $("#fancy_fx").html(empty += txt.charAt(i));
  //   i++;
  //   setTimeout(function(){ alert("Hello"); }, 3000);
  // }

// });










// slider.oninput = $(function() {
//   output.innerHTML = this.value;
//   if(this.value === "10") {
//     $("#k-8").css("opacity", "1");
//   }
// });
