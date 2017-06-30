import './dev.scss';
import ReactNumericFormInput from './main';

/*===example start===*/

// install: npm install afeiship/react-numeric-form-input --save
// import : import ReactNumericFormInput from 'react-numeric-form-input'

class App extends React.Component{
  state = {

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

  render(){
    return (
      <div className="hello-react-numeric-form-input">
        <h3>Type: blank [ filter: password]</h3>
        <ReactNumericFormInput className="test-np" type="blank" filter={this._toPwd.bind(this)} value="1234" maxLength={10} ref='rc1' />

        <h3>Type: identity [ filter: none]</h3>
        <ReactNumericFormInput className="test-np" type="identity" value="421124196701182450" maxLength={18} ref='rc2' />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
