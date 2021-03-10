import React from 'react';
import PropTypes from "prop-types";
import {BODY_PROP} from "../../config/variables";
import {isArray} from '../../utils/functions';
import {CloseIcon} from "../";

import style from '../index.module.scss';

const DetailHeader = (props) => {
  const {canClose, children, className, isActive, isRTL, renderCloseIcon} = props;
  const detailHeader = isArray(children) ?
    (isArray(children[1].props.children) && !children[1].props.hasOwnProperty(BODY_PROP) ? children[1].props.children[0] : null) :
    null;
  const directionClass = isRTL ? style.master_detail_detail_header__rtl : style.master_detail_detail_header__ltr;
  const directionRTLClass = isRTL ? style.flex_row_reverse_m : '';

  const content = (
    <div className={`${style.master_detail_card_header} ${className}`}>
      {
        isActive && canClose ? (
          <div className={`${style.flex_space_between} ${style.width_expand} ${directionClass} ${directionRTLClass}`}>
            {detailHeader}
            <span className={style.cursor_pointer} onClick={() => props.onClose()}>{renderCloseIcon}</span>
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
  renderCloseIcon: <CloseIcon />
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
