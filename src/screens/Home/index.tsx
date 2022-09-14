import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello world - Kiérico!</Text>
            <Text style={styles.description}>Photoshop rsrsrsrs</Text>
            <StatusBar style="auto" />
        </View>
    );
}