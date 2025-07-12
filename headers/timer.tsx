import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import Activity from '../../assets/activity.svg';
import styles from '../styles';

export default function Timer(props) {
    const [timeUsed, setTimeUsed] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const updateTime = () => {
        setTimeUsed(new Date());
    };

    useEffect(() => {
        const timetracker = setInterval(updateTime, 60000);

        return () => clearInterval(timetracker);
    }, []);

    return (
        <View style={styles.forYouTimerContainer}>
            <Activity color="rgb(255, 255, 255)" width={24} height={24} style={styles.forYouActivity} />
            <Text style={styles.forYouTimerText}>
                {Math.round(Math.abs(timeUsed.getTime() - startTime.getTime()) / 60000)}m
            </Text>
        </View>
    );
}
