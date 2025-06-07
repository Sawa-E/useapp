// src/components/layout/AppIcon.tsx

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface AppIconProps {
  /** サイトの表示名 */
  title: string;
  /** サイトの URL (クリック時に開く) */
  url: string;
  /** アイコン画像のパス or URL */
  iconUrl: string;
  /** カードの最大幅 */
  maxWidth: number;
  /** 画像領域の高さ */
  mediaHeight: number;
  /** 画像の幅 */
  mediaWidth: string | number;
}

const AppIcon: React.FC<AppIconProps> = ({
  title,
  url,
  iconUrl,
  maxWidth,
  mediaHeight,
  mediaWidth,
}) => {
  return (
    <Card sx={{ maxWidth, m: 1 }}>
      <CardActionArea
        onClick={() => {
          window.open(url, '_blank', 'noopener,noreferrer');
        }}
      >
        <CardMedia
          component='img'
          image={iconUrl}
          alt={title}
          sx={{
            height: mediaHeight,
            width: mediaWidth,
            objectFit: 'contain',
          }}
        />

        {/* ここをカスタマイズ */}
        <CardContent
          sx={{
            p: 1, // デフォルト 2 (=16px) → 1 (=8px) に
            '&:last-child': { pb: 1 }, // 下部 padding も同様に
          }}
        >
          <Typography
            variant='subtitle2' // subtitle1 → subtitle2
            component='div'
            align='center'
            gutterBottom={false} // デフォルトの margin-bottom を消す
            sx={{
              mb: 0.5, // 必要なら更に微小な余白
              lineHeight: 1.2,
            }}
          >
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default AppIcon;
