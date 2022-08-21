import React, {Component} from 'react';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        if(this.state.new_arrival) {
            return (
                <div>

                </div>
            );
        }else
            return <h1>Loading...</h1>
    }
}

export default MainPage;