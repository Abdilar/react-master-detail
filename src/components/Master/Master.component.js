import React from 'react';
import PropTypes from "prop-types";
import {MASTER_WIDTH} from "../../config/variables";
import {randomNumber} from '../../utils/functions';
import * as Component from '../';

import style from '../index.module.scss';

const Master = React.forwardRef((props, ref) => {
  const {children, defaultWidth, id, isActive, bodyClass, headerClass, style: innerStyle, wrapperClass} = props;
  const activeClass = isActive ? style.master_detail_master__active : style.master_detail_master__width_anim;

  return (
    <div
      id={id}
      ref={ref}
      style={{...innerStyle, width: `${defaultWidth}px`}}
      className={`${style.master_detail_master} ${activeClass}`}
    >
      <div className={`${style.master_detail_card} ${wrapperClass}`}>
        <Component.MasterHeader id={`${id}-header`} className={headerClass} children={children} />
        <Component.MasterBody id={`${id}-body`} className={bodyClass} children={children}/>
      </div>
    </div>
  );
});

Master.defaultProps = {
  body: '',
  defaultWidth: MASTER_WIDTH,
  header: '',
  id: `master-${randomNumber(10000)}`,
  isActive: false,
  style: {},
  wrapper: ''
};

Master.propTypes = {
  bodyClass: PropTypes.string,
  children: PropTypes.any.isRequired,
  defaultWidth: PropTypes.number,
  headerClass: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.object,
  wrapperClass: PropTypes.string
};

export default Master;
