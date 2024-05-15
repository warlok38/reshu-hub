import React from 'react';
import SVG from 'react-inlinesvg';
import logoPrimary from './logoPrimary.svg';
import logoSecondary from './logoSecondary.svg';
import logoSmall from './logoSmall.svg';
import * as S from './Logo.styled';

type LogoVariants = 'primary' | 'secondary' | 'small';

type LogoProps = {
  variant?: LogoVariants;
};

export function Logo({ variant = 'primary' }: LogoProps) {
  const iconVariants: Record<LogoVariants, string> = {
    primary: logoPrimary,
    secondary: logoSecondary,
    small: logoSmall,
  };

  return (
    <S.Wrapper>
      <SVG src={iconVariants[variant]} />
    </S.Wrapper>
  );
}
