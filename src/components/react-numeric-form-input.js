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
    clearable: PropTypes.bool,
    blinkable: PropTypes.bool,
  };

  static defaultProps = {
    type: 'blank',
    value:'',
    onChange: noop,
    clearable: false,
    blinkable: false
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      value: props.value
    };
  }

  componentWillMount() {
    const { clearable, blinkable, ...props} = this.props;
    this._instance = ReactVirtualKeyboardCtrl.newInstance(props);
  }

  componentWillReceiveProps(nextProps){
    const {value} = nextProps;
    if(value !== this.state.value){
      this.doChange(value);
    }
  }

  doChange = (inValue) =>{
    const { value } = this.state;
    if(inValue !== value){
      const targetValue = { value: inValue };
      this.setState(targetValue,()=>{
        this._instance.component.update(targetValue).then(()=>{
          this.props.onChange( { target: targetValue } );
        });
      })
    }
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
    this.doChange('');
  };

  _onChange = inEvent => {
    const {value} = inEvent.target;
    this.doChange(value);
  };

  render(){
    const { className,value,maxLength,filter,placeholder, clearable,blinkable,...props } = this.props;

    return (
      <section {...props} className={ classNames('react-numeric-form-input',className) }>
        <ReactVirtualInput
        filter={ filter }
        placeholder={ placeholder }
        maxLength={maxLength}
        clearable={clearable}
        blinkable={blinkable}
        onFocus={ this._onFocus }
        onClear={ this._onClear }
        value={ this.state.value } />
      </section>
    );
  }
}
