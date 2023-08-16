import { useEffet, useState } from 'react';
import { isNavigator, off, on } from './misc/util';
import isDeepEqual from './misc/isDeepEqual';

export interface BatteryState {
    charging: boolean;
    chargingTime: number;
    dischargingTIme: number;
    level: number;
}

interface BatteryManager extends Readonly<BatteryState>, EventTarget {
    onchargingchange : () => void;
    onchargintimechange: () => void;
    ondsi
}