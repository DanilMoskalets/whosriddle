import {
    Animated,
    Dimensions,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {vw} from "../../shared/hook/vw";
import {useRef, useState} from "react";
import FlatList = Animated.FlatList;
import {
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold,
    useFonts
} from "@expo-google-fonts/poppins";

export const CardDetailsScreen = () => {
    const [activeButton, setActiveButton] = useState('Weekly'); // Состояние для отслеживания активной кнопки
    const textInputRef = useRef<TextInput | null>(null);

    const focusTextInput = () => {
       if(textInputRef.current !== null) textInputRef.current.focus();
    };
    const buttons = ['Weekly', '3 days', '1 day', 'Special']; // Массив кнопок

    const [loaded] = useFonts({
        PoppinsRegular: Poppins_400Regular,
        PoppinsExtraBold: Poppins_800ExtraBold,
        PoppinsMedium: Poppins_500Medium,
        PoppinsBold: Poppins_700Bold
    });

    if (!loaded) {
        return null;
    }

    const renderItem = ({item}: { item: string }) => (
        <Pressable
            style={[
                styles.button,
                activeButton === item ? styles.activeButton : styles.inactiveButton
            ]}
            onPress={() => setActiveButton(item)}
        >
            <Text
                style={[
                    styles.text,
                    activeButton === item ? styles.activeText : styles.inactiveText
                ]}
            >
                {item}
            </Text>
        </Pressable>
    );
    return (
        <ScrollView>
            <LinearGradient
                colors={['#F0F2FF', '#E7EBFF']}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.container}>
                <View style={styles.containerButtons}>
                    <FlatList
                        data={buttons}
                        renderItem={renderItem}
                        keyExtractor={(item) => item}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={styles.listContainer}
                    />
                </View>
                <View style={{marginTop: vw(42)}}>
                    <Text style={styles.headerText}>Weekly Riddles</Text>
                    <Text style={styles.normalText}>I can add to several hundred.
                        But can’t subtract multiply or divide. Whatever I add to, it’s
                        always in front of you but never behind. And the number I add to
                        You can’t really hide!
                    </Text>
                    <Text style={styles.highlightedText}>Who am I?</Text>
                </View>
                <View style={{marginTop: vw(24)}}>
                    <LinearGradient
                        colors={['#F1F3FF', '#E7E9F8']}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={[
                            styles.form,
                            {
                                borderWidth: 2,
                                borderColor: '#FFF',
                                shadowOffset: { width: vw(11), height: vw(12) },
                                shadowRadius: vw(35),
                            }
                        ]}
                    >
                        <TextInput
                            ref={textInputRef}
                            style={styles.input}
                            onFocus={focusTextInput}
                            placeholder='Your answer'
                            placeholderTextColor="#5F6F89"
                        />
                    </LinearGradient>
                </View>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <LinearGradient
                            style={styles.buttonSubmit}
                            colors={['#8FD45B', '#78C83D']}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.normalText, {
                    opacity: 0.66,
                    fontSize: vw(12),
                    textAlign: 'center',
                    marginTop: vw(20),
                }]}>5 attempts remaining</Text>
            </LinearGradient>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: vw(100),
        paddingHorizontal: vw(35),
        flex: 1,
        minHeight: Dimensions.get('window').height
    },
    containerButtons: {
        marginTop: 20,
    },
    listContainer: {
        justifyContent: 'flex-start',
        gap: vw(8)
    },
    button: {
        width: 72,
        height: 42,
        borderRadius: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'

    },
    activeButton: {
        borderColor: '#7ECC45',
        backgroundColor: '#F4F5FD',
        borderWidth: 1,
        shadowColor: 'rgba(136, 209, 82, 0.40)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 5,
    },
    inactiveButton: {
        opacity: 0.66,
        backgroundColor: '#F8F9FD',
        shadowColor: 'rgba(136, 209, 82, 0.40)',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.4,
        shadowRadius: 20,
        elevation: 5,
    },
    text: {
        fontFamily: 'PoppinsRegular',
        fontSize: vw(12),
    },
    activeText: {
        fontWeight: '600',
        color: '#7ECC45',
    },
    inactiveText: {
        fontWeight: '600',
        color: '#3D444F',
        letterSpacing: -0.24,
    },
    normalText: {
        color: '#5F6F89',
        fontFamily: 'PoppinsRegular',
        fontSize: vw(16),
        fontStyle: 'normal',
        fontWeight: '400',
        lineHeight: 28,
        letterSpacing: -0.32,
        marginBottom: vw(25)
    },
    headerText: {
        color: '#3D444F',
        fontFamily: 'PoppinsExtraBold',
        fontSize: vw(24),
        fontStyle: 'normal',
        fontWeight: '800',
        lineHeight: 30,
        letterSpacing: -0.24,
        marginBottom: vw(17)
    },
    highlightedText: {
        color: '#5F6F89',
        fontFamily: 'PoppinsBold',
        fontSize: vw(16),
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: 28,
        letterSpacing: -0.32,
    },
    form: {
        width: '100%',
        maxWidth: vw(310),
        height: vw(72),
        padding: vw(20),
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#FFF',
        shadowColor: 'rgba(122, 125, 168, 0.06)',
        shadowOffset: { width: vw(11), height: vw(12) },
        shadowRadius: vw(35),
        shadowOpacity: 0.06,
        elevation: 5,
        position: 'relative',
    },
    label: {
        color: '#5F6F89',
        fontSize: vw(14),
        fontWeight: '600',
        position: 'absolute'
    },
    input: {
        borderColor: 'transparent',
        borderWidth: 1,
        backgroundColor: 'transparent',
        color: '#5F6F89',
        fontSize: vw(14),
        fontWeight: '600',
    },
    buttonContainer: {
        marginTop: vw(24),
        width: '100%',
        maxWidth: vw(310),
        height: vw(72),
        borderRadius: 30,
        overflow: 'hidden',
        shadowColor: 'rgba(136, 209, 82, 0.4)',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        shadowOpacity: 0.4,
        elevation: 5,
    },
    buttonSubmit: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
})
