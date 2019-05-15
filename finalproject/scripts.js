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


// map of abia destinationa //
Plotly.d3.csv('abia.csv', function(err, rows){

      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }


      var data = [{
          type: 'scattermapbox',
          lat: unpack(rows, 'Latitude'),
          lon: unpack(rows, 'Longitude'),
          text: unpack(rows, 'airports),
          hoverinfo: 'text',
          marker: {
            color: ['#000']
          }
        }
      ];

      var layout = {
       title: 'Large Airports in Small Cities',
       titlefont: {
      color: '#b3cceb',
      size: 20,
      family: 'Helvetica'
       },
        dragmode: 'zoom',
        mapbox: {
          center: {
            lat: 38.621972,
            lon: -99.961840
          },
          zoom: 3,
          style: 'light'
        },
        margin: {
          r: 20,
          t: 40,
          b: 20,
          l: 20,
          pad: 0
        },
        paper_bgcolor: '#343a40',
        plot_bgcolor: '#f00',
        showlegend: false
      };

      Plotly.setPlotConfig({
        mapboxAccessToken: 'pk.eyJ1IjoiZm9ycmVzdGxzZWxmIiwiYSI6ImNqc3R5c2dpZzI5NWE0OW1yeG8zbWthcmEifQ.AcdsLunuklaotGsvzqipbA' //
      });

      Plotly.plot('viz3', data, layout, {responsive: true});
});


v
