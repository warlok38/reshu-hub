import React, { useState } from 'react';
import * as S from '../styled';
import {Grid, Button, Typography} from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export function Banner() {

  const [ isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

    return(
      <S.Box
      sx={{
        height: '697px',
        mt: '22px',
        mb: '64px',
        bgcolor: 'white',
        boxShadow: 5,
        borderRadius: 10,
        minWidth: 300,
      }}
      >
        <S.ImageInner>
              <Grid
                item
                md={4}
                sx={{ position: 'relative', zIndex: 1 }}
                maxWidth={500}
              >
                <Typography variant="h2">ReshUCube</Typography>
                <Typography variant="h6">
                  Маленький космический кубик с большим исследовательским
                  потенциалом
                </Typography>
                <Button
                  variant="contained"
                  style={{ marginTop: 16 }}
                  onClick={handleOpenModal}
                >
                  Смотреть видео
                </Button>
                <Dialog
                open={isModalVisible}
                onClose={handleCloseModal}            
              >
                <DialogTitle style={{ cursor: 'move' }} >
                  HEYYEYAAEYAAAEYAEYAA
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <div>
                    <iframe width="720" height="480" 
                    src="https://www.youtube.com/embed/ZZ5LpwO-An4" title="YouTube video player" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                    gyroscope; picture-in-picture; web-share" >

                    </iframe>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleCloseModal}>
                    Cancel
                  </Button>
                </DialogActions>

              </Dialog>

              </Grid>
            </S.ImageInner>
            <S.Image src="https://media.proglib.io/wp-uploads/2018/07/1_qnI8K0Udjw4lciWDED4HGw.png" /> 
    </S.Box>       
    );
}
