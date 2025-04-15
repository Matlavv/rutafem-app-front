import Svg, { Path, Mask } from 'react-native-svg';


const icons: { [key: string]: ({ strokeColor, strokeWidth, fillColor, width, height, }: SvgProps) => JSX.Element } = {
    home: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
        </Svg>
    ),
    car: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M14 5a1 1 0 0 1 .694 .28l.087 .095l3.699 4.625h.52a3 3 0 0 1 2.995 2.824l.005 .176v4a1 1 0 0 1 -1 1h-1.171a3.001 3.001 0 0 1 -5.658 0h-4.342a3.001 3.001 0 0 1 -5.658 0h-1.171a1 1 0 0 1 -1 -1v-6l.007 -.117l.008 -.056l.017 -.078l.012 -.036l.014 -.05l2.014 -5.034a1 1 0 0 1 .928 -.629zm-7 11a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m10 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2m-6 -9h-5.324l-1.2 3h6.524zm2.52 0h-.52v3h2.92z" />
        </Svg>
    ),
    add: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12 5l0 14" />
            <Path d="M5 12l14 0" />
        </Svg>
    ),
    profile: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 4.8C14.316 4.8 16.2 6.684 16.2 9C16.2 11.316 14.316 13.2 12 13.2C9.684 13.2 7.8 11.316 7.8 9C7.8 6.684 9.684 4.8 12 4.8ZM12 21.6C9.564 21.6 6.684 20.616 4.632 18.144C6.66 16.56 9.216 15.6 12 15.6C14.784 15.6 17.34 16.56 19.368 18.144C17.316 20.616 14.436 21.6 12 21.6Z" />
        </Svg>
    ),
    arrowLeft: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M5 12l14 0" />
            <Path d="M5 12l6 6" />
            <Path d="M5 12l6 -6" />
        </Svg>
    ),
    star: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" />
        </Svg>
    ),
    starHalf: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M8.24301 7.33992L1.86301 8.26492L1.75001 8.28792C1.57895 8.33333 1.423 8.42333 1.2981 8.54872C1.1732 8.67412 1.08381 8.83041 1.03907 9.00165C0.994331 9.17289 0.995837 9.35293 1.04344 9.5234C1.09104 9.69386 1.18303 9.84864 1.31001 9.97192L5.93201 14.4709L4.84201 20.8259L4.82901 20.9359C4.81854 21.1128 4.85528 21.2894 4.93546 21.4474C5.01564 21.6055 5.13639 21.7394 5.28535 21.8354C5.4343 21.9315 5.6061 21.9862 5.78316 21.994C5.96022 22.0018 6.13617 21.9625 6.29301 21.8799L11.999 18.8799L17.692 21.8799L17.792 21.9259C17.9571 21.9909 18.1365 22.0109 18.3118 21.9837C18.4871 21.9565 18.652 21.8832 18.7896 21.7712C18.9272 21.6592 19.0326 21.5127 19.0948 21.3466C19.1571 21.1804 19.1741 21.0008 19.144 20.8259L18.053 14.4709L22.677 9.97092L22.755 9.88592C22.8664 9.74869 22.9395 9.58438 22.9667 9.40972C22.994 9.23506 22.9744 9.0563 22.9101 8.89165C22.8458 8.72701 22.7389 8.58235 22.6005 8.47244C22.4621 8.36252 22.297 8.29126 22.122 8.26592L15.742 7.33992L12.89 1.55992C12.8075 1.39246 12.6797 1.25144 12.5212 1.15283C12.3627 1.05422 12.1797 1.00195 11.993 1.00195C11.8063 1.00195 11.6233 1.05422 11.4648 1.15283C11.3063 1.25144 11.1785 1.39246 11.096 1.55992L8.24301 7.33992Z" fill={strokeColor} />
            <Path d="M8.23642 7.33809L1.85642 8.26309L1.74342 8.28609C1.57236 8.3315 1.41641 8.42149 1.29151 8.54689C1.16661 8.67228 1.07722 8.82857 1.03248 8.99981C0.987739 9.17105 0.989246 9.35109 1.03685 9.52156C1.08445 9.69202 1.17643 9.8468 1.30342 9.97009L5.92542 14.4691L4.83542 20.8241L4.82242 20.9341C4.81195 21.111 4.84868 21.2875 4.92887 21.4456C5.00905 21.6036 5.1298 21.7376 5.27875 21.8336C5.42771 21.9296 5.59951 21.9844 5.77657 21.9922C5.95363 22 6.12958 21.9606 6.28642 21.8781L11.9924 18.8781C11.9855 18.8781 11.9993 18.8781 11.9924 18.8781C11.9993 18.8781 11.9924 18.8781 11.9993 18.8781H11.9924C11.9855 18.8781 11.9993 18.8781 11.9924 18.8781L11.9864 1.00001C11.7997 0.999805 11.9039 0.832547 11.9864 1.00001C12.1731 1.00001 11.8279 0.901402 11.9864 1.00001C11.7997 1.00001 11.6168 1.05238 11.4582 1.15099C11.2997 1.2496 11.1719 1.39062 11.0894 1.55809L8.23642 7.33809Z" fill={fillColor} />
        </Svg>
    ),
    default: ({ strokeColor, strokeWidth, fillColor, width, height }: SvgProps) => (
        <Svg viewBox="0 0 24 24" {...(width && { width })} {...(height && { height })} fill={fillColor} stroke={strokeColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
            <Path d="M0 0h24v24H0z" fill="none" />
        </Svg>
    )
};

interface SvgProps {
    name: string
    strokeColor?: string,
    strokeWidth?: number,
    fillColor?: string,
    width?: number,
    height?: number,
}

export default function SvgIcon({ name, strokeColor = 'transparent', strokeWidth = 1.75, fillColor = 'none', width, height }: SvgProps) {
    const svg = icons[name] || icons.default;
    return svg({ strokeColor, strokeWidth, fillColor, width, height, name });
}