const React = require('react');


class Edit extends React.Component {
    render() {
        return (

            <form action={`/caplog/${this.props.caplog._id}?_method=PUT`} method="POST">

                Log Title:<br /><input name="title" type="text" defaultValue={this.props.caplog.title} /><br />

                Date:<br /><input name="date" type="date" defaultValue={this.props.caplog.date} /><br />

                Entry:<br /><textarea name="entry" /><br />

                Is Ship Broken?:<input name="shipIsBroken" type="checkbox" defaultChecked /><br />
                <input type="submit" value="Post Log" />

            </form>

        )
    }
}
module.exports = Edit;