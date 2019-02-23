import React from 'react';
// import './style.css';

class FeedItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header: '',
            inputUrl: ''
        }
        this.FeedItemData = props.FeedItemData ;
    }
render() {
    return (
        <React.Fragment>
            <div className="feed-item">
                {this.FeedItemData.author}
            </div>
        </React.Fragment>
    )
}
}

export default FeedItem;