import React from 'react';
import Button from '@mui/material/Button';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import {
    Card,
    CardContent,
    CardMedia,
    Typography,
  } from '@mui/material';


  

  
  export function MediaCard() {

    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps['scroll']>('paper');

    const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
            descriptionElement.focus();
        }
        }
    }, [open]);

    return (
        <div>
        <Card
        onClick={handleClickOpen('body')}
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
                        Вы знаете, как важно иметь надежного партнера, который
                        поможет вам решить сложные задачи и достичь поставленных
                        целей. Именно поэтому мы представляем вам ReshuHube - вашего
                        надежного партнера в бизнесе, образовании и личной жизни.
                    </Typography>
            </CardContent>  
        </Card>
        <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Оборудование на борту ReshUCube-1</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
           <span style={{color: 'black'}}>Процессорные модули на базе отечественных процессоров: 1906ВМ016 (100 МГц, Leon4, АО «НИИЭТ», Воронеж), 
           1986ВЕ8Т (100 МГц, ARM, «Миландр», Зеленоград), 1892ВМ12АТ (100 МГц, MIPS, АО НПЦ «ЭЛВИС», Зеленоград).
           Маршрутизатор SpaceWire (3 порта, скорость до 100Мбит/с,
           Встроенный RMAP-контроллер) на базе ПЛИС К5578ТС094 (АО «ВЗПП-С», Воронеж)
           Счетчики Гейгера (жесткое β-излучения и γ-излучение)
           Датчики накопленной дозы на базе различных типов транзисторов
           Сцинтилляционные диоды (γ-излучение).
           Набор магнитометров
           Температурные датчики
           Гироскопы и акселерометры
           Камера оптического диапазона</span>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
  