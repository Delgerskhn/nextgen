export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Нүүр",
    // children: [
    //   // {
    //   //   label: "Explore Design Work",
    //   //   subLabel: "Trending Design to inspire you",
    //   //   href: "#",
    //   // },
    //   // {
    //   //   label: "New & Noteworthy",
    //   //   subLabel: "Up-and-coming Designers",
    //   //   href: "#",
    //   // },
    // ],
  },
  {
    label: "Хамрах хүрээ",
    // children: [
    //   // {
    //   //   label: "Job Board",
    //   //   subLabel: "Find your dream design job",
    //   //   href: "#",
    //   // },
    //   // {
    //   //   label: "Freelance Projects",
    //   //   subLabel: "An exclusive list for contract work",
    //   //   href: "#",
    //   // },
    // ],
  },
  {
    label: "Зорилго",
    href: "#",
  },
  {
    label: "Үр дүн",
    href: "#",
  },
];
