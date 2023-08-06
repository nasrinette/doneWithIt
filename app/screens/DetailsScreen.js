import { Image, StyleSheet, Text, View } from "react-native";
import Card from "../components/Card.js";
import ListItem from "../components/lists/ListItem.js";
import colors from "../config/colors.js";
import { SafeAreaView } from "react-native";

export default function DetailsScreen({route}) {
  const listing = route.params;

  return (
    <View style={styles.container}>
      <Card
        title={listing.title}
        subTitle={'$'+listing.price}
        image={listing.image}
        borderRadius={0}
      />
      <ListItem
        title="Mosh Hamedani"
        subTitle="5 Listings"
        image={require("../assets/mosh.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
