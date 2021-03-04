import React, {useState} from 'react';
import MasterDetail from '../index';

export default {
  title: 'Width Prop',
  component: MasterDetail
}

export const masterWidthStringPX = () => (
  <MasterDetail masterWidth="300px">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>width: 300px</p>
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

export const masterWidthStringPercent = () => (
  <MasterDetail masterWidth="60%">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>width: 60%</p>
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

export const masterWidthNumber = () => (
  <MasterDetail masterWidth={500}>
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>width: 500px</p>
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

export const masterWidthResponsiveMode = () => {
  const masterWidth = {
    xxdt: "40%", // >= 1920px
    xdt: "400px", // >= 1600px
    dt: 300, // >= 1200px
    mdt: 200 // >= 960px
  };
  return (
    <MasterDetail masterWidth={masterWidth}>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body</h2>
          <p>width >= 1920px: 40%</p>
          <p>width >= 1600px: 400px</p>
          <p>width >= 1200px: 300px</p>
          <p>width >= 960px: 200px</p>
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


export const masterMinWidthStringPX = () => (
  <MasterDetail masterMinWidth="300px">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>masterMinWidth: 300px</p>
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

export const masterMinWidthStringPercent = () => (
  <MasterDetail masterMinWidth="30%">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>masterMinWidth: 30%</p>
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

export const masterMinWidthNumber = () => (
  <MasterDetail masterMinWidth={500}>
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>masterMinWidth: 500px</p>
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

export const masterMinWidthResponsiveMode = () => {
  const masterMinWidth = {
    xxdt: "20%", // >= 1920px
    xdt: "250px", // >= 1600px
    dt: 300, // >= 1200px
    mdt: 200 // >= 960px
  };
  return (
    <MasterDetail masterMinWidth={masterMinWidth}>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body</h2>
          <p>masterMinWidth >= 1920px: 20%</p>
          <p>masterMinWidth >= 1600px: 250px</p>
          <p>masterMinWidth >= 1200px: 300px</p>
          <p>masterMinWidth >= 960px: 200px</p>
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

export const detailMinWidthStringPX = () => (
  <MasterDetail detailMinWidth="300px">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>detailMinWidth: 300px</p>
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

export const detailMinWidthStringPercent = () => (
  <MasterDetail detailMinWidth="30%">
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>detailMinWidth: 30%</p>
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

export const detailMinWidthNumber = () => (
  <MasterDetail detailMinWidth={500}>
    <div>
      <div>Master header</div>
      <div>
        <h2>Master body</h2>
        <p>detailMinWidth: 500px</p>
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

export const detailMinWidthResponsiveMode = () => {
  const detailMinWidth = {
    xxdt: "20%", // >= 1920px
    xdt: "250px", // >= 1600px
    dt: 300, // >= 1200px
    mdt: 200 // >= 960px
  };
  return (
    <MasterDetail detailMinWidth={detailMinWidth}>
      <div>
        <div>Master header</div>
        <div>
          <h2>Master body</h2>
          <p>detailMinWidth >= 1920px: 20%</p>
          <p>detailMinWidth >= 1600px: 250px</p>
          <p>detailMinWidth >= 1200px: 300px</p>
          <p>detailMinWidth >= 960px: 200px</p>
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

masterWidthStringPX.storyName = "Width of master section (string => px)";
masterWidthStringPercent.storyName = "Width of master section (string => %)";
masterWidthNumber.storyName = "Width of master section (Number => px)";
masterWidthResponsiveMode.storyName = "Width of master section (Responsive mode)";
masterMinWidthStringPX.storyName = "Min-width of master section (string => px)";
masterMinWidthStringPercent.storyName = "Min-width of master section (string => %)";
masterMinWidthNumber.storyName = "Min-width of master section (Number => px)";
masterMinWidthResponsiveMode.storyName = "Min-width of master section (Responsive mode)";
detailMinWidthStringPX.storyName = "Min-width of detail section (string => px)";
detailMinWidthStringPercent.storyName = "Min-width of detail section (string => %)";
detailMinWidthNumber.storyName = "Min-width of detail section (Number => px)";
detailMinWidthResponsiveMode.storyName = "Min-width of detail section (Responsive mode)";

