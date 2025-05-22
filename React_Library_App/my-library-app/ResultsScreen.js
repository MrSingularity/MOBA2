import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function ResultsScreen({ route, navigation }) {
    const { query } = route.params;
    const [results, setResults] = useState([]);

    useEffect(() => {
        fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`)
            .then(res => res.json())
            .then(data => setResults(data.docs));
    }, [query]);

    return (
        <FlatList
            data={results}
            keyExtractor={(item, index) => item.key + index}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('Detail', { book: item })}
                >
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.author}>{item.author_name?.join(', ')}</Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    card: { padding: 15, borderBottomWidth: 1, borderColor: '#ccc' },
    title: { fontSize: 16, fontWeight: 'bold' },
    author: { color: 'gray' },
});
