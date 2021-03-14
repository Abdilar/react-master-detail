import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Center Align Prop',
  component: MasterDetail
}

export const centerAlign = () => (
  <MasterDetail centerAlign={false}>
    <div>
      <div>Master header</div>
      <div>
        <h2>The master section can't center align.</h2>
      </div>
    </div>
  </MasterDetail>
);

centerAlign.storyName = "Center Align";
