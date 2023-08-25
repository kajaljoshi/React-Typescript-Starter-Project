import * as React from 'react'
import { Box, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import './index.css'
const Header = (): JSX.Element => {
    return (
        <>
            <Box className="Header" sx={{ mb: 2 }}>
                <Box
                    sx={{
                        m: 1,
                        p: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <HomeIcon />
                        <Typography variant="h5" sx={{ ml: 1 }}>
                            {' '}
                            Test Header
                        </Typography>
                    </Box>
                    <Box>
                        <AccountCircleIcon />
                    </Box>
                </Box>
            </Box>
        </>
        // <Box className="Header">
        //     <Flex
        //         vAlignContent={'center'}
        //         paddingX="space150"
        //         paddingY="space50"
        //     >
        //         <Flex vAlignContent={'center'}>
        //             <ProductHomeIcon
        //                 decorative={false}
        //                 title="Description of icon"
        //                 size="sizeIcon50"
        //             />
        //             <Heading as="h1" variant="heading20" marginBottom="space0">
        //                 <span style={{ marginLeft: '2vh' }}>Test Demo</span>
        //             </Heading>
        //         </Flex>
        //         <Flex grow hAlignContent="right">
        //             <Avatar size="sizeIcon50" name="Kajal Joshi" />
        //         </Flex>
        //     </Flex>
        // </Box>
    )
}

export default Header
