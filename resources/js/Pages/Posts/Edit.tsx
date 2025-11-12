import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Components/Layouts/AppLayout';
import PostForm from './PostForm';
import { Container, Paper, Typography, Box, Button } from '@mui/material';

type Post = {
    id: number;
    title: string;
    location: string;
    age_group: string;
    gender: string;
    snippet: string;
    comment_count: number;
    status: string;
};

type Props = {
    post: Post;
    ageGroups: string[];
    genders: string[];
    statuses: { value: string; label: string }[];
};

export default function Edit({ post, ageGroups, genders, statuses }: Props) {
    return (
        <AppLayout title="投稿編集">
            <Head title="投稿編集" />
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            投稿を編集
                        </Typography>
                        <Button component={Link} href="/" variant="outlined">
                            戻る
                        </Button>
                    </Box>
                    <PostForm
                        post={post}
                        ageGroups={ageGroups}
                        genders={genders}
                        statuses={statuses}
                        submitRoute={`/posts/${post.id}`}
                        method="put"
                    />
                </Paper>
            </Container>
        </AppLayout>
    );
}

