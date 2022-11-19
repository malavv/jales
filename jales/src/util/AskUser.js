import React from 'react';
import { Layer, Box, Button, Form, FormField, TextInput } from 'grommet';

export default function AskUser(props) {
    const { visible, title, submitLbl, onSubmit} = props;

return (<>
        {visible && (
            <Layer
                onEsc={() => onSubmit(null)}
                onClickOutside={() => onSubmit(null)}>

                <Box>
                    <Form onSubmit={({ value }) => onSubmit(value?.name)}>
                        <FormField name="name" htmlFor="textinput-id" label={title}>
                            <TextInput id="textinput-id" autoFocus name="name" />
                        </FormField>
                        <Box gap="medium">
                            <Button type="submit" primary label={submitLbl} />
                        </Box>
                    </Form>
                </Box>
            </Layer>
        )}
    </>)
}