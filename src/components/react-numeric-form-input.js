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
      ...props
    };
  }

  componentWillMount() {
    const { clearable, blinkable, ...props} = this.props;
    this._instance = ReactVirtualKeyboardCtrl.createInstance(props);
  }

  componentWillReceiveProps(nextProps){
    this.setState( nextProps );
  }

  componentWillUnmount() {
    this._instance.destroy();
    this._instance = null;
  }

  doChange = (inValue) =>{
    const { value } = this.state;
    if(inValue !== value){
      const targetValue = { value: inValue };
      const { value, ...newProps } = this.state;
      this.setState(targetValue,()=>{
        this._instance.component.update( objectAssign( targetValue, newProps) ).then(()=>{
          this.state.onChange( { target: targetValue } );
        });
      })
    }
  };

  _onFocus = inEvent => {
    this._instance.component.show({
      type: this.state.type,
      filter: this.state.filter,
      placeholder: this.state.placeholder,
      maxLength: this.state.maxLength,
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
        filter={ this.state.filter }
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
