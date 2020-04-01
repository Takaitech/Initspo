import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Nav from '../components/nav';


storiesOf('Nav', module).add('with text', () => {
    return <Nav />
})