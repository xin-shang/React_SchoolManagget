import { View, Button, StyleSheet } from 'react-native';

const CourseSelect = ({ navigation }) => {
    return (

    <View style={styles.container}>
        <Button title="Course Page" onPress={() => navigation.navigate('Course Page', { name: 'Custom profile header' })}/>
    </View>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    }
  });
export default CourseSelect;