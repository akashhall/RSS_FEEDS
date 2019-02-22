import React from 'react';
import { connect } from 'react-redux';
import { setUrl, deleteUrl } from './action';
import './style.css';

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ''
    }
  }
  setUrl = (e) => {
    e.target.value !== '' ? this.props.setFeedData(e.target.value) : null;
    e.target.value = '';
  }
  deleteUrl = (url) => {
    this.props.deleteFeedData(url)
  }
  showURL = (data, index) => {
    return (
      <div key={index}>
        <button className="url-button"> {data.url}</button> <button className="url-remove" onClick={() => { this.deleteUrl(data.url) }}> X</button>
        <br />
      </div>
    )
  }
  componentWillReceiveProps(nextProps) {
    nextProps.state.feed.url.length ? nextProps.state.feed.url.filter((data) => {
      if (data.selected) {
        this.setState({ header: data.url })
      }
    }) : this.setState({ header: '' })
  }
  render() {
    return (
      <React.Fragment>
        {console.log(this.props.state)}
        <div className="main-container">
          <div className="url-container">
            {this.props.state.feed.url ? this.props.state.feed.url.map(this.showURL) : null}
          </div>
          <div className="vl"></div>
          <input placeholder="enter url" className="url-input" onBlur={this.setUrl} />
          <hr className="hr" />
          <div className="header">{this.state.header}</div>
        </div>
      </React.Fragment>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setFeedData: (value) => dispatch(setUrl(value)),
    deleteFeedData: (value) => dispatch(deleteUrl(value)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)