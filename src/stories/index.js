import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
// import LoginForm from './LoginForm';

// storiesOf('Welcome', module)
//   .add('to Storybook', () => <div>Welcome to Storybook</div>);

// storiesOf('LoginForm', module)
//   .add('empty', () => <LoginForm />);

storiesOf('Button', module)
  .add('with text', () => <button>story book</button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
