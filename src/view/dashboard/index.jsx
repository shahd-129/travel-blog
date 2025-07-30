import { useGetAllUsersQuery } from '../../redux/api/users';
import { Box, Card, Typography } from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { useGetAllPostsQuery } from '../../redux/api/posts';
import CreateIcon from '@mui/icons-material/Create';
export default function Dashboard() {



    const { data } = useGetAllUsersQuery();
    //  console.log(data?.body?.docs);


    const { data: dataPosts } = useGetAllPostsQuery();
    // console.log(dataPosts);


    return (<>
        <Box display={'flex'}>

            <Card sx={{ mb: 2, p: 2, textAlign: 'center', width: "30%" }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ bgcolor: '#4CAF50', borderRadius: '50%', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <GroupIcon sx={{ color: 'white' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {data?.body?.docs?.length || 0}
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium', direction: 'rtl' }}>
                    users
                </Typography>
            </Card>

            <Card sx={{ mb: 2, p: 2, textAlign: 'center', width: "30%", ml: 2 }}>
                <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ bgcolor: '#5d1279', borderRadius: '50%', p: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CreateIcon sx={{ color: 'white' }} />
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                        {dataPosts?.body?.docs?.length || 0}
                    </Typography>
                </Box>
                <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium', direction: 'rtl' }}>
                    posts
                </Typography>
            </Card>
        </Box>

    </>
    )
}
