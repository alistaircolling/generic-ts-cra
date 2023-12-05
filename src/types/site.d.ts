
export type DataResponse = Site | Page | MenuData
export type DataRequest = 'site' | 'page' | 'menu'
export interface Site {
  title: string;
}
export interface MenuItem {
  title: string;
  path: string;
}

export interface MenuData {
  items: MenuItem[];
}

export interface Image {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface Card {
  title: string;
  subtitle: string;
  image: Image;
  id: string;
}

export interface Page {
  title: string;
  path: string;
  cards: Card[];
}

type Theme = {
  colors: {
    primary: string;
    secondary: string;
    text: string;
  };
  fonts: {
    body: string;
    heading: string;
  };
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
};

