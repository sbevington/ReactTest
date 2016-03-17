var DINPage = React.createClass({
  render: function(){
    return ( <div>
        <div><DINHtml din="W1151161234561" /></div>
        <div><DINHtml din="W1151161234572" /></div>
        <div><DINHtml din="W1151161234583" /></div>
      </div>
    )
  }
})
var DINHtml = React.createClass({
  render: function(){
    var din = this.props.din;
    var fin = din.substr( 0,5 );
    var year = din.substr( 5, 2 );
    var series = din.substr( 7, 6 )
    var chk = din.substr( 13, 1 );
    return (
      <span><span className='din_fin'>{fin}</span><span className='din_year'>{year}</span><span className='din_series'>{series}</span><span className='din_c'>{chk}</span></span>
    )
  }
});
