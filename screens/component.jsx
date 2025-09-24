import {StyleSheet, Text, View} from 'react-native';

export default function A(){
    return (
        <View style={StyleSheet.container}>
            <Text>A Page</Text>
        </View>
    )
}

export function B() {
  return (
    <View style={styles.container}>
      <Text>B Page</Text>
    </View>
  );
}

export function C() {
  return (
    <View style={styles.container}>
      <Text>C Page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});