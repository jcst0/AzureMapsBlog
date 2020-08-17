
//Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
var azureMapsKey = '<Your Maps Key Here>';

function GetMap() {

    // Initialise a map instance.

    map = new atlas.Map('myMap', {
        language: 'en-US',
        view: 'Auto',


        // Add your Azure Maps subscription key to the map SDK. Get an Azure Maps key at https://azure.com/maps
        authOptions: {
            authType: 'subscriptionKey',
            subscriptionKey: azureMapsKey
        }
    });

    // Wait until the map resources are ready.

    map.events.add('ready', function () {

        // Add navigation controls to the map.
        map.controls.add([
            new atlas.control.ZoomControl(),
            new atlas.control.PitchControl(),
            new atlas.control.CompassControl(),
            new atlas.control.StyleControl({ mapStyles: 'all' })
        ], {
            position: 'top-right'
        });

    });
}

