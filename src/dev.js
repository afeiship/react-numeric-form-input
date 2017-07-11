import './dev.scss';
import ReactNumericFormInput from './main';
import toThousands from 'to-thousands';
/*===example start===*/

// install: npm install afeiship/react-numeric-form-input --save
// import : import ReactNumericFormInput from 'react-numeric-form-input'

class App extends React.Component{
  state = {
    value1:'1234',
    value2:'3123'
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _toPwd(inValue){
    return inValue;
    return inValue.replace(/\w/g,'*');
  }

  _toTh(inValue){
    return toThousands(inValue);
  }

  _change = (inField,e) =>{
    this.setState({
      [inField]: e.target.value
    },()=>{
      console.log(inField,this.state.value2);
    });
  }

  render(){
    return (
      <div className="hello-react-numeric-form-input">
        <h3>Type: identity [ filter: none]</h3>
        <ReactNumericFormInput
          onChange={this._change.bind(this,'value2')}
          className="test-np"
          type="identity"
          value={this.state.value2}
          placeholder="Please input identity"  maxLength={18} ref='rc2' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
