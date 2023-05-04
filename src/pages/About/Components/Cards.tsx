import React from 'react';
import * as S from '../styled';
import { MediaCard } from './MediaCard';
import { MediaCard2 } from './MediaCard2';
import {Grid,Typography,Box} from '@mui/material';


  export function Cards() {
    return(
        <Box sx={{ width: '100%', mb: '32px' }}>

            <Typography
            variant="h4"
            sx={{ mb: 8 }}
            >
                Спутники
            </Typography>

            <Grid
            container
            rowSpacing={7}
            columnSpacing={{ xs: 7, sm: 7, md: 7 }}
            >
                <Grid
                item
                xs={4}
                >
                    <MediaCard />
                </Grid>

                <Grid
                item
                xs={4}
                >
                    <MediaCard2 />
                </Grid>

                <Grid
                item
                xs={4}
                >
                    <MediaCard />
                </Grid>

                <Grid
                item
                xs={4}
                >
                    <MediaCard />
                </Grid>

                <Grid
                item
                xs={4}
                >
                    <MediaCard />
                </Grid>

            </Grid>

        </Box>
    );
}