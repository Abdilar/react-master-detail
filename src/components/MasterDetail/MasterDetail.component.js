import React, {useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {MASTER_MIN_WIDTH, MASTER_WIDTH, DIRECTION, DETAIL_MIN_WIDTH, RESPONSIVE_MODE} from '../../config/variables';
import {
  isArray,
  isEmpty,
  isEmptyString,
  isFunction,
  isNumber,
  isObject,
  isSameObject,
  isString,
  isUnitMeasurement,
  randomNumber,
  resizeObserver
} from '../../utils/functions';
import * as Component from '../';

let resizeObserverData = null;

const MasterDetail = (props) => {
  const [isRTL, setIsRTL] = useState(false);
  const [masterWidth, setMasterWidth] = useState(props.masterWidth);
  const [masterMinWidth, setMasterMinWidth] = useState(props.masterMinWidth);
  const [detailMinWidth, setDetailMinWidth] = useState(props.detailMinWidth);
  const [masterDetailStyle, setMasterDetailStyle] = useState({});
  const [showDetail, setShowDetail] = useState(props.showDetail);
  const masterRef = useRef(null);
  const detailRef = useRef(null);

  useEffect(() => {
    didMount();
    return () => willUnmount();
  }, []);

  useEffect(() => {
    (async () => {
      setShowDetail(props.showDetail);
      await resizedMasterDetailWrapper();
    })();
  }, [props.showDetail])

  useEffect(() => {
    (async () => {
      await initMasterWidth();
    })();
  }, [props.masterWidth, props.masterMinWidth, props.detailMinWidth])

  useEffect(() => {
    calculateRTL();
  }, [props.direction])

  const didMount = () => {
    (async () => {
      setMasterWidthValue(props.defaultMasterWidth)
      calculateRTL();
      await initMasterWidth();
      await resizedMasterDetailWrapper();
      resizeObserverData = resizeObserver(resizedMasterDetailWrapper);
      resizeObserverData.observe(document.querySelector('.master-detail__wrapper'));
    })();
  }

  const willUnmount = () => {
    (async () => {
      resizeObserverData.unobserve(document.querySelector('.master-detail__wrapper'));
    })()
  }

  const calculateRTL = () => {
    const html = document.getElementsByTagName('html')[0];
    const isRTL = isEmptyString(html.dir) ?
      props.direction === DIRECTION.RTL :
      html.dir === DIRECTION.RTL;
    setIsRTL(isRTL);
  };

  const hasDirAttribute = () => {
    const html = document.getElementsByTagName('html')[0];
    return !isEmptyString(html.dir);
  }

  const initMasterWidth = async () => {
    const value = getWidth(props.masterWidth);
    const masterMinWidthValue = getWidth(props.masterMinWidth, MASTER_MIN_WIDTH);
    const detailMinWidthValue = getWidth(props.detailMinWidth, DETAIL_MIN_WIDTH);
    setMasterWidth(value);
    setMasterMinWidth(masterMinWidthValue);
    setDetailMinWidth(detailMinWidthValue);
    setMasterWidthValue(value);
  };

  const getWidth = (data, defaultWidth = MASTER_WIDTH) => {
    return !isEmpty(data) && (isNumber(data) || isObject(data) || isString(data)) ?
      isNumber(data) ?
        data :
        isString(data) ?
          stringToNumber(data) :
          isObject(data) ?
            objectToNumber(data) :
            defaultWidth :
      defaultWidth;
  }

  const percentToNumber = (data) => {
    const number = +data.replace('%', '');
    if (isNaN(number) || (number > 100 && number <= 0)) return MASTER_WIDTH;
    const masterDetailWrapperWidth = document.getElementsByClassName('master-detail__wrapper')[0].clientWidth;
    return masterDetailWrapperWidth * (number / 100);
  };

  const stringToNumber = (data) => {
    if (!isString(data)) return MASTER_WIDTH;
    return isUnitMeasurement(data, '%') ?
      percentToNumber(data) :
      isUnitMeasurement(data, 'px') ?
        +data.replace('px', '') :
        MASTER_WIDTH;
  };

  const objectToNumber = (data) => {
    const mappedResponsiveMode = Object.keys(RESPONSIVE_MODE).map(item => ({[RESPONSIVE_MODE[item].key]: RESPONSIVE_MODE[item].value}));
    const validResponsiveMode = Object.assign({}, ...mappedResponsiveMode);
    if (!isSameObject(data, validResponsiveMode)) return MASTER_WIDTH;

    const windowWidth = window.innerWidth;
    let key;
    if (windowWidth >= RESPONSIVE_MODE.EXTRA_LARGE_DESKTOP.value) {
      key = RESPONSIVE_MODE.EXTRA_LARGE_DESKTOP.key;
    } else if (windowWidth >= RESPONSIVE_MODE.LARGE_DESKTOP.value) {
      key = RESPONSIVE_MODE.LARGE_DESKTOP.key;
    } else if (windowWidth >= RESPONSIVE_MODE.DESKTOP.value) {
      key = RESPONSIVE_MODE.DESKTOP.key;
    } else {
      key = RESPONSIVE_MODE.MINI_DESKTOP.key;
    }
    return getWidth(data[key]);
  };

  const resizedMasterDetailWrapper = async () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 960) {
      setMasterDetailStyle({});
      return;
    }
    await initMasterWidth();
    calcMasterPosition();
  };

  const calcMasterPosition = () => {
    const windowWidth = window.innerWidth;
    const masterDetailWrapper = document.getElementsByClassName('master-detail__wrapper')[0];

    if (!masterDetailWrapper || windowWidth < 960) return;

    const masterDetailWrapperWidth = masterDetailWrapper.clientWidth;
    let subtract = windowWidth - masterDetailWrapperWidth;
    if (subtract < 0) subtract = 0;

    if (isRTL) {
      setMasterDetailStyle({transform: `translateX(calc(-50vw + ${(masterWidth / 2) + (subtract / 2)}px))`});
    } else {
      setMasterDetailStyle({transform: `translateX(calc(50vw + -${(masterWidth / 2) + (subtract / 2)}px))`});
    }
  }

  const handleClose = async () => {
    setShowDetail(false);
    isFunction(props.onClose) && props.onClose();
    setTimeout(() => {
      setMasterWidthValue(masterWidth);
      calcMasterPosition();
    }, 300);
  };

  const setMasterWidthValue = (width) => {
    masterRef.current.style.width = `${width}px`;
  };

  const {
    align = '',
    alignIcon = '',
    detail = '',
    detailBody = '',
    detailHeader = '',
    detailWrapper = '',
    masterBody = '',
    masterHeader = '',
    masterWrapper = '',
    wrapper = ''
  } = props.className;
  const isActiveDetail = showDetail && isArray(props.children) && !props.noDetail;
  const directionRTLClass = !hasDirAttribute() && isRTL ? 'flex__row-reverse' : '';

  if (!props.children) return null;

  return (
    <section id={props.id} className={`master-detail__wrapper position__relative ${wrapper} ${directionRTLClass}`}>
      <Component.Master
        bodyClass={masterBody}
        children={props.children}
        defaultWidth={props.defaultMasterWidth}
        headerClass={masterHeader}
        id={`${props.id}-master`}
        isActive={isActiveDetail}
        ref={masterRef}
        style={masterDetailStyle}
        wrapperClass={masterWrapper}
      />
      <Component.Align
        adjustable={props.adjustable}
        className={align}
        detailMinWidth={detailMinWidth}
        detailRef={detailRef}
        isRTL={isRTL}
        iconClass={alignIcon}
        id={`${props.id}-align-bar`}
        isShow={isActiveDetail}
        masterMinWidth={masterMinWidth}
        masterRef={masterRef}
        renderIcon={props.renderAdjustIcon}
      />
      <Component.Detail
        adjustable={props.adjustable}
        bodyClass={detailBody}
        canClose={props.canClose}
        children={props.children}
        className={detail}
        isRTL={isRTL}
        headerClass={detailHeader}
        id={`${props.id}-detail`}
        isActive={isActiveDetail}
        onClose={handleClose}
        ref={detailRef}
        renderCloseIcon={props.renderCloseIcon}
        wrapperClass={detailWrapper}
      />
    </section>
  );
}

MasterDetail.defaultProps = {
  adjustable: true,
  canClose: true,
  className: {},
  defaultMasterWidth: MASTER_WIDTH,
  detailMinWidth: DETAIL_MIN_WIDTH,
  direction: DIRECTION.LTR,
  id: `master-detail-${randomNumber(10000)}`,
  masterMinWidth: MASTER_MIN_WIDTH,
  masterWidth: MASTER_WIDTH,
  noDetail: false,
  renderAdjustIcon: <i className="icon-align" />,
  renderCloseIcon: <i className="icon-close" />,
  showDetail: true
};

MasterDetail.propTypes = {
  adjustable: PropTypes.bool,
  canClose: PropTypes.bool,
  children: PropTypes.any.isRequired,
  className: PropTypes.object,
  defaultMasterWidth: PropTypes.number,
  detailMinWidth: PropTypes.any,
  direction: PropTypes.string,
  id: PropTypes.string,
  masterMinWidth: PropTypes.any,
  masterWidth: PropTypes.any,
  noDetail: PropTypes.bool,
  renderAdjustIcon: PropTypes.element,
  renderCloseIcon: PropTypes.element,
  showDetail: PropTypes.bool,
  onClose: PropTypes.func
};

export default MasterDetail;
