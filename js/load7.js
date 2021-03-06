//CHEMICAL SPILLS
var chemical_spills = omnivore.csv('calls/chemical_spills.csv')
    .on('ready', function(layer) {

        this.eachLayer(function(marker) {
                marker.setIcon(L.mapbox.marker.icon({
                    'marker-color': '#167d12',
                    'opacity': '.5',
                    'marker-size': 'small'
                }));

            // Bind a popup to each icon based on the same properties
            marker.bindPopup('<strong>Chemical Spill</strong>');
        });
    });

chemical_spills.on('ready', function(e) {
clusterGroup8 = new L.MarkerClusterGroup();
e.target.eachLayer(function(layer) {
clusterGroup8.addLayer(layer);
});
map.addLayer(clusterGroup8);
});

chemical_spills.on('mouseover', function(e) {
    e.layer.openPopup();
});
chemical_spills.on('mouseout', function(e) {
    e.layer.closePopup();
});