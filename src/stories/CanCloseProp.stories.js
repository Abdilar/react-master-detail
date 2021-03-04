import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Can Close Prop',
  component: MasterDetail
}

export const canNotClose = () => (
  <MasterDetail canClose={false}>
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

export const canClose = () => (
  <MasterDetail canClose={true}>
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


canClose.storyName = "Can close detail section";
canNotClose.storyName = "Can not close detail section";
