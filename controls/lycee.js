mviewer.customControls.lycee = (function() {
    /*
     * Private
     */
    var _idlayer = 'lycee';
    var _layerDefinition = mviewer.getLayer(_idlayer);
    var _source = _layerDefinition.layer.getSource();
    
    return {
        /*
         * Public
         */

        setStyle:  function  (select) {
            var style = select.value;
            var label = $(select).find('option:selected').data('label');            
            _source.getParams()['STYLES'] = style;
            _layerDefinition.style = style;            
            _source.changed();
            var legendUrl = mviewer.setLayerLegend(_layerDefinition);
            $("#legend-" + _idlayer).attr("src", legendUrl);    
            $("[data-layer="+_idlayer+"] h3 td").first().text(_layerDefinition.name + " - " + label);
        }
     }; // fin return	

}());