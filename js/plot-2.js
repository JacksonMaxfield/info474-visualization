var trace1 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.001, 0.01, 0.007],
  name: 'Brucella Anthracis',
  type: 'bar'
};

var trace2 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.005, 11, 10],
  name: 'Diplococcus Pneumoniae',
  type: 'bar'
};

var trace3 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.007, 0.1, 0.001],
  name: 'Staphylococcus Albus',
  type: 'bar'
};

var trace4 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.03, 0.03, 0.001],
  name: 'Staphylococcus Aureus',
  type: 'bar'
};

var trace5 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [1, 1, 0.1],
  name: 'Streptococcus Fecalis',
  type: 'bar'
};

var trace6 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.001, 14, 10],
  name: 'Streptococcus Hemolyticus',
  type: 'bar'
};

var trace7 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.005, 10, 40],
  name: 'Streptococcus Viridans',
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7];

var layout = {
  barmode: 'group',
  title: 'MIC of Penicilin, Streptomycin, and Neomycin (Gram-Staining: Positive)',
  hovermode: 'closest',
  legend: {
    x: 100,
    y: 1
  }
};

Plotly.newPlot('data-vis-2', data, layout);
