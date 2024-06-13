import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';


export default function CardComp() {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Recipe Id #21123
                </Typography>
                <Typography variant="h5" component="div">
                    Sri Lanka Chicken Curry
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Sri Lankan
                </Typography>
                <Typography variant="body2">
                    well meaning and kindly.
                    well meaning and kindly.
                    well meaning and kindly.
                    well meaning and kindly.
                    well meaning and kindly.
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="delete" color="warning">
                    <DeleteIcon />
                </IconButton>
                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}
