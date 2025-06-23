import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
export default function KclDispatch({ setNotification }: LevelProps) {
    const soundRef = useRef<THREE.PositionalAudio>(null);
    useEffect(() => {
        setNotification("Raw material is taken for processing in smelter \n Please stay 10m away from the yellow grills");
    }, [setNotification]);
    const handleAudio = () => {
        if (soundRef.current) {
            soundRef.current.play();
        }
    }
    return (
        <>
            <Model key="kcl-shed" scale={6} position={[6, -0.5, -5]} rotation={[0, 0, 0]} url="/assets/kcl-box.glb" />
            <Model key="Kcl-copper-sheets-1" scale={0.3} position={[15, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-1.glb" />
            <Model key="Kcl-copper-sheets-2" scale={0.3} position={[18, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-2.glb" />
            <Model key="Kcl-copper-sheets-3" scale={0.3} position={[22, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-3.glb" />
            <Model key="Robotic-arm-animation" scale={0.3} position={[-18.5, 2, -7.8]} rotation={[0, -Math.PI / 4, 0]} url="/assets/robotic-arm-compressed.glb" />
            <Model key="props" scale={3.5} position={[20, -0.5, -14]} rotation={[0, 0, 0]} url="/assets/kcl-props-robotic-arm.glb" />
            <Model key="Robotic-arm-bench" scale={0.15} position={[-2, -0.35, -8]} rotation={[0, 0, 0]} url="/assets/robotic-arm-bench.glb" />
            <Model key="KCL-staircase" scale={2.5} position={[-30, -0.5, -14]} rotation={[0, Math.PI / 2, 0]} url="/assets/kcl-staircase-robots.glb" />
            <Environment
                files="/assets/kcl-env-compressed.hdr"
                background
                ground={{
                    height: 30,
                    radius: 150,
                    scale: 180
                }}
            />
            <group position={[0, 0.9, -2]} rotation={[0, 0, 0]}>
                <Root>
                    <Container
                        padding={10}
                        borderWidth={2}
                        borderColor="white"
                        borderRadius={8}
                        backgroundColor="lightgrey"
                    >
                        <Container flexDirection="column" alignItems="flex-start">
                            <Text fontSize={12} fontWeight="bold">
                                The robotic arm picks up the copper sheets from the conveyor belt and makes stacks
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                then a Forklift vehicle picks up these stacks of copper sheets
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                and places it in the designated area.
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                The team prepares it for dispatch
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                You can see the stacks arranged on your right
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                                These are transported to CCR or either RR Kabel
                            </Text>
                        </Container>
                    </Container>
                </Root>
                <group position={[8, 0.9, 4]} rotation={[0, -Math.PI / 2, 0]}>
                    <Root>
                        <Container padding={10}
                            borderWidth={2}
                            borderColor="white"
                            borderRadius={8}
                            backgroundColor="lightgrey">
                            <Text fontSize={12} fontWeight="bold">
                                The sheets are transported to RR Kabel and others
                            </Text>
                        </Container>
                    </Root>
                </group>
                <group position={[10, 1.2, -6]} rotation={[0, -Math.PI / 4, 0]}>
                    <Root>
                        <Container padding={10}
                            borderWidth={2}
                            borderColor="white"
                            borderRadius={8}
                            backgroundColor="lightgrey">
                            <Text fontSize={12} fontWeight="bold">
                                Copper cathodes are sent to CCR from here
                            </Text>
                        </Container>
                    </Root>
                </group>
            </group>
            <group position={[0, 1.4, -2]}>
                <Root>
                    <Container>
                        <Button variant="icon" padding={4} onClick={handleAudio}>
                            <Volume2 width={75} height={75} color={"white"} />
                        </Button>
                    </Container>
                </Root>
            </group>
        </>
    );
}