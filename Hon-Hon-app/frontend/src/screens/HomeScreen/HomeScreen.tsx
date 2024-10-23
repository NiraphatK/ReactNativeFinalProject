import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./HomeScreenStyles";
import colors from "../../styles/color";
import { HomeScreenNavigationProp } from '../../types/types';
import BarChartDemo from './BarChartDemo';

const HomeScreen = (): React.JSX.Element => {

    const navigation = useNavigation<HomeScreenNavigationProp>();

    const ProfileCard = ({ name }: { name: string }) => (
        <View style={styles.cardProfile}>
          <View style={{flex:3}}>
            <View style={styles.ImgProfile}><Text style={styles.textProfile}>{name[0].toUpperCase()}</Text></View>
          </View>
          <View style={{flex:5}}>
            <Text style={styles.textPrimaryProfile}>Title: <Text style={{color:colors.primary}}>{name[0]}</Text></Text>
            <Text style={styles.textSecondaryProfile}>Total Focused: <Text style={{color:colors.primary}}>{name} min</Text></Text>
            <View style={styles.rowCategory}>
                <View style={styles.category}>
                    <Text style={styles.textCategory}>Studying</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.textCategory}>Others</Text>
                </View>
            </View>
          </View>
        </View>
      );

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
                    <Text style={styles.title}>Hon Hon</Text>
                    <Ionicons name="person-circle-outline" size={45} color={colors.background} style={{ position: 'absolute', right: 25 }} />
                </View>
                <View style={styles.content}>
                    <View style={{ width: '100%' }}>
                        <ScrollView
                            contentContainerStyle={{ flexGrow: 1, alignItems: "flex-start" }}
                            keyboardShouldPersistTaps="handled"
                        >
                            {/* Overview Section */}
                            <View style={{ flex: 1,width: "100%" }}>
                                <Text style={styles.contentTitle}>Overview</Text>
                                <Text style={styles.subContentTitle}>Total Focused time: 0 min</Text>

                                <View style={{width:'100%',marginTop:15 }}>
                                    <View style={styles.overView}>
                                        <BarChartDemo/>
                                    </View>
                                </View>
                            </View>

                            {/* Profile Section */}
                            <View style={{ flex: 1, width: "100%",marginTop:10  }}>
                                <Text style={styles.contentTitle}>Profile</Text>
                                <Text style={styles.subContentTitle}>Maximum Profile: 5</Text>

                                <View style={{ width: "100%",marginTop:15 }}>
                                    <ProfileCard name="asd" />
                                    <ProfileCard name="dsa" />
                                    <ProfileCard name="dsda" />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.circleButton} onPress={()=>navigation.navigate('createProfile')}>
                <Ionicons name="add-outline" size={50} color={colors.secondary} />
            </TouchableOpacity>
        </LinearGradient>
    )
}

export default HomeScreen
