import React from 'react'

const Button = ({name, isBeam = false, containerClass, href, target, rel}) => {
    
    if (href) {
        return (
            <a 
                href={href} 
                target={target} 
                rel={rel} 
                className={`btn ${containerClass}`}
            >
                {isBeam && (
                    <span className="relative flex h-3 w-3">
                        <span className="btn-ping"/>
                        <span className="btn-ping_dot"/>
                    </span>
                )}
                {name}
            </a>
        );
    }

    return (
        <button className={`btn ${containerClass}`}>
            {isBeam && (
                <span className="relative flex h-3 w-3">
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
            )}
            {name}
        </button>
    )
}

export default Button
