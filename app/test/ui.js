var STATUS = {
  GOOD  : "Good",
  SCAN  : "Scan",
  WARN  : "Warn",
  BAD   : "Bad",
  EMPTY : "Empty"
};

var Label = React.createClass({
  getDefaultProps: function(){
    return {
      required: false,
      text: ""
    };
  },
  render: function() {
    return (<label className={this.props.required?"required":""}>{this.props.text}: </label>);
  }
});

var TextInput = React.createClass({
  getDefaultProps: function() {
    return {
      type: "text",
      value: "",
      className: "",
      handleChange: function(){ /* noop */ }
    };
  },
  render: function() {
    return (
        <input value={this.props.value} className={this.props.className} type={this.props.type} onChange={this.props.handleChange} />
      );
    }
});

var InputStateMixin = {
  getInitialState: function(){
    return {
      isscan : false,
      value : "",
      status : STATUS.EMPTY
    };
  },
  handleChange: function( event ) {
    var val = event ? event.target.value : this.props.value;
    var len = val.length;
    var scan = this.state.isscan;
    var status = STATUS.EMPTY;

    if ( len == 0 ){
      scan = false;
    } else {
      if ( this.props.scanprefix
          &&  val.length >= this.props.scanprefix.length ) {
        if ( val.substr(0,this.props.scanprefix.length) == this.props.scanprefix ) {
          val = val.substring(this.props.scanprefix.length,val.length);
          scan = true;
        } else if (this.props.scanprefix.charAt(0) == val.charAt(0)
            && this.props.scanprefix.substr(0,val.length) != val) {
          status = STATUS.BAD;
        }
      }

      if ( status != STATUS.BAD ) {
        if ( this.checkFormat ) {
          var ret = this.checkFormat( val, scan );
          status = ret.status;
          val = ret.val;
        } else {
          if ( len < ( this.props.minLength ? this.props.minLength : 0 ) ){
            status = scan ? STATUS.SCAN : STATUS.WARN;
          } else if ( len > ( this.props.maxLength ? this.props.maxLength : 0 ) ){
            status = STATUS.BAD;
          } else {
            status = STATUS.GOOD;
          }
        }
      }
    }
    this.setState({
      value : val,
      isscan : scan,
      status : status
    });
  }
}

var DINInput = React.createClass({
  mixins: [InputStateMixin],
  getDefaultProps: function(){
    return {
      maxLength : 16,
      label: "DIN",
      scanprefix: "=",
      required: false,
      hasflag: false
    };
  },
  checkFormat: function( val, scan ) {
    var len = val.length;
    var status = STATUS.WARN;

    val = val.toUpperCase();

    if ( ( len > 0 && val.charAt(0) != "W" )
          || len > this.props.maxLength ) {
      status = STATUS.BAD
    } else if ( len == this.props.maxLength ) {
      status = STATUS.GOOD;
    } else {
      status = scan ? STATUS.SCAN : STATUS.WARN;
    }

    return {val: val, status: status};
  },
  render: function() {
    return (
        <div>
          <Label text={this.props.label} required={this.props.required} />
        	<TextInput {...this.props} className={"Status"+this.state.status} value={this.state.value} handleChange={this.handleChange} />
        </div>
        );
  }
});

var DINText = React.createClass({
  getDefaultProps: function(){
    return {
      label: "DIN",
      value: ""
        };
  },
  render: function() {
    return (
        <div><Label text={this.props.label} /><span>{this.props.value}</span></div>
        );
  }
});

var Page = React.createClass({
  getInitialState: function(){
      return { din: "" };
  },
  render: function() {
    return (<div>
        <DINInput label="DIN 1" hasflag="true" required="true" value={this.state.din} /><br />
        <DINInput label="DIN 2" value={this.state.din} /><br />
        <DINInput label="DIN 3" value={this.state.din} /><br />
        <DINInput label="DIN 4" value={this.state.din} /><br />
        <DINInput label="DIN 5" value={this.state.din} ><br />
        <DINText  label="DIN 1" value={this.state.din} /></DINInput>
  		</div>);
  }
});

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
