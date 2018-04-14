import React, { Component } from 'react';
import { Link } from 'react-router-dom'



export const CreatePR = (props) => <div>Create Pricing Rule</div>

export const SearchPR = (props) => <div>Searh Pricing Rule</div>

export const ViewPR = ({ match }) => <div>View Pricing Rule</div>

export const PricingHeader = (props) => <div>
    <ul className="list-inline">
        <li><Link to={`${props.match.url}`}>Create Pricing Rule</Link> </li>
        <li><Link to={`${props.match.url}/Search`}>Searh Pricing Rule</Link> </li>
        <li><Link to={`${props.match.url}/View/:number`}>View Pricing Rule</Link> </li>
    </ul>
</div>;
