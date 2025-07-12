import { View, Text, StyleSheet, Image, ImageBackground } from 'react-native';

import SideBar from './sidebar';
import Playlist from '../playlist/playlist';
import Choices from '../question/choices';
import styles from '../styles';

export default function Question(props) {
    return props.question.image ? (
        <View style={styles.container}>
            <ImageBackground source={{ uri: props.question.image }} resizeMode="cover" style={styles.backgroundImage}>
                <View style={styles.questionArea}>
                    <View style={styles.questionTextArea}>
                        <Text style={styles.questionText}>{props.question.question}</Text>
                    </View>
                    <View style={styles.questionBottom}>
                        <Choices options={props.question.options} answer={props.answer} />
                    </View>
                    <View style={styles.userBottom}>
                        <Text style={styles.usernameText}>{props.question.user.name}</Text>
                        <Text style={styles.descriptionText}>{props.question.description}</Text>
                    </View>
                </View>
                <View style={styles.questionSideBar}>
                    <SideBar avatarUri={props.question.user.avatar} />
                </View>
            </ImageBackground>
            <Playlist playlistName={props.question.playlist} />
        </View>
    ) : null;
}
