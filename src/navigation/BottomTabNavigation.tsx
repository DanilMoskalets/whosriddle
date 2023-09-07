import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStackNavigation} from './HomeStackNavigation';
import {ProfileScreen, SettingsScreen} from "../screen";
import {SafeAreaView, StyleSheet, Text, View} from "react-native";
import SvgComponentHome from "../assets/icons/SvgComponentHome";
import SvgComponentLeaders from "../assets/icons/SvgComponentLeaders";
import SvgComponentSettings from "../assets/icons/SvgComponentSettings";
import {vw} from "../shared/hook/vw";
import SvgComponentsShape from "../assets/icons/SvgComponentsShape";
import {LinearGradient} from "expo-linear-gradient";
import SvgComponenBall from "../assets/icons/SvgComponenBall";
import SvgComponenBulb from "../assets/icons/SvgComponenBulb";

const Tab = createBottomTabNavigator();

const MyCustomHeader = () => (
    <SafeAreaView style={{position: 'relative'}}>
        <View style={styles.header}>
            <LinearGradient colors={['#F8B469', '#FF876D']}
                            start={[0, 0]}
                            end={[1, 1]} style={styles.container}>
                <SvgComponentsShape/>
                <Text style={styles.text}>
                    954
                </Text>
            </LinearGradient>
            <View style={styles.headerLeft}>
                <View style={styles.notification}>
                    <SvgComponenBall/>
                    <LinearGradient colors={['#E75AC8', '#FF708A']} style={[styles.rate]}>
                        <Text style={styles.rate_text}>2</Text>
                    </LinearGradient>
                </View>
                <View style={styles.notification}>
                    <SvgComponenBulb/>
                    <LinearGradient colors={['#7DCB44', '#6DBC33']} style={[styles.rate]}>
                        <Text style={styles.rate_text}>2</Text>
                    </LinearGradient>
                </View>
            </View>
        </View>
    </SafeAreaView>
);

const homeScreenOptions = {
    title: '',
    tabBarLabel: 'Home',
    headerRight: () => (
        <View style={styles.headerLeft}>
            <View style={styles.notification}>
                <SvgComponenBall/>
                <LinearGradient colors={['#E75AC8', '#FF708A']} style={[styles.rate]}>
                    <Text style={styles.rate_text}>2</Text>
                </LinearGradient>
            </View>
            <View style={styles.notification}>
                <SvgComponenBulb/>
                <LinearGradient colors={['#7DCB44', '#6DBC33']} style={[styles.rate]}>
                    <Text style={styles.rate_text}>2</Text>
                </LinearGradient>
            </View>
        </View>
    ),
    headerLeft: () => (
        <LinearGradient colors={['#F8B469', '#FF876D']}
                        start={[0, 0]}
                        end={[1, 1]} style={styles.container}>
            <SvgComponentsShape/>
            <Text style={styles.text}>
                954
            </Text>
        </LinearGradient>
    ),
    // header: () => (<MyCustomHeader/>),
    headerStyle: {
        // marginHorizontal: vw(35)
    },
    tabBarStyle: {
        borderTopWidth: 0,
        elevation: 0,
        backgroundColor: '#E7EBFF',
        opacity: 0.9
    },
    tabBarIcon: () => (
        <SvgComponentHome/>
    ),
};

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#3D444F',
            tabBarInactiveTintColor: '#5F6F89',
            headerTransparent: true,
        }}>
            <Tab.Screen name="Home" component={HomeStackNavigation} options={homeScreenOptions}/>
            <Tab.Screen name="Leaderboard" component={ProfileScreen}
                        options={{tabBarIcon: () => <SvgComponentLeaders/>}}/>
            <Tab.Screen name="Settings" component={SettingsScreen}
                        options={{tabBarIcon: () => <SvgComponentSettings/>}}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    header: {
        paddingTop: vw(42),
        paddingHorizontal: vw(35),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerRight: {
        paddingLeft: 20
    },
    headerLeft: {
        display: 'flex',
        flexDirection: 'row',
        gap: vw(20),
        marginRight: vw(35),
        marginTop: vw(42)
    },
    text: {
        fontSize: vw(14),
        color: '#fff',
        fontStyle: 'normal',
        fontWeight: '800',
    },
    container: {
        paddingHorizontal: vw(16),
        paddingVertical: vw(12),
        marginHorizontal: vw(35),
        marginTop: vw(42),
        justifyContent: 'center',
        gap: vw(10),
        flexDirection: 'row',
        alignItems: 'center',
        position: 'relative',
        borderRadius: 14,
    },
    notification: {
        borderRadius: 14,
        opacity: 0.66,
        backgroundColor: '#F8F9FD',
        width: vw(40),
        height: vw(40),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    rate: {
        position: 'absolute',
        top: -10,
        right: -3,
        width: vw(23),
        height: vw(23),
        borderRadius: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },
    rate_text: {
        color: '#fff',
        fontSize: vw(11)
    }
});
