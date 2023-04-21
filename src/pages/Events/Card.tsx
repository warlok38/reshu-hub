import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

{
  /* <Box
  sx={{
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: 2,
    p: 2,
    minWidth: 300,
  }}
></Box>; */
}

export default function MediaCard() {
  return (
    <Card
      sx={{
        height: '543px',
        borderRadius: '20px',
        boxShadow: '0px 3px 5px',
        bgcolor: '#F5F5F5',
      }}
    >
      <CardMedia
        sx={{ height: '300px', width: 'auto' }}
        component="img"
        image=""
        title=""
      />
      <CardContent>
        <Typography
          sx={{ mt: '5px' }}
          gutterBottom
          color="#9E9E9E"
          fontWeight={'500'}
          fontSize={'12'}
          letterSpacing={'2'}
          component="div"
        >
          Конкурс
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          color="#rgba(0, 0, 0, 0.87"
          fontWeight={'500'}
          fontSize={'20'}
          letterSpacing={'0.25'}
          component="div"
        >
          Конкурс на получение стипендий Президента и Правительства РФ
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          fontFamily={'Stratos LC Web'}
          color="#rgba(0, 0, 0, 0.87"
          fontWeight={'500'}
          fontSize={'14'}
          letterSpacing={'0.1'}
          component="div"
        >
          8 апреля – 12 мая
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          color="#616161"
          fontWeight={'400'}
          fontSize={'16'}
          letterSpacing={'0.5'}
          component="div"
        >
          К участию приглашаются ученики 10–11-х классов.
        </Typography>
      </CardContent>
    </Card>
  );
}
