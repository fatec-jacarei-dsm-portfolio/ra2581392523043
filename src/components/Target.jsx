import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
    const targetRef = useRef();

    const { scene } = useGLTF("/models/moderm_headphones.glb");

    useGSAP(() => {
        if (!targetRef.current) return;

        gsap.to(targetRef.current.position, {
            y: targetRef.current.position.y + 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
        });
    });

    return (
        <mesh
            ref={targetRef}
            {...props}
            rotation={[0, Math.PI / 4, 0]}
            scale={1.1}
        >
            <primitive object={scene} />
        </mesh>
    );
};

useGLTF.preload("/models/moderm_headphones.glb");

export default Target;