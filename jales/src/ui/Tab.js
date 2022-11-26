import React from 'react';

import { Close } from 'grommet-icons';

import { Box, Text } from 'grommet';

function Tab(props) {
    const { active, onClick, filename, onClose } = props;

    return (
        <Box 
          direction='row'
          gap='medium'
          focusIndicator={false}
          onClick={() => onClick(filename)}
          background={active ? 'light-2' : 'dark-2'}>

          <Box alignSelf='center' pad={{left: 'small'}}><Text>{filename}</Text></Box>
          <Box onClick={() => onClose(filename)} pad='small'>
            <Close size='small'/>
          </Box>       
        </Box>
    );
}

export default Tab