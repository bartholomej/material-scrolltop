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

(function($: JQueryStatic) {
  function mScrollTop(
    element: HTMLElement,
    settings: MaterialScrollTopSettings
  ) {
    const _: MaterialScrollTopRoot = this;
    let breakpoint: number;
    let scrollTo = 0;

    _.btnClass = '.material-scrolltop';
    _.revealClass = 'reveal';
    _.btnElement = $(_.btnClass);

    _.initial = {
      revealElement: 'body',
      revealPosition: 'top',
      padding: 0,
      duration: 600,
      easing: 'swing',
      onScrollEnd: null
    };

    _.options = $.extend({}, _.initial, settings);

    _.revealElement = $(_.options.revealElement);
    breakpoint =
      _.options.revealPosition !== 'bottom'
        ? _.revealElement.offset().top
        : _.revealElement.offset().top + _.revealElement.height();
    scrollTo = element.offsetTop + _.options.padding;

    $(document).scroll(() => {
      if (breakpoint < $(document).scrollTop()) {
        _.btnElement.addClass(_.revealClass);
      } else {
        _.btnElement.removeClass(_.revealClass);
      }
    });

    _.btnElement.click(() => {
      let trigger = true;
      $('html, body').animate(
        {
          scrollTop: scrollTo
        },
        _.options.duration,
        _.options.easing,
        () => {
          if (trigger) {
            // Fix callback triggering twice on chromium
            trigger = false;
            const callback = _.options.onScrollEnd;
            if (typeof callback === 'function') {
              callback();
            }
          }
        }
      );
      return false;
    });
  }

  $.fn.materialScrollTop = function() {
    const _ = this;
    const opt = arguments[0];
    const l = _.length;
    const i = 0;
    if (typeof opt == 'object' || typeof opt == 'undefined') {
      _[i].materialScrollTop = new mScrollTop(_[i], opt);
    }
    return _;
  };
})(jQuery);
