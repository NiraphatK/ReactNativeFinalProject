import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeScreenStyles";
import colors from "../../styles/color";
import { HomeScreenNavigationProp } from '../../types/types';
import BarChartDemo from './BarChartDemo';
import DropDown from './DropDown';

const HomeScreen = (): React.JSX.Element => {

    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <LinearGradient
            colors={[
                colors.backgroundSecondary,
                colors.backgroundSecondary,
                colors.primary,
                colors.primary,
            ]} // Gradient colors
            style={styles.container}
            start={{ x: 0, y: 0 }} // Gradient start point (top-left corner)
            end={{ x: 1, y: 1 }} // Gradient end point (bottom-right corner)
        >
            <View style={styles.scrollView}>
                <View style={styles.logoContainer}>
                    <TouchableOpacity style={styles.backButton} onPress={navigation.goBack}>
                        <Ionicons name="chevron-back" size={40} color={colors.background} />
                    </TouchableOpacity>
                    <Text style={styles.title}>Hon Hon</Text>
                    <Ionicons name="person-circle-outline" size={45} color={colors.background} style={{ position: 'absolute', right: 25 }} />
                </View>
                <View style={styles.content}>
                    <View style={{ width: '100%' }}>
                        <View>
                            <Text style={styles.contentTitle}>Create Profile</Text>
                            <Text style={styles.subContentTitle}>Let's make your own profile</Text>

                            <View>
                                <View></View>
                                <TextInput
                                    placeholder='Title'
                                />
                                <View style={{width:'100%'}}>
                                    <DropDown />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.circleButton} onPress={() => navigation.navigate('createProfile')}>
                <Ionicons name="add-outline" size={50} color={colors.secondary} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default HomeScreen
