import React from 'react';
import { Typography, Button } from '@mui/material'
import { DropzoneArea } from 'material-ui-dropzone';
import './LoadPage.css';

export const LoadPage = () => {
    return (
        <div className="my-container">
            <Typography variant='h6'>Load My Engine</Typography>
            <DropzoneArea className='drop-zone' style={{width: 200}} />
            <Button variant="outlined" color='primary' className='convert_btn'>
                Construct Inverted Indicies
            </Button>
        </div>
    )
}