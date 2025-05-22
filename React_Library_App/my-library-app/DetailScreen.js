import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
    const { book } = route.params;
    const coverId = book.cover_i;
    const imageUrl = coverId
        ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
        : 'https://via.placeholder.com/150';

    return (
        <View style={styles.container}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{book.title}</Text>
            <Text style={styles.author}>{book.author_name?.join(', ')}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { padding: 20, alignItems: 'center' },
    image: { width: 150, height: 220, marginBottom: 20 },
    title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
    author: { fontSize: 16, marginTop: 10 },
});
