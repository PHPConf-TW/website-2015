import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import Speaker from './Speaker';

class List extends Component {
  render() {
    const speakers = this.props.speakers.map((speaker, index) => {
      return <Speaker key={index} {...speaker} />;
    });

    return (
      <div>
        {speakers}
      </div>
    );
  }
}

List.propTypes = {
  speakers: React.PropTypes.array.isRequired,
};

export default List;
