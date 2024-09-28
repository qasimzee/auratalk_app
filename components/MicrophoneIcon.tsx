import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface MicrophoneIconProps {
  color: string;
  size: number;
}

const MicrophoneIcon = ({ color, size }) => (
<Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <Path
    d="M12 15.5c1.66 0 3-1.34 3-3V5.5c0-1.66-1.34-3-3-3s-3 1.34-3 3v7c0 1.66 1.34 3 3 3z"
    fill={color}
    />
    <Path
    d="M17 10.5v2c0 2.76-2.24 5-5 5s-5-2.24-5-5v-2H5v2c0 3.53 2.61 6.43 6 6.92v2.08h-3v2h8v-2h-3v-2.08c3.39-.49 6-3.39 6-6.92v-2h-2z"
    fill={color}
    />
</Svg>
);

export default MicrophoneIcon;