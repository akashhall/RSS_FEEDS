import React from 'react';
import { connect } from 'react-redux';
import FeedItem from './../../Molecule/FeedItem';
import { setUrl, deleteUrl } from './action';
import './style.css';

class FeedPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: '',
      inputUrl: '',
      urlData: {},
    }
  }
  setUrl = (e) => {
    e.target.value !== '' ? this.setState({ [e.target.name]: e.target.value }) : null;
  }

  addUrl = () => {
    this.input.value = ''
    this.props.setFeedData(this.state.inputUrl);
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
        const d = data.urlData !== null && data.urlData;
        this.setState({ header: data.url, urlData: d })
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
          <input placeholder="enter url" ref={(input) => this.input = input} className="url-input" onBlur={this.setUrl} name='inputUrl' /> <button className="add-url" onClick={this.addUrl}> Add URL</button>
          <hr className="hr" />
          <div className="header">{this.state.header}</div>
          <div style={{ marginLeft: '30%' }}>
            {this.state.urlData && this.state.urlData.items && this.state.urlData.items.length &&
              this.state.urlData.items.map((data,index) => { return <FeedItem key={index} FeedItemData={data} /> })}
          </div>
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