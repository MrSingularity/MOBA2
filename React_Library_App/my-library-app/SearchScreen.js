import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

export default function SearchScreen({ navigation }) {
    const [query, setQuery] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Buchsuche</Text>
            <TextInput
                style={styles.input}
                placeholder="Suchbegriff eingeben"
                value={query}
                onChangeText={setQuery}
            />
            <Button title="Suchen" onPress={() => navigation.navigate('Results', { query })} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, flex: 1, justifyContent: 'center' },
    input: { borderWidth: 1, padding: 10, marginVertical: 10 },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
