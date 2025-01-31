export type Container = {
  id: number;
  name: string;
  parentContainer?: Container;
  childContainers: Container[];
  childContainerCount?: number;
  itemCount?: number;
};
export type Item = {
  id: number;
  name: string;
  containerId?: number;
};
export type User = {
  name: string;
  email: string;
  imageUrl: string;
};
export type NavigationItem = {
  name: string;
  href: string;
  current?: boolean;
};
export type UserNavigationItem = {
  name: string;
  href: string;
};
