import React, { Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <Fragment>
      <Text style={styles.tmp}>AccountScreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </Fragment>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  tmp: { fontSize: 48 },
});
