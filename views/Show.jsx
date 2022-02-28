const React = require('react');
const Default = require('./layout/Default.jsx')
const moment = require('moment')

class Show extends React.Component {
    render() {
        const logs = this.props.caplog //" caplog is passed from show route"
        const date = moment(logs.createdAt).format('LL')
        return (
            <Default title="Log Entry">
                <div>
                    <h2>{logs.title.toLowerCase()}</h2>
                    <nav>
                        <a href='/caplog'>Return to Log Index</a>
                    </nav>
                    <p><b className='enter'> Log Title</b>: {logs.title.charAt(0).toUpperCase() + logs.title.substr(1).toLowerCase()}</p><br />
                    <p><b className='enter'>Entry Date</b>: {date}</p><br />
                    <p><b classname='enter'>Entry</b>: {logs.entry}</p>
                    <p><b classname='enter'>Is the ship in need of repair?</b>:<br/><br/>{logs.shipIsBroken ? 'Repairs are needed' : 'No repairs needed, kick back and relax'}</p>
                    <a href={`/caplog/${logs._id}/edit`}>Edit this post</a>
                </div>
            </Default>
        )
    }
}

module.exports = Show;