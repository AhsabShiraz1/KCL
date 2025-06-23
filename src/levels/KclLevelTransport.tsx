import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { Image } from "@react-three/drei"
import { DoubleSide } from "three"
export default function KclLevelTransport({ setNotification }: LevelProps) {
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
            <Model key="kcl-shed" scale={6} position={[35, -0.5, -5]} rotation={[0, 0, 0]} url="/assets/kcl-box.glb" />
            <Model key="Kcl-copper-sheets-1" scale={0.3} position={[15, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-1.glb" />
            <Model key="Kcl-copper-sheets-2" scale={0.3} position={[18, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-2.glb" />
            <Model key="Kcl-copper-sheets-3" scale={0.3} position={[22, -0.5, -6]} rotation={[0, 0, 0]} url="/assets/copper-sheets-3.glb" />
            <Model key="Robotic-arm-animation" scale={0.3} position={[-3.5, 2, -7.8]} rotation={[0, -Math.PI / 4, 0]} url="/assets/robotic-arm-compressed.glb" />
            <Model key="Robotic-arm-animation-1" scale={0.3} position={[2.5, 2, -13.8]} rotation={[0, -Math.PI / 4, 0]} url="/assets/robotic-arm-compressed-1.glb" />
            <Model key="props" scale={3.5} position={[20, -0.5, -14]} rotation={[0, 0, 0]} url="/assets/kcl-props-robotic-arm.glb" />
            <Model key="Robotic-arm-bench" scale={0.15} position={[12 , -0.35, -8]} rotation={[0, 0, 0]} url="/assets/robotic-arm-bench.glb" />
            <Model key="control-panel" scale={2} position={[-12, -0.5, -3.4]} rotation={[0, -Math.PI, 0]} url="/assets/control-panel.glb" />
            <Model key="KCL-staircase" scale={3} position={[-24, -0.5, -14]} rotation={[0, Math.PI / 2, 0]} url="/assets/kcl-staircase-robots.glb" />
            <Model key="KCL-dispatch" scale={2.5} position={[45, -0.5, -14]} rotation={[0, Math.PI / 2, 0]} url="/assets/assembly_line.glb" />
            <Model key="KCL-truck-1" scale={0.6} position={[75, -0.5, -5]} rotation={[0, 0, 0]} url="/assets/kcl-truck-1.glb" />
            <Model key="KCL-truck-2" scale={0.6} position={[75, -0.5, -20]} rotation={[0, 0, 0]} url="/assets/kcl-truck-2.glb" />
            {/* <Model key="KCL-props" scale={0.1} position={[0, 0, 0]} rotation={[0, 0, 0]} url="/assets/pallets-props.glb" /> */}
                  <Image url="/assets/kcl-transport-slide-1.png" position={[18, 3, 0]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, -Math.PI / 2, 0]} castShadow receiveShadow side={DoubleSide} />
                  <Image url="/assets/kcl-transport-slide-2.png" position={[-4, 3, -3]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 6, 0]} castShadow receiveShadow side={DoubleSide} />
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
                            Refined copper cathodes are sent to the Continuous Casting and Rolling (CCR) unit to be melted, cast, and drawn into high-quality rods and wires.
                            </Text>
                            <Text fontSize={12} fontWeight="bold">
                            By-products like precious metals, sulfur-rich gases, and copper slag are recovered and reused across industries, maximizing efficiency and minimizing waste.
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