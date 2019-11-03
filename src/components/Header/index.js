import React, { Component } from 'react';
import { MdSearch } from 'react-icons/md';
import image from '../../assets/img/person1.jpeg';
import './style.scss';

class Header extends Component {
    state = { value: '' }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    render() {
        return (
            <header className="header">
                <div className="logo">logo</div>
                <form action="#" className="search">
                    <MdSearch />
                    <input className="search__input" type="text" value={this.state.value} onChange={this.handleChange} />
                </form>
                <div className="user">
                    <span className="user__name">
                        <span className="user__name--color">Welcome, </span>
                        {this.props.name}
                    </span>
                    <span><img className="user__photo" src={image} alt="person" /></span>
                    <nav className="user__nav">
                        <span className="user__nav-icon"></span>
                    </nav>
                </div>
            </header>
        );
    }
};

export default Header;
