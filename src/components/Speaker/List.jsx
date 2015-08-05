import '!style!css!less!./Speaker.less';
import React, { Component } from 'react';
import Speaker from './Speaker';

class List extends Component {
  render() {
    let speakers = this.props.speakers.map((speaker) => {
      return <Speaker {...speaker} />;
    });

    return (
      <div>
        {speakers}
      </div>
    );
  }
}

export default List;
