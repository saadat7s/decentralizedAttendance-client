import { Box, Button, Grid, Link, MenuItem, Stack, Typography } from '@mui/material'
import React from 'react'
import LandingProfileCards from '../components/LandingProfileCards'

const bannerImage = 'logo192.png'

function LandingPage() {
    return (
        <Stack flexGrow={1} gap={10} px={'75px'} py={'15px'} flex={1}>
            <Stack
                flex={1}
                px={10}
                py={4}
                borderRadius={2}
                gap={3}
                justifyContent={'center'}
                alignItems={'center'}
                minHeight={'50vh'}
            >
                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Typography variant='h3' textAlign={'center'} fontWeight={'bold'}>
                        Revolutionizing Voting Systems
                    </Typography>
                    <Typography textAlign={'center'} variant='h6' color={'grey'}>
                        Trust Vote is a blockchain powered decentralized electronic voting system designed to ease the process of Voting.
                    </Typography>
                </Stack>

                <Stack direction={'row'} gap={3} justifyContent={'space-between'}>

                    <Stack>
                        <Typography
                            color={'primary.200'}
                        >
                            Powered by
                        </Typography>
                        <Stack direction={'row'} gap={2} alignItems={'center'}>
                            <img
                                src={'sol.png'}
                                height={100}
                                width={100}
                                alt='solana logo'
                            />
                            <Typography color={'primary.100'} fontWeight={'bold'} variant='h3'>
                                SOLANA
                            </Typography>
                        </Stack>
                    </Stack>

                </Stack>
            </Stack>

            {/* ----------------------second screen--------------------------- */}
            <Grid container>

                <Grid item xs={6} px={1}>
                    <Typography variant='h4' fontWeight={'bold'} color={'primary.100'}>
                        The Problem
                    </Typography>

                    <Stack gap={3}>
                        <Typography variant='subtitle1' sx={{ textWrap: 'wrap' }}>
                            Hosting an election in Pakistan is expensive, troublesome and hard to manage. There has been claims for discrepencies, abuse of control and what not which has made the interest in democracy and voter turn out percentage lowest in the decade.
                        </Typography>

                        <Typography variant='subtitle1' sx={{ textWrap: 'wrap' }}>
                            Due to lower turn out rate, the allocated budget of a voter (375 PKR/voter) spikes all the way to 778 PKR/voter. That is more than 50% of increase.
                        </Typography>
                    </Stack>
                </Grid>

                <Grid item overflow={'hidden'} p={1} border={'1px solid'} borderRadius={2} borderColor={'secondary.200'}>
                    <img
                        src={'/logo192.png'}
                        width={400}
                        height={300}
                        alt='some data showing voter turnout percentage'
                    />
                    <Typography variant='caption' textAlign={'center'} width={'100%'}>
                        <Link target='_blank' href='https://pide.org.pk/research/the-economic-and-environmental-cost-of-election-2024/'>
                            Pakistan Institute of Development Economics
                        </Link>
                    </Typography>
                </Grid>

            </Grid>

            {/* -------------------------------------third screen--------------------------- */}
            <Stack direction={'row'} gap={5} justifyContent={'center'} alignItems={'center'} flexWrap={'wrap'}>
                <LandingProfileCards
                    title='Voter Profile'
                    subtitle='Voter Profiles are used to vote for Candidates representing any of the Constituencies and Assemblies.'
                    image={bannerImage}
                    children={
                        <>
                            <Button variant='contained' sx={{ height: 'fit-content' }}>Login</Button>
                            <Button variant='contained' sx={{ height: 'fit-content' }}>Register</Button>
                        </>
                    }

                />

                <LandingProfileCards
                    title={'Candidate Profile'}
                    subtitle='Candidates need a complete and verified profile to be elected for an Election.'
                    image={bannerImage}
                    children={
                        <>
                            <Button variant='contained' sx={{ height: 'fit-content' }}>Login</Button>
                            <Button variant='contained' sx={{ height: 'fit-content' }}>Register</Button>
                        </>
                    }
                />

                <LandingProfileCards
                    title='Admin Profile'
                    subtitle='Admin Profile has the authority to schedule voting session, add constituencies, list political parties and approve candidate profiles.'
                    image={bannerImage}
                    children={
                        <>
                            <Button variant='contained' sx={{ height: 'fit-content' }}>Login</Button>
                        </>
                    }
                />

            </Stack>


        </Stack >
    )
}

export default LandingPage