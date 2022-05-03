import React from 'react'
import {TextField, Button, Grid} from '@mui/material'
import {IEstateControls, SelectForm} from '../../../global/export'

const roomsFilterList = ['Unset', 1, 2, 3, 4, 5]

const priceSortList = ['Default', 'From low to high', 'From high to low']

const EstateControls: React.FC<IEstateControls> =
    ({price, setPrice, roomsAmount, setRoomsAmount, address, setAddress, clearFilters}) => {

        return (
            <Grid container item xs={12} mt={1} justifyContent="center" alignItems="center">
                <Grid container item xs={12} md={2} justifyContent="center" mb={3}>
                    <TextField
                        id="address"
                        label="Address"
                        variant="standard"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </Grid>
                <Grid container item xs={6} md={2} justifyContent="center">
                    <SelectForm
                        id="rooms"
                        title="Rooms Amount"
                        labelId="rooms-label"
                        value={roomsAmount}
                        setFn={setRoomsAmount}
                        selectOptions={roomsFilterList}
                    />
                </Grid>
                <Grid container item xs={6} md={2} justifyContent="center">
                    <SelectForm
                        id="price"
                        title="Price"
                        labelId="price-label"
                        value={price}
                        setFn={setPrice}
                        selectOptions={priceSortList}
                    />
                </Grid>
                <Grid container item xs={12} md={2} mt={2} justifyContent="center">
                    <Button variant="outlined" size="small" onClick={() => clearFilters()}>
                        Clear Filter
                    </Button>
                </Grid>
            </Grid>
        )
    }

export default EstateControls
