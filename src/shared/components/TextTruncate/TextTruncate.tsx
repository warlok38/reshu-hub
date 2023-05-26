import {
  Typography as Component,
  TypographyProps,
  styled,
} from '@mui/material';

export type TextTruncateProps = {
  lineCount?: number;
};

export const TextTruncate = styled(
  ({ ...props }: TextTruncateProps & TypographyProps) => (
    <Component
      {...props}
      component="span"
    />
  )
)<TextTruncateProps>(({ lineCount = 1 }) => {
  return {
    display: '-webkit-box',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: lineCount,
    WebkitBoxOrient: 'vertical',
  };
});
