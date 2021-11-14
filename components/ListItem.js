import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

const ListItem = ({name, symbol, currentPrice, priceChangePercentage7d, logoUrl, onPress}) => {
    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.itemWrapper}>
                {/* Left side */}
                <View style={styles.leftWrapper}>
                    <Image source={{ uri: logoUrl}} style={styles.image} />
                <View style={styles.titlesWrapper}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                </View>
            </View>

                {/* Right side */}
                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>${currentPrice.toLocaleString('en-US', {currency: 'USD'})}</Text>
                    <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>    
         </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 48,
        width: 48,
    },
    subtitle:{
        fontSize: 14,
        color: "#A9ABB1",
        marginTop: 4,
    },
    title: {
        fontSize: 18,
    },
    rightWrapper: {
        alignItems: "flex-end",
    },
    titlesWrapper: {
        marginLeft: 8,

    },
    leftWrapper: {
        flexDirection: "row",
        alignItems: 'center',
    },
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
})

export default ListItem;