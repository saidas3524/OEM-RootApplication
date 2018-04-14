import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import { userSelector } from '../selectors';
class Header extends Component {

    render() {
        const {user} = this.props;
        return (
            <div>
                {user && <div> Hi ! {user.name}</div>}
                <ul className="list-inline">
                    <li><Link to={'/'}>home</Link> </li>
                    <li><Link to={'/pricing'}>Pricing</Link> </li>
                    <li><Link to={'/order'}>Order</Link> </li>
                    <li><Link to={'/cbr'}>CBR</Link> </li>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    var user = userSelector(state);
    user = user ? user.toJS() : user;
    return {
        user: user
    }

}






const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Header)


