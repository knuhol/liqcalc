import React from 'react';
import numeral from 'numeral';

const propTypes = {
    label: React.PropTypes.string.isRequired,
    value: React.PropTypes.number.isRequired,
    drops: React.PropTypes.number.isRequired,
    percentage: React.PropTypes.number.isRequired
};

class ResultItem extends React.Component {
    formatNumber(number) {
        return numeral(number).format('0.0');
    }

    render() {
        return (
            <tr>
                <td>{this.props.label}</td>
                <td>{this.formatNumber(this.props.value)}</td>
                <td>{this.formatNumber(this.props.drops)}</td>
                <td>{this.formatNumber(this.props.percentage)}</td>
            </tr>
        )
    }
}

ResultItem.propTypes = propTypes;

export default ResultItem;