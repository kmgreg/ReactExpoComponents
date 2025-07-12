import { Tabs } from 'expo-router';
import { Dimensions } from 'react-native';

import Activity from '../../assets/activity.svg';
import Bookmark from '../../assets/bookmark.svg';
import Discover from '../../assets/discover.svg';
import Home from '../../assets/home.svg';
import Profile from '../../assets/profile.svg';
import ForYouHeader from '../headers/foryouheader';
import styles from '../styles';

export default function TabLayout() {
    const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    backgroundColor: 'black',
                    height: windowHeight * 0.08,
                },
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'For You',
                    tabBarIcon: ({ color }) => <Home color={color} width={24} height={24} />,
                    header: ForYouHeader,
                }}
            />
            <Tabs.Screen
                name="discover"
                options={{
                    title: 'Discover',
                    tabBarIcon: ({ color }) => <Discover color={color} width={24} height={24} />,
                }}
            />
            <Tabs.Screen
                name="activity"
                options={{
                    title: 'Activity',
                    tabBarIcon: ({ color }) => <Activity color={color} width={24} height={24} />,
                }}
            />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    title: 'Bookmarks',
                    tabBarIcon: ({ color }) => <Bookmark color={color} width={24} height={24} />,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <Profile color={color} width={24} height={24} />,
                }}
            />
        </Tabs>
    );
}
