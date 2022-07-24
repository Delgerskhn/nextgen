import { BackgroundProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaAddressCard,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

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

interface FooterSection {
  CONTACT: ContactItem[];
  SOCIAL: SocialItem[];
}

interface ContactItem {
  label: string;
  value: string;
  icon?: IconType;
}
interface SocialItem {
  icon: IconType;
  bg: string;
}
export const FOOTER: FooterSection = {
  CONTACT: [
    {
      label: "Утас",
      value: "XXXXXXX",
      icon: FaPhone,
    },
    {
      label: "Имэйл",
      value: "nextgen@gmail.com",
      icon: FaMailBulk,
    },
    {
      label: "Хаяг",
      value: "Улаанбаатар Сүхбаатар дүүрэг 3-8 тоот",
      icon: FaAddressCard,
    },
  ],
  SOCIAL: [
    {
      icon: FaFacebook,
      bg: "#003366",
    },
    {
      icon: FaInstagram,
      bg: "linkedin.900",
    },
    {
      icon: FaTwitter,
      bg: "twitter.900",
    },
    {
      icon: FaLinkedin,
      bg: "linkedin.900",
    },
    {
      icon: FaYoutube,
      bg: "red",
    },
  ],
};
interface MentorItem {
  name: string;
  profession: string;
  image: string;
}
export const MENTOR: Array<MentorItem> = [
  {
    name: "Jack Hendrix",
    profession: "President",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a9b2d0271.jpg",
  },
  {
    name: "Elizabeth Newman",
    profession: "Partner",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/2031/400_5a2816abd9044.jpg",
  },
  {
    name: "Lucy Lennon",
    profession: "Office manager",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/2031/400_5a2817ee48957.jpg",
  },
  {
    name: "Jennifer Smith",
    profession: "C.E.O ",
    image:
      "https://static1.s123-cdn-static-a.com/uploads/2031/400_5a15a987cc8c1.jpg",
  },
];
