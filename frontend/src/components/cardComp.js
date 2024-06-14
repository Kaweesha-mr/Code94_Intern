import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
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


    const handleDelete = () => {
        console.log('delete');
        props.onDelete();
        handleClose();
    }
    return (

        <Card
        sx={{
            borderRadius: 5,
            minWidth: 275,
            boxShadow: 10,
            marginTop: 2,
        }}>
            <Link to={`/recipe-details/${props.id}`}>
                <CardContent className='cursor-pointer'>
                    <div className='text-3xl font-semibold'>
                        {props.title}
                    </div>
                    <div className='max-h-12 overflow-hidden'>
                        {props.description}
                    </div>
                </CardContent>
            </Link>
            <CardActions>

                <React.Fragment >

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
                            <Button sx={{
                                borderRadius: 10,
                            }} onClick={handleClose}>No</Button>
                            <Button sx={{
                                borderRadius: 10,
                            }} onClick={handleDelete} autoFocus>
                                Yes
                            </Button>
                        </DialogActions>
                    </Dialog>

                </React.Fragment>


                <Link to={`/edit-recipe/${props.id}`}>

                    <IconButton aria-label="edit" color="primary">
                        <EditNoteOutlinedIcon />
                    </IconButton>

                </Link>
                
            </CardActions>
        </Card>
    );
}
