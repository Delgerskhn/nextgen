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
    href: "/",
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
    label: "Удирдамж",
    children: [
      {
        label: "Удирдамж татах",
        href: "/шинэ-сэргэлт-удирдамж.pdf",
      },
      {
        label: "Удирдамж үзэх",
        href: "/guidance",
      },
    ],
  },
  {
    label: "Ментор болон сургагч багш нар",
    href: "/mentor",
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
    label: "Төсөл",
    href: "/project",
  },
];

export const MOBILE_NAV_ITEMS: Array<NavItem> = [
  {
    label: "Нүүр",
    href: "/",
  },
  {
    label: "Удирдамж татах",
    href: "/шинэ-сэргэлт-удирдамж.pdf",
  },
  {
    label: "Удирдамж үзэх",
    href: "/guidance",
  },
  {
    label: "Ментор болон сургагч багш нар",
    href: "/mentor",
  },
  {
    label: "Төсөл",
    href: "/project",
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
  link: string;
  bg: string;
}
export const FOOTER: FooterSection = {
  CONTACT: [
    {
      label: "Имэйл",
      value: "shinesergelt@gmail.com",
      icon: FaMailBulk,
    },
    {
      label: "Хаяг",
      value: "80106367",
      icon: FaPhone,
    },
  ],
  SOCIAL: [
    {
      icon: FaFacebook,
      link: "https://www.facebook.com/Next-Gen-101522729329345",
      bg: "#003366",
    },
    {
      icon: FaInstagram,
      bg: "linkedin.900",
      link: "https://www.instagram.com/next.gen.2022/",
    },
    // {
    //   icon: FaTwitter,
    //   bg: "twitter.900",
    // },
    // {
    //   icon: FaLinkedin,
    //   bg: "linkedin.900",
    // },
    // {
    //   icon: FaYoutube,
    //   bg: "red",
    // },
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
