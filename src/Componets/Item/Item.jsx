import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@mui/material'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'

const Item = ({id, nombre, precio, img}) => {
  return (
    <Card sx={{ width: 400}}>
      <CardActionArea>
        <CardMedia style={{objectFit: 'contain'}}
          component="img"
          height="170"
          image={img}
          alt={nombre}
          
        />
        <CardContent>

          <Typography style={{fontFamily:'roboto'}} gutterBottom variant="h4" fontWeight={'700'} align='center' component="div" >
            {nombre}
          </Typography>
          <Typography variant="h5" align='center' color={'#05ACF0'} fontWeight={'500'}>
            ${precio}
          </Typography>

        </CardContent>

      </CardActionArea>
      <CardActions >
     
      <Button style={{backgroundColor:'#262161', color:'white'}} variant="outlined" href="#outlined-buttons">
        Mas detalles
      </Button>
      </CardActions>
    </Card>
  )
}

export default Item