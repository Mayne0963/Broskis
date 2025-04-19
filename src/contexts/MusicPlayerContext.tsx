'use client';
import { createContext, useState, useContext, ReactNode } from 'react';

export interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  cover: string;
}

interface MusicPlayerContextValue {
  playlist: Track[];
  currentTrackIndex: number;
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  next: () => void;
  prev: () => void;
  setPlaylist: (tracks: Track[]) => void;
  selectTrack: (index: number) => void;
}

const MusicPlayerContext = createContext<MusicPlayerContextValue | undefined>(undefined);

export function MusicPlayerProvider({ children }: { children: ReactNode }) {
  const [playlist, setPlaylistState] = useState<Track[]>([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play() {
    setIsPlaying(true);
  }
  function pause() {
    setIsPlaying(false);
  }
  function next() {
    setCurrentTrackIndex(i => (i + 1) % playlist.length);
    setIsPlaying(true);
  }
  function prev() {
    setCurrentTrackIndex(i => (i - 1 + playlist.length) % playlist.length);
    setIsPlaying(true);
  }
  function selectTrack(index: number) {
    if (index >= 0 && index < playlist.length) {
      setCurrentTrackIndex(index);
      setIsPlaying(true);
    }
  }
  function setPlaylist(tracks: Track[]) {
    setPlaylistState(tracks);
    setCurrentTrackIndex(0);
  }

  return (
    <MusicPlayerContext.Provider value={{
      playlist, currentTrackIndex, isPlaying,
      play, pause, next, prev, setPlaylist, selectTrack
    }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export function useMusicPlayer() {
  const context = useContext(MusicPlayerContext);
  if (!context) {
    throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
  }
  return context;
}
