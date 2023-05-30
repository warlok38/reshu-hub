import React from 'react';
import { BreadcrumbsProps as MUIBreadcrumbsProps } from '@mui/material';
import * as S from './styled';
import { BreadcrumbLink } from './BreadcrumbLink';
import { useLocation } from 'react-router-dom';
import { isEmpty } from 'lodash';

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

  if (isEmpty(pathnames) || pathnames.length === 1) {
    return null;
  }

  return (
    <S.Wrapper {...props}>
      {pathnames.map(
        ({ currentPathname, pathname }) =>
          currentPathname && (
            <BreadcrumbLink to={currentPathname}>{pathname}</BreadcrumbLink>
          )
      )}
    </S.Wrapper>
  );
};
