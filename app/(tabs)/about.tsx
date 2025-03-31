import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Sticker Smash</Text>
      <Text style={styles.description}>
        Sticker Smash is a fun and creative app that lets you transform your photos into unique stickers. Here's what you can do:
      </Text>
      <View style={styles.featuresContainer}>
        <Text style={styles.feature}>• Choose photos from your gallery</Text>
        <Text style={styles.feature}>• Add fun emoji stickers to your images</Text>
        <Text style={styles.feature}>• Save your creations to your device</Text>
        <Text style={styles.feature}>• Share your sticker creations with friends</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 20,
    lineHeight: 24,
  },
  featuresContainer: {
    backgroundColor: "#1a1d21",
    padding: 15,
    borderRadius: 10,
  },
  feature: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 10,
    lineHeight: 24,
  },
});
