export interface LeftNavigationGroup {
  groupName: string;
  items: Array<NavigationGroupItem>
};

export interface NavigationGroupItem {
  name: string;
  path: string;
  icon: JSX.Element
}