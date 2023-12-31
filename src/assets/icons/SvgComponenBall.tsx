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
            fill="#3D444F"
            d="m1 13.444-.673-.33A.75.75 0 0 0 1 14.193v-.75Zm14 0v.75a.75.75 0 0 0 .673-1.08l-.673.33ZM3.5 6.334C3.5 3.79 5.526 1.75 8 1.75V.25c-3.325 0-6 2.735-6 6.083h1.5ZM8 1.75c2.474 0 4.5 2.04 4.5 4.583H14C14 2.985 11.325.25 8 .25v1.5ZM2 6.333c0 1.666-.412 3.36-.838 4.655a20.4 20.4 0 0 1-.768 1.984 8.207 8.207 0 0 1-.064.135l-.003.006.673.331.673.331v-.001l.002-.003.005-.01a10.97 10.97 0 0 0 .284-.636c.171-.404.397-.98.624-1.669.45-1.37.912-3.233.912-5.123H2Zm-1 7.861h14v-1.5H1v1.5Zm14-.75.673-.33v-.001l-.003-.006-.012-.026a15.144 15.144 0 0 1-.24-.54 20.4 20.4 0 0 1-.58-1.553C14.412 9.692 14 8 14 6.333h-1.5c0 1.89.463 3.753.912 5.123a21.926 21.926 0 0 0 .831 2.142l.06.128.017.035.005.01a.041.041 0 0 0 .002.004l.673-.33Zm-5.125.89c0 1.07-.85 1.916-1.875 1.916v1.5c1.875 0 3.375-1.54 3.375-3.417h-1.5ZM8 16.25c-1.024 0-1.875-.847-1.875-1.917h-1.5c0 1.876 1.5 3.417 3.375 3.417v-1.5Zm-1.875-1.917v-.889h-1.5v.89h1.5Zm5.25 0v-.889h-1.5v.89h1.5Z"
        />
    </Svg>
)
export default SvgComponent
