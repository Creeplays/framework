import Store from '../stores/store';
import { observable } from '../reactive';

export default class RouterStore extends Store{
    private _query: {[key:string]:string};
    private _path: string;
    private _hasRedirect: boolean = false;
    private _forceRerender = ()=>{};
    get hasRedirect(){
        return this._hasRedirect;
    }
    get path(){
        return this._path;
    }
    set path(url:string){
        this._hasRedirect = true;
        if(process.env.BROWSER)
            this._forceRerender();
    }
    get query(){
        return this._query;
    }
    set query(to:{[key:string]:string}){
        this._hasRedirect = true;
        this._query=to;
        if(process.env.BROWSER)
            this._forceRerender();
    }
    go(url:string){
        this._hasRedirect = true;
        this._path = url;
        if(process.env.BROWSER)
            window.history.pushState({}, '', url);
        this._path = url;
        if(process.env.BROWSER)
            this._forceRerender();
    }
}