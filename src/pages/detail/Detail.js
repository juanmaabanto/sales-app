import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid2';
import { useGetProduct } from '../../hooks/useGetProduct';
import ProductImage from '../../components/product/ProductImage';
import ProductDescription from '../../components/product/ProductDescription';
import ProductAction from '../../components/product/ProductAction';

const Detail = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetProduct(productId);

  if (isLoading) {
    return <Box
      sx={{
          mt: '2rem',
          textAlign: 'center'
      }}
    >
      <CircularProgress />
    </Box>;
  }

  if (error) {
    return <Box
              sx={{
                color: 'error.main',
                fontSize: '0.75rem',
                overflow: 'hidden',
                p: '0.25rem',
                textOverflow: 'ellipsis',
                whiteSpace: 'pre-wrap'
            }}
          >
            an error ocurred
          </Box> ;
  }

  return (
    <Box 
      sx={{
        height: '100%',
        overflowY: 'auto',
        width: '100%',
        p: 3
      }}
    >
      <Box
        sx={{
          color: 'text.primary',
          m: '0 auto',
          maxWidth: '64rem',
          p: '1.5rem 1.5rem',
          pl: { sm: '4rem' },
          pr: { sm: '4rem' }
        }}
      >
        <Grid container spacing={2} columns={{ xs: 1, md: 2 }}>
          <Grid  size={1}>
            <ProductImage imgUrl={data.imgUrl} /> 
          </Grid>
          <Grid size={1}>
            <ProductDescription 
              brand={data.brand}
              model={data.model}
              price={data.price}
              cpu={data.cpu}
              ram={data.ram}
              os={data.os}
              displayResolution={data.displayResolution}
              battery={data.battery}
              weight={data.weight}
            />
            <ProductAction productId={productId} options={data.options}/>
          </Grid>
        </Grid>
        
      </Box>
    </Box>
  );
};

export default Detail;