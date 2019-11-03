import React, { Component } from 'react';
import { MdInsertDriveFile, MdKeyboardArrowRight } from 'react-icons/md';
import Card from '../Card';
import image from '../../assets/img/person1.jpeg';
import './style.scss';

class Main extends Component {
    state = { width: 0 }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth });
    }

    render() {
        const meetings = [
            { id: 1, number: 'DBF 11/2', type: 'Meeting', date: 'Monday, 12 Jun 2018', hour: '04:30 pm' },
            { id: 2, number: 'DBF 11/2', type: 'Meeting', date: 'Monday, 12 Jun 2018', hour: '04:30 pm' },
            { id: 3, number: 'DBF 11/2', type: 'Meeting', date: 'Monday, 12 Jun 2018', hour: '04:30 pm' },
            { id: 4, number: 'DBF 11/2', type: 'Meeting', date: 'Monday, 12 Jun 2018', hour: '04:30 pm' },
        ];

        const notes = [
            { id: 1, number: 'DBF 11/2', content: 'Meeting', icon: <MdInsertDriveFile /> },
            { id: 2, number: 'DBF 11/2', content: 'Meeting', icon: <MdInsertDriveFile /> },
            { id: 3, number: 'DBF 11/2', content: 'Meeting', icon: <MdInsertDriveFile /> },
        ];

        const activities = [
            { id: 1, image, text1: 'Jake added 2 files', text2: 'to case DBF 11/2', icon: <MdKeyboardArrowRight /> },
            { id: 2, image, text1: 'Jake added 2 files', text2: 'to case DBF 11/2', icon: <MdKeyboardArrowRight /> },
            { id: 3, image, text1: 'Jake added 2 files', text2: 'to case DBF 11/2', icon: <MdKeyboardArrowRight /> },
            { id: 4, image, text1: 'Jake added 2 files', text2: 'to case DBF 11/2', icon: <MdKeyboardArrowRight /> },
        ];

        return (
            <main className="main">
                <div className="row">
                    <div className={`${this.state.width <= 630 ? 'col-1' : 'col-3-of-4'}`}>
                        <div className="row">
                            <div className="col-1-of-2">
                                <Card title="Active arbitration's" active="See More">
                                    <div className="card__body--dark">
                                        <span className="card__body-number">{3}</span>
                                    </div>
                                </Card>
                            </div>
                            <div className="col-1-of-2">
                                <Card title="Active mediation's" active="See More" number={0} >
                                    <div className="card__body--dark">
                                        <span className="card__body-number">{0}</span>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <Card title="Sessions & Meetings" active="See Calendar">
                                    <div className="card__body">
                                        <ul>
                                            {meetings.map(meeting => {
                                                return (
                                                    <li key={meeting.id} className="table-row flex-vert-center">
                                                        <div className="flex-2">{meeting.number}</div>
                                                        <div className="flex-5">{meeting.type}</div>
                                                        <div className="flex-3">{meeting.date}</div>
                                                        <div className="flex-1">{meeting.hour}</div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-1">
                                <Card title="Recent notes" light>
                                    <div className="card__body">
                                        <ul>
                                            {notes.map(note => {
                                                return (
                                                    <li key={note.id} className="table-row flex-vert-center">
                                                        <div className="flex-1">{note.icon}</div>
                                                        <div className="flex-5">{note.content}</div>
                                                        <div className="flex-1">{note.number}</div>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    </div>
                    <div className={`${this.state.width <= 630 ? 'col-1' : 'col-1-of-4'}`}>
                        <Card title="Activity" active="See All">
                            <div className="card__body">
                                <ul>
                                    {activities.map(activity => {
                                        return (
                                            <li key={activity.id} className="table-row flex-vert-center">
                                                <div className="flex-1">
                                                    <img className="user__photo" src={activity.image} alt="person" />
                                                </div>
                                                <div className="flex-5">{activity.text1}<div className="small-text">{activity.text2}</div></div>
                                                <div className="flex-1 arrow-box">{activity.icon}</div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>
        );
    }
}

export default Main; 
