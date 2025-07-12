import { useRef, useEffect, useState } from 'react';
import { Animated, Image, Pressable, Text } from 'react-native';

import styles from '../styles';

export default function Choice(config) {
    const swipeAnim = useRef(new Animated.Value(0)).current;
    const [swipeVal, setSwipeVal] = useState(0);

    return (
        <Pressable
            style={[
                styles.questionButton,
                config.showAnswer && config.isCorrect
                    ? {
                          backgroundColor: '#008000',
                      }
                    : {},
                config.showAnswer && config.isSelectedAnswer && !config.isCorrect ? styles.buttonWrongBack : {},
            ]}
            onPress={config.onPressFunction}>
            <Text style={styles.buttonText}>{config.text}</Text>
            {config.showAnswer && config.isCorrect ? (
                <Image source={require('../../assets/correct.gif')} style={styles.buttonCorrect} />
            ) : (
                <Text style={styles.fillerText}> </Text>
            )}
        </Pressable>
    );
}
