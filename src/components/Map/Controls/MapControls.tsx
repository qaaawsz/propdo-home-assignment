import React, {useCallback, useEffect, useState} from 'react'
import './mapControls.scss'
import {useMap} from 'react-map-gl'

const MapControls: React.FC<{ setTempCoords: Function }> =
    ({setTempCoords}) => {
        const {mymap} = useMap()
        const [inputValue, setInputValue] = useState('')
        const [hasError, setError] = useState(false)

        useEffect(() => {
            if (!mymap) {
                return undefined
            }

            const onMove = () => {
                const {lng, lat} = mymap.getCenter()
                setInputValue(`${lng.toFixed(3)}, ${lat.toFixed(3)}`)
                setError(false)
            }
            mymap.on('move', onMove)
            onMove()

            return () => {
                mymap.off('move', onMove)
            }
        }, [mymap])

        const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
            setInputValue(evt.target.value)
        }, [])

        const onSubmit = useCallback(() => {
            const [lng, lat] = inputValue.split(',').map(Number)
            if (Math.abs(lng) <= 180 && Math.abs(lat) <= 85) {
                mymap?.easeTo({
                    center: [lng, lat],
                    duration: 1000
                })
                setTempCoords({
                    longitude: lng,
                    latitude: lat,
                })
            } else {
                setError(true)
            }
        }, [mymap, inputValue])


        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }} className="controls-container">
                <span>CURRENT POSITION: </span>
                <input
                    type="text"
                    value={inputValue}
                    onChange={onChange}
                    style={{color: hasError ? 'red' : 'white'}}
                />
                <button onClick={() => onSubmit()}>
                    GO
                </button>
            </form>
        )
    }

export default MapControls
