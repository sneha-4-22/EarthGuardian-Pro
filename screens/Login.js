import { View, Text, Image , Pressable, TextInput, TouchableOpacity ,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from '../constants/colors';
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox"
import Button from '../components/Button';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';


const Login = ({ navigation }) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const [isChecked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlert, setShowAlert] = useState(false);  
    const [alertMessage, setAlertMessage] = useState('');
    const closeAlert = () => {
        setShowAlert(false);
    };
    const handleLogin = async () => {
        if(email && password)
        {try {
            await signInWithEmailAndPassword(auth, email, password);
            navigation.navigate("HomeScreen");
        } catch (error) {
            // console.error('Error logging in:', error);

            let errorMessage = "An error occurred during login.";

            if (error.code === "auth/user-not-found") {
                errorMessage = "User not found. Please check your email.";
            } else if (error.code === "auth/invalid-credential") {
                errorMessage = "Incorrect password. Please try again.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "Invalid email address. Please check your email.";
            }

            // alert(errorMessage);
            setAlertMessage(errorMessage);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 1000);
        }}
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#16154E' }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ marginVertical: 22 }}>
                    <Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        marginVertical: 14,
                        marginHorizontal: 2,
                        color: 'white'
                    }}>
                        Eco-Sankalp Toolkit 🌿
                    </Text>

                    <Text style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: 'white'
                    }}> Empowering you to save the planet 🌎. </Text>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color:'white'
                    }}>Email address</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        color: 'white'
                    }}>
                        <TextInput
                            placeholder='Enter your email address'
                            placeholderTextColor={'white'}
                            keyboardType='email-address'
                            value={email}
                            onChangeText={value=>setEmail(value)}
                            style={{
                                width: "100%",
                                color:"white"
                            }}
                        />
                    </View>
                </View>

                <View style={{ marginBottom: 12 }}>
                    <Text style={{
                        fontSize: 16,
                        fontWeight: 400,
                        marginVertical: 8,
                        color:'white'
                    }}>Password</Text>

                    <View style={{
                        width: "100%",
                        height: 48,
                        borderColor: 'white',
                        borderWidth: 1,
                        borderRadius: 8,
                        alignItems: "center",
                        justifyContent: "center",
                        paddingLeft: 22,
                        color: 'white'
                    }}>
                        <TextInput
                            placeholder='Enter your password'
                            placeholderTextColor={'white'}
                            secureTextEntry={isPasswordShown}
                            value={password}
                            onChangeText={value=>setPassword(value)}
                            style={{
                                width: "100%",
                                color: 'white'
                            }}
                        />

                        <TouchableOpacity
                            onPress={() => setIsPasswordShown(!isPasswordShown)}
                            style={{
                                position: "absolute",
                                right: 12,
                                color:'white'
                            }}
                        >
                            {
                                isPasswordShown == true ? (
                                    <Ionicons name="eye-off" size={24} color={'white'} />
                                ) : (
                                    <Ionicons name="eye" size={24} color={'white'} />
                                )
                            }

                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{
                    flexDirection: 'row',
                    marginVertical: 6
                }}>
                    <Checkbox
                        style={{ marginRight: 8 }}
                        value={isChecked}
                        onValueChange={setIsChecked}
                        color={isChecked ? 'lightblue' : undefined}
                    />

                    <Text style={{color:'white'}}>Remenber Me</Text>
                </View>

                <Button
                    title="Login"
                    onPress={handleLogin}
                    filled
                    style={{
                        marginTop: 18,
                        marginBottom: 4,
                        backgroundColor:'#0070BB',
                    }}
                    
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{ fontSize: 14 ,color:'white'}}>Or Login with</Text>
                    <View
                        style={{
                            flex: 1,
                            height: 1,
                            backgroundColor: COLORS.grey,
                            marginHorizontal: 10,
                            color: 'white'
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: 'white',
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/facebook.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{  color: 'white' }}>Facebook</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => console.log("Pressed")}
                        style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'row',
                            height: 52,
                            borderWidth: 1,
                            borderColor: COLORS.grey,
                            marginRight: 4,
                            borderRadius: 10
                        }}
                    >
                        <Image
                            source={require("../assets/google.png")}
                            style={{
                                height: 36,
                                width: 36,
                                marginRight: 8
                            }}
                            resizeMode='contain'
                        />

                        <Text style={{  color: 'white' }}>Google</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    marginVertical: 22
                }}>
                    <Text style={{ fontSize: 16, color: 'white' }}>Don't have an account ? </Text>
                    <Pressable
                        onPress={() => navigation.navigate("Signup")}
                    >
                        <Text style={{
                            fontSize: 16,
                            color: 'white',
                            fontWeight: "bold",
                            marginLeft: 6
                        }}>Register</Text>
                    </Pressable>
                </View>
                {showAlert && (
                    <View style={styles.alertContainer}>
                        <Text style={styles.alertMessage}>{alertMessage}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    alertContainer: {
        position: 'absolute',
        bottom: 100,
        left: 40,
        padding: 8,
        backgroundColor: 'white',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertMessage: {
        color: 'black',
        fontSize: 14,
    },
});

export default Login