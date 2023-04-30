import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Keyboard, Alert } from 'react-native';
import { validate } from 'm-erkam_phone_number_validator';
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [username, setUsername] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (validate(phoneNumber)) {
            console.log("Successful login");
            navigation.navigate("Home");
        } else {
            console.log("Invalid phone number");
            Alert.alert("Invalid phone number", "Please enter a valid phone number.");
        }
    };

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                console.log('Keyboard shown');
            }
        );

        return () => {
            keyboardDidShowListener.remove();
        };
    }, []);

    const renderUsername = () => {
        return (
            <TextInput
                placeholder="Username"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
        );
    };

    const renderNumber = () => {
        return (
            <TextInput
                placeholder="Phone number"
                onChangeText={(text) => setPhoneNumber(text)}
                value={phoneNumber}
            />
        );
    };

    return (
        <View>
            {renderUsername()}
            {renderNumber()}
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export default Login;