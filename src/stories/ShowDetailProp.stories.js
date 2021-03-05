import React, {useState} from 'react';
import MasterDetail from '../index';

export default {
  title: 'Show Detail Prop',
  component: MasterDetail
}

export const showDetail = () => {
  const [showDetail, setShowDetail] = useState(true);

  return (
    <MasterDetail showDetail={showDetail} onClose={() => setShowDetail(false)}>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body</h2>
          <div>
            <button type="button" onClick={() => setShowDetail(!showDetail)}>{!showDetail ? 'Show' : 'Close'} Detail Section</button>
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
  )
};

showDetail.storyName = "Show detail section";
