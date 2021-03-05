import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Events',
  component: MasterDetail
}

export const onClose = () => (
  <MasterDetail onClose={() => console.log('Detail section closed')}>
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


onClose.storyName = "onClose";
