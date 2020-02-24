import React, { Component } from 'react'
import Logo from './Logo';

export default class Footer extends Component {
    state = {};


    render() {
        return (
            <div className="bg-light p-3 fixed-bottom">
                <Logo />
                <p><b>Email</b>: hamsaharcourt@gmail.com</p>
                <p><b>Phone</b>: +2348075339205</p>
                <p>Copyright &copy; of Harcourt Hamsa 2020</p>
            </div>
        )
    }
}
