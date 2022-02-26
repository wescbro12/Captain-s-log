const React = require('react');

class Index extends React.Component {
    render() {
        const logs = this.props.caplog
        return (
            <div>
                <h1> Captain's Log INDEX</h1>
                <nav>
                    <a href='/caplog/new'>Create a new Log Post</a>
                </nav>
                <ul>
                    {logs.map((log) => {
                        return (
                            <li key={`${log._id}`}>
                                <a href={`/caplog/${log._id}`}>{log.title}</a>
                                {/* {`${log.title}`} */}


                                <form action={`/caplog/${log._id}?_method=Delete`} method="POST">

                                    <input type="submit" value={`Delete ${log.title}`} />
                                </form>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>
        )
    }
}

module.exports = Index;