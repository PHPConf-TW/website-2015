import '!style!css!less!./Schedule.less';
import React, { Component } from 'react';
import classnames from 'classnames';

class Detail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hide: true,
    };
  }

  handleClick = () => {
    this.setState({
      hide: !this.state.hide,
    });
  }

  render() {
    const hideContent = classnames({hide: this.state.hide});
    const hideButton = classnames('text-btn', {hide: !this.state.hide || !this.props.data.title});

    return (
      <div className={`pure-u-1 pure-u-md-1-2 ${this.props.css} close`}>
        {this.props.data.content.map((content, key) => {
          return <p key={key} className={hideContent}>{content}</p>;
        })}
        <a onClick={this.handleClick} className={hideButton}>看更多 <i className="fa fa-caret-right"></i></a>
        <p style={{display: (this.props.data.slide_url || this.props.data.youtube_url) ? 'inline' : 'none'}} className="slide">
          <a style={{display: this.props.data.slide_url ? 'inline' : 'none'}} href={this.props.data.slide_url}>投影片</a>
          <a style={{display: this.props.data.youtube_url ? 'inline' : 'none'}} href={this.props.data.youtube_url} target="_blank">Youtube</a>
        </p>
      </div>
    );
  }
}

Detail.propTypes = {
  data: React.PropTypes.array.isRequired,
  css: React.PropTypes.string.isRequired,
};

export default Detail;
