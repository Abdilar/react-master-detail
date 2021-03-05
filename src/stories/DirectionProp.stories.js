import React, {useEffect} from 'react';
import MasterDetail from '../index';

export default {
  title: 'Direction Prop',
  component: MasterDetail
}

export const directionRTL = () => (
  <MasterDetail direction="rtl">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body - RTL Direction</h2>
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

export const directionLTR = () => (
  <MasterDetail direction="ltr">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body - LTR Direction</h2>
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

export const htmlRTLDirection = () => {
  const htmlEl = document.getElementsByTagName('html')[0];
  htmlEl.dir = 'rtl'

  useEffect(() => {
    return () => (htmlEl.dir = '')
  }, []);

  return (
    <MasterDetail>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body - RTL Direction Attribute</h2>
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

export const htmlLTRDirection = () => {
  const htmlEl = document.getElementsByTagName('html')[0];
  htmlEl.dir = 'ltr'

  useEffect(() => {
    return () => (htmlEl.dir = '');
  }, []);

  return (
    <MasterDetail>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body - LTR Direction Attribute</h2>
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

directionRTL.storyName = "RTL Direction prop";
directionLTR.storyName = "LTR Direction prop";
htmlRTLDirection.storyName = "HTML RTL Direction";
htmlLTRDirection.storyName = "HTML LTR Direction";
