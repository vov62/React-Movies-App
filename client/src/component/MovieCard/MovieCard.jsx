import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './MovieCard.css';

const not_found =
    "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";

const img_api = "https://image.tmdb.org/t/p/w300";

export default function MovieCard(props) {
    const { title, poster_path, release_date, vote_average, overview } = props;

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        bgcolor: '#0e0e0e',
        opacity: '0.9',
        border: '2px solid #000',
        boxShadow: 20,
        p: 4,
    };

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                        <img src={img_api + poster_path} alt='' style={{ width: '200px', float: 'left', margin: '22px' }} />
                    </Typography>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                        {overview}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 3 }}>
                        {release_date}
                    </Typography>
                </Box>
            </Modal>

            <div className="movie-card" onClick={() => handleOpen()}>
                <img src={img_api + poster_path}
                    alt='' />
                <div className="movieName">
                    <h4>{title}</h4>
                    <span> <p>{vote_average}</p></span>
                </div>
            </div>
        </>
    )
}


