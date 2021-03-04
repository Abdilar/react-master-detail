import React from 'react';
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

export default class MasterDetail extends React.Component {
  constructor(props) {
    super(props);
    this.resizeObserver = null;
    this.masterRef = React.createRef();
    this.detailRef = React.createRef();
    this.state = {
      allowAlignCards: false,
      masterDetailStyle: {},
      masterWidth: MASTER_WIDTH,
      masterMinWidth: props.masterMinWidth,
      detailMinWidth: props.detailMinWidth,
      showDetail: props.showDetail,
      isRTL: false
    }
  }

  componentDidMount() {
    this.calculateRTL();
    this.initMasterWidth();
    this.resizedMasterDetailWrapper();
    this.resizeObserver = resizeObserver(this.resizedMasterDetailWrapper);
    this.resizeObserver.observe(document.querySelector('.master-detail__wrapper'));
  }

  async componentDidUpdate(prevProps) {
    const { showDetail } = this.props;
    if (prevProps.showDetail !== showDetail) {
      await this.setState({showDetail});
      this.resizedMasterDetailWrapper();
    }
  }

  componentWillUnmount() {
    this.resizeObserver.unobserve(document.querySelector('.master-detail__wrapper'));
  }

  calculateRTL = () => {
    const html = document.getElementsByTagName('html')[0];
    const isRTL = isEmptyString(html.dir) ?
      this.props.direction === DIRECTION.RTL :
      html.dir === DIRECTION.RTL;
    this.setState({isRTL});
  };

  hasDirAttribute = () => {
    const html = document.getElementsByTagName('html')[0];
    return !isEmptyString(html.dir);
  }

  initMasterWidth = async () => {
    const {detailMinWidth, masterMinWidth, masterWidth} = this.props;

    const value = this.getWidth(masterWidth);
    const masterMinWidthValue = this.getWidth(masterMinWidth);
    const detailMinWidthValue = this.getWidth(detailMinWidth);
    console.log('INIT: ', masterMinWidthValue, masterMinWidth)
    await this.setState({masterWidth: value, masterMinWidth: masterMinWidthValue, detailMinWidth: detailMinWidthValue},
      () => this.setMasterWidth(this.state.masterWidth)
    );
  };

  getWidth(data, defaultWidth = MASTER_WIDTH) {
    return !isEmpty(data) && (isNumber(data) || isObject(data) || isString(data)) ?
      isNumber(data) ?
        data :
        isString(data) ?
          this.stringToNumber(data) :
          isObject(data) ?
            this.objectToNumber(data) :
            defaultWidth :
      defaultWidth;
  }

  percentToNumber = (data) => {
    const number = +data.replace('%', '');
    if (isNaN(number) || (number > 100 && number <= 0)) return MASTER_WIDTH;
    const masterDetailWrapperWidth = document.getElementsByClassName('master-detail__wrapper')[0].clientWidth;
    return masterDetailWrapperWidth * (number / 100);
  };

  stringToNumber = (data) => {
    if (!isString(data)) return MASTER_WIDTH;
    return isUnitMeasurement(data, '%') ?
      this.percentToNumber(data) :
      isUnitMeasurement(data, 'px') ?
        +data.replace('px', '') :
        MASTER_WIDTH;
  };

  objectToNumber = (data) => {
    const mappedResponsiveMode = Object.keys(RESPONSIVE_MODE).map(item => ({[RESPONSIVE_MODE[item].key]: RESPONSIVE_MODE[item].value}));
    const validResponsiveMode = Object.assign({}, ...mappedResponsiveMode);
    if (!isSameObject(data, validResponsiveMode)) return MASTER_WIDTH;

    const windowWidth = window.innerWidth;
    let key = undefined;
    if (windowWidth >= RESPONSIVE_MODE.EXTRA_LARGE_DESKTOP.value) {
      key = RESPONSIVE_MODE.EXTRA_LARGE_DESKTOP.key;
    } else if (windowWidth >= RESPONSIVE_MODE.LARGE_DESKTOP.value) {
      key = RESPONSIVE_MODE.LARGE_DESKTOP.key;
    } else if (windowWidth >= RESPONSIVE_MODE.DESKTOP.value) {
      key = RESPONSIVE_MODE.DESKTOP.key;
    } else {
      key = RESPONSIVE_MODE.MINI_DESKTOP.key;
    }
    return this.getWidth(data[key]);
  };

  resizedMasterDetailWrapper = async () => {
    const windowWidth = window.innerWidth;
    if (windowWidth < 960) {
      this.setState({masterDetailStyle: {}});
      return;
    }

    await this.initMasterWidth();
    this.calcMasterPosition();
  };

  calcMasterPosition() {
    const { masterWidth, isRTL } = this.state;
    const windowWidth = window.innerWidth;
    const masterDetailWrapper = document.getElementsByClassName('master-detail__wrapper')[0];

    if (!masterDetailWrapper || windowWidth < 960) return;

    const masterDetailWrapperWidth = masterDetailWrapper.clientWidth;
    let subtract = windowWidth - masterDetailWrapperWidth;
    if (subtract < 0) subtract = 0;

    console.log('calcMasterPosition: ', isRTL);
    if (isRTL) {
      this.setState({
        masterDetailStyle: {transform: `translateX(calc(-50vw + ${(masterWidth / 2) + (subtract / 2)}px))`}
      })
    } else {
      this.setState({
        masterDetailStyle: {transform: `translateX(calc(50vw + -${(masterWidth / 2) + (subtract / 2)}px))`}
      })
    }
  }

  handleClose = async () => {
    await this.setState({showDetail: false});
    isFunction(this.props.onClose) && this.props.onClose();

    setTimeout(() => {
      this.setMasterWidth(this.state.masterWidth);
      this.calcMasterPosition();
    }, 300);
  };

  setMasterWidth = (width) => {
    this.masterRef.current.style.width = `${width}px`;
  };

  render() {
    const { detailMinWidth, isRTL, masterDetailStyle, masterMinWidth, showDetail } = this.state;
    const {adjustable, canClose, children, id, noDetail, renderAdjustIcon, renderCloseIcon} = this.props;
    const {
      align = '',
      alignIcon = '',
      detail = '',
      detailBody = '',
      detailHeader = '',
      detailWrapper = '',
      master = '',
      masterBody = '',
      masterHeader = '',
      masterWrapper = '',
      wrapper = ''
    } = this.props.className;
    const isActiveDetail = showDetail && isArray(children) && !noDetail;
    const directionRTLClass = !this.hasDirAttribute() && isRTL ? 'flex__row-reverse' : '';

    if (!children) return null;

    return (
      <section id={id} className={`master-detail__wrapper position__relative ${wrapper} ${directionRTLClass}`}>
        <Component.Master
          bodyClass={masterBody}
          className={master}
          children={children}
          headerClass={masterHeader}
          id={`${id}-master`}
          isActive={isActiveDetail}
          ref={this.masterRef}
          style={masterDetailStyle}
          wrapperClass={masterWrapper}
        />
        <Component.Align
          adjustable={adjustable}
          className={align}
          detailMinWidth={detailMinWidth}
          detailRef={this.detailRef}
          isRTL={isRTL}
          iconClass={alignIcon}
          id={`${id}-align-bar`}
          isShow={isActiveDetail}
          masterMinWidth={masterMinWidth}
          masterRef={this.masterRef}
          renderIcon={renderAdjustIcon}
        />
        <Component.Detail
          adjustable={adjustable}
          bodyClass={detailBody}
          canClose={canClose}
          children={children}
          className={detail}
          isRTL={isRTL}
          headerClass={detailHeader}
          id={`${id}-detail`}
          isActive={isActiveDetail}
          onClose={this.handleClose}
          ref={this.detailRef}
          renderCloseIcon={renderCloseIcon}
          wrapperClass={detailWrapper}
        />
      </section>
    );
  }
}

MasterDetail.defaultProps = {
  adjustable: true,
  canClose: true,
  className: {},
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
