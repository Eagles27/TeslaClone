import  {StyleSheet, Dimensions} from "react-native";

const styles = StyleSheet.create({
    carContainer: {
        height: Dimensions.get("window").height,
        width: "100%",
    },

    titles: {
        marginTop: "25%",
        width: "100%",
        alignItems: "center",
    },

    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "black",
    },

    subtitle: {
        fontSize: 16,
        color: "#5c5e62",
    },

    taglineCTA:{
        textDecorationLine:"underline",
        fontWeight:"bold",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute",
    },

    buttonsContainer:{
        position: "absolute",
        bottom: 60,
        width: "100%",

    },

});

export default styles;
