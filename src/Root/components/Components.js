import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export const Home = (props) => <div>Home</div>


export const Order = (props) => <div>Order</div>

export const Cbr = ({ match }) => <div>CBR</div>

// export const Header = ({ user }) => <div>
//     {user && <div> Hi ! {user.name}</div>}
//     <ul>
//         <li><Link to={'/'}>home</Link> </li>
//         <li><Link to={'/pricing'}>Pricing</Link> </li>
//         <li><Link to={'/order'}>Order</Link> </li>
//         <li><Link to={'/cbr'}>CBR</Link> </li>
//     </ul>
// </div>;


