/**
 * Material-scrollTop
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-scrollTop
 * Docs: https://github.com/bartholomej/material-scrollTop
 * Repo: https://github.com/bartholomej/material-scrollTop
 * Issues: https://github.com/bartholomej/material-scrollTop/issues
 */
interface MaterialScrollTopSettings {
    revealElement: 'body' | string;
    revealPosition: 'top' | 'bottom';
    padding: number;
    duration: number;
    easing: 'linear' | 'swing' | string;
    onScrollEnd: Function;
}
interface MaterialScrollTopRoot {
    btnClass: string;
    revealClass: string;
    revealElement: JQuery<HTMLElement>;
    btnElement: JQuery<HTMLElement>;
    initial: MaterialScrollTopSettings;
    options: MaterialScrollTopSettings;
}
interface JQuery {
    materialScrollTop(): MaterialScrollTopSettings;
}
