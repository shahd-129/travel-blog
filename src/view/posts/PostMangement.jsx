import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'
import Editor from './editor'
// import Editor from './editor'

export default function PostMangement({ value, onChange, handleSendData }) {

    return (<>

        <Box>
            <Stack spacing={2} mt={1}>
                <TextField
                    placeholder='Title'
                    fullWidth
                    size='small'
                    value={value?.title}
                    onChange={onChange}
                    name='title'
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: "50px",
                            mt: 0.5,
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            }
                        },
                    }}
                />
                <TextField
                    placeholder='Introduction'
                    fullWidth
                    size='small'
                    value={value?.introduction}
                    onChange={onChange}
                    name='introduction'

                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: "50px",
                            mt: 0.5,
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            }
                        },
                    }}
                />


                {/* <TextField
                    placeholder='Image'
                    fullWidth
                    size='small'
                    value={value?.image}
                    onChange={onChange}
                    name='image'

                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: "50px",
                            mt: 0.5,
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            }
                        },
                    }}
                /> */}

                <input type="file" name="image" onChange={onChange} />

                <FormControl
                    size="small"
                    sx={{
                        m: 1, minWidth: 400,
                        mt: 0.5,
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: '50px',
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            },

                        },
                    }}
                    variant="outlined"
                >
                    <InputLabel sx={{
                        '&.Mui-focused': {
                            color: 'black',
                        },
                    }} id="category-label">Category</InputLabel>
                    <Select
                        labelId="category-label"
                        id="category"
                        //   value={newPost.category}
                        value={value?.category}
                        onChange={onChange}
                        name='category'
                        label="Category"
                    >
                        <MenuItem value="EAT">Eat</MenuItem>
                        <MenuItem value="RELAX">Relax</MenuItem>
                        <MenuItem value="TRAVEL">Travel</MenuItem>
                    </Select>
                </FormControl>


                {/* <TextField
                    placeholder="body"
                    fullWidth
                    size='small'
                    value={value?.body}
                    onChange={onChange}
                    name='body'
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            borderRadius: '10px',
                            height: "50px",
                            mt: 0.5,
                            '&.Mui-focused fieldset': {
                                borderColor: 'black',
                            }
                        },
                    }}
                /> */}


                <Editor value={value} onChange={onChange} />

            </Stack>
            <Box py={2} display={"flex"} justifyContent="flex-end" >
                <Button sx={{ color: "black", textTransform: "none" }} >Cancel</Button>
                <Button sx={{ color: "white", bgcolor: "black", borderRadius: "10px", textTransform: "none" }} onClick={handleSendData} >Post</Button>
            </Box>
        </Box>

    </>
    )
}
