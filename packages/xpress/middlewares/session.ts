import {IRouterContext} from "@meteor-it/router";
import {XPressRouterContext} from "../index";

import * as session from 'express-session';

export default function (store:any, storeConfig:any={}, secret:string, sessionField='s') {
    let sessionParser=session({
        secret: secret,
        name: sessionField,
        resave: true,
        store: new (store(session))(storeConfig),
        rolling: true,
        saveUninitialized: true,
        cookie: {
            secure: false
        }
    });

    return async ({stream,next,path}:IRouterContext<any>&XPressRouterContext) => {
        sessionParser(stream.req, stream.res, (e:Error)=> {
            if(e)
                return next(e);
            next();
        });
    };
};