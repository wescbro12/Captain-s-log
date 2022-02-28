const React = require('react');
const Default = require('./layout/Default.jsx')

class Index extends React.Component {
    render() {
        const logs = this.props.caplog
        return (
            <Default title="Captain's Log Directory">
            <div>
                {/* <h1> Captain's Log INDEX</h1> */}
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
         </Default>   
        )
    }
}

module.exports = Index;