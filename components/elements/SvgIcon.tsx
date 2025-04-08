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