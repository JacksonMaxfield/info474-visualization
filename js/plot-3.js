/* Traces */
var trace1 = {
  y: ["1.6"],
  x: ["Aerobacter Aerogenes"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace2 = {
  y: ["0.02"],
  x: ["Brucella Abortus"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace3 = {
  y: ["0.007"],
  x: ["Brucella Anthracis"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace4 = {
  y: ["10"],
  x: ["Diplococcus Pneumoniae"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace5 = {
  y: ["0.1"],
  x: ["Escherichia Coli"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace6 = {
  y: ["1"],
  x: ["Klebsiella Pneumoniae"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace7 = {
  y: ["2"],
  x: ["Mycobacterium Tuberculosis"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace8 = {
  y: ["0.1"],
  x: ["Proteus Vulgaris"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace9 = {
  y: ["0.4"],
  x: ["Pseudomonas Aeruginosa"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace10 = {
  y: ["0.008"],
  x: ["Salmonella (Eberthella) Typhosa"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace11 = {
  y: ["0.09"],
  x: ["Salmonella Schottmuelleri"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(70, 125, 163)'
  }
};
var trace12 = {
  y: ["0.001"],
  x: ["Staphylococcus Albus"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace13 = {
  y: ["0.001"],
  x: ["Staphylococcus Aureus"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace14 = {
  y: ["0.1"],
  x: ["Streptococcus Fecalis"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace15 = {
  y: ["10"],
  x: ["Streptococcus Hemolyticus"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};
var trace16 = {
  y: ["40"],
  x: ["Streptococcus Viridans"],
  name: "Neomycin",
  mode: "markers",
  type: 'scatter',
  marker: {
    size: 12,
    color: 'rgb(163, 72, 70)'
  }
};

/* Selected Traces */
var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7, trace8,
  trace9, trace10, trace11, trace12, trace13, trace14, trace15, trace16];

/* Layout */
var layout = {
  title: 'MIC Scores of using Neomycin on Bacterial Infections',
  showlegend: false //no need for a legend when the x axis contains that information
}

Plotly.newPlot('data-vis-3', data, layout, {staticPlot: true}); //put the plot in 'data-vis-3'
