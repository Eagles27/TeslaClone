import React from 'react';
import {View, Text, ImageBackground} from "react-native";
import styles from "./styles";
import StyledButton from "../StyledButton";

const CarItem = (props) => {

    const {name, tagline, image, taglineCTA} = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>
                    {tagline}
                    {" "}
                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton
                    //Button primary
                    type={"primary"}
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom order was pressed");
                    }}
                />

                <StyledButton
                    //Button secondary
                    type={"secondary"}
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.warn("Existing Inventory was pressed");
                    }}
                />
            </View>
        </View>
    );
};

export default CarItem;
