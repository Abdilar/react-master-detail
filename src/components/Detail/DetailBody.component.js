import React from 'react';
import PropTypes from "prop-types";
import {BODY_PROP} from "../../config/variables";
import {isArray} from '../../utils/functions';

import style from '../index.module.scss';

const DetailBody = (props) => {
  const {children, className} = props;
  const detailBody = isArray(children) ?
    (isArray(children[1].props.children) && !children[1].props.hasOwnProperty(BODY_PROP) ? children[1].props.children[1] : children[1].props.children) :
    null;

  return (
    <div className={`${className} ${style.master_detail_card_body} ${style.scroll_modern} ${style.height_expand}`}>
      { detailBody }
    </div>
  )
};

DetailBody.defaultProps = {
  className: ''
};

DetailBody.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
};

export default DetailBody;
