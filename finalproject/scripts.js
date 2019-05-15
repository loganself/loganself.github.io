info = [{data: "airlines", abia: 18, tpa: 24, bna: 15, msp: 17, stl: 13, kci: 11, slc: 9, sea: 32},
{data: "destinations", abia: 70, tpa: 100, bna: 75, msp: 163, stl: 70, kci: 54, slc: 100, sea: 118},
{data: "domestic", abia: 62, tpa: 75, bna: 78, msp: 136, stl: 63, kci: 50, slc: 89, sea: 91},
{data: "international", abia: 8, tpa: 15, bna: 7, msp: 27, stl: 7, kci: 4, slc: 11, sea: 27},
];

//initial view of chart
drawChart();

function drawChart() {

firstdata= document.getElementById("thedropdown").value;
for(i=0;i<info.length; i++){
if(firstdata == info[i].data){

abia = info[i].abia;
tpa = info[i].tpa;

bna = info[i].bna;
msp = info[i].msp;

stl = info[i].stl;
kci = info[i].kci;

slc = info[i].slc;
sea = info[i].sea;
}
}

//plotly code for two bars; instead of using numbers, we replace with variables that change depending on what is selected in the dropdown.
var trace1 = {
x: ['ABIA', 'TPA', 'BNA', 'MSP', 'STL', 'KCI', 'SLC', 'SEA'],
y: [abia, tpa, bna, msp, stl, kci, slc, sea],
type: 'bar'
}


var data = [trace1]
var layout = {
title:'Season Passenger Totals - Graph 1',
xaxis: {title: {text:'Seasons'}}
}



Plotly.newPlot('graph', data, layout, {responsive: true} );
}
