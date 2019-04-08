import React, {Component} from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: "USD"
        }
    }

    render() {
        return (
            <div>
                <div className="select">
                    <select name="currency" id="" onChange={e=>this.setState({currency:e.target.value})}>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                    </select>
                </div>
                <div> <b>currency</b> : {this.props.bpi.bpi[this.state.currency].description}</div>
            </div>
        );
    }
}

MyComponent.propTypes = {};

export default MyComponent;
