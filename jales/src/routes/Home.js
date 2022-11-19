import React from 'react';

import { Box, Button, FileInput, Heading } from 'grommet';

import Logo from '../assets/logo.jsx';

export default function Home(props) {
    const { loadFile, loadExample } = props;

    const onLoadEx = () => loadExample();
    // TODO: Handle error from wrong file.
    const onLoadFiles = (e) => loadFile(e.target.files[0]);

    return (
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
                                    onClick={onLoadEx} />
                            </Box>
                            <Box pad="medium">
                                <FileInput
                                    name="file"
                                    pad="small"
                                    multiple={false}
                                    onChange={onLoadFiles}
                                />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>);
}