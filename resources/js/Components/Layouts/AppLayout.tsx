import { ReactNode } from 'react';
import { Box, AppBar, Toolbar, Typography, TextField, Button, Stack } from '@mui/material';
import { Head, Link, usePage, router } from '@inertiajs/react';

export default function AppLayout({ title, children }: { title: string; children: ReactNode }) {
  const { props } = usePage();
  const user = (props as any)?.auth?.user;
  return (
    <>
      <Head title={title} />
      <AppBar position="static" sx={{ bgcolor: '#2fb34a' }}>
        <Toolbar sx={{ gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
            カウンセリング.COM
          </Typography>
          {/* Auth menu */}
          <Stack direction="row" spacing={1} alignItems="center" sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {user ? (
              <>
                <Typography variant="body2" sx={{ color: 'white', mr: 1 }}>
                  {user.name}
                </Typography>
                <Button component={Link} href="/dashboard" variant="outlined" sx={{ bgcolor: 'white', color: 'black' }}>
                  マイページ
                </Button>
                <Button onClick={() => router.post('/logout')} variant="contained" sx={{ bgcolor: '#1f8f34', '&:hover': { bgcolor: '#18762a' } }}>
                  ログアウト
                </Button>
              </>
            ) : (
              <>
                <Button component={Link} href="/login" variant="outlined" sx={{ bgcolor: 'white', color: 'black' }}>
                  ログイン
                </Button>
                <Button component={Link} href="/register" variant="contained" sx={{ bgcolor: '#1f8f34', '&:hover': { bgcolor: '#18762a' } }}>
                  会員登録
                </Button>
              </>
            )}
          </Stack>
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
