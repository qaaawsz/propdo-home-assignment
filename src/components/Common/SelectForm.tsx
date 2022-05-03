import React from 'react'
import {FormControl, InputBase, InputLabel, MenuItem, Select, styled} from '@mui/material'
import {ISelectForm} from '../../global/export'

const BootstrapInput = styled(InputBase)(({theme}) => ({
    'label + &': {
        marginTop: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    '& .MuiInputBase-input': {
        width: 100,
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '5px 26px 5px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))

const SelectForm: React.FC<ISelectForm> = ({id, title, labelId, value, setFn, selectOptions}) => {
    return (
        <FormControl>
            <InputLabel id={id}>{title}</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                value={value}
                label={title}
                onChange={(e) => setFn(e.target.value)}
                input={<BootstrapInput/>}
            >
                {
                    selectOptions.map((option) =>
                        <MenuItem key={option} value={option}>{option === 5 ? '5+' : option}</MenuItem>
                    )}
            </Select>
        </FormControl>
    )
}

export default SelectForm
