import React from 'react';
import './Item.css';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, CardMedia, Typography, } from '@mui/material';


const Item = ({ items }) => {

    const { name } = useParams();

    const item = items.filter(i => i.name.toLowerCase() === name.toLowerCase());

    if (item.length === 0) {
        return (
            <Typography gutterBottom variant="h5" component="div">
                Theres no {name} in shopping list
            </Typography>
        )
    } else {
        return (
            <div className="product-card">
                <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                        component="img"
                        image={`/images/${item[0].anotherImg}.jpg`}
                    />
                    <CardContent className='product-card-content'>
                        <Typography gutterBottom variant="h5" component="div">
                            {item[0].name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item[0].desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={item[0].shopLink} size="small">{item[0].shop}</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Item;