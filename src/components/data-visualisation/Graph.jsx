import React from "react";
import { HorizontalBar } from "react-chartjs-2";

const Graph = (props) => {
  const objKeys = Object.keys(props.lookUpList);
  const objValues = Object.values(props.lookUpList);

  const data = {
    labels: objKeys,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: objValues,
      },
    ],
  };

  return (
    <div>
    <div className='card--dash'>
      <h4 className='asteroid graph heading'>Asteroid Mass Comparrison:</h4>
      <HorizontalBar
        data={data}
        //   width={400}
        //   height={215}
        //   options={{ maintainAspectRatio: false }}
      />
      </div>  
    </div>
  );
};

export default Graph;
