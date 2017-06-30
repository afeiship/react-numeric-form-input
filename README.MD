# react-numeric-form-input
> React numeric input form control.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    maxLength:PropTypes.number,
    filter:PropTypes.func,
  };

  static defaultProps = {
    type:'blank'
  };
  
```

## usage:
```jsx

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

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

