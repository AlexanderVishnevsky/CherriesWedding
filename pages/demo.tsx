import { useState } from 'react';

import { Box, Button, Container, Stack } from '@mui/material';

const DemoPage = () => {
    const [local, setLocal] = useState<string | undefined>();

    const getData = async () => {
        try {
            const data = await fetch('/api/setData').then((data) => data.json());
            setLocal(data);
        } catch (e) {}
    };

    const setData = async () => {
        try {
            const response = await fetch('/api/setData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ type: 'approve', form: 'submit' }),
            });
            const data = await response.json();
            setLocal(data);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Container maxWidth={'mobileLarge'}>
            <Box sx={{ width: '100%', p: 20 }}>
                <Stack spacing={2}>
                    <Button variant={'outlined'} color={'primary'} onClick={getData}>
                        Get data
                    </Button>
                    <Button variant={'outlined'} color={'primary'} onClick={setData}>
                        Set data
                    </Button>
                    <br />
                    <br />
                    {local && <span style={{ color: 'white' }}>{local}</span>}
                </Stack>
            </Box>
        </Container>
    );
};

export default DemoPage;
