import React, { Component } from 'react';

class List extends Component {
  render() {

    let sponsors = this.props.data.map((sponsor) => {
      return <img src={sponsor.logo} className={sponsor.classname} alt={sponsor.name} />
    })

    return (
      <div className="sponsor">
        <h4>{this.props.type}</h4>
        {sponsors}
      </div>
    )
  }
};

export default List;
