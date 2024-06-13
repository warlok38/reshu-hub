import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';
import { Comments } from 'entities/commets';
import { useParams } from 'react-router';
import { useGetEventDetail } from 'features/events/hooks/useGetEventDetail';
import { useDeleteEvent } from 'features/events/hooks/useDeleteEvent';
import { useRoles } from 'shared/hooks/useRoles';
import { useScreen } from 'shared/hooks/useScreen';
import { dateFormat } from 'shared/utils/format';
import { isDateEquals } from 'features/events/utils/isDateEquals';
import { eventsMock } from 'shared/mocks/events';

const DetailPage = () => {
  const { id } = useParams();

  const { detail } = useGetEventDetail(Number(id));
  const { onDelete } = useDeleteEvent();
  const { hasRoles } = useRoles(['admin', 'teacher']);
  const { isSmallScreen } = useScreen();

  if (!detail) {
    return <div>Мероприятие не найдено</div>;
  }

  return (
    <Stack spacing={6}>
      {hasRoles && (
        <Stack
          direction="row"
          alignItems="center"
          gap={4}
        >
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => onDelete({ id: Number(id) })}
          >
            В архив
          </Button>
        </Stack>
      )}
      <Stack
        direction={isSmallScreen ? 'column-reverse' : 'row'}
        gap={4}
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
              {detail.eventsType.name}. {detail.name}
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
              {detail.subtitle}
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
                  {isDateEquals(detail.dateStart, detail.dateEnd)
                    ? dateFormat(detail.dateStart)
                    : `${dateFormat(detail.dateStart)} - ${dateFormat(
                        detail.dateEnd
                      )}`}
                </span>
                {/* <span
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
                </span> */}
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
            {detail.description}
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

        <Avatar
          alt="Image"
          src={eventsMock.actual[detail.id].image}
          sx={{
            borderRadius: '30px',
            width: isSmallScreen ? '100%' : '520px',
            height: '520px',
          }}
        />
      </Stack>
      <Comments />
    </Stack>
  );
};

export default DetailPage;
