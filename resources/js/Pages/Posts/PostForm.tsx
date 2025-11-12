import { FormEventHandler } from 'react';
import {
    Box,
    Button,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useForm } from '@inertiajs/react';

type PostFormProps = {
    post?: {
        title: string;
        location: string;
        age_group: string;
        gender: string;
        snippet: string;
        comment_count: number;
        status: string;
    };
    ageGroups: string[];
    genders: string[];
    statuses: { value: string; label: string }[];
    submitRoute: string;
    method?: 'post' | 'put';
};

export default function PostForm({
    post,
    ageGroups,
    genders,
    statuses,
    submitRoute,
    method = 'post',
}: PostFormProps) {
    const { data, setData, post: postRequest, put, processing, errors } = useForm({
        title: post?.title ?? '',
        location: post?.location ?? '',
        age_group: post?.age_group ?? '',
        gender: post?.gender ?? '',
        snippet: post?.snippet ?? '',
        comment_count: post?.comment_count ?? 0,
        status: post?.status ?? 'closed',
    });

    const submit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (method === 'put') {
            put(submitRoute);
        } else {
            postRequest(submitRoute);
        }
    };

    return (
        <Box component="form" onSubmit={submit} sx={{ mt: 3 }}>
            <Stack spacing={3}>
                <TextField
                    label="タイトル"
                    value={data.title}
                    onChange={(e) => setData('title', e.target.value)}
                    error={Boolean(errors.title)}
                    helperText={errors.title}
                    fullWidth
                    required
                />
                <TextField
                    label="地域"
                    value={data.location}
                    onChange={(e) => setData('location', e.target.value)}
                    error={Boolean(errors.location)}
                    helperText={errors.location}
                    fullWidth
                    required
                />
                <TextField
                    select
                    label="年代"
                    value={data.age_group}
                    onChange={(e) => setData('age_group', e.target.value)}
                    error={Boolean(errors.age_group)}
                    helperText={errors.age_group}
                    fullWidth
                    required
                >
                    {ageGroups.map((group) => (
                        <MenuItem key={group} value={group}>
                            {group}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    select
                    label="性別"
                    value={data.gender}
                    onChange={(e) => setData('gender', e.target.value)}
                    error={Boolean(errors.gender)}
                    helperText={errors.gender}
                    fullWidth
                    required
                >
                    {genders.map((gender) => (
                        <MenuItem key={gender} value={gender}>
                            {gender}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField
                    label="内容（概要）"
                    value={data.snippet}
                    onChange={(e) => setData('snippet', e.target.value)}
                    error={Boolean(errors.snippet)}
                    helperText={errors.snippet}
                    fullWidth
                    multiline
                    minRows={4}
                    required
                />
                <TextField
                    type="number"
                    label="コメント数"
                    value={data.comment_count}
                    onChange={(e) => setData('comment_count', Number(e.target.value))}
                    error={Boolean(errors.comment_count)}
                    helperText={errors.comment_count}
                    fullWidth
                    inputProps={{ min: 0 }}
                />
                <TextField
                    select
                    label="ステータス"
                    value={data.status}
                    onChange={(e) => setData('status', e.target.value)}
                    error={Boolean(errors.status)}
                    helperText={errors.status}
                    fullWidth
                    required
                >
                    {statuses.map((status) => (
                        <MenuItem key={status.value} value={status.value}>
                            {status.label}
                        </MenuItem>
                    ))}
                </TextField>
                <Button type="submit" variant="contained" color="primary" disabled={processing} sx={{ alignSelf: 'flex-start' }}>
                    {method === 'put' ? '更新する' : '投稿する'}
                </Button>
                {errors && (
                    <Box>
                        {Object.values(errors).length > 0 && (
                            <Typography variant="caption" color="error">
                                入力内容を確認してください。
                            </Typography>
                        )}
                    </Box>
                )}
            </Stack>
        </Box>
    );
}

