import React from 'react';
import { Link } from 'shared/components/Link';
import { headerRoutes } from 'shared/models';
import { useTranslation } from 'react-i18next';
import * as S from './styled';
import { useScreen } from 'shared/hooks/useScreen';
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from '@mui/material';
import { useNavMenu } from '../hooks/useNavMenu';
import { Menu as MenuIcon } from '@mui/icons-material';

export function NavMenu() {
  const { t } = useTranslation();
  const { isSmallScreen } = useScreen();

  const { isOpen, onOpen, onClose } = useNavMenu();

  return (
    <React.Fragment>
      {isSmallScreen ? (
        <IconButton onClick={onOpen}>
          <MenuIcon />
        </IconButton>
      ) : (
        <S.Wrapper>
          {headerRoutes.public.map(({ name, path }) => (
            <Link
              key={path}
              to={path}
            >
              {t(name)}
            </Link>
          ))}
        </S.Wrapper>
      )}

      <Drawer
        open={isOpen}
        onClose={onClose}
      >
        <List sx={{ width: 200 }}>
          {headerRoutes.public.map(({ name, path }) => (
            <ListItem
              key={path}
              disablePadding
            >
              <ListItemButton>
                <Link to={path}>{t(name)}</Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}
