import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../components/Nav/Nav';


storiesOf('Nav', module).add('with text', () => {
    return <Nav />
}) 