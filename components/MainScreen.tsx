import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Animated, { 
  useSharedValue, 
  useAnimatedStyle, 
  withRepeat, 
  withTiming, 
  Easing 
} from 'react-native-reanimated';
import MicrophoneIcon from './MicrophoneIcon';

const MainScreen = () => {
  const handlePress = () => {
    console.log('Microphone pressed');
  };

  return (
    <LinearGradient colors={['#001f3f', '#0074D9']} style={styles.container}>
      <Text style={styles.title}>Financial Assistant</Text>
      
      <View style={styles.iconContainer}>
        <MicrophoneIcon color="#FFFFFF" size={100} />
        <View style={styles.dotsContainer}>
          <View style={[styles.dot, { backgroundColor: '#FF4136', top: -10, left: -20 }]} />
          <View style={[styles.dot, { backgroundColor: '#FFDC00', top: -30, right: -20 }]} />
          <View style={[styles.dot, { backgroundColor: '#7FDBFF', bottom: -10, left: -20 }]} />
          <View style={[styles.dot, { backgroundColor: '#01FF70', bottom: -30, right: -20 }]} />
        </View>
      </View>
      
      <Text style={styles.hint}>Tap to speak</Text>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Speak Now</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    marginBottom: 40,
    fontWeight: 'bold',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#FF4136',
    position: 'relative',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  dotsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    position: 'absolute',
  },
  hint: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF851B',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    elevation: 5,
    shadowColor:'#000',
    shadowOffset:{width :0,height :4},
   shadowOpacity :0.25,
   shadowRadius :4
},
buttonText:{
   color:'#FFFFFF',
   fontSize :18,
   fontWeight :'bold'
}
});

export default MainScreen;

export default MainScreen;