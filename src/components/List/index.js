import React from 'react';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, } from '@mui/material';
import './styles.css';

const List = ({ items }) => {

    const navigate = useNavigate();

    const handleOnClick = (name) => {
        navigate(`/${name}`)
    }

    return (
        <div className='items-list'>
            {items.map(item =>
                <div className='item-card'>
                    <Card className='card' key={item.id} onClick={() => handleOnClick(item.name)}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography variant="h3">
                                {item.name}
                            </Typography>
                            <Typography variant='h5'>
                                Price: {item.price}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            component="img"
                            image={`/images/${item.img}.jpg`}
                        />
                    </Card >
                </div>)}
        </div>
    );
}

export default List;