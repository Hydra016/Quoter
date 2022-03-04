import React,{useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Grid, Typography } from '@material-ui/core';
import useStyles from './useStyles';

const Quotes = () => {
    const [quote, setQuotes] = useState(null)
    const { root, cardStyles } = useStyles();

    useEffect(async () => {
        const response = await axios.get('https://api.quotable.io/random')
        setQuotes(response.data)
    }, [])

    const clientDrag = (e) => {
        if(e.clientX === 0) {
            window.location.reload();
        }
    }

    return (
        <div className={root}>
            <Card 
            elevation={3} 
            draggable 
            onDrag={clientDrag}
            className={cardStyles}
            >
                <Grid  
                container
                direction='column'
                >
                <Grid item>
                <Typography variant='h6'>
                    {quote && quote.content}
                </Typography>
                </Grid>
               <Grid item>
               <Typography variant="subtitle1">
                    {quote && quote.author}
                </Typography>
               </Grid>
                </Grid>
            </Card>
        </div>
    )
}


export default Quotes;