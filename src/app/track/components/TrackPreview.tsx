"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const TrackPreview = ({ trackId }: { trackId: string }) => {
  const [track, setTrack] = useState<any>(null);

  useEffect(() => {
    const fetchTrack = async () => {
      const response = await fetch(`/api/track/${trackId}`);
      const data = await response.json();
      setTrack(data);
    };

    fetchTrack();
  }, [trackId]);

  if (!track) return <div>Loading...</div>;

  return (
    <div>
      <h2>{track.name}</h2>
      <p>{track.artists.map((artist: any) => artist.name).join(", ")}</p>
      {track.album.images[0] && (
        <Image
          src={track.album.images[0].url}
          alt={track.name}
          width={300}
          height={300}
        ></Image>
      )}
    </div>
  );
};

export default TrackPreview;
