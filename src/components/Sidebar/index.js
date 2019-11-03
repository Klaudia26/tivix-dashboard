import React, { Component } from 'react';
import { MdDashboard, MdBook, MdTimer, MdSystemUpdateAlt, MdToday } from 'react-icons/md';
import './style.scss';

class Sidebar extends Component {
    state = { activeIndex: 0 }

    handleClick(e, activeIndex) {
        e.preventDefault();

        this.setState({ activeIndex });
    }

    renderList() {
        const menuItems = [
            { href: '', content: 'Dashboard', icon: <MdDashboard /> },
            { href: '', content: 'Cases', icon: <MdBook /> },
            { href: '', content: 'Calendar', icon: <MdToday /> },
            { href: '', content: 'Time Keeping', icon: <MdTimer /> },
            { href: '', content: 'Updates', icon: <MdSystemUpdateAlt /> },
        ];

        return menuItems.map((item, index) => {
            return (
                <li key={item.content} className={`nav__list-item nav__list-item ${this.state.activeIndex === index ? 'nav__list-item--active' : ''}`} >
                    <a onClick={(e) => this.handleClick(e, index)} href={item.href} className="nav__list-link">
                        {item.icon}
                        <span>{item.content}</span>
                    </a>
                </li>
            );
        });
    }

    render() {
        return (
            <aside className="sidebar">
                <nav className="nav">
                    <p className="nav__menu">Menu</p>
                    <ul className="nav__list">
                        {this.renderList()}
                    </ul>
                </nav>
            </aside>
        );
    }
}

export default Sidebar;
