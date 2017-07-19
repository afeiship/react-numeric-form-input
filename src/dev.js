import './dev.scss';
import ReactNumericFormInput from './main';
import toThousands from 'to-thousands';
/*===example start===*/

// install: npm install afeiship/react-numeric-form-input --save
// import : import ReactNumericFormInput from 'react-numeric-form-input'

class App extends React.Component{
  state = {
    value1:'1234',
    value2:'112312314',
    value3:'11.22',
    value4:'1234',
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _toPwd(inValue){
    return inValue.replace(/\w/g,'*');
  }

  _toTh(inValue){
    return toThousands(inValue);
  }

  _change = (inField,e) =>{
    console.log(inField,e.target.value);
    this.setState({
      [inField]: e.target.value
    })
  }

  render(){
    return (
      <div className="hello-react-numeric-form-input">
        <h3>Type: blank [ filter: password]</h3>
        <ReactNumericFormInput
        value={this.state.value1}
        onChange={this._change.bind(this,'value1')} className="test-np" type="blank" filter={this._toPwd.bind(this)} placeholder="Please input password" maxLength={10} ref='rc1' />

        <h3>Type: identity [ filter: none]</h3>
        <ReactNumericFormInput
          value={this.state.value2}
          onChange={this._change.bind(this,'value2')}
          className="test-np" type="identity" placeholder="Please input identity"  maxLength={18} ref='rc2' />

        <h3>Type: currency [ filter: none]</h3>
        <ReactNumericFormInput
            value={this.state.value3}
          onChange={this._change.bind(this,'value3')}
        className="test-np" type="currency" placeholder="Please input currency"  ref='rc3' />

        <h3>Type: number [ filter: toThousands]</h3>
        <ReactNumericFormInput
                  value={this.state.value4}
          onChange={this._change.bind(this,'value4')}
        className="test-np" filter={this._toTh.bind(this)} type="number" placeholder="Please input number" ref='rc4' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
