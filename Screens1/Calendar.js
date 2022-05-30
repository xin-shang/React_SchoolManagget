import { View, Button } from 'react-native';

const Calendar = ({ navigation }) => {
    return (
    <View>
        <Button title="Calendar Item" onPress={() => navigation.navigate('Calendar Item')}/>
    </View>
    );
}

export default Calendar;