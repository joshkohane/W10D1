import React from 'react';

class Clock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            times: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    componentDidMount(){
        this.handle = setInterval(this.tick, 1000); //the didMount will invoke the function
    }

    componentWillUnmount(){
        clearInterval(this.handle);
    }

    tick() {
        this.setState({times: new Date()});
    }

    render() {
        let hours = this.state.times.getHours();
        let minutes = this.state.times.getMinutes();
        let seconds = this.state.times.getSeconds();
        
        // seconds += 1;
        // if(seconds === 60) {
        //     seconds = 0;
        //     minutes += 1;
        //     if (minutes === 60) {
        //         minutes = 0;
        //         hours = (hours + 1) % 24;
        //     }
        // }
        return (
            <div className="clock">
                <h1>Clock</h1>
                <span>{hours}:{minutes}:{seconds}</span>
            </div>
        )
    }
}

export default Clock;
