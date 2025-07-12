import { Image, View } from 'react-native';

import Bookmark from '../../assets/bookmark.svg';
import Comment from '../../assets/comment.svg';
import Heart from '../../assets/heart.svg';
import Share from '../../assets/share.svg';
import styles from '../styles';

export default function SideBar(props) {
    return (
        <View>
            <Image source={{ uri: props.avatarUri }} style={styles.sidebarAvatar} />
            <Heart style={styles.sidebarIcon} color="rgb(255, 255, 255)" height={40} width={40} />
            <Comment style={styles.sidebarIcon} color="rgb(255, 255, 255)" height={40} width={40} />
            <Bookmark style={styles.sidebarIcon} color="rgb(255, 255, 255)" height={40} width={40} />
            <Share style={styles.sidebarIcon} color="rgb(255, 255, 255)" height={40} width={40} />
        </View>
    );
}
