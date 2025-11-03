import { Grid, Box, Container, Typography } from '@mui/material';
import SidebarFilter from '@/Components/SidebarFilter';
import CounselorCard from '@/Components/CounselorCard';
import AppLayout from '@/Components/Layouts/AppLayout';

// ダミーデータ。バックエンド実装後はAPI経由に変更
const counselors = [
  { id: 1, name: '山田 花子', category: '心理カウンセラー', area: '東京', image: 'https://via.placeholder.com/300x200?text=山田+花子' },
  { id: 2, name: '佐藤 太郎', category: 'キャリア相談', area: '大阪', image: 'https://via.placeholder.com/300x200?text=佐藤+太郎' },
  { id: 3, name: '鈴木 美咲', category: '心理カウンセラー', area: '東京', image: 'https://via.placeholder.com/300x200?text=鈴木+美咲' },
  { id: 4, name: '田中 健太', category: 'キャリア相談', area: '大阪', image: 'https://via.placeholder.com/300x200?text=田中+健太' },
  { id: 5, name: '高橋 由美', category: '心理カウンセラー', area: '名古屋', image: 'https://via.placeholder.com/300x200?text=高橋+由美' },
  { id: 6, name: '伊藤 翔', category: 'キャリア相談', area: '東京', image: 'https://via.placeholder.com/300x200?text=伊藤+翔' },
];

export default function CounselIndex() {
  return (
    <AppLayout title="カウンセラー一覧">
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
          カウンセラー一覧
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', md: 'row' } }}>
          <SidebarFilter />
          <Box sx={{ flex: 1 }}>
            <Grid container spacing={3}>
              {counselors.map((c) => (
                <Grid item xs={12} sm={6} md={4} key={c.id}>
                  <CounselorCard counselor={c} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </AppLayout>
  );
}
