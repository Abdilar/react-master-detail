import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Id Prop',
  component: MasterDetail
}

export const idProp = () => (
  <MasterDetail id="test-master-detail">
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


idProp.storyName = "Set Id";
