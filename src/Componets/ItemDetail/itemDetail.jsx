import React from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@mui/material'
import ItemCount from '../ItemListContainer/ItemCount'

const ItemDetail = ({id, nombre, precio, img, description}) => {
  return (
        <div style={{marginTop:'20px'}}>
              <Card sx={{ width: 800 }}>
      
        <CardMedia sx={{objectFit: 'contain'}}
          component="img"
          height="300"
          image={img}
          alt={nombre}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h3" align='center' fontWeight={'bold'} component="div">
            {nombre}
          </Typography>
          <Typography gutterBottom variant="h4" align='center' fontWeight={'bold'} component="div">
            ${precio}
          </Typography>

          <Typography variant="body2" color="text.secondary">
          {description}
          </Typography>
          <ItemCount stock={10} initial={1} />
        </CardContent>
     
      
    </Card>
  );
        </div>
  )
}

export default ItemDetail