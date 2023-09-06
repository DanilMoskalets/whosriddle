import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={18}
        fill="none"
        {...props}
    >
        <Path
            stroke="#3D444F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M1 7.588 8 1l7 6.588V17H1V7.588Z"
        />
    </Svg>
)
export default SvgComponent
