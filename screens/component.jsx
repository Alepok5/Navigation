import {StyleSheet, Text, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function A(){
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>A Page</Text>
            <Button title="To B" onPress={() => navigation.navigate('B')} />
        </View>
    )
}

export function B() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>B Page</Text>
            <Button title="To A" onPress={() => navigation.navigate('A')} />
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