import { ReactNode } from 'react';
import { Box, AppBar, Toolbar, Typography, TextField, Button, Stack } from '@mui/material';
import { Head } from '@inertiajs/react';

export default function AppLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Head title={title} />
      <AppBar position="static" sx={{ bgcolor: '#2fb34a' }}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            カウンセリング.COM
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            <TextField
              size="small"
              placeholder="店舗名で検索"
              variant="outlined"
              sx={{ bgcolor: 'white', borderRadius: 1, minWidth: 240 }}
            />
            <Button variant="contained" sx={{ bgcolor: '#1f8f34', '&:hover': { bgcolor: '#18762a' } }}>
              検索
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9f9f9' }}>{children}</Box>
    </>
  );
}
