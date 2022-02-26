const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Create a NEW Log Entry</h1>
                <nav>
                    <a href='/caplog'> Return to Log Directory</a>
                </nav>
                <form action="/caplog" method="POST">
                    Log Title:<br /><input name="title" type="text" /><br />
                    Date:<br /><input name="date" type="date" /><br />
                    Entry:<br /><textarea name="entry" /><br />
                    Is Ship Broken?:<input name="shipIsBroken" type="checkbox" /><br />
                    <input type="submit" value="Post Log" />
                    {/* Entry:<textarea id="entry" rows="5 cols="30"></textarea> */}
                </form>
            </div>
        )
    }
}

module.exports = New;
