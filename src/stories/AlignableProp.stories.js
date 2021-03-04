import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Align-able Prop',
  component: MasterDetail
}

export const nonAdjustable = () => (
  <MasterDetail adjustable={false}>
    <div>
      <div>Master header</div>
      <div>
        <h2>Master and detail sections are not adjustable</h2>
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

export const adjustable = () => (
  <MasterDetail adjustable={true}>
    <div>
      <div>Master header</div>
      <div>
        <h2>Master and detail sections are adjustable</h2>
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

nonAdjustable.storyName = "Non-adjustable";
adjustable.storyName = "Adjustable";
