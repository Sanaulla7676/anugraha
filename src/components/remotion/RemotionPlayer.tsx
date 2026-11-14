"use client";
import { Player } from "@remotion/player";
import { COMPOSITIONS } from "./compositions";

export default function RemotionPlayer({ id }: { id: string }) {
  const comp = COMPOSITIONS[id] || COMPOSITIONS["mg-orbit-counter"];
  return (
    <Player
      component={comp.c}
      durationInFrames={comp.frames}
      compositionWidth={1280}
      compositionHeight={720}
      fps={30}
      loop
      autoPlay
      controls={false}
      clickToPlay={false}
      acknowledgeRemotionLicense
      style={{ width: "100%", height: "100%" }}
    />
  );
}
