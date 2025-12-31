import React from "react";

export interface Film {
  slug: string;
  title: string;
  iconPath: string;
  description: string;
  additionalContent?: React.ReactNode;
  videoId?: string;
  videoType?: 'youtube' | 'vimeo';
}

// Helper function to format slug to title (e.g., "failed-comic" -> "Failed Comic")
function formatSlugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Film data array
export const films: Film[] = [
  {
    slug: "failed-comic",
    title: formatSlugToTitle("failed-comic"),
    iconPath: "/assets/film-icons/failed-comic-icon.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    videoId: "958536656",
    videoType: "vimeo",
  },
  {
    slug: "double-trouble",
    title: formatSlugToTitle("double-trouble"),
    iconPath: "/assets/film-icons/double-trouble-icon.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    videoId: "943628645",
    videoType: "vimeo",
  },
  {
    slug: "human-error",
    title: formatSlugToTitle("human-error"),
    iconPath: "/assets/film-icons/human-error-icon.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    videoId: "DY51tBN6Lso",
    videoType: "youtube",
  },
  {
    slug: "sidewalk-jimmy",
    title: formatSlugToTitle("sidewalk-jimmy"),
    iconPath: "/assets/film-icons/sidewalk-jimmy-icon.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    videoId: "1054577008",
    videoType: "vimeo",
  },
  {
    slug: "supernova",
    title: formatSlugToTitle("supernova"),
    iconPath: "/assets/film-icons/supernova-icon.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    videoId: "f5JlmgTjRJ8",
    videoType: "youtube",
  },
];

// Helper function to get film by slug
export function getFilmBySlug(slug: string): Film | undefined {
  return films.find((film) => film.slug === slug);
}

// Helper function to get all film slugs
export function getAllFilmSlugs(): string[] {
  return films.map((film) => film.slug);
}
