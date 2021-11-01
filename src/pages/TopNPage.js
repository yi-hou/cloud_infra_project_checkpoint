import React from 'react';
import { Typography, Button, TextField } from '@mui/material'

export const TopNPage = () => {
    return (
        <div>
            <Typography variant='h6'>
                Enter Your N Value
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type Your N" />
            <div>
                <Button variant="outlined" color='primary'>
                    Search
                </Button>
            </div>
        </div>
    )

}