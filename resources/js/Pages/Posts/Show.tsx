import { Box, Container, Paper, Stack, Typography, Button } from '@mui/material';
import AppLayout from '@/Components/Layouts/AppLayout';
import { Link } from '@inertiajs/react';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

type Post = {
    id: number;
    title: string;
    location: string;
    age_group: string;
    gender: string;
    snippet: string;
    comment_count: number;
    status: string;
    created_at: string;
};

type Props = {
    post: Post;
};

export default function Show({ post }: Props) {
    return (
        <AppLayout title={post.title}>
            <Box sx={{ bgcolor: '#f6f6f6', pb: 6 }}>
                <Container maxWidth="lg" sx={{ pt: 2 }}>
                    <Typography variant="caption" color="text.secondary" sx={{ mb: 2, display: 'block' }}>
                        カウンセリング.COM &gt; 無料で相談できる教えて掲示板 &gt; {post.title}
                    </Typography>

                    <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
                        <QuestionAnswerIcon sx={{ color: '#d17b00', fontSize: 28 }} />
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            {post.title}
                        </Typography>
                    </Stack>

                    <Paper sx={{ p: 3 }}>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {post.location} {post.age_group} {post.gender}・{new Date(post.created_at).toLocaleDateString()}
                        </Typography>
                        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.9 }}>
                            {post.snippet}
                        </Typography>
                    </Paper>

                    <Box sx={{ mt: 3 }}>
                        <Button component={Link} href="/posts" variant="outlined">
                            一覧に戻る
                        </Button>
                    </Box>
                </Container>
            </Box>
        </AppLayout>
    );
}


