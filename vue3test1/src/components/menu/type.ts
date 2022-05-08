export interface MenuOption {
  id: number;
  pid: number;
  title: string;
  icon: string;
  children?: MenuOption[];
}