import React, { useEffect, useState, useContext } from "react";
import { SafeAreaView } from "react-native";
import { StyleSheet, View } from "react-native";
import Map from "../components/Map";
import { Text } from "react-native-elements";
import "../_mockLocation";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";

const TrackCreateScreen = () => {
  const { addLocation } = useContext(LocationContext);
  const [err] = useLocation(addLocation);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>TrackCreateScreen</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </SafeAreaView>
  );
};

export default TrackCreateScreen;

const styles = StyleSheet.create({
  tmp: { fontSize: 48 },
});
