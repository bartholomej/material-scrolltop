/**
 * Material-scrollTop
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-scrollTop
 * Docs: https://github.com/bartholomej/material-scrollTop
 * Repo: https://github.com/bartholomej/material-scrollTop
 * Issues: https://github.com/bartholomej/material-scrollTop/issues
 */
interface Settings {
    revealElement: 'body' | string;
    revealPosition: 'top' | 'bottom';
    padding: number;
    duration: number;
    easing: 'linear' | 'swing' | string;
    onScrollEnd: Function;
}
interface RootObject {
    btnClass: string;
    revealClass: string;
    revealElement: JQuery;
    btnElement: JQuery;
    initial: Settings;
    options: Settings;
}
interface JQuery {
    materialScrollTop(): JQuery;
}
