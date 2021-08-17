import { useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { Context as AuthContext } from "../context/AuthContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { locations, name },
  } = useContext(LocationContext);
  const {
    state: { token },
  } = useContext(AuthContext);

  const saveTrack = () => {
    createTrack(name, locations, token);
  };

  return [saveTrack];
};
