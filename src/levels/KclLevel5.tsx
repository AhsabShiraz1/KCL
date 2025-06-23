import { LevelProps } from '../interfaces';
import { useEffect, useRef } from "react";
import Model from "../Model";
import { Environment } from "@react-three/drei"
import { Button } from "../components/apfel/button"
import { Root, Text, Container } from "@react-three/uikit"
import * as THREE from "three";
import { Volume2 } from "@react-three/uikit-lucide"
import { PositionalAudio } from "@react-three/drei"
import { Image } from "@react-three/drei"
import { DoubleSide } from "three"
export default function KclLevel5({ setNotification }: LevelProps) {
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
      <Model key="electrolysis-machine" scale={0.25} position={[0, -0.5, -10]} rotation={[0, 0, 0]} url="/assets/Electrolysis-kcl.glb" />
      <Environment
        files="/assets/kcl-env-compressed.hdr"
        background
        ground={{
          height: 30,
          radius: 150,
          scale: 180
        }}
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
              In electrolytic cells, copper anodes dissolve and pure copper ions deposit onto cathode starter plates, 
              </Text>
              <Text fontSize={10} fontWeight="medium">
              gradually refining the metal. After several days, 99.99% pure copper cathodes are removed from the tankhouse.
              </Text>
            </Container>
          </Container>
        </Root>
      </group>
      <PositionalAudio 
        ref={soundRef}
        url="/assets/kcl-electrolysis.mp3"
        distance={2}
        loop={false}
        autoplay={false}
        onEnded={() => soundRef.current?.stop()}
      />
      <Image url="/assets/electrolysis.png" position={[4, 2.5, -5]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, -Math.PI / 6, 0]} castShadow receiveShadow side={DoubleSide} />
      <Image url="/assets/electrolysis-ppt.png" position={[-4, 2.5, -5]} toneMapped={false} scale={[3.25, 1.8]} rotation={[0, Math.PI / 6, 0]} castShadow receiveShadow side={DoubleSide} />
      <group position={[0, 1.4, -2]}>
        <Root>
          <Container>
            <Button variant="icon" padding={4} onClick={handleAudio}>
              <Volume2 width={75} height={75} color={"white"} />
            </Button>
          </Container>
        </Root>
      </group>
      <group position={[4, 3.6, -5]} rotation={[0, -Math.PI / 6, 0]} >
        <Root>
          <Container flexDirection={"column"} justifyContent="center" alignItems="center">
            <Text fontWeight="bold" fontSize={25} letterSpacing={0} color="#FFFFFF">
              Electrolysis of sheets
            </Text>
          </Container>
        </Root>
      </group>
    </>
  );
}