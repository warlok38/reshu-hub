import React from 'react';
import * as S from '../styled';
import {Grid, Button, Typography} from '@mui/material';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


export function Banner() {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
                  onClick={handleClickOpen}
                >
                  Смотреть видео
                </Button>
                <Dialog
                open={open}
                onClose={handleClose}            
              >
                <DialogTitle style={{ cursor: 'move' }} >
                  HEYYEYAAEYAAAEYAEYAA
                </DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <div>
                    <iframe width="560" height="315"
                     src="https://www.youtube.com/embed/ZZ5LpwO-An4" 
                     title="YouTube video player" 
                     allow="accelerometer; autoplay; clipboard-write; 
                     encrypted-media; gyroscope; picture-in-picture; web-share"
                      ></iframe>
                    </div>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button autoFocus onClick={handleClose}>
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
