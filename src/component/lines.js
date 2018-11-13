import React from "react";
import { Group } from "@vx/group";
import { LinePath } from "@vx/shape";
import { curveMonotoneX } from "@vx/curve";
import { scaleTime, scaleLinear } from "@vx/scale";

import { extent, max } from "d3-array";

export default props => {
  const xMax = props.width;
  const yMax = props.height / 8;
  const data = props.series.reduce((rec, d) => {
    return rec.concat(d);
  }, []);

  const x = d => d.date;
  const y = d => d.value;

  // scales
  const xScale = scaleTime({
    range: [0, xMax],
    domain: extent(data, x)
  });
  const yScale = scaleLinear({
    range: [yMax, 0],
    domain: [0, max(data, y)]
  });

  return (
    <svg width={"100%"} height={"100%"}>
      <rect
        x={0}
        y={0}
        width={props.width}
        height={props.height}
        fill="#242424"
      />
      {xMax > 8 &&
        props.series.map((d, i) => {
          const offset = (i * yMax) / 2;
          const curve = i % 2 == 0 ? curveMonotoneX : undefined;

          return (
            <Group key={`lines-${i}`} top={offset}>
              <LinePath
                data={d}
                xScale={xScale}
                yScale={yScale}
                x={x}
                y={y}
                stroke="#fff"
                strokeWidth={1}
                curve={curve}
              />
            </Group>
          );
        })}
    </svg>
  );
};
