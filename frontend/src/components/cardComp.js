import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function CardComp(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (

        <Card sx={{ minWidth: 275 }}>
            <Link to={`/recipe-details/${props.id}`}>
                <CardContent className='cursor-pointer'>
                    <Typography variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.category}
                    </Typography>
                    <Typography variant="body2">
                        {props.description}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions>

                <React.Fragment>
                    <IconButton aria-label="delete" color="warning" onClick={handleClickOpen}>
                        <DeleteIcon />
                    </IconButton>

                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Do you Want to Delete the Recipe?"}
                        </DialogTitle>
                        <DialogActions>
                            <Button onClick={handleClose}>No</Button>
                            <Button onClick={handleClose} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>


                <Link to={`/edit-recipe/${props.id}`}>
                    <IconButton aria-label="edit" color="primary">
                        <AlarmIcon />
                    </IconButton>
                </Link>
            </CardActions>
        </Card>
    );
}
