import { RouteObject } from 'react-router-dom';

export interface RouteMeta {
  orderNo: number;
  icon: string;
  title: string;
  hideChildrenInMenu: boolean;
}

export interface AppRouteModule extends RouteObject {
  caseSensitive?: boolean;
  children?: AppRouteModule[];
  element?: React.ReactNode;
  index?: boolean;
  path?: string;
  meta: RouteMeta;
}
