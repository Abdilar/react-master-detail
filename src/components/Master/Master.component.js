import React from 'react';
import PropTypes from "prop-types";
import {randomNumber} from '../../utils/functions';
import * as Component from '../';

const Master = React.forwardRef((props, ref) => {
  const {children, className, id, isActive, bodyClass, headerClass, style: innerStyle, wrapperClass} = props;
  return (
    <div
      id={id}
      ref={ref}
      style={innerStyle}
      className={`master-detail__master master-detail__master--${isActive ? 'active' : 'width-anim'} ${className}`}
    >
      <div className={`master-detail__card ${wrapperClass}`}>
        <Component.MasterHeader id={`${id}-header`} className={headerClass} children={children} />
        <Component.MasterBody id={`${id}-body`} className={bodyClass} children={children}/>
      </div>
    </div>
  );
});

Master.defaultProps = {
  body: '',
  className: '',
  header: '',
  id: `master-${randomNumber(10000)}`,
  isActive: false,
  style: {},
  wrapper: ''
};

Master.propTypes = {
  bodyClass: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  headerClass: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  style: PropTypes.object,
  wrapperClass: PropTypes.string
};

export default Master;
