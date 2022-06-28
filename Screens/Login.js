import { View, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

/*

Functions are the base page for the application to be opened at. Only has buttons 
that currently don't offer functionality as there isn't a check for user input. 
Clicking sign in will navigate the user straight to the home screen. 

Normally this would incur a validation check on input and then if correct, would allow
the user access to the application. 

*/

const Login = ({ navigation }) => {
    return (
        <View style={styles.loginWrapper}>
            <Text style={styles.sectionTitle}>LOGIN</Text>
        <View style={styles.sectionContent}>
            <Text style={styles.sectionSubTitle}>Email</Text>
            <TextInput style={styles.input} />
            <Text style={styles.sectionSubTitle}>Password</Text>
            <TextInput secureTextEntry={true} style={styles.input} />
            {/* Navigate to Home page after validating login details */}
            <TouchableOpacity style={styles.sectionSubmit} title="Home" onPress={() => navigation.navigate('Home')}>
                <View>
                    <Text style={styles.submit}>LOGIN</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.recoveryWrapper}>
                {/* Navigate to AccRecovery page */}
                <TouchableOpacity style={styles.recoveryClickHereWrapper} title="AccRecovery" onPress={() => navigation.navigate('AccRecovery')}>
                        <Text style={styles.sectionRecoveryClickHere}>Forgot Password?</Text>
                    </TouchableOpacity>
            </View>
            <View style={styles.registerWrapper}>
                <Text style={styles.sectionRegister}>Not Yet Registered?</Text>
                {/* Navigate to Registration page */}
                <TouchableOpacity style={styles.clickHereWrapper} title="Register" onPress={() => navigation.navigate('Registration')}>
                    <Text style={styles.sectionRegisterClickHere}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
    );
}
const styles = StyleSheet.create({
    loginWrapper: {
        paddingTop: 20,
        paddingHorizontal: 30,
    },
    sectionTitle: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    sectionContent: {
        paddingTop: 20,
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
    recoveryWrapper: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    sectionRecoveryClickHere: {
        paddingVertical: 15,
        fontSize: 15,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#0052A0',
    },
    registerWrapper: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    clickHereWrapper: {
        marginLeft: 15,
    },
    sectionRegister: {
        paddingVertical: 15,
        fontSize: 22,
    },
    sectionRegisterClickHere: {
        paddingVertical: 15,
        fontSize: 22,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        color: '#0052A0',
    },
})

export default Login;