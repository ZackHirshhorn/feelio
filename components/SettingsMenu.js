import { View, Modal, Text, Pressable, StyleSheet } from 'react-native';

export default function SettingsMenu({ visible, onClose, currentPet, onChangePet }) {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.modalOverlay}>
        <View style={styles.modalBox}>
          <Text style={styles.title}>Settings</Text>

          <Pressable onPress={() => { onChangePet('cat'); onClose(); }}>
            <Text style={[styles.option, currentPet === 'cat' && styles.active]}>😺 Show Cats</Text>
          </Pressable>

          <Pressable onPress={() => { onChangePet('dog'); onClose(); }}>
            <Text style={[styles.option, currentPet === 'dog' && styles.active]}>🐶 Show Dogs</Text>
          </Pressable>

          <Pressable onPress={onClose}>
            <Text style={styles.close}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalBox: {
    backgroundColor: '#fff',
    margin: 40,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  option: {
    fontSize: 18,
    marginVertical: 10,
  },
  active: {
    fontWeight: 'bold',
    color: '#2196f3',
  },
  close: {
    marginTop: 20,
    color: 'red',
    fontSize: 16,
  },
});
