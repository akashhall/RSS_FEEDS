import React from 'react';
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
                    <div className="feed-item">
                   <a> {this.props.FeedItemData.author} </a>
                    </div>}
            </React.Fragment>
        )
    }
}

export default FeedItem;