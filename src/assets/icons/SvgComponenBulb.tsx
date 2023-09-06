import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={17}
        height={19}
        fill="none"
        {...props}
    >
        <Path
            stroke="#3D444F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14.94 8.48h1.02M1 8.48h1.02M13.24 3.72l.68-.68M3.04 3.04l.68.68M8.48 1v.68"
        />
        <Path
            stroke="#3D444F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M8.48 3.72a4.76 4.76 0 0 0-2.38 8.883c.463.268-.131 1.796.393 2.801.037.07.183.169.183.169h3.51s.14-.098.177-.169c.526-1.005.034-2.533.497-2.801A4.76 4.76 0 0 0 8.48 3.72ZM8.48 13.24v2.04M10.629 16.151v.611A1.36 1.36 0 0 1 9.269 18H7.684a1.36 1.36 0 0 1-1.36-1.238v-.802"
        />
    </Svg>
)
export default SvgComponent
