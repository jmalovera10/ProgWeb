import React, {Component} from "react";

class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numVotes: 0,
        };
    }

    addVote(){
        this.setState({
            numVotes: this.state.numVotes +1,
        })
    }

    render() {
        return (
            <div>
                <div className="name">{this.props.candidate.name}</div>
                <div className="votes">{this.state.numVotes}</div>
                <button onClick={() => this.addVote()}>Vote</button>
            </div>
        );
    }
}

export default Candidate