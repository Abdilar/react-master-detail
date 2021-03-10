import React from 'react';
import PropTypes from "prop-types";
import {BODY_PROP} from "../../config/variables";
import {isArray, isObject, randomNumber} from '../../utils/functions';

import style from '../index.module.scss';

const MasterBody = (props) => {
  const {children, className, id} = props;
  const hasBodyProp = isArray(children) ? children[0].props.hasOwnProperty(BODY_PROP) : children.props && children.props.hasOwnProperty(BODY_PROP);
  const masterBody = isArray(children) ?
    (isArray(children[0].props.children) ?
      (!hasBodyProp ? children[0].props.children[1] : children[0].props.children) :
      children[0].props.children) :
    isObject(children) ?
      (isArray(children.props.children) && !hasBodyProp ? children.props.children[1] : children) :
      null;

  return (
    <div id={id} className={`${style.master_detail_card_body} ${style.scroll_modern} ${className}`}>
      { masterBody }
    </div>
  );
};

MasterBody.defaultProps = {
  className: '',
  id: `master-body-${randomNumber(10000)}`,
};

MasterBody.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

export default MasterBody;
