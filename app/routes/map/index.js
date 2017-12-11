import {
    GoogleMap,
    Marker
} from 'cx-google-maps';

import { VDOM } from 'cx/ui';

const containerElement = <div style={{ position: "relative", height: "100%" }} />;
const mapElement = <div style={{ position: "absolute", left: 0, top: 0, right: 0, bottom: 0 }} />;

import Controller from './Controller';

export default <cx>
    <h2 putInto="header">Map</h2>
    <GoogleMap
        controller={Controller}
        containerElement={containerElement}
        mapElement={mapElement}
        defaultCenter:bind="$page.map.center"
        defaultZoom:bind="$page.map.zoom"
        zoom:bind="$page.map.zoom"
    >
        <Marker
            position:bind="$page.map.center"
        />
    </GoogleMap>
</cx>;