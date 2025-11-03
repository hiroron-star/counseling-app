import React from 'react';
import { Head } from '@inertiajs/react';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function Welcome() {
    return (
        <>
            <Head title="Welcome" />
            <Container maxWidth="lg">
                <Box
                    sx={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            p: 4,
                            textAlign: 'center',
                            maxWidth: 600,
                        }}
                    >
                        <Typography variant="h3" component="h1" gutterBottom>
                            カウンセリングアプリ
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Laravel + Inertia + React + TypeScript + MUI で構築されています
                        </Typography>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}

