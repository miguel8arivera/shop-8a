import type { NextPage } from 'next';
import { ShopLayout } from '../components/layouts';
import { Typography } from '@mui/material';

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={'Shop-8a Home'}
      pageDescription={'Store of products Technologies'}
    >
      <Typography variant="h1" component="h1">
        Store
      </Typography>
      <Typography variant="h2" sx={{ mt: 1 }}>
        All products
      </Typography>
    </ShopLayout>
  );
};

export default Home;
