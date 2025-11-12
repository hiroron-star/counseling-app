import { Head, Link } from '@inertiajs/react';
import AppLayout from '@/Components/Layouts/AppLayout';
import PostForm from './PostForm';
import { Container, Paper, Typography, Box, Button } from '@mui/material';

type Props = {
    ageGroups: string[];
    genders: string[];
    statuses: { value: string; label: string }[];
};

export default function Create({ ageGroups, genders, statuses }: Props) {
    return (
        <AppLayout title="投稿作成">
            <Head title="投稿作成" />
            <Container maxWidth="md" sx={{ py: 4 }}>
                <Paper sx={{ p: 4 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                            新規投稿
                        </Typography>
                        <Button component={Link} href="/" variant="outlined">
                            戻る
                        </Button>
                    </Box>
                    <PostForm
                        ageGroups={ageGroups}
                        genders={genders}
                        statuses={statuses}
                    submitRoute="/posts"
                    />
                </Paper>
            </Container>
        </AppLayout>
    );
}

