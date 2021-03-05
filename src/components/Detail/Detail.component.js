import React from 'react';
import PropTypes from "prop-types";
import {DIRECTION} from "../../config/variables";
import {randomNumber} from "../../utils/functions";
import * as Component from '../index';

const Detail = React.forwardRef((props, ref) => {
  const {adjustable, bodyClass, canClose, className, children, headerClass, id, isActive, isRTL, renderCloseIcon, wrapperClass} = props;
  const marginClass = !adjustable ? (isRTL ? 'margin__right__20' : 'margin__left__20') : '';
  const directionClass = `master-detail__detail--${isRTL ? DIRECTION.RTL : DIRECTION.LTR}`;
  const activeClass = isActive ? 'master-detail__detail--open' : '';

  const content = (
    <div
      id={id}
      ref={ref}
      className={`master-detail__detail ${className} ${directionClass} ${activeClass} ${marginClass}`}
    >
      <div className={`master-detail__card position__relative ${wrapperClass}`}>
        <Component.DetailHeader
          className={headerClass}
          canClose={canClose}
          children={children}
          isRTL={isRTL}
          isActive={isActive}
          renderCloseIcon={renderCloseIcon}
          onClose={() => props.onClose()}
        />
        <Component.DetailBody children={children} className={bodyClass} />
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
  renderCloseIcon: <i className="icon-close" />,
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
