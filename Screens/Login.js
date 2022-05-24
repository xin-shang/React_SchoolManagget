import { View, Button } from 'react-native';

const Login = ({ navigation }) => {
    return (
    <View>
        <Button title="Home" onPress={() => navigation.navigate('Home')}/>
        <Button title="Register" onPress={() => navigation.navigate('Registration')}/>
    </View>
    );
}

export default Login;