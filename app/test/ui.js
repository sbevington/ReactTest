var STATUS = {
  GOOD  : "Good",
  SCAN  : "Scan",
  WARN  : "Warn",
  BAD   : "Bad",
  EMPTY : "Empty"
};

var ACTION = {
  DINValid: "DINValid"
};
function dispatcher(state, action) {
  return fetch("/din/").then(response => response.json().then(json=>({json, response}))
).then(({ json, response }) => {
    if (!response.ok) {
      retunr Promise.reject(json)
    }
})
};

var store = Redux.createStore(dispatcher);

function callApi() {

};

var Label = React.createClass({
  getDefaultProps: function(){
    return {
      required: "false",
      text: "",
      id: ""
    };
  },
  render: function() {
    return (<label id={this.props.id} className={this.props.required==="true"?"required":""}>{this.props.text}: </label>);
  }
});

var DINModel = Backbone.Model.extend({
  defaults: {
    //url: '/din'
    din: "",
    flag: ""
  },
  initialize: function(){
    console.log("init");
  }
});

var TextInput = React.createClass({
  getDefaultProps: function() {
    return {
      type: "text",
      value: "",
      className: "",
      id: "",
      handleChange: function(){ /* noop */ }
    };
  },
  render: function() {
    return (
        <input id={this.props.id} value={this.props.value} className={this.props.className} type={this.props.type} onChange={this.props.handleChange} />
      );
    }
});

var FormInputMixin = {
render: function() {
  return (
      <div>
        <Label id={"lbl_"+this.props.id} text={this.props.label} required={this.state.required} />
        <TextInput {...this.props} className={"Status"+this.state.status} value={this.state.value} handleChange={this.handleChange} />
      </div>
      );
    }
}

var InputStateMixin = {
  getInitialState: function(){
    return {
      isscan : false,
      value : "",
      status : STATUS.EMPTY,
      required: this.props.required
    };
  },
  handleChange: function( event ) {
    var val = event ? event.target.value : this.props.value;
    var len = val.length;
    var scan = this.state.isscan;
    var status = STATUS.EMPTY;
    var required = this.props.required;

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
    if (this.props.required === "true" && status == STATUS.GOOD ) {
      required = "false";
    }

    this.setState({
      value : val,
      isscan : scan,
      status : status,
      required: required
    });
  }
}

var DINInput = React.createClass({
  mixins: [InputStateMixin,FormInputMixin],
  getDefaultProps: function(){
    return {
      maxLength : 16,
      label: "DIN",
      scanprefix: "=",
      hasflag: false
    };
  },
  getInitialState: function(){
    return {
      model : new DINModel(),
    };
  },
  checkFormat: function( val, scan ) {
    var len = val.length;
    var status = STATUS.WARN;

    val = val.toUpperCase();

    /* TODO - Expand this to DIN's proper validation */
    if ( ( len > 0 && val.charAt(0) != "W" )
          || len > this.props.maxLength ) {
      status = STATUS.BAD
    } else if ( len == this.props.maxLength ) {
      status = STATUS.GOOD;
    } else {
      status = scan ? STATUS.SCAN : STATUS.WARN;
    }

    return {val: val, status: status};
  }
});

var ContainerInput = React.createClass({
  mixins: [InputStateMixin,FormInputMixin],
  getDefaultProps: function(){
    return {
      maxLength : 10,
      minLength : 10,
      label: "Container",
      scanprefix: "=)"
    };
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
  handleChange: function(event){
    this.setState({ din1: event.target.value});
  },
  render: function() {
    return (<div onChange={this.handleChange}>
        <DINInput label="DIN 1" id="din1" hasflag="true" required="true" value={this.state.din1} /><br />
        <DINInput label="DIN 2" value={this.state.din2} /><br />
        <ContainerInput label="Container" required="true" value={this.state.container} /><br />
        <DINText  label="DIN 1" value={this.state.din1} />
  		</div>);
  }
});

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
