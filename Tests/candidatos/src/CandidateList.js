import React, {Component} from "react";

import Candidate from "./Candidate.js";

export default class CandidateList extends Component {
    constructor(props){
        super(props);

        this.state = {
            candidates:[
                {
                    party: "CD",
                    name: "Uribito1",
                },
                {
                    party: "CD",
                    name: "Uribito2",
                },
                {
                    party: "CD",
                    name: "Uribito3",
                },
                {
                    party: "CD",
                    name: "Uribito4",
                },
                {
                    party: "CD",
                    name: "Uribito5",
                },
                {
                    party: "CD",
                    name: "Uribito6",
                },
                {
                    party: "CD",
                    name: "Uribito7",
                },
            ]
        }
    }

    renderCandidates(){
        return this.state.candidates.map((c)=>
            <Candidate key={c.name} candidate={c}></Candidate>
        );
    }

    render() {
        return(
            <div>
                {this.renderCandidates()}
                <input type="text" onKeyPress={
                    (evt) => {
                        if(evt.key !== "Enter")return;
                        let candidates = this.state.candidates;
                        const newCandidate = {party: "Other", name:evt.target.value};

                        this.setState({candidates: candidates.concat([newCandidate])});
                    }
                }/>
            </div>
        )
    }
}