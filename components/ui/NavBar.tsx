import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'}>
            <Typography variant="h6">8a |</Typography>
            <Typography sx={{ ml: 0.5 }}>Store</Typography>
          </Link>
        </NextLink>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <NextLink href={'/category/men'} passHref legacyBehavior>
            <Link margin={1}>
              <Button>Men</Button>
            </Link>
          </NextLink>
          <NextLink href={'/category/women'} passHref legacyBehavior>
            <Link margin={1}>
              <Button>Women</Button>
            </Link>
          </NextLink>
          <NextLink href={'/category/kid'} passHref legacyBehavior>
            <Link margin={1}>
              <Button>Kid</Button>
            </Link>
          </NextLink>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        <NextLink href={'/cart'} passHref legacyBehavior>
          <Link margin={0.5}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>
        <Button sx={{ marginLeft: '10px' }}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
