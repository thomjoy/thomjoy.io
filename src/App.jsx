import React from "react";
import Lines from "./component/lines/lines";
import Header from "./component/header/header";
require("./app.css");

import { genDateValue } from "@vx/mock-data";

function genLines(num) {
  return new Array(num).fill(1).map(() => {
    return genDateValue(28);
  });
}

let series = genLines(30);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: genLines(30)
    };
  }

  componentDidMount() {
    //this.timerID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      series: genLines(30)
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Lines
          series={this.state.series}
          width={document.body.offsetWidth}
          height={document.body.offsetHeight}
        />
      </div>
    );
  }
}

export default App;
