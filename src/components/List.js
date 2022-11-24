import React from 'react';
import './List.css';
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Typography, } from '@mui/material';


const List = ({ items }) => {

    const navigate = useNavigate();

    const handleOnClick = (name) => {
        navigate(`/${name}`)
    }
    const listItems = items.map(i => {
        return (
            <div>
                <Card className='card' key={i.id} onClick={() => handleOnClick(i.name)}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography variant="h3">
                            {i.name}
                        </Typography>
                        <Typography variant='h5'>
                            Price: {i.price}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        image={`/images/${i.img}.jpg`}
                    />
                </Card >
            </div>
        )
    })
    return (
        <div>
            {listItems}
        </div>
    );
}

export default List;