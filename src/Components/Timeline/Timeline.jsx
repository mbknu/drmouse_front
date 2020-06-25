import React from "react";
import HorizontalTimeline from "react-horizontal-timeline";
import LogoTimeline from './lotties/LogoTimeline';

import './timeline.css';


const VALUES = ["2018-03-22", "2018-03-23"];

const EXAMPLE = [
  {
    data: "2018-03-10",
    status: "status",
    statusB: "Bébé" ,
    statusE: "In Progress"
  },
  {
    data: "2018-03-15",
    status: "status",
    statusB: "Enfant" ,
    statusE: "In Progress"
  },
  {
    data: "2018-03-20",
    status: "status",
    statusB: "Adolescent",
    statusE: "Done"
  },
  {
    data: "2018-03-25",
    status: "status",
    statusB: "Adulte",
    statusE: "Done"
  },
  {
    data: "2018-03-30",
    status: "status",
    statusB: "Sagesse",
    statusE: "Done"
  },
];

export default class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      curIdx: 0,      
      prevIdx: -1
    };
  }

  render() {
   
    const {curIdx} = this.state;
    const curStatus = EXAMPLE[curIdx].statusB;

    return (
        <div>
            <div className="lotties-wrapper">

                <LogoTimeline />

            </div>

      <div className="timeline-wrapper">
        {/* Bounding box for the Timeline */}
        <div
          style={{
            width: "60%",
            height: "100px",
            margin: "0 auto",
            marginTop: "20px",
            fontSize: "15px",
            color: "white"
          }}
        >
          <HorizontalTimeline
            styles={{
              background: "#f8f8f8",
              foreground: "#1A79AD",
              outline: "#dfdfdf",
            }}
            index={this.state.curIdx}
            indexClick={index => {
              const curIdx = this.state.curIdx;
              this.setState({ curIdx: index, index: curIdx });
            }}            
            values={EXAMPLE.map(x => x.data)}
          />
        </div>
        <div className="text-center">
          {curStatus}
        </div>
      </div>
      </div>
    );
  }
}