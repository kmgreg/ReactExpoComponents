import { Text, View } from 'react-native';

import Timer from './timer';
import Search from '../../assets/search.svg';
import styles from '../styles';

export default function ForYouHeader(props) {
    return (
        <View style={styles.forYouHeader}>
            <Timer keepTrack />
            <Text style={styles.forYouText}>For You</Text>
            <Search style={styles.forYouSearch} color="rgb(255, 255, 255)" height={20} width={20} />
        </View>
    );
}
