import React from 'react';
import {Pressable, Text, View} from "react-native";
import styles from "./styles";

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    //3 lines before are the same as the next line
    const {type, content, onPress} = props;

    //If type == primary --> Black else White
    const backgroundColor = type === "primary" ? "#171A20CC" : "#FFFFFFA6";
    const textColor = type === "primary" ? "#FFFFFF" : "#171A20"

    return (<View style={styles.container}>
        <Pressable
            style={[styles.button, {backgroundColor: backgroundColor}]}
            onPress={() => onPress()}
        >
            <Text style={[styles.text, {color: textColor}]}>{content}</Text>

        </Pressable>
    </View>);
};

export default StyledButton;
