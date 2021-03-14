import React from 'react';
import PropTypes from "prop-types";
import {DIRECTION} from "../../config/variables";
import {isEmptyString, randomNumber} from "../../utils/functions";
import * as Component from '../';

import style from '../index.module.scss';

const Detail = React.forwardRef((props, ref) => {
  const {adjustable, bodyClass, canClose, className, children, headerClass, id, isActive, isRTL, renderCloseIcon, wrapperClass} = props;
  const marginClass = !adjustable ? (isRTL ? style.margin_right_15 : style.margin_left_15) : '';
  const directionClass = isRTL ? style.master_detail_detail__rtl : style.master_detail_detail__ltr;
  const activeClass = isActive ? style.master_detail_detail__open : '';
  const html = document.getElementsByTagName('html')[0];
  const direction = isEmptyString(html.dir) && isRTL ? DIRECTION.RTL : '';

  const content = (
    <div
      id={id}
      ref={ref}
      className={`${style.master_detail_detail} ${className} ${directionClass} ${activeClass} ${marginClass}`}
    >
      <div dir={direction} className={`${style.master_detail_card} ${style.position_relative} ${wrapperClass}`}>
        <Component.DetailHeader
          className={headerClass}
          canClose={canClose}
          children={children}
          isRTL={isRTL}
          isActive={isActive}
          renderCloseIcon={renderCloseIcon}
          onClose={() => props.onClose()}
        />
        <Component.DetailBody children={children} className={bodyClass} isRTL={isRTL} />
      </div>
    </div>
  );

  return isActive ? content : null;
});

Detail.defaultProps = {
  adjustable: true,
  bodyClass: '',
  canClose: true,
  className: '',
  headerClass: '',
  id: `detail-${randomNumber(10000)}`,
  isActive: false,
  isRTL: false,
  renderCloseIcon: <Component.CloseIcon />,
  wrapperClass: ''
};

Detail.propTypes = {
  adjustable: PropTypes.bool,
  bodyClass: PropTypes.string,
  canClose: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any.isRequired,
  headerClass: PropTypes.string,
  id: PropTypes.string,
  isActive: PropTypes.bool,
  isRTL: PropTypes.bool,
  renderCloseIcon: PropTypes.element,
  wrapperClass: PropTypes.string,
  onClose: PropTypes.func,
};

export default Detail;
