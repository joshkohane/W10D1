import React from 'react'

class Weather extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            weather: null
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(919fb14b062d7924c1fd1291149e6f06);
    }

    render(){
        return <h1>Weather</h1>
    }
}

export default Weather