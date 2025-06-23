// import { Image } from "@react-three/drei"
import { Root, Text, Container } from "@react-three/uikit"
import { Environment, Image, PositionalAudio } from "@react-three/drei"
// import { Image } from "@react-three/drei"
// import { DoubleSide } from "three"
import Model from '../Model'
import { DoubleSide } from "three"
import { LevelProps } from '../interfaces'
// import Model from '../Model'
import { Suspense, useEffect, useRef } from "react"
import * as THREE from "three";
import { Button } from '../components/apfel/button';
import { Volume2 } from "@react-three/uikit-lucide"
// import { Button } from "../components/apfel/button"
// import { CheckCircleIcon } from "@react-three/uikit-lucide"
// import { DoubleSide } from "three"
export default function KclLevelSite1({ setNotification }: LevelProps) {
    const soundRef = useRef<THREE.PositionalAudio>(null);
    useEffect(() => {
        setNotification("Click on the video to play \n Please move around and view the slides and read the instructions on your right carefully")
        console.log("Module loaded with error")
    }, [])
    const handleAudio = () => {
        if (soundRef.current) {
            soundRef.current.play();
        }
    }
    return (
        <>
            <Suspense fallback={null}>
                <Model url="/assets/KCL-siteLevel1.glb" position={[-20, 0, -25]} scale={8} rotation={[0, 0, 0]} />
                <Model url="/assets/base-kcl.glb" position={[0, -0.85, 0]} scale={10} rotation={[0, 0, 0]} />
                <Model url="/assets/smoke-stack.glb" position={[-22.5, 0, -75]} scale={125} rotation={[0, 0, 0]} />
                <Model url="/assets/smoke-stack.glb" position={[-25, -10, 60]} scale={100} rotation={[0, 0, 0]} />
            </Suspense>
            <Image url="/assets/kcl-site-slide.png" position={[0, 1.4, -6.5]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, 0, 0]} castShadow receiveShadow side={DoubleSide} />
            <Environment
                files="/assets/parsa-parking-1.hdr"
                background
                ground={{
                    height: 20,
                    radius: 280,
                    scale: 250
                }}
            />
            <PositionalAudio
                ref={soundRef}
                url="/assets/KCL-Site-Level-1.mp3"
                distance={2}
                loop={false}
                autoplay={false}
                onEnded={() => soundRef.current?.stop()}
            />
            <group position={[0.8, 1.5, -3]}>
                <Root>
                    <Container>
                        <Button variant="icon" padding={4} onClick={handleAudio}>
                            <Volume2 width={75} height={75} color={"white"} />
                        </Button>
                    </Container>
                </Root>
            </group>
            <group position={[0, 2.8, -4]} rotation={[0, 0, 0]}>
                <Root>
                    <Container
                        padding={10}
                        borderWidth={2}
                        borderColor="white"
                        borderRadius={8}
                        backgroundColor="lightgrey"
                    >
                        <Container flexDirection="column" alignItems="center">
                            <Text fontSize={12} fontWeight="bold">
                                Welcome to Kutch Copper Limited
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                Copper ore is mined, crushed, and processed to produce high-grade concentrate, which is then blended to ensure consistent quality.
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                This concentrate is fed into a smelting furnace at over 1,200°C, where it separates into molten copper matte and slag
                            </Text>
                            <Text fontSize={10} fontWeight="medium">
                                isolating the valuable metal from impurities.
                            </Text>
                        </Container>
                    </Container>
                </Root>
            </group>
        </>
    )
}