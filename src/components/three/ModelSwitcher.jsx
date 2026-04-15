import { lazy, useEffect, useMemo, useRef } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "../../lib/gsap.js";

const MacbookModel = lazy(() => import("../models/Macbook-14.jsx"));

const ModelSwitcher = ({ scale, isMobile }) => {
    const SCALE_LARGE_DESKTOP = 0.08;
    const SCALE_LARGE_MOBILE = 0.05;
    const isLarge = scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;
    const targetScale = useMemo(() => {
        if (isLarge) return isMobile ? 0.05 : 0.08;

        return isMobile ? 0.03 : 0.06;
    }, [isLarge, isMobile]);

    const groupRef = useRef(null);
    const timelineRef = useRef(null);
    const initializedRef = useRef(false);
    const previousScaleRef = useRef(targetScale);

    useEffect(() => {
        const group = groupRef.current;

        if (!group) return;

        if (!initializedRef.current) {
            group.position.set(0, 0, 0);
            group.scale.setScalar(targetScale);
            previousScaleRef.current = targetScale;
            initializedRef.current = true;
            return;
        }

        if (previousScaleRef.current === targetScale) return;

        timelineRef.current?.kill();

        const direction = targetScale > previousScaleRef.current ? 1 : -1;
        const slideDistance = isMobile ? 0.2 : 0.28;

        timelineRef.current = gsap.timeline({
            defaults: { overwrite: "auto" },
        });

        timelineRef.current
            .to(group.position, {
                x: direction * slideDistance,
                duration: 0.18,
                ease: "power2.out",
            })
            .to(
                group.scale,
                {
                    x: targetScale,
                    y: targetScale,
                    z: targetScale,
                    duration: 0.42,
                    ease: "power3.inOut",
                },
                0
            )
            .to(
                group.rotation,
                {
                    y: direction * 0.08,
                    duration: 0.18,
                    ease: "power2.out",
                },
                0
            )
            .to(group.position, {
                x: 0,
                duration: 0.28,
                ease: "power2.inOut",
            })
            .to(
                group.rotation,
                {
                    y: 0,
                    duration: 0.28,
                    ease: "power2.inOut",
                },
                "<"
            );

        previousScaleRef.current = targetScale;

        return () => timelineRef.current?.kill();
    }, [isMobile, targetScale]);

    const controlsConfig = {
        snap: true,
        speed: 1,
        zoom: 1,
        azimuth: [-Infinity, Infinity],
        config: { mass: 1, tension: 0, friction: 26 }
    };

    return (
        <PresentationControls {...controlsConfig}>
            <group ref={groupRef} position={[0, 0, 0]}>
                <MacbookModel />
            </group>
        </PresentationControls>
    );
};

export default ModelSwitcher;
