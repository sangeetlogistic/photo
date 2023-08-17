import React, { useEffect, useState } from 'react';
import { DateTime } from 'luxon';
import { AnalogClockBlock } from './AnalogClock.component';

type Props = {
    timezone: string;
    title?: string;
};

const AnalogClock: React.FC<Props> = ({ timezone, title }) => {
    const [time, setTime] = useState<DateTime>(DateTime.now().setZone(timezone));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(DateTime.now().setZone(timezone));
        }, 1000);
        return () => clearInterval(intervalId);
    }, [timezone]);

    const hour = time.hour % 12;
    const { minute, second } = time;

    const hourDegree = hour * 30 + minute / 2;
    const minuteDegree = minute * 6 + second / 10;
    const secondDegree = second * 6;

    return (
        <AnalogClockBlock>
            <div className="analog-clock-wrapper">
                <div className="analog-clock-outer">
                    <div className="analog-clock">
                        <div className="analog-clock-dot analog-clock-dot-1"></div>
                        <div className="analog-clock-dot analog-clock-dot-2"></div>
                        <div className="analog-clock-inner-radial"></div>
                        <div className="hand hour-hand" style={{ transform: `rotate(${hourDegree}deg)` }} />
                        <div className="hand minute-hand" style={{ transform: `rotate(${minuteDegree}deg)` }} />
                        <div className="hand second-hand" style={{ transform: `rotate(${secondDegree}deg)` }} />
                    </div>
                </div>
                <h5 className="title">{title}</h5>
            </div>
        </AnalogClockBlock>
    );
};

export default AnalogClock;
