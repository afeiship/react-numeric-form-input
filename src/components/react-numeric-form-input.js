// import './style.scss';

import React,{PureComponent,Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import {ReactVirtualKeyboardCtrl,TYPES} from 'react-virtual-keyboard-ctrl';
import ReactVirtualInput from 'react-virtual-input';

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
  };

  static defaultProps = {
    type: 'blank',
    value:'',
    focused: false,
    onChange: noop,
  };
  /*===properties end===*/

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
  }

  _onFocus = e => {
    this.setState({ focused: true },()=>{
      this._instance.component.show( this.state );
    })
  };

  render(){
    const { className,value,maxLength,filter,focused, placeholder,...props } = this.props;

    return (
      <section {...props} className={ classNames('react-numeric-form-input',className) }>
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
