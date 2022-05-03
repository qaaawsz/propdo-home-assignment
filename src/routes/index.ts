import {Home, Map, RealEstate} from '../global/export'
import React from 'react'

export enum RouteNames {
    MAP = '/map',
    REALESTATE = '/real-estate',
    HOME = '/',
}

interface IRoute {
    path: string,
    Element: React.ComponentType,
}

const routes: IRoute[] = [
    {
        path: RouteNames.HOME,
        Element: Home,
    },
    {
        path: RouteNames.MAP,
        Element: Map,
    },
    {
        path: RouteNames.REALESTATE,
        Element: RealEstate,
    },
]

export default routes
