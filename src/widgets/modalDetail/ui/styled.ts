import { Dialog as MUIDialog, IconButton, styled } from '@mui/material';

export const Dialog = styled(MUIDialog)`
  .MuiDialog-paper {
    position: relative;
    overflow: visible;
    border-radius: 30px;
    width: 100%;
    max-width: 1104px;
  }
`;

export const Wrapper = styled('div')`
  display: flex;
  column-gap: ${({ theme }) => theme.spacing(6)};
  height: 644px;
  border-radius: 30px;
  border: 3px solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Container = styled('div')<{ onlyText?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  row-gap: ${({ theme }) => theme.spacing(4)};
  padding: ${({ theme }) => theme.spacing(4)};
  padding-left: ${({ theme, onlyText }) => (onlyText ? theme.spacing(4) : 0)};
  width: 100%;
  max-width: ${({ onlyText }) => (onlyText ? 'unset' : '404px')};
  //TODO временное решение из за косяка плагина.
  //После фикса раскоментить код ниже
  ${({ theme, onlyText }) => `
   @media screen and (max-width: ${theme.breakpoints.values.md}px) {
    max-width: ${onlyText ? 'unset' : '354px'};
   }
  `}/* @media screen and (max-width: ${({ theme }) =>
    theme.breakpoints.values.md}px) {
    width: 510px;
  } */
`;

//TODO: добавить экшен кнопки
export const Actions = styled('div')`
  height: 32px;
  background-color: ${({ theme }) => theme.palette.text.disabled};
`;

export const Thumb = styled('div')`
  position: relative;
  display: block;
  width: 100%;
  cursor: pointer;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.palette.primaryLighter.main};
  height: 386px;
  transform: translateY(0px);
`;

export const CloseButton = styled(IconButton)`
  position: absolute;
  top: -48px;
  right: -64px;
  padding: ${({ theme }) => theme.spacing(2)};
  color: ${({ theme }) => theme.palette.primary.contrastText};
  svg {
    padding: ${({ theme }) => theme.spacing(1)};
    width: 40px;
    height: 40px;
    border: 3px solid;
    border-color: ${({ theme }) => theme.palette.primary.contrastText};
    border-radius: 50%;
  }

  //TODO добавить screen and после фикса расширинея
  @media (max-width: ${({ theme }) => theme.breakpoints.values.md}px) {
    top: -60px;
    right: -8px;
  }
`;
