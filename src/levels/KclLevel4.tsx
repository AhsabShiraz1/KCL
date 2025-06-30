import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import { Image } from "@react-three/drei";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"
import VideoPlayer from '../VideoPlayer';
export default function KclLevel4({ setNotification }: LevelProps) {
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
      <Model key="factory" scale={1} position={[0, -2.4, -15]} rotation={[0, 0, 0]} url="/assets/factory-crucible.glb" />
      <Model key="Electric-arc-furnace-grey" scale={8} position={[-10, -9 , -5]} rotation={[0, -Math.PI / 2, 0]} url="/assets/Electric-arc-furnace-grey.glb" />
      <Model key="control-panel" scale={1} position={[-6, -0.5, -5]} rotation={[0, -Math.PI, 0]} url="/assets/control-panel.glb" />
      <Model key="kcl-shed" scale={6} position={[6, -0.5, -5]} rotation={[0, 0, 0]} url="/assets/kcl-box.glb" />
      <Model key="kcl-tank" scale={1} position={[6, -0.5, -3]} rotation={[0, 0, 0]} url="/assets/kcl-tank.glb" />
      <Environment
        files="/assets/kcl-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 150,
          scale: 180
        }}
      />
      <Image
        url="/assets/kcl-site-2.png"
        position={[-2.8, 1, -1]}
        toneMapped={false}
        scale={[2, 1.1]}
        rotation={[0, Math.PI / 4, 0]}
        castShadow
        receiveShadow
      />
      <group position={[0, 0.8, -3]} rotation={[0, 0, 0]}>
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
              The molten copper matte is sent to a converter furnace
              </Text>
              <Text fontSize={10} fontWeight="medium">
              where oxygen removes sulfur and iron to produce blister copper with around 98 to 99% purity. 
              </Text>
              <Text fontSize={10} fontWeight="medium">
              This blister copper is then cast into anode sheets
              </Text>
              <Text fontSize={10} fontWeight="medium">
              which serve as the starting material for electrolytic refining
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio
        ref={soundRef}
        url="/assets/kcl-smelter-ops.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <group position={[0, 1.4, -2]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <VideoPlayer scale={[0.3, 0.3, 0.3]} src="/assets/kcl-anode-loading.mp4" position={[2, 2.5, -3]} rotation={[0,-Math.PI / 6, 0]}></VideoPlayer>
    </>
  );
}