import { Favorite, FavoriteBorder, Money, ShoppingBag, ShoppingCart } from '@mui/icons-material'
import { Button, Card, CardActions, CardContent, CardMedia, Checkbox, FormControl, FormControlLabel, FormGroup, Grid2, Link, ListItem, Radio, RadioGroup, Rating, Typography } from '@mui/material'
import React from 'react'

const Products = () => {
    return (
        <>
            <Grid2 container>
                <Grid2 item size={{ xs: 12, sm: 6, md: 4, lg: 3 }} bgcolor={'#f1d1c1'} p={3}>
                    <Typography variant='h4' color='secondary' fontWeight={'bold'}>DEALS</Typography>
                    <ListItem>
                        <Link href='#' fontSize={20} color='success' fontWeight={'bold'}
                            underline='hover'>TOP DEALS</Link>

                    </ListItem>
                    <ListItem>
                        <Link href='#' fontSize={20} color='error' fontWeight={'bold'}
                            underline='hover'>MOST POPULAR</Link>
                    </ListItem>
                    <ListItem>
                        <Link href='#' fontSize={20} color='warning' fontWeight={'bold'}
                            underline='hover'>FLASH SALES</Link>
                    </ListItem>

                    <Typography variant='h4' color='secondary' fontWeight={'bold'} mt={3}>DEPARTMENTS</Typography>
                    <FormGroup>
                        <FormControlLabel control={<Checkbox size='small' />} label='Mobiles' />
                        <FormControlLabel control={<Checkbox size='medium' />} label='Mobiles' />
                        <FormControlLabel control={
                            <Checkbox size='large' icon={<FavoriteBorder />} checkedIcon={<Favorite />}

                            />} label='Mobiles' />
                    </FormGroup>

                    <Typography variant='h4' color='secondary' fontWeight={'bold'} mt={3}>PRICES</Typography>
                    <RadioGroup>
                        <FormControlLabel control={<Radio size='small' />} label='0-50' value={1} />
                        <FormControlLabel control={<Radio size='medium' />} label='50-100' value={2} />
                        <FormControlLabel control={
                            <Radio size='large' icon={<FavoriteBorder />} checkedIcon={<Favorite />}
                            />} label='100-1000' value={3} />
                    </RadioGroup>

                    <Typography variant='h4' color='secondary' fontWeight={'bold'} mt={3}>
                        Avg. Customer Review
                    </Typography>
                    <ListItem>
                        <Link href="#">
                            <Rating readOnly value={1} precision={1} max={5} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#">
                            <Rating readOnly value={2} precision={1} max={5} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#">
                            <Rating readOnly value={3} precision={1} max={5} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#">
                            <Rating readOnly value={4} precision={1} max={5} />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="#">
                            <Rating readOnly value={5} precision={1} max={5} />
                        </Link>
                    </ListItem>



                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 6, md: 8, lg: 9 }} p={3} bgcolor={'#c1d1e1'} >
                    <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            sx={{ height: 140 }}
                            image="./carousel/5.jpg"
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lizard
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" startIcon={<Money/>} variant='contained'>Buy Now</Button>
                            <Button size="small" variant='outlined' endIcon={<ShoppingBag/>}>
                            <ShoppingCart/>
                            Add to Cart</Button>
                        </CardActions>
                    </Card>
                </Grid2>
            </Grid2>
        </>
    )
}

export default Products