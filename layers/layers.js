var wms_layers = [];

var format_IND_adm1_0 = new ol.format.GeoJSON();
var features_IND_adm1_0 = format_IND_adm1_0.readFeatures(json_IND_adm1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IND_adm1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IND_adm1_0.addFeatures(features_IND_adm1_0);
var lyr_IND_adm1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IND_adm1_0, 
                style: style_IND_adm1_0,
                interactive: true,
                title: '<img src="styles/legend/IND_adm1_0.png" /> IND_adm1'
            });
var format_RajasthanForts_1 = new ol.format.GeoJSON();
var features_RajasthanForts_1 = format_RajasthanForts_1.readFeatures(json_RajasthanForts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RajasthanForts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RajasthanForts_1.addFeatures(features_RajasthanForts_1);
var lyr_RajasthanForts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RajasthanForts_1, 
                style: style_RajasthanForts_1,
                interactive: true,
                title: 'Rajasthan Forts'
            });

lyr_IND_adm1_0.setVisible(true);lyr_RajasthanForts_1.setVisible(true);
var layersList = [lyr_IND_adm1_0,lyr_RajasthanForts_1];
lyr_IND_adm1_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_RajasthanForts_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Fort_dates_Date of Construction': 'Fort_dates_Date of Construction', });
lyr_IND_adm1_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_RajasthanForts_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'Fort_dates_Date of Construction': 'TextEdit', });
lyr_IND_adm1_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_RajasthanForts_1.set('fieldLabels', {'Name': 'inline label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Fort_dates_Date of Construction': 'no label', });
lyr_RajasthanForts_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});