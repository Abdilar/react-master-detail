import React from 'react';
import PropTypes from "prop-types";
import {BODY_PROP} from "../../config/variables";
import {isArray, isObject, randomNumber} from '../../utils/functions';

const MasterHeader = (props) => {
  const {children, className, id} = props;
  const hasBodyProp = isArray(children) ? children[0].props.hasOwnProperty(BODY_PROP) : children.props && children.props.hasOwnProperty(BODY_PROP);
  const masterHeader = isArray(children) ?
    (isArray(children[0].props.children) ?
      (!hasBodyProp ? children[0].props.children[0] : null) :
      null) :
    isObject(children) ?
      (isArray(children.props.children) && !hasBodyProp ? children.props.children[0] : null) :
      null;


  const content = (
    <div id={id} className={`master-detail__card__header ${className}`}>
      { masterHeader }
    </div>
  );
  return masterHeader ? content : null;
};

MasterHeader.defaultProps = {
  className: '',
  id: `master-header-${randomNumber(10000)}`,
};

MasterHeader.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  id: PropTypes.string
};

export default MasterHeader;
