export interface LinkItem {
  id: number;
  title: string;
  url: string;
  iconUrl: string;
}

export const LINKS: LinkItem[] = [
  { id: 1, title: 'YouTube', url: 'https://www.youtube.com/', iconUrl: '/icons/icon_youtube.png' },
  { id: 1, title: 'Google' , url: 'https://www.google.com/', iconUrl: '/icons/icon_google.png' },
  { id: 1, title: 'Gmail' , url: 'https://mail.google.com/', iconUrl: '/icons/icon_gmail.png' },
];
