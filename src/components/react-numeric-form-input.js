// import './style.scss';

import React,{PureComponent,Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import {ReactVirtualKeyboardCtrl,TYPES} from 'react-virtual-keyboard-ctrl';
import ReactVirtualInput from 'react-virtual-input';
import NxDomEvent from 'next-dom-event';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.string,
    onChange: PropTypes.func,
    placeholder:PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    maxLength:PropTypes.number,
    filter:PropTypes.func,
    focused: PropTypes.bool,
  };

  static defaultProps = {
    type: 'blank',
    value:'',
    focused: false,
    onChange: noop,
  };
  /*===properties end===*/

  get hasFocused(){
    return !!document.querySelector('.react-virtual-input[data-focuced=true]')
  }

  constructor(props) {
    super(props);
    this.state = {
      ...props
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState( nextProps );
  }

  componentWillMount() {
    const { focused, ...props } = this.props;
    this._instance = ReactVirtualKeyboardCtrl.createInstance(props);
    this.attachEvents();
  }

  componentWillUnmount() {
    this.detachEvents();
    this._instance.destroy();
    this._instance = null;
  }

  attachEvents(){
    this._docClickRes = NxDomEvent.on( document.body, 'click', this._onDocClick, false);
  }

  detachEvents(){
    this._docClickRes.destroy();
  }

  _onFocus = e => {
    this.setState({ focused: true },()=>{
      const newProps = objectAssign( {}, this.state, { onHidden: this._onHidden });
      this._instance.component.show( newProps );
    });
  };

  _onDocClick = e => {
    const { root } = this.refs;
    const keyboardCtrl = document.querySelector('.react-virtual-keyboard-ctrl');
    const hasActiveElement = root.contains( e.target) || keyboardCtrl.contains(e.target);
    if( !hasActiveElement ){
      this.setState({ focused: false },()=>{
        const timer = setTimeout(()=>{
          !this.hasFocused && this._instance.component.hide();
          clearTimeout( timer );
        },0);
      });
    }
  };

  _onHidden = e =>{
    this.setState({ focused: false });
  };

  render(){
    const { className,value,maxLength,filter,focused, placeholder, ...props } = this.props;

    return (
      <section {...props} ref='root' className={ classNames('react-numeric-form-input',className) }>
        <ReactVirtualInput
          filter={ filter }
          placeholder={ placeholder }
          maxLength={maxLength}
          clearable={ false }
          blinkable={ true }
          focused={this.state.focused}
          onFocus={ this._onFocus }
          value={ value } />
      </section>
    );
  }
}
