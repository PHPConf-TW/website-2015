import React, { Component } from 'react';

class List extends Component {
  render() {

    let sponsors = this.props.data.map((sponsor) => {
      return <div className="sponsor pure-u-1 pure-u-sm-1-2 pure-u-md-1-3"><div className="sponsor-in"><div className={sponsor.categoryclass}><i className={sponsor.iconclass}></i> {sponsor.categoryname}</div><img src={sponsor.logo} className={sponsor.classname} alt={sponsor.name} /></div></div>
    })

    return (
      <div className="sponsors">
        {sponsors}
      </div>
    )
  }
};

export default List;
