import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  IconButton,
  Box,
} from '@mui/material';
import {
  FavoriteBorderOutlined,
  ChatBubbleOutlineOutlined,
  ShareOutlined,
} from '@mui/icons-material';

export function MediaCard() {
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
        image="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png"
        title="Image Title"
      />
      <CardContent>
        <Typography
          sx={{ mt: '5px' }}
          gutterBottom
          color="#9E9E9E"
          fontWeight="500"
          fontSize="12px"
          letterSpacing="2px"
          component="div"
        >
          Конкурс
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          gutterBottom
          color="#000000DE"
          fontWeight="600"
          fontSize="20px"
          letterSpacing="0.25px"
          component="div"
        >
          Конкурс на получение стипендий Президента и Правительства РФ
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          fontFamily="Stratos LC Web"
          color="#rgba(0, 0, 0, 0.87"
          fontWeight="700"
          fontSize="14px"
          letterSpacing="0.1px"
          component="div"
        >
          8 апреля – 12 мая
        </Typography>
        <Typography
          sx={{ mt: '5px' }}
          color="#616161"
          fontWeight="400"
          fontSize="16px"
          letterSpacing="0.5px"
          component="div"
        >
          К участию приглашаются ученики 10–11-х классов.
        </Typography>
        <Box sx={{ pt: '5px' }}>
          <IconButton sx={{ color: '#FF526D', pr: '24px' }}>
            <FavoriteBorderOutlined />
          </IconButton>
          <IconButton sx={{ color: '#FF526D', pr: '24px' }}>
            <ChatBubbleOutlineOutlined />
          </IconButton>
          <IconButton sx={{ color: '#FF526D' }}>
            <ShareOutlined />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}
