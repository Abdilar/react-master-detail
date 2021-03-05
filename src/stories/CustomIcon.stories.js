import React from 'react';
import MasterDetail from '../index';

export default {
  title: 'Custom Icon Prop',
  component: MasterDetail
}

export const renderAdjustIcon = () => {
  const icon = <span className="icon">&#8633;</span>;

  return (
    <MasterDetail renderAdjustIcon={icon}>
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
  )
};

export const renderCloseIcon = () => {
  const icon = <span className="icon">&#8594;</span>;

  return (
    <MasterDetail renderCloseIcon={icon}>
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
  )
};

renderAdjustIcon.storyName = "Adjust Icon";
renderCloseIcon.storyName = "Close Icon";
