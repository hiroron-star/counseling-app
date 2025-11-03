import React from 'react';
import { Head, Link } from '@inertiajs/react';
import { Container, Typography, Box, Paper, Button, Stack } from '@mui/material';
import AppLayout from '@/Components/Layouts/AppLayout';

export default function Welcome() {
    return (
        <AppLayout title="ホーム">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        minHeight: 'calc(100vh - 64px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        py: 8,
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 6,
                            textAlign: 'center',
                            maxWidth: 600,
                            width: '100%',
                        }}
                    >
                        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                            カウンセリングナビ
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                            あなたに最適なカウンセラーを見つけましょう
                        </Typography>
                        <Stack direction="row" spacing={2} justifyContent="center">
                            <Button
                                component={Link}
                                href="/counsel/kaunse"
                                variant="contained"
                                color="primary"
                                size="large"
                            >
                                カウンセラーを探す
                            </Button>
                        </Stack>
                    </Paper>
                </Box>
            </Container>
        </AppLayout>
    );
}

