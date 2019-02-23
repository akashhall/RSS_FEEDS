import React from 'react';
import { Link } from 'react-router-dom';
// import './style.css';

import './style.css';
class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            inputUrl: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                {this.props.FeedItemData &&
                    <Link to={{ pathname: '/feedItem', state: { FeedData: this.props.FeedItemData } }} >
                        <div className="feed-item">
                            <span> {this.props.FeedItemData.pubDate}</span>
                            <span> {this.props.FeedItemData.title}</span>
                            <span> {this.props.FeedItemData.author}</span>
                        </div>
                    </Link>}
            </React.Fragment>
        )
    }
}

export default FeedItem;