import React, { Component } from 'react';
import { Link } from '@reach/router';

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
        date: new Date()
        });
    }

    render() {
        return (
    <div className="row" style={{marginTop: "60px"}}>
        <div className="col">
            <div className="row clockrow">
                    <h1> &bull; {this.state.date.toLocaleTimeString()} &bull; </h1>
            </div>

            <div className="row linkrow">
                    <Link to="/" className="myfootlinks">&copy;&nbsp;&nbsp;2020&nbsp;&nbsp;&nbsp;&nbsp;michael&nbsp;&nbsp;cote  .  .  .
                    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    this app was made useing react javascript node express mongodb &hearts;</Link>
            </div>
        </div>
    </div>
        );
    }
}

export default Clock;



