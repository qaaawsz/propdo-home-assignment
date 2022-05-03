import React, {useEffect, useState} from 'react'
import transactions from '../assets/transactions.json'
import {Grid} from '@mui/material'
import {EstateCard, EstateControls, IPlace, Status} from '../global/export'

const RealEstate: React.FC = () => {
    const [data, setData] = useState<any[]>([])

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<undefined | string>(undefined)
    const [firstLaunch, setFirstLaunch] = useState<boolean>(true)

    const [price, setPrice] = useState<string>('Default')
    const [roomsAmount, setRoomsAmount] = useState<number | string>('Unset')
    const [address, setAddress] = useState<string>('')

    const clearFilters = () => {
        setPrice('Default')
        setRoomsAmount('Unset')
        setAddress('')
        fetchData()
    }

    const fetchData = () => {
        setTimeout(() => {
            setLoading(true)
            try {
                setData(transactions.properties)
            } catch (e) {
                const error = (e as Error).message
                console.log(error)
                setError(error)
            }
            setFirstLaunch(false)
            setLoading(false)
        }, 300)
    }

    useEffect(() => {
        fetchData()
    }, [])


    useEffect(() => {
        if (firstLaunch) return

        if (price === 'Default') {
            fetchData()
            return
        }
        const filteredData = JSON.parse(JSON.stringify(data))
        filteredData.sort((a: IPlace, b: IPlace) =>
            price === 'From high to low'
                ? b.price - a.price
                : a.price - b.price
        )
        setData(filteredData)
    }, [price])

    useEffect(() => {
        if (firstLaunch) return

        if (typeof roomsAmount === 'string') {
            fetchData()
            return
        }
        const filteredData = JSON.parse(JSON.stringify(transactions.properties))
        setData(filteredData.filter((place: IPlace) => {
            if (roomsAmount === 5) {
                if (place.num_rooms >= 5) return place
            }
            if (place.num_rooms >= roomsAmount && place.num_rooms < roomsAmount + 1) return place
        }))
    }, [roomsAmount])

    useEffect(() => {
        if (firstLaunch) return

        if (!address.length) {
            fetchData()
            return
        }
        const filteredData = JSON.parse(JSON.stringify(transactions.properties))
        setData(filteredData.filter((item: IPlace) => item.address.includes(address)))
    }, [address])

    if (loading || firstLaunch) return <Status status="Loading data from server..."/>

    if (error) return <Status status="Something went wrong, please reload the page..."/>

    return (
        <Grid container spacing={2}>
            <Grid container item xs={12} justifyContent="center">
                <EstateControls
                    price={price}
                    setPrice={setPrice}
                    roomsAmount={roomsAmount}
                    setRoomsAmount={setRoomsAmount}
                    address={address}
                    setAddress={setAddress}
                    clearFilters={clearFilters}
                />
            </Grid>
            {
                !data.length && !loading && !firstLaunch
                    ? <Status status="Nothing relevant was found."/>
                    : data.map((estate: IPlace) =>
                        <Grid key={estate.id} item container justifyContent="center" alignItems="center" xs={12} md={6}
                              lg={4}>
                            <EstateCard
                                address={estate.address}
                                price={estate.price}
                                sqm={estate.sqm}
                                num_rooms={estate.num_rooms}
                                floor={estate.floor}
                                num_floors={estate.num_floors}
                                elevator={estate.elevator}
                                parking={estate.parking}
                                id={estate.id}
                            />
                        </Grid>
                    )
            }
        </Grid>
    )
}

export default RealEstate
