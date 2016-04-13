var trace1 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [870, 1, 1.6],
  name: 'Aerobacter Aerogenes',
  type: 'bar'
};

var trace2 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [1, 2, 0.02],
  name: 'Brucella Abortus',
  type: 'bar'
};

var trace3 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.001, 0.01, 0.007],
  name: 'Brucella Anthracis',
  type: 'bar'
};

var trace4 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.005, 11, 10],
  name: 'Diplococcus Pneumoniae',
  type: 'bar'
};

var trace5 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [100, 0.4, 0.1],
  name: 'Escherichia Coli',
  type: 'bar'
};

var trace6 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [850, 1.2, 1],
  name: 'Klebsiella Pneumoniae',
  type: 'bar'
};

var trace7 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [800, 5, 2],
  name: 'Mycobacterium Tuberculosis',
  type: 'bar'
};

var trace8 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [3, 0.1, 0.1],
  name: 'Proteus Vulgaris',
  type: 'bar'
};

var trace9 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [850, 2, 0.4],
  name: 'Pseudomonas Aeruginosa',
  type: 'bar'
};

var trace10 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [1, 0.4, 0.008],
  name: 'Salmonella (Eberthella) Typhosa',
  type: 'bar'
};

var trace11 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [10, 0.8, 0.09],
  name: 'Salmonella Schottmuelleri',
  type: 'bar'
};

var trace12 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.007, 0.1, 0.001],
  name: 'Staphylococcus Albus',
  type: 'bar'
};

var trace13 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.03, 0.03, 0.001],
  name: 'Staphylococcus Aureus',
  type: 'bar'
};

var trace14 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [1, 1, 0.1],
  name: 'Streptococcus Fecalis',
  type: 'bar'
};

var trace15 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.001, 14, 10],
  name: 'Streptococcus Hemolyticus',
  type: 'bar'
};

var trace16 = {
  x: ['Penicilin', 'Streptomycin', 'Neomycin'],
  y: [0.005, 10, 40],
  name: 'Streptococcus Viridans',
  type: 'bar'
};

var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8,
  trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16];

var layout = {
  barmode: 'group',
  title: 'MIC of Penicilin, Streptomycin, and Neomycin',
  hovermode: 'closest',
  legend: {
    x: 100,
    y: 1
  }
};

Plotly.newPlot('data-vis-1', data, layout);
