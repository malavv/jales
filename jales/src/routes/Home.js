import React from 'react';

import { Box, Button, FileInput, Grommet, Heading } from 'grommet';

import Logo from '../assets/logo.jsx';

export default function Home(props) {
    const { loadFileHdl, loadExampleHdl } = props;
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
                                    onClick={() => loadExampleHdl() } />
                            </Box>
                            <Box pad="medium">
                                <FileInput
                                    name="file"
                                    pad="small"
                                    multiple={false}
                                    onChange={event => {
                                        const file = event.target.files[0];
                                        if (file)
                                            loadFileHdl(file);
                                    }}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

        </Grommet>);
}