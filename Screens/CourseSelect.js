import React, { useState } from "react";
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Dialog from "react-native-dialog";

// Array that the course IDs populate from
let courses = ["INFT1020", "INFF6969", "IHTS4200", "DATA6756"];

function LoadCourses() {
    // Defines navigation in this scope so data can be passed to another
    const navigation = useNavigation();
    // Creates array for buttons to be returned in
    let loaded = []
    // Loops over all the courses in the courses list and creates the button element that is added to the loaded list
    for (let index = 0; index < courses.length; index++) {
        loaded.push(<Button title={courses[index]} onPress={() => navigation.navigate('Course Page', { name: courses[index] })} />)
    }
    return (loaded)
}

const CourseSelect = ({ navigation }) => {
    const [visible, setVisible] = React.useState(false);
    const [text, setText] = useState('');

    // Show dialog box
    const showDialog = () => {
        setVisible(true);
    };
    
    // Closes the dialog box
    const handleCancel = () => {
        setVisible(false);
    };
    
    // Should add the course to the course list. Unimplemented
    const handleSumbit = () => {
        // ...Your logic
        setVisible(false);
    };

    return (
        <View style={styles.container}>
            <LoadCourses />
            {/* Adds button that shows the add course dialog box */}
            <Button title="Add Course" onPress={showDialog} />
            {/* Define dialog box content */}
            <Dialog.Container visible={visible}>
                {/* Dialog box title */}
                <Dialog.Title>Add Course</Dialog.Title>
                {/* Dialog box description */}
                <Dialog.Description>
                    Type in the 8 character course ID (4 Letters 4 Numbers)
                </Dialog.Description>
                {/* Conditions for dialog box input */}
                <Dialog.Input 
                    autoCapitalize='characters'
                    keyboardType='default'
                    placeholder="Example (INFT3042)"
                    maxLength={8}
                    //onChangeText={newText => setText(newText)}
                    //defaultValue={text}
                />
                {/* Adds ok and cancel buttons to dialog boxes */}
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