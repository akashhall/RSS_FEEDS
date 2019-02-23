import React from 'react';
// import FeedItem from './../../Molecule/FeedItem';
import './style.css';

class FeedItemPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        const { FeedData } = this.props.location.state;
        return (
            <React.Fragment>
                <div className='feed-item-container'>
                <span>{FeedData.pubDate} </span>
                <span>{FeedData.title} </span>
                <span dangerouslySetInnerHTML={{ __html: FeedData.content }}></span>
                <span dangerouslySetInnerHTML={{ __html: FeedData.description }}></span>
                <span>{FeedData.author} </span>
                </div>
            </React.Fragment>
        )
    }
}

export default FeedItemPage;