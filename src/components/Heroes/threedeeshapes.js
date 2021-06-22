import React, { useRef, useState, useEffect, useCallback } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import styled from 'styled-components'
import { useSpring, a } from '@react-spring/three'
import { animated as a2 } from 'react-spring'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
const SubdivisionModifier = require('three-subdivision-modifier');
 
 
const CanvasWrapper = styled(a2.div)`
  width: 100vw;
  height: 100vh;
  position: absolute;
`

const isBrowser = typeof window !== 'undefined'
const INITIAL_ZOOM = isBrowser ? (window.innerWidth / window.innerHeight) * 6 : 6
export const GLOSSY = 0.2
export const MATTE = 0.8

const SLIDER = { min: -50, max: 50, step: 1 }

const Box = ({ mouse }) => {
  const [hovered, setHovered] = useState(false)
  const [active, setActive] = useState(false)
  const meshRef = useRef()

  const props = useSpring({
    scale: active ? [1.5, 1.5, 1.5] : [1, 1, 1],
    color: hovered ? 'hotpink' : 'gray',
  })

  useFrame(() => {
    if (meshRef !== undefined) {
      const zRotation = (mouse.current[0] - 0.5) * 2 * ((mouse.current[1] - 0.5) * 2)
      meshRef.current.rotation.y = (mouse.current[0] - 0.5) * 0.25
      meshRef.current.rotation.z = zRotation * 0.05
      meshRef.current.rotation.x = (mouse.current[1] - 0.5) * 0.25
    }
  })

  return (
    <a.mesh
      ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={props.scale}
      castShadow>
      <boxBufferGeometry attach="geometry" args={[40, 40, 40]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  )
}

const PURPLE = '#5232D0'
const BLUE = '#3358B8'
const PINK = '#8343B2'
const WEWAK = '#DB7682'

function makeRoundedRect(ctx, x, y, width, height, radius) {
  const properX = x - width / 2
  const properY = y - height / 2
  ctx.moveTo(properX, properY + radius)
  ctx.lineTo(properX, properY + height - radius)
  ctx.quadraticCurveTo(properX, properY + height, properX + radius, properY + height)
  ctx.lineTo(properX + width - radius, properY + height)
  ctx.quadraticCurveTo(properX + width, properY + height, properX + width, properY + height - radius)
  ctx.lineTo(properX + width, properY + radius)
  ctx.quadraticCurveTo(properX + width, properY, properX + width - radius, properY)
  ctx.lineTo(properX + radius, properY)
  ctx.quadraticCurveTo(properX, properY, properX, properY + radius)
}

const roundedRect = new THREE.Shape()
makeRoundedRect(roundedRect, 0, 0, 10, 10 * 5, 1)

const extrudeSettings = {
  steps: 6,
  depth: 6,
  bevelEnabled: true,
  bevelThickness: 3,
  bevelSize: 3,
  bevelOffset: 0,
  bevelSegments: 10,
}

const RoundedCircle = ({ geometry, spring, position, scale, rotation, color, newPos, newRot, squish, float }) => {
  const meshRef = useRef()
  const sceneRef = useRef()
  // const [model, setModel] = useState()

  // useEffect(() => {
  //   new GLTFLoader().load('/shape-o.gltf', (loaded) => {
  //     console.log(loaded)
  //     setModel(loaded)
  //   })
  // }, [])

  useFrame((state) => {
    if (meshRef && sceneRef) {
      const time = state.clock.getElapsedTime()
      const dRot = { x: (rotation.x - newRot.x) * -1, y: (rotation.y - newRot.y) * -1, z: (rotation.z - newRot.z) * -1 }
      const dPos = { x: (position[0] - newPos.x) * -1, y: (position[1] - newPos.y) * -1 }
      const sp = spring.getValue()

      const nScale = sp < 0.92 ? 1 - sp * 0.3 : 0.7 - (sp - 0.92) * 20 * 0.3
      const scaleX = 1 - sp * 0.3
      sceneRef.current.scale.x = squish.x ? nScale : scaleX
      sceneRef.current.scale.y = squish.y ? nScale : scaleX
      sceneRef.current.scale.z = squish.z ? nScale : scaleX

      sceneRef.current.position.x = position[0] + sp * dPos.x + Math.sin(time * float.x) * (1 - sp)
      sceneRef.current.position.y = position[1] + sp * dPos.y + Math.sin(time * float.y) * (1 - sp)

      sceneRef.current.rotation.x = rotation.x + sp * dRot.x
      sceneRef.current.rotation.y = rotation.y + sp * dRot.y
      sceneRef.current.rotation.z = rotation.z + sp * dRot.z
    }
  })

  return geometry ? (
    <a.scene ref={sceneRef}>
      <mesh
        ref={meshRef}
        renderGl
        // castShadow
        geometry={geometry}
        scale={scale}>
        <meshStandardMaterial attach="material" flatShading={false} color={color} roughness={0.8} metalness={0} />
      </mesh>
    </a.scene>
  ) : null
}

const RoundedRectangle = ({ spring, position, scale, rotation, color, newPos, newRot, float }) => {
  const meshRef = useRef()
  const sceneRef = useRef()
  const geoRef = useRef()

  useFrame((state) => {
    if (meshRef && sceneRef) {
      const time = state.clock.getElapsedTime()
      const dRot = { x: (rotation.x - newRot.x) * -1, y: (rotation.y - newRot.y) * -1, z: (rotation.z - newRot.z) * -1 }
      const dPos = { x: (position[0] - newPos.x) * -1, y: (position[1] - newPos.y) * -1 }
      const sp = spring.getValue()
      geoRef.current.computeVertexNormals()

      const nScale = sp < 0.92 ? 1 - sp * 0.3 : 0.7 - (sp - 0.92) * 12 * 0.3
      const scaleY = 1 - sp * 0.3
      sceneRef.current.scale.x = nScale * scale[0]
      sceneRef.current.scale.y = scaleY * scale[1]
      sceneRef.current.scale.z = nScale * scale[2]

      sceneRef.current.position.x = position[0] + sp * dPos.x + Math.sin(time * float.x) * (1 - sp)
      sceneRef.current.position.y = position[1] + sp * dPos.y + Math.sin(time * float.y) * (1 - sp)

      sceneRef.current.rotation.x = rotation.x + sp * dRot.x
      sceneRef.current.rotation.y = rotation.y + sp * dRot.y
      sceneRef.current.rotation.z = rotation.z + sp * dRot.z
    }
  })

  return (
    <scene ref={sceneRef}>
      <mesh
        ref={meshRef}
        renderGl
        //  castShadow
        scale={scale}>
        <extrudeGeometry attach="geometry" ref={geoRef} args={[roundedRect, extrudeSettings]}></extrudeGeometry>
        <meshStandardMaterial attach="material" flatShading={false} color={color} roughness={0.8} metalness={0} />
      </mesh>
    </scene>
  )
}

export default ({ spring }) => {
  const [models, setModels] = useState()

  useEffect(() => {
    new GLTFLoader().load('/allShapes.gltf', (loaded) => {
      const modifier = new SubdivisionModifier(1)
      if (loaded?.scene?.children.length === 4) {
        setModels({
          hook: modifier.modify(loaded.scene.children[0].geometry),
          rect: loaded.scene.children[1].geometry,
          donut: loaded.scene.children[2].geometry,
          c: modifier.modify(loaded.scene.children[3].geometry),
        })
      }
    })
  }, [])

  // const [sliders, setSliders] = useState({ x: 0, y: 0, z: 0 })

  // const handleXChange = (e) => {
  //   e.persist()
  //   setSliders({ ...sliders, x: parseFloat(e.target.value) })
  // }
  // const handleYChange = (e) => {
  //   e.persist()
  //   setSliders({ ...sliders, y: parseFloat(e.target.value) })
  // }
  // const handleZChange = (e) => {
  //   e.persist()
  //   setSliders({ ...sliders, z: parseFloat(e.target.value) })
  // }

  // console.log(models)

  return (
    <CanvasWrapper
      style={{
        willChange: 'opacity',
        pointerEvents: 'none',
        opacity: spring.interpolate((o) => (o < 0.97 ? 1 : 1 - (o - 0.97) * 33.33 * 1)),
      }}>
      <>
        {/* <div
          style={{
            zIndex: '100',
            position: 'fixed',
            top: '5rem',
            left: 0,
            padding: '0.5rem',
            background: '#333333aa',
          }}>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
            <label for="inputX" style={{ marginRight: '0.5rem', color: 'white' }}>
              x
            </label>
            <input
              style={{ width: '200px' }}
              type="range"
              value={sliders.x}
              id="inputX"
              onChange={handleXChange}
              min={SLIDER.min}
              max={SLIDER.max}
              step={SLIDER.step}
            />
            <p style={{ marginLeft: '0.5rem', color: 'white' }}>{sliders.x}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
            <label for="inputY" style={{ marginRight: '0.5rem', color: 'white' }}>
              y
            </label>
            <input
              style={{ width: '200px' }}
              type="range"
              value={sliders.y}
              id="inputY"
              onChange={handleYChange}
              min={SLIDER.min}
              max={SLIDER.max}
              step={SLIDER.step}
            />
            <p style={{ marginLeft: '0.5rem', color: 'white' }}>{sliders.y}</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0.5rem' }}>
            <label for="inputZ" style={{ marginRight: '0.5rem', color: 'white' }}>
              z
            </label>
            <input
              style={{ width: '200px' }}
              type="range"
              value={sliders.z}
              id="inputZ"
              onChange={handleZChange}
              min={SLIDER.min}
              max={SLIDER.max}
              step={SLIDER.step}
            />
            <p style={{ marginLeft: '0.5rem', color: 'white' }}>{sliders.z}</p>
          </div>
          <code style={{ padding: '0.5rem', fontSize: '1.25rem', color: 'white', fontFamily: 'monospace', userSelect: 'all' }}>
            {`x: ${sliders.x}, y: ${sliders.y}, z: ${sliders.z}`}
          </code>
        </div> */}
      </>
      <>
        {isBrowser && (
          <Canvas
            gl={{ antialias: true }}
            resize={{ scroll: true, debounce: { scroll: 50, resize: 0 } }}
            camera={{
              position: [0, 0, 326],
              near: 0.01,
              far: 10000000000,
              zoom: INITIAL_ZOOM,
              fov: 100,
            }}
            // shadowMap
            onCreated={({ gl }) => {
              // gl.shadowMap.enabled = true
              // gl.shadowMap.type = THREE.PCFShadowMap
              gl.setPixelRatio(window.devicePixelRatio)
            }}>
            <ambientLight intensity={0.9} />
            <directionalLight color={0xeeeeff} intensity={0.75} />
            <pointLight
              intensity={0.75}
              position={[0, 50, 250]}
              // castShadow
              // shadow-mapSize-width={2048}
              // shadow-mapSize-height={2048}
              // shadow-radius={7}
              // shadow-bias={0.0005}
              color={0xeeeeff}
            />
            <pointLight intensity={0.5} position={[0, 30, -200]} />
            {models && (
              <>
                <RoundedRectangle
                  spring={spring}
                  scale={[0.7, 0.7, 0.7]}
                  position={[46, 12, -40]}
                  rotation={{ x: 0, y: 0.6, z: 0.3 }}
                  float={{ x: -0.7, y: 1.1 }}
                  newPos={{ x: 40.6, y: -15 }}
                  newRot={{ x: 1.57, y: 0, z: 1.57 }}
                  color={PURPLE}
                />
                <RoundedRectangle
                  spring={spring}
                  scale={[0.7, 0.7, 0.7]}
                  position={[-15, -35, 0]}
                  rotation={{ x: 0.9, y: 0.2, z: -1 }}
                  float={{ x: 0.5, y: 1.3 }}
                  newPos={{ x: 2.7, y: -18 }}
                  newRot={{ x: 1.6, y: 0, z: -1.6 }}
                  squish={{ x: false, y: false, z: true }}
                  color={BLUE}
                />
                <RoundedCircle
                  geometry={models.c}
                  spring={spring}
                  scale={[3, 3, 3]}
                  position={[-46, 7, 0]}
                  rotation={{ x: -0.8, y: 0.6, z: 0 }}
                  float={{ x: -0.8, y: 1.3 }}
                  newPos={{ x: -16.5, y: -15.8, z: 0 }}
                  newRot={{ x: 1.6, y: 0, z: -1.6 }}
                  squish={{ x: true, y: false, z: true }}
                  color={PURPLE}
                />
                <RoundedCircle
                  geometry={models.donut}
                  spring={spring}
                  scale={[3, 3, 3]}
                  position={[45, -18, 0]}
                  rotation={{ x: 0.5, y: -0.4, z: 0 }}
                  float={{ x: 0.4, y: -0.8 }}
                  newPos={{ x: 21.6, y: -21.7, z: 0 }}
                  newRot={{ x: 1.53, y: 0, z: 0 }}
                  squish={{ x: false, y: true, z: true }}
                  color={PINK}
                />
              </>
            )}
          </Canvas>
        )}
      </>
    </CanvasWrapper>
  )
}
