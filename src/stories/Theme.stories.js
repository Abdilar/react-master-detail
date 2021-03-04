import React from 'react';
import MasterDetail from '../index';

import "./Story.style.scss";

export default {
  title: "Theme",
  component: MasterDetail
}

export const className = () => {
  const customClass = {
    align: 'color-white',
    alignIcon: 'color-muted',
    detail: 'color-blue',
    detailBody: 'color-light-blue',
    detailHeader: 'color-dark-blue',
    detailWrapper: 'color-lighten-blue',
    master: 'color-green',
    masterBody: 'color-light-green',
    masterHeader: 'color-dark-green',
    masterWrapper: 'color-lighten-green',
    wrapper: 'color-red'
  };

  return (
    <MasterDetail className={customClass}>
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
}
