import React, {useEffect} from 'react';
import PropTypes from "prop-types";
import {MASTER_MIN_WIDTH, MASTER_WIDTH} from '../../config/variables';
import useState from '../../hooks/setState.hook';
import {randomNumber} from '../../utils/functions';
import {AdjustIcon} from "../";

import style from '../index.module.scss';

const Align = (props) => {
  const {className, adjustable, detailRef, iconClass, id, isRTL, isShow: isShowAlign, masterRef, renderIcon} = props;
  const [isShow, setIsShow] = useState(isShowAlign);
  const [, setAllowAlignCards, getAllowAlignCards] = useState(false);
  const [, setDetailMinWidth, getDetailMinWidth] = useState(props.detailMinWidth);
  const [, setMasterMinWidth, getMasterMinWidth] = useState(props.masterMinWidth);
  const bodyElement = document.getElementsByTagName('body')[0];
  const activeAlignClass = isShowAlign ? style.align_bar__active : '';

  const didMount = () => {
    bodyElement.addEventListener('mouseup', stopMouseMove);
  };

  const willUnmount = () => {
    bodyElement.removeEventListener('mouseup', stopMouseMove);
  };

  useEffect(() => {
    didMount();

    return willUnmount;
  }, []);

  useEffect(() => {
    setIsShow(props.isShow)
  }, [props.isShow]);

  useEffect(() => {
    setMasterMinWidth(props.masterMinWidth);
  }, [props.masterMinWidth]);

  useEffect(() => {
    setDetailMinWidth(props.detailMinWidth);
  }, [props.detailMinWidth]);



  const startMouseMove = async () => {
    if (await getAllowAlignCards()) return;
    bodyElement.classList.add(style.master_detail__select_no);
    bodyElement.addEventListener('mousemove', alignCards);
    setAllowAlignCards(true);
  };

  const stopMouseMove = async () => {
    if (!await getAllowAlignCards()) return;
    bodyElement.classList.remove(style.master_detail__select_no);
    bodyElement.removeEventListener('mousemove', alignCards);
    setAllowAlignCards(false);
  };

  const alignCards = async ({movementX}) => {
    const { current: masterRefCurrent } = masterRef;
    const { current: detailRefCurrent } = detailRef;
    if (!await getAllowAlignCards() || Math.abs(movementX) > 100) return;

    const masterMinWidth = await getMasterMinWidth();
    const detailMinWidth = await getDetailMinWidth();

    if (isRTL) {
      if ((movementX > 0 && masterRefCurrent.clientWidth >= masterMinWidth) || (movementX < 0 && detailRefCurrent.clientWidth >= detailMinWidth)) {
        masterRefCurrent.style.width = (masterRefCurrent.clientWidth - movementX) + 'px';
      }
    } else {
      if ((movementX < 0 && masterRefCurrent.clientWidth >= masterMinWidth) || (movementX > 0 && detailRefCurrent.clientWidth >= detailMinWidth)) {
        masterRefCurrent.style.width = (masterRefCurrent.clientWidth + movementX) + 'px';
      }
    }
  };

  const content = (
    <div id={id} className={`${style.visible_m} ${style.flex_center_vertical} ${style.align_bar} ${activeAlignClass} ${className}`}>
      <span
        className={`${style.cursor_col_resize} ${style.align_bar_wrapper} ${iconClass}`}
        onMouseDown={startMouseMove}
        onMouseUp={stopMouseMove}
      >
        {renderIcon}
      </span>
    </div>
  );

  return isShow && adjustable ? content : null;
};

Align.defaultProps = {
  adjustable: true,
  className: '',
  detailMinWidth: MASTER_WIDTH,
  iconClass: '',
  id: `align-${randomNumber(10000)}`,
  isRTL: false,
  isShow: true,
  masterMinWidth: MASTER_MIN_WIDTH,
  renderIcon: <AdjustIcon />
};

Align.propTypes = {
  adjustable: PropTypes.bool,
  className: PropTypes.string,
  detailRef: PropTypes.object.isRequired,
  detailMinWidth: PropTypes.any,
  iconClass: PropTypes.string,
  id: PropTypes.string,
  isRTL: PropTypes.bool,
  isShow: PropTypes.bool,
  masterMinWidth: PropTypes.any,
  masterRef: PropTypes.object.isRequired,
  renderIcon: PropTypes.element,
};

export default Align;
