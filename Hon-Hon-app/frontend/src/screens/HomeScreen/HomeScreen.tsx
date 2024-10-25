import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  RefreshControl,
  Modal,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./HomeScreenStyles";
import colors from "../../styles/color";
import { HomeScreenNavigationProp } from "../../types/types";
import BarChartDemo from "./BarChartDemo";
import { getProfile } from "../../../services/product-service";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ModalLogOutScreen from "./ModalLogOutScreen";

interface Profile {
  title: string;
  category: string;
  image: string;
  duration: number;
}

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const route = useRoute<any>();
  const { timeData } = route.params || {};
  // const [timeCount, setTimeCount] = useState<number|any>(timeData);
  const [profile, setProfile] = useState<Profile[]>([]); // เปลี่ยนเป็น array ว่าง
  const [refreshing, setRefreshing] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [totalFocused, setTotalFocused] = useState<number>(0);
  const [typeBook, setTypeBook] = useState({
    Studying: 0,
    Cartoon: 0,
    Novel: 0,
    Others: 0,
  });

  const fetchProfile = async () => {
    try {
      setRefreshing(true);
      const res = await getProfile();
      if (res.status === 200) {
        setProfile(res.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setRefreshing(false);
    }
  };

  const calculateTotalFocused = () => {
    // Reset typeBook before calculation
    setTypeBook({
      Studying: 0,
      Cartoon: 0,
      Novel: 0,
      Others: 0,
    });
    setTotalFocused(0);

    // Iterate through profiles and add the durations
    profile.forEach((param) => {
      setTotalFocused((prev) => prev + param.duration);

      switch (param.category) {
        case "Studying":
          setTypeBook((prevState) => ({
            ...prevState,
            Studying: prevState.Studying + param.duration / 60,
          }));
          break;
        case "Cartoon":
          setTypeBook((prevState) => ({
            ...prevState,
            Cartoon: prevState.Cartoon + param.duration / 60,
          }));
          break;
        case "Novel":
          setTypeBook((prevState) => ({
            ...prevState,
            Novel: prevState.Novel + param.duration / 60,
          }));
          break;
        case "Others":
          setTypeBook((prevState) => ({
            ...prevState,
            Others: prevState.Others + param.duration / 60,
          }));
          break;
        default:
          break;
      }
    });
  };

  useEffect(() => {
    fetchProfile();
  }, [timeData]);

  useEffect(() => {
    if (profile.length > 0) {
      calculateTotalFocused();
    }
  }, [profile]);

  const onChangeModal = (modal:boolean) => {
    setShowModal(modal)
  }


  const ProfileCard = ({ name, index }: { name: Profile; index: number }) => (
    <TouchableOpacity
      style={styles.cardProfile}
      onPress={() => navigation.navigate("Timer", { data: name, index: index })}
    >
      <View style={{ flex: 3 }}>
        <View style={styles.ImgProfile}>
          <Image
            source={{
              uri: `http://10.0.2.2:5000/${name.image.replace(/\\/g, "/")}`,
            }} // แทนที่ '\' ด้วย '/'
            style={styles.imageStyle}
          />
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <Text style={styles.textPrimaryProfile}>
          Title: <Text style={{ color: colors.primary }}>{name.title}</Text>
        </Text>
        <Text style={styles.textSecondaryProfile}>
          Total Focused:{" "}
          <Text style={{ color: colors.primary }}>
            {name.duration / 60} min
          </Text>
        </Text>
        <View style={styles.rowCategory}>
          <View style={styles.category}>
            <Text style={styles.textCategory}>{name.category}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <LinearGradient
      colors={[
        colors.backgroundSecondary,
        colors.backgroundSecondary,
        colors.primary,
        colors.primary,
      ]}
      style={styles.container}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <View style={styles.scrollView}>
        <View style={styles.logoContainer}>
          <Text style={styles.title}>Hon Hon</Text>
          <TouchableOpacity
            style={{ position: "absolute", right: 25 }}
            onPress={async () => setShowModal(true)}
          >
            <Ionicons
              name="person-circle-outline"
              size={45}
              color={colors.background}
            />
            <ModalLogOutScreen showModal={showModal} onChangeModal={onChangeModal} />
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <View style={{ width: "100%" }}>
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, alignItems: "flex-start" }}
              keyboardShouldPersistTaps="handled"
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={fetchProfile}
                />
              }
            >
              {/* Overview Section */}
              <View style={{ flex: 1, width: "100%" }}>
                <Text style={styles.contentTitle}>Overview</Text>
                <Text style={styles.subContentTitle}>
                  Total Focused time: {totalFocused / 60} min
                </Text>

                <View style={{ width: "100%", marginTop: 15 }}>
                  <View style={styles.overView}>
                    <BarChartDemo focusedPerType={typeBook} />
                  </View>
                </View>
              </View>

              {/* Profile Section */}
              <View style={{ flex: 1, width: "100%", marginTop: 10 }}>
                <Text style={styles.contentTitle}>Profile</Text>
                <Text style={styles.subContentTitle}>
                  Maximum Profile: {profile.length}/5
                </Text>

                <View style={{ width: "100%", marginTop: 15 }}>
                  {profile.length > 0 ? (
                    profile.map((item: Profile, index: number) => {
                      return (
                        <ProfileCard
                          key={item.image}
                          name={item}
                          index={index}
                        />
                      );
                    })
                  ) : (
                    <TouchableOpacity
                      style={styles.cardProfile}
                      onPress={() => navigation.navigate("createProfile")}
                    >
                      <Ionicons
                        name="add-outline"
                        size={50}
                        color={colors.secondary}
                      />
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </View>
      {profile.length !== 0 ? (
        <TouchableOpacity
          style={
            profile.length >= 5
              ? styles.circleButtonDisable
              : styles.circleButton
          }
          onPress={() => navigation.navigate("createProfile")}
          disabled={profile.length >= 5 ? true : false}
        >
          <Ionicons name="add-outline" size={50} color={colors.secondary} />
        </TouchableOpacity>
      ) : (
        <View></View>
      )}
    </LinearGradient>
  );
};

export default HomeScreen;
