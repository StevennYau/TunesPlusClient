import React, { Component } from 'react'
import axios from "axios";

export default class Global50 extends Component {
    constructor(){
        super();
        this.state = {
            songs: [],
            clicked: false
        };
    }

    getGlobal50 = () => {
        this.setState(state => {
            if (state.clicked === true) {
               return { clicked: false };
             } else {
               return { clicked: true };
            }
        });
        axios.get("/getGlobal50")
            .then(response => {
                console.log(response.data);
                this.setState({
                    songs: response.data
                })
            })
            .catch(error => {
                console.log("error is " + error);
                return error;
            });
    };

    render() {
        return (
            <div>
                <button onClick={this.getGlobal50}>Get Global Top 50 Songs (toggle)</button>
                {this.state.clicked === true && 
                    <ol className="center">
                        {this.state.songs.map((item) =>(
                            <li key={item}>{item}</li>
                        ))}
                    </ol>
                }
            </div>
        )
    }
} 

