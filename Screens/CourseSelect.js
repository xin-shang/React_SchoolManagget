import React, { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dialog from "react-native-dialog";

let courses = ["INFT1020", "INFF6969", "IHTS4200", "DATA6756"];

function LoadCourses() {
    const navigation = useNavigation();
    let loaded = []

    for (let index = 0; index < courses.length; index++) {
        loaded.push(<Button title={courses[index]} onPress={() => navigation.navigate('Course Page', { name: courses[index] })} />)
    }
    return (loaded)
}

const CourseSelect = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = useState('');

    const showDialog = () => {
        setVisible(true);
    };
    
    const handleCancel = () => {
        setVisible(false);
    };
    
    const handleSumbit = () => {
        // The user has pressed the "Delete" button, so here you can do your own logic.
        // ...Your logic
        console.log(this.state.text)
        //courses.push(this.state.text)
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <LoadCourses />
            <Button title="Add Course" onPress={showDialog} />
            <Dialog.Container visible={visible}>
                <Dialog.Title>Add Course</Dialog.Title>
                <Dialog.Description>
                    Type in the 8 character course ID (4 Letters 4 Numbers)
                </Dialog.Description>
                <Dialog.Input 
                    autoCapitalize='characters'
                    keyboardType='default'
                    placeholder="Example (INFT3042)"
                    maxLength={8}
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                <Dialog.Button label="OK" onPress={handleSumbit}/>
                <Dialog.Button label="Cancel" onPress={handleCancel}/>
            </Dialog.Container>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        //alignItems: "center",
    }
});

export default CourseSelect;