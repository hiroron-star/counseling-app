import {
    Container,
    Typography,
    Box,
    Paper,
    Button,
    Stack,
    TextField,
    IconButton,
} from '@mui/material';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import SearchIcon from '@mui/icons-material/Search';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AppLayout from '@/Components/Layouts/AppLayout';
import { Link } from '@inertiajs/react';

type Post = {
    id: number;
    title: string;
    location: string;
    age: string;
    gender: string;
    snippet: string;
    comment_count: number;
    status: string;
};

type Props = {
    posts: Post[];
    totalCount?: number;
};

const rankingItems = [
    '再発した神経障害から立ち直りたい...',
    '何もやる気がおきない。36歳、...',
    '友人に慰めの言葉がでない。',
    '接触恐怖症と水恐怖症',
    '本来の感覚へ',
    'もう何年も夫婦らしい会話をして...',
    '子供の友人が自殺を・・',
    '生きづらさとどうの向き合ったら...',
    '娘が将来に絶望して困っています...',
    '妻に対する性的欲求の抑制又は禁...',
];

export default function PostsIndex({ posts, totalCount = 7060 }: Props) {
    const currentPage = 1;
    const perPage = 30;
    const startItem = (currentPage - 1) * perPage + 1;
    const endItem = Math.min(currentPage * perPage, totalCount);

    return (
        <AppLayout title="教えて掲示板">
            <Box sx={{ bgcolor: '#f6f6f6', pb: 6 }}>
                <Container maxWidth="lg" sx={{ pt: 2 }}>
                    {/* Breadcrumbs */}
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                        カウンセリング.COM &gt; 無料で相談できる教えて掲示板
                    </Typography>

                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, gap: 3 }}>
                        {/* Left main content */}
                        <Box>
                            {/* Title with orange icon */}
                            <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                                <QuestionAnswerIcon sx={{ color: '#d17b00', fontSize: 28 }} />
                                <Typography variant="h4" sx={{ fontWeight: 700, color: '#d17b00' }}>
                                    教えて掲示板
                                </Typography>
                            </Stack>

                            {/* Ask Expert Button */}
                            <Button
                                component={Link}
                                href="/posts/create"
                                variant="contained"
                                sx={{
                                    bgcolor: '#2fb34a',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    py: 1.5,
                                    mb: 3,
                                    width: '100%',
                                    '&:hover': { bgcolor: '#1f8f34' },
                                }}
                            >
                                カウンセリングの専門家に質問する
                            </Button>

                            {/* Q&A Search */}
                            <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Q&Aを検索"
                                    variant="outlined"
                                    size="small"
                                    sx={{ bgcolor: 'white' }}
                                />
                                <Button
                                    variant="contained"
                                    sx={{
                                        bgcolor: '#2fb34a',
                                        '&:hover': { bgcolor: '#1f8f34' },
                                        minWidth: 100,
                                    }}
                                    startIcon={<SearchIcon />}
                                >
                                    検索する
                                </Button>
                            </Box>

                            {/* Latest Questions Section */}
                            <Paper elevation={1} sx={{ p: 2, bgcolor: 'white' }}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 2 }}>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <EmojiEventsIcon sx={{ color: '#d17b00', fontSize: 20 }} />
                                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                                            最新の質問
                                        </Typography>
                                    </Stack>
                                    <Typography variant="body2" color="text.secondary">
                                        {startItem}~{endItem}件を表示/全{totalCount}件
                                    </Typography>
                                </Stack>

                                <Stack spacing={2}>
                                    {posts.length === 0 ? (
                                        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center', py: 4 }}>
                                            投稿がまだありません。
                                        </Typography>
                                    ) : (
                                        posts.map((post) => (
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
                                                            bgcolor: post.status === 'closed' ? '#9e9e9e' : '#2fb34a',
                                                            color: 'white',
                                                            fontSize: '0.75rem',
                                                            px: 1.5,
                                                            py: 0.5,
                                                            minWidth: 'auto',
                                                            '&:hover': {
                                                                bgcolor: post.status === 'closed' ? '#757575' : '#1f8f34',
                                                            },
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
                                {/* Statistics */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: 'white' }}>
                                    <Stack spacing={1}>
                                        <Typography variant="body2">
                                            <b style={{ color: '#e53935' }}>2600</b> 店舗
                                        </Typography>
                                        <Typography variant="body2">
                                            <b style={{ color: '#e53935' }}>7060</b> 相談
                                        </Typography>
                                        <Typography variant="body2">
                                            <b style={{ color: '#e53935' }}>58768</b> 回答
                                        </Typography>
                                    </Stack>
                                </Paper>

                                {/* For Stores */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: '#e8f5e9' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#2e7d32', mb: 1 }}>
                                        店舗様はこちら
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                        お店やサイトが無料でPRできます!
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

                                {/* For Consultants */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: '#fff3e0' }}>
                                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#d17b00', mb: 1 }}>
                                        相談したい方はこちら
                                    </Typography>
                                    <Stack direction="row" spacing={1}>
                                        <Button variant="contained" sx={{ bgcolor: '#d17b00', '&:hover': { bgcolor: '#b86900' } }} fullWidth startIcon={<PersonIcon />}>
                                            会員登録
                                        </Button>
                                        <Button variant="outlined" sx={{ borderColor: '#d17b00', color: '#d17b00' }} fullWidth>
                                            ログイン
                                        </Button>
                                    </Stack>
                                </Paper>

                                {/* Advertisement */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: '#fff', textAlign: 'center' }}>
                                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
                                        5分で
                                    </Typography>
                                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
                                        お店のサイト完成
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

                                {/* Ranking */}
                                <Paper elevation={1} sx={{ p: 2, bgcolor: 'white' }}>
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
                            </Stack>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </AppLayout>
    );
}
