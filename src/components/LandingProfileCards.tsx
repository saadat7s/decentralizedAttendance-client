import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function LandingProfileCards({ title, subtitle, image, children }: { title: string, subtitle: string, image: React.ReactNode, children: React.ReactNode | null }) {
    return (
        <Stack
            justifyContent={'space-between'}
            bgcolor={'primary.100'}
            height={400}
            width={400}
            borderRadius={5}
            position={'relative'}
            overflow={'hidden'}
            className='hover:cursor-pointer'
            sx={{
                ':hover .zoom-image': {
                    transform: 'scale(0.95)'
                }
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.3s ease-in-out',
                }}
                justifyContent={"center"}
                alignItems={'center'}
                className='zoom-image'
            >
                <Stack
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'100%'}
                >

                    {/* <img
                    src={image}
                    alt='a card image'
                    style={{ objectFit: 'cover', borderRadius: '12px', width: '100%', height: '100%' }}
                    /> */}
                    {image}
                </Stack>
            </Box>
            <Stack
                p={3}
                flexGrow={1}
                justifyContent={'space-between'}
                gap={2}
                zIndex={1000}
                bgcolor={'#0C0C0C99'}
                sx={{
                    ':hover .cardButtons': {
                        transform: 'scale(1)',
                        opacity: 1
                    }
                }}
            >
                <Stack
                    className='cardButtons'
                    height={'100%'}
                    width={'100%'}
                    position={'absolute'}
                    top={0}
                    left={0}
                    zIndex={1000}
                    flexDirection={'row'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    gap={2}
                    sx={{
                        transition: 'all 0.2s ease-in-out',
                        transitionDelay: '0.1s',
                        opacity: 0,
                        transform: 'scale(0)',
                        zIndex: 1000
                    }}
                >
                    {children}
                </Stack>

                <Typography
                    variant='h6'
                    fontWeight={'1000'}
                    color={'primary.contrastText'}
                >
                    {title}
                </Typography>

                <Typography
                    color={'secondary.100'}
                >
                    {subtitle}
                </Typography>
            </Stack>
        </Stack>
    )
}

export default LandingProfileCards