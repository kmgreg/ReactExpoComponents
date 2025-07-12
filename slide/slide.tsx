import { Dimensions, View } from 'react-native';

import Question from '../question/question';

export default function Slide({ data }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    return (
        <View
            style={{
                height: windowHeight * 0.9045, // adjust for tab height
                width: windowWidth,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <Question question={data.question} answer={data.answer} />
        </View>
    );
}
