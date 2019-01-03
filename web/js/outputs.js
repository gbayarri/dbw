$(document).ready(function() {
  // loading datatable JS
  $('#table-output').DataTable();

  // loading NGL JS
  var stage = new NGL.Stage("viewport");
  stage.loadFile("rcsb://1crn", { defaultRepresentation: true });

  // plotly JS
  var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter'
  };

  var trace2 = {
    x: [1, 2, 3, 4],
    y: [6, 5, 11, 9],
    type: 'scatter'
  };

  var data = [trace1, trace2];

  Plotly.newPlot('myDiv', data);

});
