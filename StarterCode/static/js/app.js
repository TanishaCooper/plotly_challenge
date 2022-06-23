// Plotly JavaScript Challenge - Belly Button Biodiveristy
// Step 1. Use D3 library to read in sample.json: names, metadata, samples.otu_ids, samples.otu_labels, sample.sample_values


function buildCharts(sample) {

d3.json("samples.json").then((data)==> {
    let samples= data.samples;
    let resultsarray= samples.filter(sampleobject =>
        sampleobject.id == sample);
    let result= resultsarray[0]

    const otu_ids = result.otu_ids;
    const labels = result.out_lables;
    const values = result.sample_values;

    // ------------BAR CHART----------//

    let bar_data = [
        {
            y:otu_ids.slice(0,10).map(otuID => 'OTU ${otuID}').reverse(),
            x.values.slice(0,10).reverse(),
            text:labels.slice(0,10).reverse(),
            type:"bar",
            orientation:"h"
        }
    ];

    var barLayout = {
        title: "Top 10 Belly Button Bacteria",
        margin: {t: 30, l:150}
    };

    Plotly.newPlot("bar", bar_data, barLayout);
});
}