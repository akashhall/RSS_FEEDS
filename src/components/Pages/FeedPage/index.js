import React from 'react';
import { connect } from 'react-redux';
import FeedItem from './../../Molecule/FeedItem';
import { setUrl, deleteUrl, selectedUrl } from './action';
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
  selectedUrlActive = (index) => {
    this.props.selectedUrlActive(index)
  }
  showURL = (data, index) => {
    return (
      <div key={index}>
        <button className="url-button" onClick={() => this.selectedUrlActive(index)}> {data.url}</button> <button className="url-remove" onClick={() => { this.deleteUrl(index) }}> X</button>
        <br />
      </div>
    )
  }
  componentWillReceiveProps(nextProps) {
    nextProps.state.feed.url.length ? nextProps.state.feed.url.filter((data) => {
      if (data.selected) {
        this.setState({ urlData: data })
      }
    }) : this.setState({ urlData: null })
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
          {this.state.urlData && <div className="header">{this.state.urlData.url}</div>}
          <div className="feed-itme-container">
            {this.state.urlData && this.state.urlData.urlData && this.state.urlData.urlData.items.length ?
              this.state.urlData.urlData.items.map((data, index) => { return <FeedItem key={index} FeedItemData={data} /> }) : <FeedItem FeedItemData={null} />}
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
    selectedUrlActive: (value) => dispatch(selectedUrl(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(FeedPage)