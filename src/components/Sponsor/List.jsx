import React, { Component } from 'react';

class List extends Component {

  render() {
    const sponsors = this.props.data.map((sponsor) => {
      return <div className="sponsor pure-u-1-2 pure-u-md-1-3"><a href={sponsor.link} target="_blank"><div className="sponsor-in"><div className={sponsor.categoryclass}><i className={sponsor.iconclass}></i> {sponsor.categoryname}</div><img src={sponsor.logo} className={sponsor.classname} alt={sponsor.name} /></div></a></div>;
    });

    return (
      <div className="sponsors">
        {sponsors}
      </div>
    );
  }
}

List.propTypes = {
  data: React.PropTypes.array.isRequired,
};

export default List;
