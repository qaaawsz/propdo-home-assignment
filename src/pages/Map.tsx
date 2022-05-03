import React, {useState} from 'react'
import {MapProvider} from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {ICoords, MapBox, MapControls} from '../global/export'

const MapPage: React.FC = () => {

    const [tempCoords, setTempCoords] = useState<ICoords>({
        longitude: 34.77415,
        latitude: 32.07793,
    })

    // Type error below happens because of React 18
    // https://stackoverflow.com/questions/71817106/type-children-element-has-no-properties-in-common-with-type-intrinsicat
    // From downgrading React to v 17 or using ts-ignore, I chose ts-ignore
    // @ts-ignore
    return (<MapProvider>
            <MapControls setTempCoords={setTempCoords}/>
            <MapBox tempCoords={tempCoords}/>
        </MapProvider>

    )
}

export default MapPage
