import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, CardActions } from '@mui/material';
import BasicRating from './Rating';
import { motion } from 'framer-motion';

function BodyCard() {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.1 }}
      >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="http://myds.jp/animal/rept/g-iguana/b.gif"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
              グリーンイグアナ
            </Typography>
            <Typography variant='body2' color="text.secondary">
              グリーンイグアナは、中央アメリカから南アメリカにかけての熱帯雨林の水辺周辺に生息し、全長120〜180cmとイグアナ科の中でも大型で、
              ペットとしても人気がある。幼体は鮮やかな緑色だが、成長するにつれ色味は褪せていき、オスは背中に長いたてがみ状のうろこが発達する。
              地上を速く走り、木登りや泳ぎも上手い。主に草食性で植物の葉、花、果実等を食べるが、幼体時は昆虫なども食べる。原産国の多くでは食用として利用されている。
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <BasicRating/>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BodyCard