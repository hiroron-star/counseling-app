import { ReactNode } from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
import { Head } from '@inertiajs/react';

export default function AppLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <Head title={title} />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            カウンセリングナビ
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ minHeight: '100vh', bgcolor: '#f9f9f9' }}>{children}</Box>
    </>
  );
}
