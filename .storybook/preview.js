import React from 'react';
import { addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';

import '../src/stories/Story.style.scss';

const customViewPorts = {
  xxLargeDesktop: {
    name: 'xx-large Desktop',
    styles: {width: '1920px', height: '600px'},
    type: 'desktop'
  },
  xLargeDesktop: {
    name: 'x-large Desktop',
    styles: {width: '1600px', height: '600px'},
    type: 'desktop'
  },
  mediumDesktop: {
    name: 'Medium Desktop',
    styles: {width: '1200px', height: '600px'},
    type: 'desktop'
  },
  miniDesktop: {
    name: 'Mini Desktop',
    styles: {width: '960px', height: '600px'},
    type: 'desktop'
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  story => <div className="story">{story()}</div>,
  (storyFn, context) => withConsole()(storyFn)(context),
];

addParameters(withA11y);
addParameters({
  backgrounds: {
    default: 'muted',
    values: [
      {
        name: 'muted',
        value: '#eaeaea',
      },
      {
        name: 'white',
        value: '#fff',
      },
    ],
  },
  viewport: {viewports: customViewPorts}
})
