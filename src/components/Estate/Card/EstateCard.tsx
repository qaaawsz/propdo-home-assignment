import React from 'react'
import {getRandomImage, IPlace} from '../../../global/export'
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography} from '@mui/material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'
import SquareFootIcon from '@mui/icons-material/SquareFoot'
import ApartmentIcon from '@mui/icons-material/Apartment'
import ElevatorIcon from '@mui/icons-material/Elevator'
import LocalParkingIcon from '@mui/icons-material/LocalParking'
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'

const InfoLine = (Icon1: React.FC, info1: number | string, Icon2: React.FC, info2: number | string) => (
    <Grid container item xs={12} mb={2}>
        <Grid item xs={3} container alignItems="center">
            <Icon1/>
        </Grid>
        <Grid item xs={3} container alignItems="center">
            <Typography variant="body2" color="text.secondary">
                {info1}
            </Typography>
        </Grid>
        <Grid item xs={3} container alignItems="center">
            <Icon2/>
        </Grid>
        <Grid item xs={3} container alignItems="center">
            <Typography variant="body2" color="text.secondary">
                {info2}
            </Typography>
        </Grid>
    </Grid>
)

const EstateCard: React.FC<IPlace> =
    ({address, price, sqm, num_rooms, floor, num_floors, elevator, parking, id}) => {

        const estateImage = getRandomImage(1, 6)

        return (
            <Card sx={{width: 345}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="250"
                        image={estateImage}
                        alt={address}
                    />
                    <CardContent>

                        <Typography gutterBottom variant="h5" component="div" textAlign="center" mb={2}>
                            {address === 'NaN' ? 'מיקום לא ידוע' : address}
                        </Typography>

                        {InfoLine(AttachMoneyIcon, price, SquareFootIcon, `${sqm} ft²`)}

                        {InfoLine(ApartmentIcon, `${floor} / ${num_floors}`, MeetingRoomIcon, num_rooms)}

                        {InfoLine(ElevatorIcon, elevator ? 'Yes' : 'No', LocalParkingIcon, parking)}

                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }

export default EstateCard
