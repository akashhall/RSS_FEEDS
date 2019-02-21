import React from 'react';
// import { connect } from 'react-redux';
// import InsuranceCard from './../../Molecule/InsuranceCard';
// import DropDown from './../../../components/Atoms/dropDown';
// import Button from './../../Atoms/button';
// import { getFullData, filterDataByInsuranceProvider, filterDataByServiceAreaProvider, sortFilter } from './action';
import './style.css';

class FeedPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: [],
        }
    }
    setUrl = (e) => {
        console.log(e.target.value)
        const a = this.state.url;
        e.target.value !== ''? a.unshift(e.target.value): null;
        this.setState({ url: a })
        e.target.value= '';
    }
    showURL = (data, index) => {
        return (
            <>
            <button className="url-button"> {data}</button>
            <br />
            </>
        )
    }
    render() {
        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="url-container">
                        {this.state.url.length ? this.state.url.map(this.showURL) : null}
                    </div>
                    <div className="vl"></div>
                    <input placeholder="enter url" className="url-input" onBlur={this.setUrl} />
                    <hr className="hr" />
                </div>
            </React.Fragment>
        )
    }

}


export default FeedPage