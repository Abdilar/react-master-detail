import React from 'react';
import MasterDetail from '../index';
import {number, text, boolean, radios} from '@storybook/addon-knobs';

export default {
  title: 'Editable Example',
  component: MasterDetail
}

export const example = () => (
  <MasterDetail
    id={text('ID', 'unique-id')}
    adjustable={boolean('Adjustable', true)}
    canClose={boolean('Can Close', true)}
    centerAlign={boolean('Can Center Align', true)}
    noDetail={boolean('No Detail', false)}
    showDetail={boolean('Show Detail', true)}
    detailMinWidth={number('Detail min-width (px)', 300)}
    masterWidth={number('Master width (px)', 600)}
    masterMinWidth={number('Master min-width (px)', 400)}
    direction={radios('Direction', {rtl: 'rtl', ltr: 'ltr'}, 'ltr')}
  >
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
      </div>
    </div>
    <div>
      <div>Detail header</div>
      <div>
        <h2>Detail body</h2>
      </div>
    </div>
  </MasterDetail>
);
