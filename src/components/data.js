import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  ClockIcon,
  SunIcon,
  UserGroupIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/img3.png";
import benefitTwoImg from "../../public/img/img2.png";

const benefitOne = {
  title: "Key Benefits",
  desc: "Our platform offers several key features that make managing social media easier and more efficient. Below are some of the main benefits you can take advantage of.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Save Time with Post Scheduling",
      desc: "Plan and schedule posts across all your social media accounts in advance, ensuring a consistent online presence.",
      icon: <ClockIcon />,
    },
    {
      title: "In-Depth Analytics & Reporting",
      desc: "Track the performance of your posts and campaigns with detailed analytics, helping you make data-driven decisions.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Unified Social Media Management",
      desc: "Manage and monitor all your social media platforms from a single, intuitive dashboard.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Additional Features",
  desc: "Our platform provides even more powerful tools to help you stay ahead in social media management. Below are some additional features you’ll find useful.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "User-Friendly Experience",
      desc: "Designed to be intuitive, our platform makes social media management accessible for beginners and experts alike.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Mobile-Friendly Access",
      desc: "Use the platform on any device, whether you're at your desk or on the go. Our platform is fully mobile responsive.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Seamless Team Collaboration",
      desc: "Invite team members, assign roles, and collaborate effectively on social media strategies all within the platform.",
      icon: <UserGroupIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
