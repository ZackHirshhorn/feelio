import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

export default function MoodHistory({ history }) {
  return (
    <FlatList
      data={history}
      keyExtractor={(_, i) => i.toString()}
      renderItem={({ item }) => (
        <Text style={styles.historyItem}>
          {item.mood} — {new Date(item.time).toLocaleTimeString()}
        </Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  historyItem: {
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
});
