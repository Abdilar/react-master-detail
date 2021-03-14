import React from 'react';
import PropTypes from "prop-types";
import {DIRECTION, MASTER_WIDTH} from "../../config/variables";
import {isEmptyString, randomNumber} from '../../utils/functions';
import * as Component from '../';

import style from '../index.module.scss';

const Master = React.forwardRef((props, ref) => {
  const {centerAlign, children, defaultWidth, id, isActive, isRTL, bodyClass, headerClass, style: innerStyle, wrapperClass} = props;
  const activeClass = !centerAlign || isActive ? style.master_detail_master__active : style.master_detail_master__width_anim;
  const html = document.getElementsByTagName('html')[0];
  const direction = isEmptyString(html.dir) && isRTL ? DIRECTION.RTL : '';

  return (
    <div
      id={id}
      ref={ref}
      style={{...innerStyle, width: `${defaultWidth}px`}}
      className={`${style.master_detail_master} ${activeClass}`}
    >
      <div dir={direction} className={`${style.master_detail_card} ${wrapperClass}`}>
        <Component.MasterHeader id={`${id}-header`} className={headerClass} children={children} isRTL={isRTL} />
        <Component.MasterBody id={`${id}-body`} className={bodyClass} children={children} isRTL={isRTL} />
      </div>
    </div>
  );
});

Master.defaultProps = {
  body: '',
  centerAlign: true,
  defaultWidth: MASTER_WIDTH,
  header: '',
  id: `master-${randomNumber(10000)}`,
  isActive: false,
  isRTL: false,
  style: {},
  wrapper: ''
};

Master.propTypes = {
  bodyClass: PropTypes.string,
  centerAlign: PropTypes.bool,
  children: PropTypes.any.isRequired,
  defaultWidth: PropTypes.number,
  headerClass: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  isRTL: PropTypes.bool,
  style: PropTypes.object,
  wrapperClass: PropTypes.string
};

export default Master;
