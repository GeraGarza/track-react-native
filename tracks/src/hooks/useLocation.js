import React, { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
  requestPermissionsAsync,
} from "expo-location";

export default (callback) => {
  const [err, setErr] = useState(null);

  const startWatching = async () => {
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErr("Permission to access location was denied");
      return;
    }

    await watchPositionAsync(
      {
        accuracy: Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [err];
};
