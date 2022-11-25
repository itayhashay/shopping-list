import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardActions, Button, CardMedia, Typography, } from '@mui/material';
import './styles.css';

const Item = ({ items }) => {
    const [item, setItem] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const itemfound = items.find(i => i.name.toLowerCase() === name.toLowerCase());
        setItem(itemfound);
    }, [items, name])

    if (!item) {
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
                        image={`/images/${item.anotherImg}.jpg`}
                    />
                    <CardContent className='product-card-content'>
                        <Typography gutterBottom variant="h5" component="div">
                            {item.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {item.desc}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button href={item.shopLink} size="small">{item.shop}</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default Item;