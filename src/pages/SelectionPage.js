import React from 'react';
import { Typography, Button } from '@mui/material'

export const SelectionPage = () => {
    return (
        <div>
            <Typography variant='h6'>
                Engine was loaded
            </Typography>
            <Typography>
                &
            </Typography>
            <Typography variant='h6'>
                Inverted indices were constructed successfully!
            </Typography>
            <Typography variant='h6'>
                Please Select Action
            </Typography>
            <div>
                <Button variant="contained" color="primary">
                    Search for Team
                </Button>
            </div>
            <div>
                <Button variant="contained" color="primary">
                    Top-N
                </Button>
            </div>
        </div>
    )
}