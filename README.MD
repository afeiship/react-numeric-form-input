# react-numeric-form-input
> React numeric input form control.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    value:PropTypes.string,
    placeholder:PropTypes.string,
    type: PropTypes.oneOf(TYPES),
    maxLength:PropTypes.number,
    filter:PropTypes.func,
  };

  static defaultProps = {
    type:'blank',
    value:''
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

  _toTh(inValue){
    return toThousands(inValue);
  }

  render(){
    return (
      <div className="hello-react-numeric-form-input">
        <h3>Type: blank [ filter: password]</h3>
        <ReactNumericFormInput className="test-np" type="blank" filter={this._toPwd.bind(this)} placeholder="Please input password" maxLength={10} ref='rc1' />

        <h3>Type: identity [ filter: none]</h3>
        <ReactNumericFormInput className="test-np" type="identity" value="421124196701182450" placeholder="Please input identity"  maxLength={18} ref='rc2' />

        <h3>Type: currency [ filter: none]</h3>
        <ReactNumericFormInput className="test-np" type="currency" value="11.02" placeholder="Please input currency"  ref='rc3' />

        <h3>Type: number [ filter: toThousands]</h3>
        <ReactNumericFormInput className="test-np" type="number" filter={this._toTh.bind(this)} placeholder="Please input number"  value="1102" ref='rc3' />
    </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

