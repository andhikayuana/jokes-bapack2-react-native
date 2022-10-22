import React from 'react'
import { StyleSheet, Text, View } from "react-native";

export default function Jokes({ content }) {
    return (
        <Text style={styles.text}>
            {content}
        </Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        textAlign: 'center',
        color: 'grey',
    }
})

