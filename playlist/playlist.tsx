import { View, Text } from 'react-native';

import CheveronRight from '../../assets/chevron-right.svg';
import PlaylistIcon from '../../assets/playlist.svg';
import styles from '../styles';

export default function Playlist(props) {
    return (
        <View style={styles.playlistBar}>
            <PlaylistIcon color="rgb(255, 255, 255)" width={24} height={24} />
            <Text style={styles.playlistText}>Playlist: {props.playlistName}</Text>
            <CheveronRight style={styles.playlistChevron} color="rgb(255, 255, 255)" width={24} height={24} />
        </View>
    );
}
