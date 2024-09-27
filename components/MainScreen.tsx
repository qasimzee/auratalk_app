import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withRepeat,
    withTiming,
    Easing
} from 'react-native-reanimated';

const MainScreen: React.FC = () => {
    const scale = useSharedValue(1);
    useEffect(() => {
        scale.value = withRepeat(withTiming(1.2, {duration: 1000, easing: Easing.inOut(Easing.ease)}), -1, true)
    }, []);
    
    const animatedStyles = useAnimatedStyle(() => {
        return {
            transform: [{scale: scale.value}]
        }
    });
    const handlePress = () => {
      // TODO: Implement voice recognition logic
      console.log('Microphone pressed');
    };
    return (
        <View style={styles.container}>
            <Text>How can I help you with your finances today?</Text>
            <Animated.View style={[styles.micButtonContainer, animatedStyles]}>
                <TouchableOpacity style={styles.micButton} onPress={handlePress}>
                    <Icon name="mic" size={40} color="#fff" />
                </TouchableOpacity>
            </Animated.View>

            <Text style={styles.hint}>Tap the microphone to start</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    greeting: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 50,
      color: '#333',
    },
    micButtonContainer: {
      marginBottom: 30,
    },
    micButton: {
      width: 100,
      height: 100,
      borderRadius: 50,
      backgroundColor: '#007AFF',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    hint: {
      fontSize: 16,
      color: '#666',
    },
  });
  
  export default MainScreen;