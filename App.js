import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import MoodSelector from './components/MoodSelector';
import PetCarousel from './components/PetCarousel';
import MoodHistory from './components/MoodHistory';
import SettingsMenu from './components/SettingsMenu';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [history, setHistory] = useState([]);
  const [petType, setPetType] = useState('cat'); // 'cat' or 'dog'

  const handleMoodSelected = (entry) => {
    setHistory((prev) => [entry, ...prev.slice(0, 4)]);
  };

  return (
    <View style={styles.appContainer}>
      <Pressable
          onPress={() => setSettingsVisible(true)}
          style={styles.settingsButton}>
          <MaterialIcons name="more-vert" size={28} />
      </Pressable>

        <SettingsMenu
          visible={settingsVisible}
          onClose={() => setSettingsVisible(false)}
          currentPet={petType}
          onChangePet={setPetType}/>

      <View style={{ flex: 1 }}>
        <MoodSelector onMoodSelected={handleMoodSelected} />
      </View>
      <View style={{ flex: 1 }}>
        <PetCarousel petType={petType} />
      </View>
      <View style={{ flex: 1 }}>
        <MoodHistory history={history} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 60,
    position: 'relative',
  },
  settingsButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1000,
    padding: 10,
  }
});
