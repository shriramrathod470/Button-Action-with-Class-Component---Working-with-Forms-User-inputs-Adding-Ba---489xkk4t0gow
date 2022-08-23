import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
	};

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				{this.state.para}
			<button  id ="click" onClick={<P id = "para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</P>} >Display</button>
    		</div>
    	);
    }
}


export default App;

