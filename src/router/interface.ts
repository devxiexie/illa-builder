import { RouteObject } from "react-router-dom"

export interface RoutesObjectPro extends RouteObject {
  /**
   * @description need login, if use check role,can replace this
   */
  needLogin?: boolean
  /**
   * @description child route
   */
  children?: RoutesObjectPro[]
}