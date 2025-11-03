import { Card, CardContent, CardMedia, Typography, CardActionArea, Box } from '@mui/material';

export default function CounselorCard({ counselor }: { counselor: any }) {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 2, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardActionArea sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        <CardMedia
          component="img"
          height="180"
          image={counselor.image || 'https://via.placeholder.com/300x200?text=No+Image'}
          alt={counselor.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            {counselor.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {counselor.category} / {counselor.area}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
