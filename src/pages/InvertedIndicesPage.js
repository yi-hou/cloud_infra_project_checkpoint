import React from 'react';
import { Typography, Button, TextField } from '@mui/material'

export const InvertedIndicesPage = () => {
    return (
        <div>
            <Typography variant='h6'>
                Inverted Indices were constructed successfully!
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                value='10' />
            <div>
                <Button variant="outlined" color='primary'>
                    Search
                </Button>
            </div>
        </div>
    )

}