import * as React from 'react';

import { UserEntity } from 'shared/models/api/user/user';
import { useUserAccount } from '../hooks/useUserAccount';
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from '@mui/material';
import { Add, Logout } from '@mui/icons-material';
import { capitalize } from 'lodash';

import { useScreen } from 'shared/hooks/useScreen';
import { useRoles } from 'shared/hooks/useRoles';

type UserAccountProps = {
  user: UserEntity;
};

export const UserAccount = ({ user }: UserAccountProps) => {
  const { isSmallScreen } = useScreen();
  const {
    anchorEl,
    isMenuOpen,
    isLoadingLogout,
    onOpenMenu,
    onCloseMenu,
    onClickAdd,
    onLogout,
  } = useUserAccount();

  const { hasRoles } = useRoles(['admin', 'teacher']);

  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Профиль пользователя">
          <IconButton
            onClick={onOpenMenu}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={isMenuOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isMenuOpen ? 'true' : undefined}
          >
            <Avatar
              sx={{
                width: isSmallScreen ? 32 : 40,
                height: isSmallScreen ? 32 : 40,
                fontSize: isSmallScreen ? '1rem' : '1.25rem',
                bgcolor: (theme) => theme.palette.secondary.main,
              }}
            >
              {capitalize(user.firstName.charAt(0))}
              {capitalize(user.middleName.charAt(0))}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={isMenuOpen}
        onClose={onCloseMenu}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <Box sx={{ py: 2, px: 4 }}>
          <Typography>
            {user.firstName} {user.middleName}
          </Typography>
        </Box>
        <Divider />
        {hasRoles && (
          <MenuItem onClick={onClickAdd}>
            <ListItemIcon>
              <Add fontSize="small" />
            </ListItemIcon>
            Добавить
          </MenuItem>
        )}
        <MenuItem
          onClick={onLogout}
          disabled={isLoadingLogout}
        >
          <ListItemIcon>
            {isLoadingLogout ? (
              <CircularProgress />
            ) : (
              <Logout fontSize="small" />
            )}
          </ListItemIcon>
          Выйти
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
};
