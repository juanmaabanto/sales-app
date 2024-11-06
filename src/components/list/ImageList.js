import React from 'react';
import PropTypes from 'prop-types';
import { Grid2 as Grid, Box, Typography, Card, CardMedia, CardContent, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ImageList = ({ data }) => {
  return (
    <Box sx={{ p: 2 }}>
      {data.length === 0 ? (
        <Typography variant="h6" color="text.secondary" align="center">
          No se encontraron productos
        </Typography>
      ) : (
        <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
          {data.map((product) => (
            <Grid key={product.id} size={1}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} to={`/details/${product.id}`}>
                  <CardMedia
                    component="img"
                    image={product.imgUrl}
                    alt={`${product.brand} ${product.model}`}
                    sx={{ width: '100%', height: '140px', objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="div" noWrap>
                      {product.brand} {product.model}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ${product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

ImageList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      brand: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      imgUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageList;
