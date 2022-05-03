import React from 'react'
import Map, {Marker} from 'react-map-gl'
import {ICoords} from '../../../global/export'

const Mapbox: React.FC<{ tempCoords: ICoords }> = ({tempCoords}) => {
    return (
        <Map
            id="mymap"
            initialViewState={{
                longitude: 34.77415,
                latitude: 32.07793,
                zoom: 14,
            }}
            style={{width: '100%', height: '80vh'}}
            mapStyle="mapbox://styles/mapbox/streets-v9"
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        >
            <Marker longitude={tempCoords.longitude} latitude={tempCoords.latitude} color="red"/>
        </Map>
    )
}

export default Mapbox
