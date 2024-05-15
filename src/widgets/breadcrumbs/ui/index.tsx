import React from 'react';
import { BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material';
import * as S from './styled';
import { BreadcrumbLink } from './BreadcrumbLink';
import { useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';
import { headerRoutes } from 'shared/models';

type BreadcrumbsProps = MUIBreadcrumbsProps;

//TODO нужен рефактор. это тестовая версия
export const Breadcrumbs = ({ ...props }: BreadcrumbsProps) => {
  const { pathname } = useLocation();
  let currentPathname: string;

  const pathnames = pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      currentPathname = currentPathname
        ? currentPathname + `/${crumb}`
        : `/${crumb}`;
      return { currentPathname, pathname: crumb };
    });

  if (
    isEmpty(pathnames) ||
    pathnames.length === 1 ||
    pathnames.map(({ currentPathname }) => currentPathname).includes('/admin')
  ) {
    return null;
  }

  return (
    <S.Wrapper {...props}>
      {pathnames.map(({ currentPathname, pathname }) => {
        const title = headerRoutes.public.filter(
          ({ code }) => code === pathname
        )[0]?.name;

        return (
          currentPathname && (
            <BreadcrumbLink to={currentPathname}>
              {title || pathname}
            </BreadcrumbLink>
          )
        );
      })}
    </S.Wrapper>
  );
};
