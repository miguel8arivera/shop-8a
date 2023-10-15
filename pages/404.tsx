import { Box, Typography, useMediaQuery } from '@mui/material';
import { ShopLayout } from '../components/layouts';

const PageError404 = () => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const textStyle = isSmallScreen
    ? {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: 'calc(100vh - 200px)',
        justifyContent: 'center',
      }
    : {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: 'calc(100vh - 200px)',
        justifyContent: 'center',
      };

  return (
    <ShopLayout title="page not found" pageDescription="please redirect menu">
      <Box {...textStyle}>
        <Typography
          variant="h1"
          component={'h1'}
          fontSize={100}
          fontWeight={200}
        >
          404
        </Typography>
        <Typography marginLeft={1} fontSize={25}>
          Page Not Found
        </Typography>
      </Box>
    </ShopLayout>
  );
};

export default PageError404;
