import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const DetailPage = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <Box>
        <Box mb={'15px'}>
          <Typography
            color="#181818"
            fontWeight={'500'}
            fontSize="44px"
            lineHeight={'50px'}
            fontFamily={'Stratos LC Web'}
            fontStyle={'normal'}
          >
            Конкурс молодых ученых Красноярского края
          </Typography>
        </Box>
        <Box mb={'15px'}>
          <Typography
            color="#212121"
            fontWeight={'500'}
            fontSize="24px"
            lineHeight={'32px'}
            fontFamily={'Stratos LC Web'}
            fontStyle={'normal'}
          >
            Проходит прием заявок
          </Typography>
        </Box>
        <Box mb={'15px'}>
          <Typography
            variant="h6"
            style={{
              display: 'flex',
              alignItems: 'center',
              borderLeft: '3px solid #FF526D',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '10px',
                backgroundColor: 'red',
                marginRight: '10px',
              }}
            ></div>
            <div>
              <span
                style={{
                  color: '#FF526D',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '25px',
                  fontFamily: 'Stratos LC Web',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                8 - 12 апреля 2023
              </span>
              <span
                style={{
                  color: '#FF526D',
                  fontWeight: '700',
                  fontSize: '20px',
                  lineHeight: '25px',
                  fontFamily: 'Stratos LC Web',
                  fontStyle: 'normal',
                  textTransform: 'uppercase',
                  display: 'block',
                }}
              >
                ул. Мира, 19
              </span>
            </div>
          </Typography>
        </Box>
        <Box mb={'15px'}>
          <Button
            sx={{
              alignItems: 'center',
              height: '36px',
              borderRadius: '50px',
              bgcolor: '#FF9764',
              boxShadow: '0px 1px 1px',
            }}
            variant="contained"
            disableElevation
          >
            <Typography
              color="#FFFFFF"
              fontWeight="500"
              fontSize="14"
              letterSpacing="1.25"
              textTransform="uppercase"
            >
              Участвовать
            </Typography>
          </Button>
        </Box>
        <Typography
          color="#000000"
          fontWeight={'400'}
          fontSize="18px"
          lineHeight={'21px'}
          letterSpacing="0.15px"
          fontFamily={'Roboto'}
          fontStyle={'normal'}
        >
          <Box mb={2}> Уважаемые коллеги!</Box>
          <Box mb={2}>
            Приглашаем вас принять участие в Конкурсе молодых ученых
            Красноярского края по ракетостроению. Конкурс проводится с целью
            выявления и поддержки талантливых молодых ученых, занимающихся
            проблемами ракетостроения.
          </Box>
          <Box mb={2}>
            Мероприятие состоится в городе Красноярске, и будет проходить в
            период с 8 по 12 апреля 2023 года. Участниками конкурса могут быть
            молодые ученые в возрасте от 14 до 17 лет, занимающиеся
            ракетостроением.{' '}
          </Box>
          <Box mb={2}>
            После регистрации каждому участнику предоставиться возможность
            выбрать тему конкурсной работы. Условия конкурса предполагают
            представление участниками своих научных работ, посвященных
            ракетостроению. Работы должны быть выполнены в соответствии с
            требованиями конкурсной комиссии и представлены не позднее 1 июня
            2023 года.
          </Box>
          <Box mb={2}>
            Победители конкурса будут награждены дипломами и ценными подарками,
            а также получат возможность презентовать свои научные работы на
            региональной конференции, посвященной ракетостроению.
          </Box>
          <Box mb={2}>
            Желаем всем участникам успехов в научной деятельности и надеемся на
            плодотворное сотрудничество в будущем!
          </Box>
        </Typography>
        <Box>
          <div
            style={{
              background: '#F5F5F5',
              borderRadius: '20px',
            }}
          >
            <ul>
              <Typography
                color="#FF526D"
                fontWeight={'600'}
                fontSize="18px"
                lineHeight={'21px'}
                letterSpacing="0.15px"
                fontFamily={'Roboto'}
                fontStyle={'normal'}
              >
                <li>
                  <a
                    href="#"
                    style={{
                      color: '#FF526D',
                    }}
                  >
                    Условия конкурса
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: '#FF526D',
                    }}
                  >
                    Бланк заявки (pdf)
                  </a>
                </li>
              </Typography>
            </ul>
          </div>
        </Box>
      </Box>
      <Box ml={'30px'}>
        <Avatar
          alt="Image"
          src="/images/event6.png"
          sx={{
            borderRadius: '30px',
            width: '520px',
            height: '520px',
          }}
        />
      </Box>
    </Box>
  );
};

export default DetailPage;
