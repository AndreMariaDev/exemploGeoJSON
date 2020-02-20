var geojsontools = require(geojson-tools);

module.exports = () =>{
    return {
        isValidPoint:(lat, lng)=>{
            var geoobj = {"type":"Point","coordinates":[lat,lng]};
            var tools = geojsontools();
            return tools.isGeoJSON(geoobj, true);
        }
    }
}