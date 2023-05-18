import React, { useState } from 'react';
import * as S from '../styled';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export function MediaCard() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleOpenModal = (scrollType: DialogProps['scroll']) => () => {
    setModalVisible(true);
    setScroll(scrollType);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <React.Fragment>
      <Card
        onClick={handleOpenModal('body')}
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
          <Typography variant="h5">ReshUCube 1</Typography>
          <Typography variant="body1">
            Вы знаете, как важно иметь надежного партнера, который поможет вам
            решить сложные задачи и достичь поставленных целей. Именно поэтому
            мы представляем вам ReshuHube - вашего надежного партнера в бизнесе,
            образовании и личной жизни.
          </Typography>
        </CardContent>
      </Card>
      <Dialog
        open={isModalVisible}
        onClose={handleCloseModal}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          Оборудование на борту ReshUCube-1
        </DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
            <span style={{ color: 'black' }}>
              <S.TextPoint>
                <li>
                  Процессорные модули на базе отечественных процессоров:
                  1906ВМ016 (100 МГц, Leon4, АО «НИИЭТ», Воронеж), 1986ВЕ8Т (100
                  МГц, ARM, «Миландр», Зеленоград), 1892ВМ12АТ (100 МГц, MIPS,
                  АО НПЦ «ЭЛВИС», Зеленоград).
                </li>
                <li>
                  {' '}
                  Маршрутизатор SpaceWire (3 порта, скорость до 100Мбит/с
                </li>
                <li>
                  Встроенный RMAP-контроллер) на базе ПЛИС К5578ТС094 (АО
                  «ВЗПП-С», Воронеж)
                </li>
                <li>Счетчики Гейгера (жесткое β-излучения и γ-излучение)</li>
                <li>
                  Датчики накопленной дозы на базе различных типов транзисторов
                </li>
                <li>Сцинтилляционные диоды (γ-излучение)</li>
                <li>Набор магнитометров</li>
                <li>Температурные датчики</li>
                <li>Гироскопы и акселерометры</li>
                <li>Камера оптического диапазона</li>
              </S.TextPoint>
            </span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
