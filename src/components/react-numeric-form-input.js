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
    onChange: PropTypes.func,
    placeholder:PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    maxLength:PropTypes.number,
    filter:PropTypes.func,
  };

  static defaultProps = {
    type:'blank',
    value:'',
    onChange: noop
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

  doChange = () =>{
    const { value } = this.state;
    this.props.onChange( { target: { value } } );
  };

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
    this.setState({ value:'' },this.doChange);
  };

  _onChange = inEvent => {
    const {value} = inEvent.target;
    this.setState({ value },this.doChange);
  };

  render(){
    const { className,value,maxLength,filter,placeholder,...props } = this.props;

    return (
      <section {...props} className={ classNames('react-numeric-form-input',className) }>
        <ReactVirtualInput
        filter={filter}
        placeholder={placeholder}
        maxLength={maxLength}
        onFocus={this._onFocus}
        onClear={this._onClear}
        value={this.state.value} />
      </section>
    );
  }
}
