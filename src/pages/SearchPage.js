import React from 'react';
import { Typography, Button, TextField } from '@mui/material'

export const SearchPage = () => {
    return (
        <div>
            <Typography variant='h6'>
                Enter Your Search Term
            </Typography>
            <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type Your Search Here ..." />
            <div>
                <Button variant="outlined" color='primary'>
                    Search
                </Button>
            </div>
        </div>
    )

}