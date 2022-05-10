import { View, Button } from 'react-native';

const CourseSelect = ({ navigation }) => {
    return (
    <View>
        <Button title="Course Page" onPress={() => navigation.navigate('Course Page')}/>
    </View>
    );
}

export default CourseSelect;