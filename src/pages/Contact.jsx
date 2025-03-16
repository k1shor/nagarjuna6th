import { Box, Button, Grid2, TextField, Typography } from '@mui/material'
import React from 'react'

const Contact = () => {
    return (
        <>
            <Box p={5} bgcolor={'#ccddee'}>
                <Grid2 container>
                    <Grid2 item size={{ xs: 12, md: 6 }} bgcolor={'#f9fbe7'} p={5}>
                        <Typography variant='h4' textAlign={'center'} sx={{ textDecoration: 'underline' }} color='secondary'>
                            Address
                        </Typography>
                        <Typography variant='h4' color='info'>
                            Nagarjuna College
                        </Typography>
                        <Typography variant='h5' color='info'>
                            Shankhamul, Lalitpur
                        </Typography>
                        <Typography variant='h5' color='info'>
                            Phone: 01-5432123
                        </Typography>
                        <Typography variant='h6' color='info'>
                            Email : info@nagarjunacollege.com
                        </Typography>
                        <Typography variant='h6' color='info'>
                            Website : www.nagarjunacollege.com
                        </Typography>
                    </Grid2>
                    <Grid2 item size={{ xs: 12, md: 6 }}  p={5} bgcolor={'#f1e1d1'}>
                        <Typography variant='h4' textAlign={'center'} sx={{ textDecoration: 'underline' }} color='secondary'>
                            Contact Form
                        </Typography>
                        <TextField label='E-mail' placeholder='Enter your email here' helperText='eg:something@something.com' required color='success'
                        variant='outlined'
                        fullWidth />
                        <TextField label='Subject' placeholder='' required color='success'
                        variant='outlined'
                        fullWidth />
                        <TextField fullWidth label='message'
                        sx={{mt:2}}
                        multiline
                        rows={5}
                        />

                        <Button variant='contained' color='success' fullWidth sx={{mt:1}} size='small' >Submit</Button>

                    </Grid2>
                    <Grid2 item size={{ xs: 12 }} bgcolor={'#f0f2f1'}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.2132631412164!2d85.32730017549807!3d27.67980277619843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19ca771e9e55%3A0xc94f84d1f057520f!2sNagarjuna%20College%20of%20IT!5e0!3m2!1sen!2snp!4v1740623523091!5m2!1sen!2snp" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Grid2>

                </Grid2>
            </Box>
        </>
    )
}

export default Contact