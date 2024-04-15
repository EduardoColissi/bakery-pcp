export interface MenuItem {
  key: string;
  icon?: JSX.Element;
  label: JSX.Element | string;
  children?: MenuItem[];
}
