import * as React from 'react';
import * as classNames from 'classnames';

export const Footer: React.SFC<React.HTMLProps<HTMLElement>> = (props) => {
    const className = classNames('footer', props.className);
    
    return (
        <footer {...props} className={className}>
         {props.children}
        </footer>
    )
}