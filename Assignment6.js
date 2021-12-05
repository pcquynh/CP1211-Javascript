"use strict";

const rainfFall = [
  1.32, 4.05, 5.13, 2.11, 1.15, 7.6, 8.22, 10.0, 4.12, 3.64, 2.0, 0.01, 1.11,
  4.04, 5.05, 5.04, 3.95, 2.0, 2.01, 1.01, 3.13, 2.09, 3.11, 10.11, 15.01, 9.0,
  7.95, 5.23, 5.0, 5.1,
];

let totalRainfall = 0;
for (let r in rainfFall) totalRainfall += rainfFall[r];
let averageRainfall = (totalRainfall / rainfFall.length).toFixed(2);

let highestRainFall = 0;
let highestRainFallDay = "";
for (let r = 0; r < rainfFall.length; r++)
  if (rainfFall[r] > highestRainFall) {
    highestRainFall = rainfFall[r];
    highestRainFallDay = r + 1;
  }

let lowestRainFall = rainfFall[0];
let lowestRainFallDay = "";
for (let r = 1; r < rainfFall.length; r++)
  if (rainfFall[r] < lowestRainFall) {
    lowestRainFall = rainfFall[r];
    lowestRainFallDay = r + 1;
  }

var totalRain = document.querySelector("#total-rain");
var averageRain = document.querySelector("#average-rain");
var highestRain = document.querySelector("#highest-rain");
var lowestRain = document.querySelector("#lowest-rain");

//WRITE TOP AND BOTTOM INFO
totalRain.innerHTML = totalRainfall;
averageRain.innerHTML = averageRainfall;
highestRain.innerHTML = highestRainFallDay;
lowestRain.innerHTML = lowestRainFallDay;

// CREATE A TABLE USING JAVASCRIPT

var myTableDiv = document.getElementById("myTable");
var table = document.createElement("table");

var tableBody = document.createElement("tbody");
table.appendChild(tableBody);

let i = 0;
var tr = document.createElement("tr");
while (i < rainfFall.length) {
  tableBody.appendChild(tr);
  var td = document.createElement("td");
  td.appendChild(document.createTextNode(i + 1));
  tr.appendChild(td);
  var td = document.createElement("td");
  td.appendChild(document.createTextNode(rainfFall[i].toFixed(2)));
  tr.appendChild(td);
  if ((i + 1) % 4 === 0) {
    var tr = document.createElement("tr");
  }
  i++;
}
myTableDiv.appendChild(table);
