import React, {useState} from 'react';
import MasterDetail from '../index';

export default {
  title: 'No Detail Prop',
  component: MasterDetail
}

export const noDetail = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <MasterDetail noDetail={true} showDetail={showDetail}>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body</h2>
          <p>You cant show detail section, because noDetail prop is true. try it...</p>
          <div>
            <button type="button" onClick={() => setShowDetail(true)}>Show Detail Section</button>
          </div>
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
};

noDetail.storyName = "Don't show detail section";
