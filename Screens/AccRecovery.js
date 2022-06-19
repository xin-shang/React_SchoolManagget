import { TouchableOpacity, StyleSheet, Text, View, Platform, TextInput } from 'react-native';

const Registration = ({ navigation }) => {
    return (
        <View style={styles.loginWrapper}>
            <Text style={styles.sectionTitle}>ACCOUNT RECOVERY</Text>
            <View style={styles.sectionContent}>
                <Text style={styles.sectionSubTitle}>Email</Text>
                <TextInput style={styles.input} />
                <Text>
                    An email will be sent to you with instruction on how to recover your account. 
                    Please follow the instruction to recover your account
                </Text>
                {/* An email should be send to the user with a link to reset their account password (not implemented) */}
                <TouchableOpacity style={styles.sectionSubmit}>
                    <View>
                        <Text style={styles.submit}>SEND</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginWrapper: {
        paddingTop: 80,
        paddingHorizontal: 30,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    sectionContent: {
        paddingTop: 50,
    },
    sectionSubTitle: {
        fontSize: 30,

    },
    input: {
        marginVertical: 10,
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 10,
        borderColor: "#0052a0",
        borderWidth: 2,
    },
    sectionSubmit: {
        marginTop: 35,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 10,
        borderColor: "#0052a0",
        backgroundColor: "#0052a0",
        borderWidth: 2,

    },
    submit: {
        textAlign: 'center',
        color: "#ffffff",
        fontSize: 22,
    },
})

export default AccRecovery;