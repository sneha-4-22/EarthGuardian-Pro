import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import { LinearGradient } from "expo-linear-gradient";
import COLORS from '../constants/colors';
import Button from '../components/Button';

const Welcome = ({ navigation }) => {

    return (
        <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.secondary, COLORS.primary]}
        >
            <View style={{ flex: 1 }}>
                <View>
                    <Image
                        source={require("../assets/hero1.jpg")}
                        style={{
                            height: 400,
                            width: 405,
                            borderRadius: 2,
                            position: "absolute",
                            top: 2,
                            transform: [
                                { translateX: -20 },
                                { translateY: 20 }
                            ]
                        }}
                    />

                    

                    

                    
                </View>

                {/* content  */}

                <View style={{
                    paddingHorizontal: 22,
                    position: "absolute",
                    marginTop: 19,
                    top: 400,
                    width: "100%"
                }}>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 800,
                        color: '#87CEFA'
                    }}>UNLOCK YOUR BUSINESS'</Text>
                    <Text style={{
                        fontSize: 35,
                        fontWeight: 800,
                        color: 'lightgreen'
                    }}>GREEN <Text style={{ color: '#87CEFA' }}>POTENTIAL </Text></Text>
                    

                    <View style={{ marginVertical: 22 }}>
                        <Text style={{
                            fontSize: 14,
                            color: '#E0FFFF',
                            marginVertical: 4
                        }}>Your Green Guardian 🌿🌍</Text>
                        </View>

                    <Button
                        title="Join Now"
                        onPress={() => navigation.navigate("Signup")}
                        style={{
                            marginTop: 2,
                            width: "100%",
                            backgroundColor:'#73C2FB',
                            color: '#E1EBEE'
                        }}
                    />

                    <View style={{
                        flexDirection: "row",
                        marginTop: 12,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: COLORS.white
                        }}>Already have an account ?</Text>
                        <Pressable
                            onPress={() => navigation.navigate("Login")}
                        >
                            <Text style={{
                                fontSize: 16,
                                color: '#73C2FB',
                                fontWeight: "bold",
                                marginLeft: 4
                            }}>Login</Text>
                        </Pressable>

                    </View>
                </View>
            </View>
        </LinearGradient>
    )
}

export default Welcome