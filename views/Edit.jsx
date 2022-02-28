const React = require('react');
const Default = require('./layout/Default.jsx')

class Edit extends React.Component {
    render() {
        return (
            
            <Default title="Captain's Log Directory">
            <form action={`/caplog/${this.props.caplog._id}?_method=PUT`} method="POST">
                    <a href='/caplog'>Return to Log Index</a><br />

                Log Title:<br /><input name="title" type="text" defaultValue={this.props.caplog.title} /><br />

                Date:<br /><input name="date" type="date" defaultValue={this.props.caplog.date} /><br />

                Entry:<br /><textarea name="entry" /><br />

                Is Ship Broken?:<input name="shipIsBroken" type="checkbox" defaultChecked /><br />
                <input type="submit" value="Post Log" />

            </form>
</Default >
        )
    }
}
module.exports = Edit;