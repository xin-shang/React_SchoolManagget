import { View, Text ,Dimensions } from 'react-native';

const {width, height, scale} = Dimensions.get('window')

export default function calendar(){
    return(
        <View>
            <Text>Width of Screen: {width}</Text>
            <Text>Height of Screen: {height}</Text>
            <Text>Scale of Screen: {scale}</Text>
        </View>
    );
}