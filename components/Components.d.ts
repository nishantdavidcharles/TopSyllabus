// Components.d.ts — the complete catalog of the 2 component(s) in
// Components.bundle.js. READ THIS FILE BEFORE USING THE BUNDLE: component
// names are derived from Figma layer names (sanitized to PascalCase,
// deduplicated) and may differ from what the design calls them — the
// "figma layer" comment above each interface maps them back.
// After the bundle <script> loads, every component is a window global
// (e.g. window.HomeScreen) and usable directly in JSX.
import * as React from 'react';

// figma layer: "home screen " (node 36:5)
export interface HomeScreenProps {
  className?: string;
  style?: React.CSSProperties;
}

// figma layer: "_Play button" (node 8:716)
export interface PlayButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  style2?: "glassmorphism" | "outline";
  state?: "default" | "hover";
}

declare const HomeScreen: React.FC<HomeScreenProps>;
declare const PlayButton: React.FC<PlayButtonProps>;
declare global {
  interface Window {
    HomeScreen: React.FC<HomeScreenProps>;
    PlayButton: React.FC<PlayButtonProps>;
  }
}
