import { connect } from 'react-redux'
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { repoSelector } from '../selectors';


class RepoComponent extends Component {



    render() {
        const ListItem = (props) => <li className="list-group-item">{props.name}</li>;
        const {repos} = this.props;
        return (
            <div style={{margin:"40px"}}>
                <ul className="list-group">
              {repos && repos.map(x=> <ListItem key = {x.id} {...x}/> )}
              </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {


    var repos = repoSelector(state);
    repos = repos ? repos.toJS() : repos;
    return {
        repos: repos
    }

}






const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RepoComponent)


