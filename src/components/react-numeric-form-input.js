// import './style.scss';

import React,{PureComponent} from 'react';

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
    placeholder:PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    maxLength:PropTypes.number,
    filter:PropTypes.func,
  };

  static defaultProps = {
    type:'blank'
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillMount() {
    this._instance = ReactVirtualKeyboardCtrl.newInstance(this.props);
  }

  _onFocus = inEvent => {
    this._instance.component.show({
      type: this.props.type,
      filter: this.props.filter,
      placeholder: this.props.placeholder,
      maxLength: this.props.maxLength,
      value: this.state.value,
      onChange: this._onChange
    });
  };

  _onClear = inEvent => {
    this.setState({value:''});
  };

  _onChange = inEvent => {
    const {value} = inEvent.target;
    this.setState({value});
  };

  render(){
    const { className,value,maxLength,filter,placeholder,...props } = this.props;

    return (
      <div {...props} className={ classNames('react-numeric-form-input',className) }>
        <ReactVirtualInput
        filter={filter}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={this._onFocus}
        onClear={this._onClear}
        value={this.state.value} />
      </div>
    );
  }
}
