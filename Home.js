import { View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
    <View>
        {/* <Button title="Course Select" onPress={() => navigation.navigate('Course Select')}/>
        <Button title="User Profile" onPress={() => navigation.navigate('User Profile')}/>
        <Button title="Calendar" onPress={() => navigation.navigate('Calendar')}/> */}
        <Button title="Study Timer" onPress={() => navigation.navigate('TimerSelector')}/>
        {/* <Button title="Settings" onPress={() => navigation.navigate('Settings')}/> */}
        
    </View>
    );
}

export default Home;