import { FlatList } from 'react-native';

import Slide from './slide';

export default function Slides(props) {
    return (
        <FlatList
            data={props.slideList}
            style={{ flex: 1 }}
            renderItem={({ item }) => {
                return <Slide data={item} />;
            }}
            pagingEnabled
            showsVerticalScrollIndicator={false}
        />
    );
}
