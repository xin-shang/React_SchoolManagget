import { TouchableOpacity, StyleSheet, Text, View, Platform, TextInput } from 'react-native';

const Registration = ({ navigation }) => {
    return (
        <View style={styles.signupWrapper}>
            <Text style={styles.sectionTitle}>SIGN UP</Text>
            <View style={styles.sectionContent}>
                <Text style={styles.sectionSubTitle}>Email</Text>
                <TextInput style={styles.input} />
                <Text style={styles.sectionSubTitle}>Password</Text>
                <TextInput secureTextEntry={true} style={styles.input} />
                {/* If the account does not exist, create an account base on the registration details */}
                <TouchableOpacity style={styles.sectionSubmit}>
                    <View>
                        <Text style={styles.submit}>SIGN UP</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.registeredWrapper}>
                    <Text style={styles.sectionRegistered}>Already Registered?</Text>
                    {/* Navigate to Login page */}
                    <TouchableOpacity style={styles.clickHereWrapper}>
                        <Text style={styles.sectionClickHere}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    signupWrapper: {
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
    registeredWrapper: {
        marginTop: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clickHereWrapper: {
        marginLeft: 15,
    },
    sectionRegistered: {
        paddingVertical: 15,
        fontSize: 22,
    },
    sectionClickHere: {
        paddingVertical: 15,
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#0052A0',
    },
})

export default Registration;