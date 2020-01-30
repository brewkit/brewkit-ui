import React, { ReactElement, RefObject } from 'react';
import { Props } from './types';


/**
 * Fires an function passed through onScrollTo when the child element is scrolled to
 */
function ScrollToListener({
    applyToLastChild = false,
    children,
    onScrollTo,
    rootElement = null,
    rootMargin = '0px 0px 0px 0px',
    rootThreshold = 0.01,
    willListen = false,
}: Props): ReactElement {


    const ref: RefObject<HTMLDivElement> = React.useRef(null);


    function handleScroll(entries: any, observer: any): void {


        const [entry] = entries;
        const lastThreshold = observer.thresholds[observer.thresholds.length - 1];

        console.log('entry', entry.intersectionRatio);
        if (entry.intersectionRatio > 0) onScrollTo();
        if (!willListen && entry.intersectionRatio >= lastThreshold) observer.disconnect();


    }


    React.useEffect(() => {


        const target = applyToLastChild ? ref.current?.previousElementSibling : ref.current?.nextElementSibling;

        const observer = new IntersectionObserver(handleScroll, { root: rootElement,
            rootMargin,
            threshold: rootThreshold });


        if (target) observer.observe(target);


        return ((): void => {
            if (target) observer.unobserve(target);
        });


    }, [React.Children.toArray(children).length]);


    const componentStructure = (): ReactElement => {


        if (applyToLastChild) return (
            <React.Fragment>
                {children}
                <span ref={ref} style={{ display: 'none' }} />
            </React.Fragment>
        );


        return (
            <React.Fragment>
                <span ref={ref} style={{ display: 'none' }} />
                {children}
            </React.Fragment>
        );
    };


    return componentStructure();


}


export default ScrollToListener;
