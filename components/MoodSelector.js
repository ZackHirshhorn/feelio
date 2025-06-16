// MoodSelector.js
import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const radius = 100;

const moods = ['😊', '😐', '😠', '😢', '😴'];
const moodLabels = {
  '😊': 'Happy',
  '😐': 'Neutral',
  '😠': 'Angry',
  '😢': 'Sad',
  '😴': 'Tired',
};

export default function MoodSelector({ onMoodSelected }) {
  const [selectedMood, setSelectedMood] = useState(null);
  const [showRing, setShowRing] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  const toggleRing = () => setShowRing(!showRing);

  const selectMood = (mood) => {
    setSelectedMood(mood);
    setShowRing(false);
    onMoodSelected?.({ mood, time: Date.now() });
  };

  return (
    <View style={styles.container}>
      {/* Mood ring buttons */}
      {showRing &&
        moods.map((mood, i) => {
          const angle = (2 * Math.PI * i) / moods.length;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          return (
            <Pressable
              key={mood}
              onPress={() => selectMood(mood)}
              style={[
                styles.ringButton,
                {
                  left: center.x + x - 30, // 30 = ringButton radius
                  top: center.y + y - 30,
                },
              ]}
            >
              <Text style={styles.ringEmoji}>{mood}</Text>
            </Pressable>
          );
        })}

      {/* Center button */}
      <Pressable
        onLayout={(e) => {
          const { x, y, width, height } = e.nativeEvent.layout;
          setCenter({
            x: x + width / 2,
            y: y + height / 2,
          });
        }}
        onPress={toggleRing}
        style={styles.centerButton}>
        <Text style={styles.centerEmoji}>{selectedMood || '🫥'}</Text>
      </Pressable>

      {/* Label */}
      {selectedMood && (
        <Text style={styles.label}>You feel {moodLabels[selectedMood]} {selectedMood}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  centerButton: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    elevation: 5,
  },
  centerEmoji: {
    fontSize: 48,
  },
  ringButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ringEmoji: {
    fontSize: 32,
  },
  label: {
    marginTop: 80,
    fontSize: 18,
  },
});
