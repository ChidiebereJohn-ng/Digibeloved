import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
  cta: string;
  icon: LucideIcon;
}

export interface CourseProps {
  title: string;
  promise: string;
  outcome: string;
}

export interface PortfolioItemProps {
  title: string;
  challenge: string;
  solution: string;
  result: string;
}

export interface TierProps {
  title: string;
  target: string;
  courses: CourseProps[];
}