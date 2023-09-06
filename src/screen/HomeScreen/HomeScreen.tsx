import React, {useEffect} from 'react';
import {Image, Pressable, ScrollView, StyleSheet, Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from "expo-linear-gradient";
import {vw} from "../../shared/hook/vw";
import {Poppins_400Regular, Poppins_500Medium, Poppins_800ExtraBold, useFonts} from "@expo-google-fonts/poppins";

export type RootStackParamList = {
    Home: undefined;
    CardDetails: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Home'
>;

type Props = {
    navigation: ProfileScreenNavigationProp;
};
export const HomeScreen = ({navigation}: Props) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, [navigation]);

    const [loaded] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsExtraBold: Poppins_800ExtraBold,
        PoppinsMedium: Poppins_500Medium,
    });

    if (!loaded) {
        return null;
    }
    return (
        <ScrollView>
            <LinearGradient
                colors={['#F0F2FF', '#E7EBFF']}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.container}>
                <View style={styles.cards_wrapper}>

                    <LinearGradient
                        colors={['#F1F3FF', '#E7E9F8']}
                        style={[
                            styles.shadowProp,
                            styles.card,
                        ]}>
                        <Pressable onPress={() => navigation.navigate('CardDetails')}>
                            <View>
                                <Text style={styles.customTextHeader}>Weekly{'\n'}Riddle</Text>
                                <Text style={styles.customText}>Riddles you need to{'\n'}solve weekly</Text>
                            </View>
                            <Image style={styles.imageOne}
                                   source={require('../../assets/image/ImageCardOne.png')}/>
                        </Pressable>

                    </LinearGradient>
                    <View style={styles.small_cards}>
                        <LinearGradient colors={['#F1F3FF', '#E7E9F8']} style={[styles.small_card, styles.shadowProp]}>
                            <Pressable onPress={() => navigation.navigate('CardDetails')}>
                                <Text style={styles.smallCardTextHeader}>3 Days{'\n'}Exp. Riddles</Text>
                                <Text style={styles.smallCardText}>3 days{'\n'}for solving</Text>
                                <Image style={styles.ImageTwo}
                                       source={require('../../assets/image/ImageTwo.png')}/>
                            </Pressable>
                        </LinearGradient>
                        <LinearGradient colors={['#F1F3FF', '#E7E9F8']} style={[styles.small_card, styles.shadowProp]}>
                            <Pressable onPress={() => navigation.navigate('CardDetails')}>
                                <Text style={styles.smallCardTextHeader}>1 Day{'\n'}Exp. Riddles</Text>
                                <Text style={styles.smallCardText}>1 day for{'\n'}solving</Text>
                                <Image style={styles.ImageThree}
                                       source={require('../../assets/image/ImageThree.png')}/>
                            </Pressable>
                        </LinearGradient>
                    </View>
                    <LinearGradient
                        colors={['#F1F3FF', '#E7E9F8']}
                        style={[
                            styles.shadowProp,
                            styles.card,
                            {marginBottom: vw(20)}
                        ]}>
                        <Pressable onPress={() => navigation.navigate('CardDetails')}>
                            <Text style={styles.customTextHeader}>Special Brand{'\n'}Riddles</Text>

                            <Text style={styles.customText}>Riddles related with{'\n'}popular brands{'\n'}such as</Text>
                            <Image style={styles.ImageFour}
                                   source={require('../../assets/image/ImageFour.png')}/>
                        </Pressable>
                    </LinearGradient>
                </View>
            </LinearGradient>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: vw(120),
        paddingHorizontal: vw(35),
        flex: 1,
    },
    content: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cards_wrapper: {
        display: 'flex',
        flexDirection: 'column',

    },
    card: {
        width: '100%',
        maxWidth: vw(330),
        height: vw(200),
        borderRadius: 28,
        paddingLeft: vw(26),
        paddingTop: vw(39),
        position: "relative",
        zIndex: 5,
    },

    small_cards: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: vw(330),
        marginTop: vw(30),
        marginBottom: vw(20)
    },
    small_card: {
        display: "flex",
        flexDirection: 'column',
        width: vw(145),
        height: vw(168),
        borderRadius: 35,
        paddingLeft: vw(20),
        paddingTop: vw(56),
        position: 'relative',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 2,
    },
    customTextHeader: {
        color: '#3D444F',
        fontFamily: 'PoppinsExtraBold',
        fontSize: vw(24),
        fontWeight: '800',
        lineHeight: 30,
        letterSpacing: -0.24,
        textAlign: 'left'
    },
    customText: {
        color: '#5F6F89',
        // fontFamily: 'PoppinsMedium',
        fontSize: vw(12),
        fontStyle: 'normal',
        fontWeight: '500',
        // lineHeight: 18,
        letterSpacing: -0.24,
        opacity: 0.66,
        textAlign: 'left'
    },
    smallCardTextHeader: {
        color: '#3D444F',
        fontFamily: 'PoppinsExtraBold',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 20,
        letterSpacing: -0.14,
    },
    smallCardText: {
        marginTop: vw(14),
        color: '#5F6F89',
        fontFamily: 'PoppinsMedium',
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 18,
        letterSpacing: -0.24,
        opacity: 0.66,
    },
    imageOne: {
        width: vw(220),
        height: vw(169),
        position: "absolute",
        zIndex: 10,
        top: vw(-56),
        right: vw(-1),
    },
    ImageTwo: {
        width: vw(155),
        height: vw(184),
        position: "absolute",
        zIndex: 10,
        top: vw(-76),
        right: vw(-17),
    },
    ImageThree: {
        width: vw(155),
        height: vw(184),
        position: "absolute",
        zIndex: 10,
        top: vw(-77),
        right: vw(-17),
    },
    ImageFour: {
        width: vw(357),
        height: vw(225.854),
        position: "absolute",
        zIndex: 10,
        top: vw(-46),
        right: vw(-50),
    }
});
