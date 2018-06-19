var trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 15, 13, 17],
    type: 'scatter',
    name: 'People'
};
var trace2 = {
    x: [1, 2, 3, 4],
    y: [16, 5, 11, 9],
    type: 'scatter',
    name: 'Contacts'
};
var data = [trace1, trace2];
var layout = {
    title:'Line and Scatter Plot'
};
window.onload = function(){
    Plotly.newPlot('plot', data, layout);
}
