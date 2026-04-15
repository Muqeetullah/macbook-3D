import { useEffect, useRef, useState } from "react";

const DeferredSection = ({ children, placeholder = null, rootMargin = "320px 0px" }) => {
    const [shouldRender, setShouldRender] = useState(false);
    const markerRef = useRef(null);

    useEffect(() => {
        if (shouldRender || !markerRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                setShouldRender(true);
                observer.disconnect();
            },
            { rootMargin }
        );

        observer.observe(markerRef.current);

        return () => observer.disconnect();
    }, [rootMargin, shouldRender]);

    if (shouldRender) return children;

    return (
        <div ref={markerRef}>
            {placeholder}
        </div>
    );
};

export default DeferredSection;
