import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props: any) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={16}
        fill="none"
        {...props}
    >
        <Path
            stroke="#3D444F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M2.286 4.429 4 14.714h12L17.714 4.43m-15.428 0L7 8.286l3-4.715m-7.714.858a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572Zm15.428 0L13 8.286 10 3.57m7.714.858a1.286 1.286 0 1 0 0-2.572 1.286 1.286 0 0 0 0 2.572ZM10 3.57A1.286 1.286 0 1 0 10 1a1.286 1.286 0 0 0 0 2.571Z"
            opacity={0.66}
        />
    </Svg>
)
export default SvgComponent
