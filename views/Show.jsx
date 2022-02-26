const React = require('react');

class Show extends React.Component {
    render() {
        const logs = this.props.caplog
        return (
            <div>
                <h1> Captain's Log Entry</h1>
                <nav>
                    <a href='/caplog'>Return to Log Index</a>
                </nav>
                <p>Log Title:{logs.title}</p><br />
                <p>Entry Date:{logs.date}</p><br />
                <p>Entry:{logs.entry}</p>
                <p>Is the ship in need of repair?<br />{logs.shipIsBroken ? 'Repairs are needed' : 'No repairs needed, kick back and relax'}</p>
            </div>
        )
    }
}

module.exports = Show;