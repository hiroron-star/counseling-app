import { Box, Paper, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';

export default function SidebarFilter() {
  return (
    <Paper sx={{ width: 240, p: 2, flexShrink: 0 }}>
      <Typography variant="h6" gutterBottom>
        絞り込み検索
      </Typography>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>地域</InputLabel>
        <Select defaultValue="">
          <MenuItem value="tokyo">東京</MenuItem>
          <MenuItem value="osaka">大阪</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>カテゴリ</InputLabel>
        <Select defaultValue="">
          <MenuItem value="career">キャリア</MenuItem>
          <MenuItem value="mental">メンタル</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" fullWidth>
        検索
      </Button>
    </Paper>
  );
}
