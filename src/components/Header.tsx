import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  List,
  ListItem,
  ListItemText,
  Container,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header: React.FC = () => {
  // Typage des états avec `HTMLElement | null`
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState<null | HTMLElement>(null);

  // Gestionnaire pour ouvrir le menu principal
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  // Gestionnaire pour fermer le menu
  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubMenuAnchorEl(null);
  };

  // Gestionnaire pour ouvrir le sous-menu
  const handleSubMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#333' }}>
      <Container>
        <Toolbar>
          <Box display="flex" alignItems="center" flexGrow={1}>
            <a href="https://www.onomohotels.com/">
              <img
                src="https://www.onomohotels.com/app/themes/onomo/public/storage/core/logo_onomo.svg"
                alt="logo"
                style={{ height: '40px' }}
              />
            </a>
          </Box>

          <IconButton
            color="inherit"
            onClick={handleMenuOpen}
            aria-label="menu"
            edge="end"
          >
            <MenuIcon />
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleSubMenuOpen}>
              <Box display="flex" alignItems="center">
                Marques <ExpandMoreIcon />
              </Box>
            </MenuItem>
            <Menu
              anchorEl={subMenuAnchorEl}
              open={Boolean(subMenuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>
                <a
                  href="https://www.onomohotels.com/onomo/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Onomo
                </a>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <a
                  href="https://www.onomohotels.com/allure/"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  Onomo Allure
                </a>
              </MenuItem>
            </Menu>
            <MenuItem>
              <a
                href="https://www.onomohotels.com/hotel/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Hôtels
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://www.onomohotels.com/destination/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Destinations
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://www.onomohotels.com/manger-boire/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Manger & Boire
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://www.onomohotels.com/notre-histoire/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Notre Histoire
              </a>
            </MenuItem>
            <MenuItem>
              <a
                href="https://www.onomohotels.com/contact/"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Contact
              </a>
            </MenuItem>
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
