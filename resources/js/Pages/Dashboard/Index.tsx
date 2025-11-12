// React import is not necessary with new JSX transform, omitted intentionally
import {
    Container,
    Typography,
    Box,
    Paper,
    Button,
    Stack,
    Divider,
    IconButton,
} from '@mui/material';
// Using Box/Stack layout to avoid Grid type issues
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import ForumIcon from '@mui/icons-material/Forum';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import CircleIcon from '@mui/icons-material/Circle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StoreIcon from '@mui/icons-material/Store';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppLayout from '@/Components/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

// ダミーデータ。バックエンド実装後はAPI経由に変更
type Post = {
    id: number;
    title: string;
    location: string;
    age: string;
    gender: string;
    snippet: string;
    comment_count: number;
};

type Props = {
    posts?: Post[];
};

const rankingItems = [
    '再発した神経障害から立ち直りた...',
    '職場に馴染めず、今後のキャリアに悩みます',
    '時々目に見えない人に導かれている感覚になる時がある',
    '娘の彼氏が不安です。',
    '彼女のトラウマに触れました。。。',
    '愛着障害等を持つ娘の恋愛について',
    '今後の進め方について',
    '共依存・精神的虐待から抜け出したい',
    '共依存から抜け出したい',
    '何をどうしたら良いのかわからない',
];

const newStores = [
    {
        id: 1,
        name: '心理カウンセリング優愛',
        description: '★公認心理師による心理カウンセ...',
        image: 'https://via.placeholder.com/60x60?text=Store1',
    },
    {
        id: 2,
        name: 'カウンセリングルーム',
        description: 'あなたの心に寄り添うカウンセリ...',
        image: 'https://via.placeholder.com/60x60?text=Store2',
    },
    {
        id: 3,
        name: 'メンタルケアセンター',
        description: '専門家によるカウンセリングサー...',
        image: 'https://via.placeholder.com/60x60?text=Store3',
    },
];

export default function Welcome({ posts }: Props) {
    const postsToRender = posts ?? [];

    return (
        <AppLayout title="ホーム">
            <Box sx={{ bgcolor: '#f6f6f6', pb: 6 }}>
                <Container maxWidth="lg" sx={{ pt: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
                        <Button component={Link} href="/posts/create" variant="contained" color="primary">
                            新規投稿
                        </Button>
                    </Box>
                    {/* Green tab bar */}
                    <Paper elevation={1} sx={{ bgcolor: '#2fb34a', borderRadius: 1, overflow: 'hidden' }}>
                        <Stack direction="row" spacing={0}>
                            <Button startIcon={<SearchIcon />} sx={{ color: 'white', flex: 1, py: 1.5 }}>
                                カウンセリング店を探す
                            </Button>
                            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.4)' }} />
                            <Button startIcon={<WorkIcon />} sx={{ color: 'white', flex: 1, py: 1.5 }}>
                                求人を探す
                            </Button>
                            <Divider orientation="vertical" flexItem sx={{ bgcolor: 'rgba(255,255,255,0.4)' }} />
                            <Button startIcon={<ForumIcon />} sx={{ color: 'white', flex: 1, py: 1.5 }}>
                                教えて掲示板
                            </Button>
                        </Stack>
                    </Paper>

                    {/* Counts */}
                    <Stack direction="row" spacing={4} sx={{ justifyContent: 'flex-end', mt: 1.5, mb: 2 }}>
                        <Typography variant="body2"><b style={{ color: '#e53935' }}>2600</b> 店舗</Typography>
                        <Typography variant="body2"><b style={{ color: '#e53935' }}>7060</b> 相談</Typography>
                        <Typography variant="body2"><b style={{ color: '#e53935' }}>58768</b> 回答</Typography>
                    </Stack>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
                        {/* Left main content */}
                        <Box>
                            <Paper elevation={1} sx={{ p: 2 }}>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                    <IconButton size="small" sx={{ color: '#d17b00' }}>
                                        <HomeIcon fontSize="small" />
                                    </IconButton>
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                                        全国のカウンセリング店を探す
                                    </Typography>
                                </Stack>

                                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                                    <Box>
                                        {/* Map placeholder */}
                                        <Box
                                            sx={{
                                                height: 280,
                                                bgcolor: '#e8f5e9',
                                                border: '1px solid #c8e6c9',
                                                borderRadius: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                color: '#388e3c',
                                                fontWeight: 700,
                                            }}
                                        >
                                            日本地図（ダミー）
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Stack spacing={1.5}>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    北海道・東北
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    北海道 青森 岩手 秋田 山形 宮城 福島
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    関東
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    東京 神奈川 千葉 埼玉 茨城 栃木 群馬
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    中部
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    愛知 静岡 新潟 長野 岐阜 石川 富山 福井 山梨 三重
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    近畿
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    大阪 兵庫 京都 奈良 滋賀 和歌山
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    中国・四国
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    岡山 広島 山口 鳥取 島根 徳島 香川 愛媛 高知
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                                                    九州・沖縄
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    福岡 佐賀 長崎 熊本 大分 宮崎 鹿児島 沖縄
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </Box>
                                </Box>
                            </Paper>

                            {/* 教えて掲示板・新着投稿セクション */}
                            <Paper elevation={1} sx={{ p: 2, mt: 3 }}>
                                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                    <CircleIcon sx={{ color: '#d17b00', fontSize: 20 }} />
                                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#d17b00' }}>
                                        教えて掲示板・新着投稿
                                    </Typography>
                                </Stack>

                                <Stack spacing={2}>
                                    {postsToRender.length === 0 ? (
                                        <Typography variant="body2" color="text.secondary">
                                            投稿がまだありません。
                                        </Typography>
                                    ) : (
                                        postsToRender.map((post) => (
                                            <Box
                                                key={post.id}
                                                sx={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: 2,
                                                    pb: 2,
                                                    borderBottom: '1px solid #e0e0e0',
                                                    '&:last-child': { borderBottom: 'none' },
                                                }}
                                            >
                                                <HelpOutlineIcon sx={{ color: '#2fb34a', fontSize: 20, mt: 0.5 }} />
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                        {post.title}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                                                        {post.location} {post.age} {post.gender}
                                                    </Typography>
                                                    <Typography variant="body2" color="text.secondary">
                                                        {post.snippet}
                                                    </Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <Button
                                                        size="small"
                                                        sx={{
                                                            bgcolor: '#9e9e9e',
                                                            color: 'white',
                                                            fontSize: '0.75rem',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            minWidth: 'auto',
                                                            '&:hover': { bgcolor: '#757575' },
                                                        }}
                                                    >
                                                        相談終了
                                                    </Button>
                                                    <Typography variant="body2" sx={{ color: '#d17b00', fontWeight: 700, minWidth: '35px' }}>
                                                        {post.comment_count}件
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))
                                    )}
                                </Stack>
                            </Paper>
                        </Box>

                        {/* Right sidebar */}
                        <Box>
                            <Stack spacing={2}>
                                <Paper elevation={1} sx={{ p: 2, bgcolor: '#e8f5e9' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2e7d32', mb: 1 }}>
                                        店舗様はこちら
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="contained" color="success" fullWidth>
                                            店舗登録
                                        </Button>
                                        <Button variant="outlined" color="success" fullWidth>
                                            ログイン
                                        </Button>
                                    </Stack>
                                </Paper>

                                <Paper elevation={1} sx={{ p: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                                        相談したい方はこちら
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="contained" fullWidth startIcon={<PersonIcon />}>
                                            会員登録
                                        </Button>
                                        <Button variant="outlined" fullWidth>
                                            ログイン
                                        </Button>
                                    </Stack>
                                </Paper>

                                {/* お店のサイト完成バナー */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: '#fff', textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                        お店の
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                                        サイト完成
                                    </Typography>
                                    <Box
                                        sx={{
                                            height: 100,
                                            bgcolor: '#fff3e0',
                                            borderRadius: 1,
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        イラスト（ダミー）
                                    </Box>
                                    <Button variant="contained" sx={{ bgcolor: '#2fb34a', '&:hover': { bgcolor: '#1f8f34' } }} fullWidth>
                                        詳細はこちら
                                    </Button>
                                </Paper>

                                {/* 教えてランキング */}
                                <Paper elevation={1} sx={{ p: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                        <EmojiEventsIcon sx={{ color: '#d17b00', fontSize: 20 }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#d17b00' }}>
                                            教えてランキング
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={1}>
                                        {rankingItems.map((item, index) => (
                                            <Typography key={index} variant="body2" sx={{ fontSize: '0.875rem' }}>
                                                {index + 1} {item}
                                            </Typography>
                                        ))}
                                    </Stack>
                                    <Button
                                        endIcon={<PlayArrowIcon />}
                                        sx={{
                                            color: '#2fb34a',
                                            mt: 1,
                                            textTransform: 'none',
                                            fontSize: '0.875rem',
                                            '&:hover': { bgcolor: 'transparent', textDecoration: 'underline' },
                                        }}
                                    >
                                        続きを見る
                                    </Button>
                                </Paper>

                                {/* 新着カウンセリング 店舗 */}
                                <Paper elevation={1} sx={{ p: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                        <StoreIcon sx={{ color: '#e53935', fontSize: 20 }} />
                                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#e53935' }}>
                                            新着カウンセリング 店舗
                                        </Typography>
                                    </Stack>
                                    <Stack spacing={2}>
                                        {newStores.map((store) => (
                                            <Box key={store.id} sx={{ display: 'flex', gap: 1.5 }}>
                                                <Box
                                                    component="img"
                                                    src={store.image}
                                                    alt={store.name}
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: 1,
                                                        objectFit: 'cover',
                                                    }}
                                                />
                                                <Box sx={{ flex: 1 }}>
                                                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 0.5 }}>
                                                        {store.name}
                                                    </Typography>
                                                    <Typography variant="caption" color="text.secondary">
                                                        {store.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        ))}
                                    </Stack>
                                </Paper>
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </AppLayout>
    );
}

