import React, { useEffect, useState } from 'react';

import { Box, Button, FileInput, Grommet, Heading } from 'grommet';

import Logo from '../assets/logo.jsx';

export default function Home() {

    return (
        <Grommet full>
            <Box align="center" background="graph-2" fill>

                <Box flex align='center' justify='center' direction='row'>
                    <Box>
                        <Logo alt="Jales Logo" height="500px" width="500px" />
                    </Box>
                    <Box>
                        <Heading level="2">Jales</Heading>

                        <Box >
                            <Box pad="medium">
                                <Button
                                    label="Load Example"
                                    primary
                                    onClick={() => alert('hello, world')} />
                            </Box>
                            <Box pad="medium">
                                <FileInput
                                    name="file"
                                    pad="small"
                                    onChange={event => {
                                        const fileList = event.target.files;
                                        for (let i = 0; i < fileList.length; i += 1) {
                                            const file = fileList[i];
                                        }
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>

        </Grommet>);
}