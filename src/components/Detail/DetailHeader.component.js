import React from 'react';
import PropTypes from "prop-types";
import {BODY_PROP, DIRECTION} from "../../config/variables";
import {isArray} from '../../utils/functions';

const DetailHeader = (props) => {
  const {canClose, children, className, isActive, isRTL, renderCloseIcon} = props;
  const detailHeader = isArray(children) ?
    (isArray(children[1].props.children) && !children[1].props.hasOwnProperty(BODY_PROP) ? children[1].props.children[0] : null) :
    null;
  const directionClass = `master-detail__detail-header--${isRTL ? DIRECTION.RTL : DIRECTION.LTR}`;
  const directionRTLClass = isRTL ? 'flex__row-reverse@m' : '';

  const content = (
    <div className={`master-detail__card__header ${className}`}>
      {
        isActive && canClose ? (
          <div className={`flex__space-between width__expand ${directionClass} ${directionRTLClass}`}>
            {detailHeader}
            <span className="cursor__pointer" onClick={() => props.onClose()}>{renderCloseIcon}</span>
          </div>
        ) : detailHeader
      }
    </div>
  );
  return detailHeader ? content : null;
};

DetailHeader.defaultProps = {
  canClose: true,
  className: '',
  isActive: false,
  isRTL: false,
  renderCloseIcon: <i className="icon-close" />
};

DetailHeader.propTypes = {
  canClose: PropTypes.bool,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isRTL: PropTypes.bool,
  renderCloseIcon: PropTypes.element,
  onClose: PropTypes.func,
};

export default DetailHeader;
