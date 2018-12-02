import Router from '@meteor-it/router'
import { IRocketRouterContext, IRocketRouterState, IRocketRouterMethodList, getInitialRouter } from './router';

export default class Rocket{
    constructor() {
        this.initRouter();
    }
    router: Router<IRocketRouterContext, IRocketRouterState, IRocketRouterMethodList>;
    private initRouter() {
        this.router = getInitialRouter(() => ({
            drawTarget: null,
            store: {},
            redirectTarget: null
        }))
    }
}