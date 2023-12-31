import { Dimensions } from 'react-native';
export function vw(px: number) {
    const defaultWidth = 390;
    if (Dimensions.get('window').width > 500) {
        return (px * Dimensions.get('window').width) / defaultWidth / 1.8;
    }
    return Math.round((px * Dimensions.get('window').width) / defaultWidth);
}
