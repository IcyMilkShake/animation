import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';  // Import Draggable plugin
import {ScrollTrigger} from "gsap/ScrollTrigger"
import {TextPlugin} from 'gsap/TextPlugin';

// Register the GSAP Draggable plugin
gsap.registerPlugin(Draggable);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
let lastInteractionTime = 0;
let lastFrameTime = 0;
const MAX_DELTA_TIME = 0.1; // Cap the maximum time between frames
// Initialize time variable globally
let time = 0;
let isIntroRunning = true;
let hasExploded = false;
let current_page = "home"
let previous_page = current_page
function isMobileStartUp() {
  const ua = navigator.userAgent.toLowerCase();
  return /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(ua);
}


if (isMobileStartUp()) {
  const warning = document.getElementById("mobile-warning");
  warning.style.display = "flex";

  document.getElementById("acknowledge-btn").addEventListener("click", () => {
    warning.style.display = "none";
  });
}



function createIntroScreen() {
  
  // Create canvas for intro
  const canvas = document.createElement('canvas');
  canvas.classList.add('intro-canvas');
  document.getElementById('intro-screen').appendChild(canvas);

  // Setup Three.js scene
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    antialias: true
  });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  
  // Set a gradient background
  scene.background = new THREE.Color('#000');
  
  // Create shapes array to store all shapes
  const shapes = [];
  
  // Add orbit controls for camera
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  
  // Setup raycaster for mouse interaction
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  
  let selectedShape = null;
  let isDragging = false;
  const dragPlane = new THREE.Plane();
  const dragOffset = new THREE.Vector3();
  
  // Shape creation functions
  function createCube(size, color, x, y, z) {
    const geometry = new THREE.BoxGeometry(size, size, size);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7
    });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x, y, z);
    scene.add(cube);
    return cube;
  }
  
  function createSphere(radius, color, x, y, z) {
    const geometry = new THREE.SphereGeometry(radius, 24, 24);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(x, y, z);
    scene.add(sphere);
    return sphere;
  }
  
  function createCone(radius, height, color, x, y, z) {
    const geometry = new THREE.ConeGeometry(radius, height, 16);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7
    });
    const cone = new THREE.Mesh(geometry, material);
    cone.position.set(x, y, z);
    scene.add(cone);
    return cone;
  }
  
  function createTorus(radius, tube, color, x, y, z) {
    const geometry = new THREE.TorusGeometry(radius, tube, 16, 32);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7
    });
    const torus = new THREE.Mesh(geometry, material);
    torus.position.set(x, y, z);
    scene.add(torus);
    return torus;
  }
  
  function createOctahedron(radius, color, x, y, z) {
    const geometry = new THREE.OctahedronGeometry(radius);
    const material = new THREE.MeshBasicMaterial({
      color: color,
      transparent: true,
      opacity: 0.7
    });
    const octahedron = new THREE.Mesh(geometry, material);
    octahedron.position.set(x, y, z);
    scene.add(octahedron);
    return octahedron;
  }
  
  // Color palette
  const colors = [
    0xf94144, // Red
    0xf3722c, // Orange
    0xf8961e, // Yellow-orange
    0xf9c74f, // Yellow
    0x90be6d, // Green
    0x43aa8b, // Teal
    0x577590, // Blue
    0x277da1  // Dark blue
  ];
  
  // Create shapes and position them in a spiral pattern
  const totalShapes = 160;
  const spiralRadius = 80;
  
  for (let i = 0; i < totalShapes; i++) {
    // Calculate spiral position
    const radius = spiralRadius - (i * spiralRadius / totalShapes);
    const x = Math.cos(i) * radius;
    const y = Math.sin(i) * radius;
    const z = -100 + i * 1.5; // Start far away and get closer
    
    // Randomly choose a shape type
    const shapeType = Math.floor(Math.random() * 5);
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = 1 + Math.random() * 2;
    
    let shape;
    switch (shapeType) {
      case 0:
        shape = createCube(size, color, x, y, z);
        break;
      case 1:
        shape = createSphere(size, color, x, y, z);
        break;
      case 2:
        shape = createCone(size, size * 2, color, x, y, z);
        break;
      case 3:
        shape = createTorus(size, size * 0.3, color, x, y, z);
        break;
      case 4:
        shape = createOctahedron(size, color, x, y, z);
        break;
    }
    
    // Add initial rotation
    shape.rotation.x = Math.random() * Math.PI * 2;
    shape.rotation.y = Math.random() * Math.PI * 2;
    shape.rotation.z = Math.random() * Math.PI * 2;
    
    // Make it draggable by adding userData properties
    shape.userData.isDraggable = true;
    
    // Store shape with properties
    shapes.push({
      mesh: shape,
      initialX: x,
      initialY: y,
      initialZ: z,
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.03,
        y: (Math.random() - 0.5) * 0.03,
        z: (Math.random() - 0.5) * 0.03
      },
      moveSpeed: Math.random(),
      // Add explosion properties
      explosionDirection: new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize(),
      explosionSpeed: 0.75 + Math.random(),
      isExploded: false
    });
  }
  
  // Add a subtle ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Set camera position
  camera.position.z = 30;
  
  // Text elements with GSAP animations
  const titleElement = document.querySelector('.intro-title');
  
  gsap.to(titleElement, {
    opacity: 1,
    duration: 1.5,
    delay: 1,
    ease: "power2.out"
  });
  
  
  // Animation variables
  let introTime = 0; // Local time variable for the intro animation
  let isSpiralingIn = true;
  let introComplete = false;
  
  // Add mouse event listeners for dragging
  function onMouseDown(event) {
    // Calculate mouse position in normalized device coordinates
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    lastInteractionTime = performance.now() /1000
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Check for intersections with draggable objects
    const intersects = raycaster.intersectObjects(scene.children);
    
    if (intersects.length > 0) {
      // Find the first draggable object
      for (let i = 0; i < intersects.length; i++) {
        if (intersects[i].object.userData.isDraggable) {
          // Disable controls while dragging
          controls.enabled = false;
          
          // Set the selected object and enable dragging
          selectedShape = intersects[i].object;
          isDragging = true;
          
          // Set up the drag plane perpendicular to the camera
          dragPlane.setFromNormalAndCoplanarPoint(
            camera.getWorldDirection(dragPlane.normal).negate(),
            selectedShape.position
          );
          
          // Calculate the offset so the object doesn't jump to the mouse position
          const intersection = new THREE.Vector3();
          raycaster.ray.intersectPlane(dragPlane, intersection);
          dragOffset.copy(selectedShape.position).sub(intersection);
          
          // Change material to indicate selection
          selectedShape.userData.originalColor = selectedShape.material.color.clone();
          selectedShape.material.color.set(0xffff00); // Yellow highlight
          selectedShape.material.opacity = 0.9;
          
          break;
        }
      }
    }
  }
  
function onMouseMove(event) {
  if (isDragging && selectedShape) {
    // Update mouse coordinates
    
    const rect = renderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    // Update the raycaster
    raycaster.setFromCamera(mouse, camera);
    
    // Find the intersection with the drag plane
    const intersection = new THREE.Vector3();
    if (raycaster.ray.intersectPlane(dragPlane, intersection)) {
      // Move the object to the intersection point plus the offset
      selectedShape.position.copy(intersection.add(dragOffset));
    }
  }
}
  
function onMouseUp() {
  if (isDragging && selectedShape) {
    // Reset material to original color
    if (selectedShape.userData.originalColor) {
      selectedShape.material.color.copy(selectedShape.userData.originalColor);
    }
    
    // Re-enable controls
    controls.enabled = true;
    isDragging = false;
    selectedShape = null;
  }
}
  
  // Add event listeners
renderer.domElement.addEventListener('mousedown', onMouseDown);
window.addEventListener('mousemove', onMouseMove);
window.addEventListener('mouseup', onMouseUp);

// Main animation loop
function animate() {
  introTime += 0.01;
  requestAnimationFrame(animate);
  
  // Update controls
  controls.update();
  
  // Handle pre-explosion animations
  if (isSpiralingIn && !hasExploded) {
    // Adjust sucking speed to make it faster
    const suckSpeed = 0.035; // Increase this for faster sucking
    
    // Animate shapes
    shapes.forEach((shape) => {
      // Rotate each shape
      shape.mesh.rotation.x += shape.rotationSpeed.x;
      shape.mesh.rotation.y += shape.rotationSpeed.y;
      shape.mesh.rotation.z += shape.rotationSpeed.z;
      
      // Move shapes toward center faster
      const targetX = 0;
      const targetY = 0;
      const targetZ = 0;
      
      // Quick sucking motion toward center
      shape.mesh.position.x += (targetX - shape.mesh.position.x) * suckSpeed;
      shape.mesh.position.y += (targetY - shape.mesh.position.y) * suckSpeed;
      shape.mesh.position.z += (targetZ - shape.mesh.position.z) * suckSpeed;
      
      // Scale down as they approach center
      const distanceToCenter = shape.mesh.position.distanceTo(new THREE.Vector3(0, 0, 0));
      const scale = Math.max(0.1, 1 - (1 - distanceToCenter / 100) * 0.8);
      shape.mesh.scale.set(scale, scale, scale);
      
      // Make shapes more transparent as they approach center
      shape.mesh.material.opacity = Math.max(0.3, 0.7 - (1 - distanceToCenter / 100) * 3);
    });
    
    // Trigger explosion when all shapes are near center or after a time threshold
  }else if (hasExploded && !introComplete) {
    const minExplosionSpeed = 0.4;
    const speedDecay = 0.99;
    const additionalForce = 0.01;
  
    // Reset explosion if user clicks after a long idle time
    if (introTime > 20 && isDragging) {  // Add a time threshold
      // Reset explosion properties for all shapes
      shapes.forEach(shape => {
        // Regenerate explosion direction and speed
        shape.explosionDirection = new THREE.Vector3(
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2,
          (Math.random() - 0.5) * 2
        ).normalize();
        shape.explosionSpeed = 0.75 + Math.random(); // Reset to initial explosion speed
        
        // Optionally bring shapes closer to center before re-exploding
        shape.mesh.position.set(
          shape.mesh.position.x * 0.5,
          shape.mesh.position.y * 0.5,
          shape.mesh.position.z * 0.5
        );
      });
    }
  
    // Animate the exploding shapes
    shapes.forEach(shape => {
      if (isDragging && selectedShape === shape.mesh) return;
  
      // Rest of your existing explosion code...
      shape.mesh.position.x += shape.explosionDirection.x * shape.explosionSpeed;
      shape.mesh.position.y += shape.explosionDirection.y * shape.explosionSpeed;
      shape.mesh.position.z += shape.explosionDirection.z * shape.explosionSpeed;
  
      shape.explosionDirection.y -= 0.01;
      shape.explosionSpeed = Math.max(shape.explosionSpeed * speedDecay, minExplosionSpeed);
      shape.explosionSpeed += additionalForce;
  
      shape.mesh.rotation.x += shape.rotationSpeed.x * 2;
      shape.mesh.rotation.y += shape.rotationSpeed.y * 2;
      shape.mesh.rotation.z += shape.rotationSpeed.z * 2;
  
      if (shape.mesh.material.opacity < 0.7) {
        shape.mesh.material.opacity += 0.02;
      }
  
      if (shape.mesh.scale.x < 1) {
        const growFactor = 1.02;
        shape.mesh.scale.x *= growFactor;
        shape.mesh.scale.y *= growFactor;
        shape.mesh.scale.z *= growFactor;
      }
    });
  
    if (introTime > 300) {
      introComplete = true;
    }
  }
  // Handle post-explosion state (interactive mode)
  else if (introComplete) {
    // Keep shapes slowly rotating when not being dragged
    shapes.forEach(shape => {
      if (!isDragging || selectedShape !== shape.mesh) {
        // Gentle rotation for idle shapes
        shape.mesh.rotation.x += shape.rotationSpeed.x * 0.5;
        shape.mesh.rotation.y += shape.rotationSpeed.y * 0.5;
        shape.mesh.rotation.z += shape.rotationSpeed.z * 0.5;
        
        // Apply a very slight gravity
        shape.mesh.position.y -= 0.01;
        
        // Add slight movement for a more dynamic scene
        shape.mesh.position.x += Math.sin(introTime + shape.initialX) * 0.01;
        shape.mesh.position.z += Math.cos(introTime + shape.initialZ) * 0.01;
      }
    });
  }
  
  renderer.render(scene, camera);
}
window.addEventListener('load', () => {
  setTimeout(animate, 1500);
})
  // Handle window resize
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onWindowResize);
}

function triggerExplosion() {
  hasExploded = true;
}
// Handle click to proceed to main site
// Update the click handler for intro screen with better timing control
document.getElementById('intro-screen').addEventListener('click', () => {
  // First trigger the explosion animation
  triggerExplosion();
  // Wait for the explosion animation to progress significantly before transitioning
  setTimeout(() => {
    showTextTransition()
    // Fade out the intro screen
    gsap.to('#intro-screen', {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        // Important: Make sure the intro is completely hidden BEFORE showing anything else
        document.getElementById('intro-screen').style.display = 'none';
        
        // Make sure home page is still fully hidden
        document.getElementById('bg').style.opacity = '0';
      }
    });
  }, 1500); // Keep the 1.5s wait for the explosion to look good
});

function showTextTransition() {
  // Create black overlay
  const textScreen = document.createElement('div');
  textScreen.id = 'text-transition';
  textScreen.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    opacity: 0;
  `;

  // Create glowing text container
  const glowText = document.createElement('div');
  glowText.className = 'glow-text';
  glowText.textContent = '';
  glowText.style.cssText = `
    color: white;
    font-weight: bold;
    opacity: 0;
    text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff;
    transition: opacity 0.8s ease;
  `;

  textScreen.appendChild(glowText);
  document.body.appendChild(textScreen);

  // Responsive font sizes
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
  .glow-text {
    font-size: 4vw;
    text-shadow: 0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff;
  }
  @media (max-width: 1024px) {
    .glow-text {
      font-size: 6vw;
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff;
    }
  }
  @media (max-width: 600px) {
    .glow-text {
      font-size: 8vw;
      text-shadow: 0 0 12px #fff, 0 0 24px #fff, 0 0 36px #fff;
    }
  }
`;

  document.head.appendChild(styleTag);

  // Scramble effect
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise(resolve => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="dud">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  // Start transition in
  gsap.to(textScreen, { opacity: 1, duration: 0.5 });

  setTimeout(() => {
    gsap.to(glowText, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        const fx = new TextScramble(glowText);
        fx.setText('Hello World').then(() => {
          setTimeout(() => {
            // Reverse scramble to empty string before fading out
            const reverseFx = new TextScramble(glowText);
            reverseFx.setText('').then(() => {
              gsap.to(glowText, {
                opacity: 0,
                duration: 0.8,
                ease: "power2.inOut",
                onComplete: () => {
                  gsap.to(textScreen, {
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                    onComplete: () => {
                      textScreen.remove();
                      styleTag.remove();

                      gsap.to('#bg', {
                        opacity: 1,
                        duration: 1,
                        ease: "power2.inOut"
                      });

                      if (typeof createNavMenu === 'function')   createNavMenu();
                      if (typeof goToSection === 'function') goToSection(0);
                      if (typeof animate === 'function' && animate !== window.animate) animate();
                      const navMenu = document.querySelector('.nav-menu');
                        navMenu.addEventListener('wheel', (event) => {
                          event.preventDefault();
                        }, { passive: false });
                      
                      // Enable interaction after intro is complete
                      isIntroRunning = false;
                    }
                  });
                }
              });
            });
          }, 1500); // Hold text before exit scramble
        });
      }
    });
  }, 400);
}


const style = document.createElement('style');
style.textContent = `
  .glow-text {
    font-family: 'Arial', sans-serif;
    letter-spacing: 0.05em;
  }
  .dud {
    color: #fff !important;
    text-shadow: 0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff !important;
  }
`;
document.head.appendChild(style);


// Call this function when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Hide main page content initially
  document.getElementById('bg').style.opacity = '0';
  
  // Create and start intro
  createIntroScreen();
});
// Create scene, camera, and renderer
const scene = new THREE.Scene();
const planetScene = new THREE.Scene(); // Scene A — for planets only
const planetambientLight = new THREE.AmbientLight(0xffffff, 15); // Soft white light, 60% intensity
planetScene.add(planetambientLight);

const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);

const renderer = new THREE.WebGLRenderer({ 
  canvas: document.querySelector('#bg'),
  antialias: true
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Optional: add OrbitControls for debugging (can be removed later)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enableZoom = false; // Disable zoom for better UX
controls.enablePan = false; // Disable panning

// Create a more detailed donut (torus) with MeshTransmissionMaterial
const donutGeometry = new THREE.TorusGeometry(10, 3, 64, 128); // Increased segments for better refractions

// Create the transmission material
const donutMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x002f9b,      // Dark gray/black tint
  transmission: 0.85,   // Slightly reduced transparency for tinting
  thickness: 3,         // More depth effect
  roughness: 0.1,       // Smooth glass
  metalness: 0,         // No metallic effect
  ior: 1.5,             // Index of refraction (1.5 = glass)
  clearcoat: 1,         // Strong clear coat
  clearcoatRoughness: 0.05, // Glossy surface
  envMapIntensity: 1,   // Boost reflections
  emissive: 0x000000,   // No glow (set to dark if needed)
  emissiveIntensity: 0.0 // No glow effect
});


const donut = new THREE.Mesh(donutGeometry, donutMaterial);
donut.castShadow = true;
donut.receiveShadow = true;
scene.add(donut);

const comets = [];

function createComet() {
  const cometMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,               // Bright white color
    transparent: true,
    opacity: 1,
    blending: THREE.AdditiveBlending, // Makes glow effect stronger
    depthWrite: false,                // Prevents z-fighting glow issues
  });
  

  const comet = new THREE.Mesh(
    new THREE.SphereGeometry(0.2, 6, 6),
    cometMaterial
  );

  const x = (Math.random() - 0.5) * 150;
  const y = (Math.random() - 0.5) * 150;
  const z = 75 - 200;

  comet.position.set(x, y, z);

  // Random forward velocity
  comet.userData.velocity = new THREE.Vector3(
    (Math.random() - 0.5) * 0.3,
    (Math.random() - 0.5) * 0.3,
    2 + Math.random() * 1
  );

  comet.userData.opacity = 1;
  comet.userData.trailPoints = [comet.position.clone()]; // for trail
  comet.userData.trailMesh = null;

  scene.add(comet);
  comets.push(comet);

  setTimeout(() => {
    scene.remove(comet);
    if (comet.userData.trailMesh) scene.remove(comet.userData.trailMesh);
    comets.splice(comets.indexOf(comet), 1);
  }, 5000);
}


// Occasionally spawn comets
setInterval(() => {
  if (Math.random() < 0.3) { // 30% chance every 0.3 seconds
    createComet();
  }
}, 500);

// Update comet positions in your animation loop
function updateComets(delta) {
  comets.forEach((comet) => {
    // Move comet based on velocity
    comet.position.addScaledVector(comet.userData.velocity, delta * 30);

    // Add to trail history (increase the number of trail points to make it longer)
    comet.userData.trailPoints.push(comet.position.clone());
    if (comet.userData.trailPoints.length > 30) { // 3x longer trail
      comet.userData.trailPoints.shift(); // keep it within the new length
    }

    // Fade out comet
    comet.userData.opacity -= delta * 0.2;
    comet.material.opacity = Math.max(0, comet.userData.opacity);

    // Draw trail
    if (comet.userData.trailMesh) {
      scene.remove(comet.userData.trailMesh);
    }

    // Only draw a trail if there are enough points (and the trail is visible)
    if (comet.userData.trailPoints.length >= 3) { // Ensure trail has enough points
      const curve = new THREE.CatmullRomCurve3(comet.userData.trailPoints);
      const geometry = new THREE.TubeGeometry(curve, 16, 0.05, 4, false); // Increase the segments to make the trail smoother
      const trailMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: Math.max(0, comet.userData.opacity * 0.6),
      });

      const trail = new THREE.Mesh(geometry, trailMaterial);
      comet.userData.trailMesh = trail;
      scene.add(trail);
    }
  });
}




// Add scattered particles around the middle (no ring shape)
const middleStarsGeometry = new THREE.BufferGeometry();
const middleStarsCount = 500; // Small number for subtle scattered particles around the middle

const middleStarsPosArray = new Float32Array(middleStarsCount * 3);
const middleStarsColorArray = new Float32Array(middleStarsCount * 3);

function getRandomColor() {
  const colors = [
    new THREE.Color(0x660000), // Brown
    new THREE.Color(0xffffff), // White
    new THREE.Color(0x180045), // Purple
    new THREE.Color(0xe3ffff), // Teal
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Position particles scattered randomly around the middle
for (let i = 0; i < middleStarsCount; i++) {
  const x = (Math.random() - 0.5) * 200; // Random position in X (within range)
  const y = (Math.random() - 0.5) * 200; // Random position in Y (within range)
  const z = (Math.random() - 0.5) * 200; // Random position in Z (within range)

  middleStarsPosArray[i * 3 + 0] = x;
  middleStarsPosArray[i * 3 + 1] = y;
  middleStarsPosArray[i * 3 + 2] = z;

  const color = getRandomColor();
  middleStarsColorArray[i * 3 + 0] = color.r;
  middleStarsColorArray[i * 3 + 1] = color.g;
  middleStarsColorArray[i * 3 + 2] = color.b;
}

middleStarsGeometry.setAttribute('position', new THREE.BufferAttribute(middleStarsPosArray, 3));
middleStarsGeometry.setAttribute('color', new THREE.BufferAttribute(middleStarsColorArray, 3));

const middleStarsMaterial = new THREE.PointsMaterial({
  size: 0.15,  // You can adjust the size of the particles here
  vertexColors: true
});

const middleStarsMesh = new THREE.Points(middleStarsGeometry, middleStarsMaterial);
scene.add(middleStarsMesh);

// Main ring particles setup (previous code you provided for particles in the ring)
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 400;
const radius = 50;

const posArray = new Float32Array(particlesCount * 3);
const colorArray = new Float32Array(particlesCount * 3);

// Position particles in a circular ring
for (let i = 0; i < particlesCount; i++) {
  const angle = (i / particlesCount) * Math.PI * 2;
  
  // Create a spread/band effect instead of a sharp ring
  // Randomly vary the radius by +/- 15 units
  const currentRadius = radius + (Math.random() - 0.5) * 30;
  
  const x = currentRadius * Math.cos(angle);
  const z = currentRadius * Math.sin(angle);
  const y = (Math.random() - 0.5) * 10; // Small vertical variation

  posArray[i * 3 + 0] = x;
  posArray[i * 3 + 1] = y;
  posArray[i * 3 + 2] = z;

  const color = getRandomColor();
  colorArray[i * 3 + 0] = color.r;
  colorArray[i * 3 + 1] = color.g;
  colorArray[i * 3 + 2] = color.b;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

const particlesMaterial = new THREE.PointsMaterial({
  size: 0.2,
  vertexColors: true,
  transparent: true,
  opacity: 0 // Start invisible
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
particlesMesh.visible = false; // Explicitly set visible to false initially
scene.add(particlesMesh);

// Animate both the rings
function animateRing() {
  requestAnimationFrame(animateRing);

  // Rotate the particles in the ring
  particlesMesh.rotation.y += 0.00025; // Adjust speed here
  middleStarsMesh.rotation.y += 0.00025; // Slower rotation for middle scattered particles

  renderer.render(scene, camera);
}
animateRing();



// Enhanced lighting setup
const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

const pointLight1 = new THREE.PointLight(0xc92cf5, 500); // Reduced intensity
pointLight1.position.set(20, 20, 20);
pointLight1.distance = 100; // Add distance parameter
pointLight1.decay = 2; // Physical light decay
pointLight1.castShadow = true;
pointLight1.shadow.mapSize.width = 1024;
pointLight1.shadow.mapSize.height = 1024;
pointLight1.shadow.radius = 2;
pointLight1.shadow.bias = -0.001;
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0x2d2cf5, 400); // Reduced intensity
pointLight2.position.set(-20, 15, -20);
pointLight2.distance = 100;
pointLight2.decay = 2;
pointLight2.castShadow = true;
pointLight2.shadow.mapSize.width = 1024;
pointLight2.shadow.mapSize.height = 1024;
pointLight2.shadow.radius = 2;
pointLight2.shadow.bias = -0.001;
scene.add(pointLight2);

const lightHelper = new THREE.PointLightHelper(pointLight1, 1); // The '1' is the size of the helper
scene.add(lightHelper); // Add the light helper to the scene
const lightHelper2 = new THREE.PointLightHelper(pointLight2, 1); // The '1' is the size of the helper
scene.add(lightHelper2); // Add the light helper to the scene

// Set initial camera position
camera.position.set(0, 0, 30);

const states = {
  home: {
    cameraZ: 200,
    cameraX: 0,
    cameraY: 0,
    cameraRotationY: 0, // Camera looking straight ahead
    donutScale: 0.5,
    donutRotation: { x: 0, y: 0, z: 0 },
    donutPosition: { x: 0, y: 0, z: 0 }
  },
  about: {
    cameraZ: 75,
    cameraX: 0,
    cameraY: 0,
    cameraRotationY: 0, // Camera looking straight ahead
    donutScale: 1,
    donutRotation: { x: Math.PI / 4, y: Math.PI / 4, z: 0 },
    donutPosition: { x: -5, y: 3, z: 0 }
  },
  projects: {
    // We'll use these values to move the camera outside of the 3D space
    cameraZ: 250, // Move camera far back
    cameraY: -200, // Move camera down
    cameraX: 0,
    cameraRotationY: 0,
    donutScale: 0.3, // Make the donut smaller as we move away
    donutRotation: { x: Math.PI / 2, y: Math.PI / 3, z: Math.PI / 6 },
    donutPosition: { x: 0, y: 50, z: 0 } // Move the donut up as we move down
  }
};

// Better easing function for smoother transitions (easeInOutCubic)
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Elastic easing function for more bouncy animations
function easeOutElastic(t) {
  const p = 0.3;
  return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
}

// Tween helper function with easing
function tween(start, end, t, easingFn) {
  return start + (end - start) * easingFn(t);
}

const textureLoader = new THREE.TextureLoader()


function createStarField() {
  const starCount = 1500;
  const geometry = new THREE.SphereGeometry(0.05, 8, 6);
  const starMaterial = new THREE.MeshStandardMaterial({
    emissive: 0xffffff,
    emissiveIntensity: 1,
    metalness: 0.3,
    roughness: 0.2,
    vertexColors: true,
  });

  const instancedMesh = new THREE.InstancedMesh(geometry, starMaterial, starCount);
  const colors = [
    new THREE.Color(0xff0000),
    new THREE.Color(0x0000ff),
    new THREE.Color(0x831aa5),
    new THREE.Color(0xffffff)
  ];

  const dummy = new THREE.Object3D();
  const starProperties = [];

  for (let i = 0; i < starCount; i++) {
    let radius, theta, phi, x, y, z;

    // Only allow stars where z < -10 (in front of camera)
    do {
      radius = 30 + Math.random() * 150;
      theta = Math.random() * Math.PI * 2;
      phi = Math.random() * Math.PI;

      x = radius * Math.sin(phi) * Math.cos(theta);
      y = radius * Math.sin(phi) * Math.sin(theta);
      z = radius * Math.cos(phi);
    } while (z >= -10); // in front only

    dummy.position.set(x, y, z);

    const initialScale = 0.5 + Math.random() * 1.5;
    dummy.scale.set(initialScale, initialScale, initialScale);

    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);

    starProperties.push({
      position: { x, y, z },
      originalScale: initialScale,
      twinkleSpeed: 0.5 + Math.random() * 2,
      twinklePhase: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * colors.length),
      colorTransitionSpeed: 0.2 + Math.random() * 0.8
    });

    instancedMesh.setColorAt(i, colors[starProperties[i].colorIndex]);
  }

  instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(starCount * 3), 3);
  instancedMesh.geometry.setAttribute('instanceColor', instancedMesh.instanceColor);

  scene.add(instancedMesh);
  return { mesh: instancedMesh, properties: starProperties, colors: colors };
}
// Create front & back star fields
createStarField();
// Create stars (this should remain where it is)
const { mesh: stars, positions } = createStarField();

// Create a new animation function to handle the twinkling and color changes
function animateStars(stars, time) {
  const { mesh, properties, colors } = stars;
  const dummy = new THREE.Object3D();
  const color = new THREE.Color();
  
  for (let i = 0; i < properties.length; i++) {
    const star = properties[i];
    
    // Position
    dummy.position.set(star.position.x, star.position.y, star.position.z);
    
    // Twinkling effect - scale pulsing
    const twinkleFactor = 0.3 * Math.sin(time * star.twinkleSpeed + star.twinklePhase) + 0.7;
    const scale = star.originalScale * twinkleFactor;
    dummy.scale.set(scale, scale, scale);
    
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    
    // Color transition
    if (Math.random() < 0.005) { // Occasionally change color
      star.colorIndex = (star.colorIndex + 1) % colors.length;
    }
    
    // Get color and possibly blend between colors for smooth transition
    const currentColor = colors[star.colorIndex];
    color.copy(currentColor);
    
    // Apply brightness variation for twinkling
    const brightness = 0.7 + 0.3 * Math.sin(time * star.twinkleSpeed * 1.3 + star.twinklePhase);
    color.multiplyScalar(brightness);
    
    mesh.setColorAt(i, color);
  }
  
  mesh.instanceMatrix.needsUpdate = true;
  mesh.instanceColor.needsUpdate = true;
}

// Shader-based glow animation
function animateGlow() {
  const currentTime = performance.now() * 0.001;
  
  // Update the uniforms for the shader instead of individual materials
  if (stars.material.userData.glowShader) {
    stars.material.userData.glowShader.uniforms.time.value = currentTime;
    return;
  }
  
  // One-time initialization of the glow shader
  const glowShader = {
    uniforms: {
      time: { value: currentTime }
    },
    vertexShader: `
      varying vec3 vPosition;
      
      void main() {
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform float time;
      varying vec3 vPosition;
      
      void main() {
        vec3 baseColor = gl_FragColor.rgb;
        float glowIntensity = sin(time * 8.0 + vPosition.x * 0.1) * 0.5 + 0.5;
        gl_FragColor.rgb = baseColor * (glowIntensity * 2.0 + 0.5);
      }
    `
  };
  
  stars.material.onBeforeCompile = shader => {
    shader.uniforms.time = glowShader.uniforms.time;
    shader.vertexShader = glowShader.vertexShader;
    shader.fragmentShader = glowShader.fragmentShader;
    stars.material.userData.glowShader = shader;
  };
  
  stars.material.needsUpdate = true;
}

// For browser with less WebGL capabilities, here's a simpler approach with better performance
function simpleAnimateGlow() {
  const currentTime = performance.now() * 0.001;
  
  // Only update the material's emissive intensity - not each individual star
  const glowIntensity = Math.sin(currentTime) * 0.5 + 1.0;
  stars.material.emissiveIntensity = glowIntensity;
}

// Use the appropriate animation function based on complexity
const animationFunction = THREE.REVISION >= 125 ? animateGlow : simpleAnimateGlow;

// Enhanced animation function
function animateState(targetState, duration = 2.5) {
  const startTime = performance.now();
  const initialCameraZ = camera.position.z;
  const initialCameraX = camera.position.x;
  const initialCameraY = camera.position.y;
  const initialCameraRotationY = camera.rotation.y;
  const initialDonutScale = donut.scale.x; // assuming uniform scale
  const initialDonutRotation = {
    x: donut.rotation.x,
    y: donut.rotation.y,
    z: donut.rotation.z
  };
  const initialDonutPosition = {
    x: donut.position.x,
    y: donut.position.y,
    z: donut.position.z
  };

  function animateFrame(now) {
    const elapsed = (now - startTime) / 1000;
    // t goes from 0 to 1 over the duration
    let t = Math.min(elapsed / duration, 1);

    // Apply different easing to different properties for more natural movement
    const easedT = easeInOutCubic(t);
    const elasticT = easeOutElastic(t);

    // Tween camera position with smooth easing
    camera.position.z = tween(initialCameraZ, targetState.cameraZ, easedT, easeInOutCubic);
    camera.position.x = tween(initialCameraX, targetState.cameraX, easedT, easeInOutCubic);
    camera.position.y = tween(initialCameraY, targetState.cameraY, easedT, easeInOutCubic);
    
    // Tween camera rotation
    camera.rotation.y = tween(initialCameraRotationY, targetState.cameraRotationY, easedT, easeInOutCubic);
    
    // Tween donut scale with slight elasticity
    const newScale = tween(initialDonutScale, targetState.donutScale, t, easeOutElastic);
    donut.scale.set(newScale, newScale, newScale);
    
    // Tween donut rotation more smoothly
    donut.rotation.x = tween(initialDonutRotation.x, targetState.donutRotation.x, easedT, easeInOutCubic);
    donut.rotation.y = tween(initialDonutRotation.y, targetState.donutRotation.y, easedT, easeInOutCubic);
    donut.rotation.z = tween(initialDonutRotation.z, targetState.donutRotation.z, easedT, easeInOutCubic);
    
    // Tween donut position for more dynamic movement
    donut.position.x = tween(initialDonutPosition.x, targetState.donutPosition.x, elasticT, easeOutElastic);
    donut.position.y = tween(initialDonutPosition.y, targetState.donutPosition.y, elasticT, easeOutElastic);
    donut.position.z = tween(initialDonutPosition.z, targetState.donutPosition.z, easedT, easeInOutCubic);

    if (t < 1) {
      requestAnimationFrame(animateFrame);
    }
  }
  requestAnimationFrame(animateFrame);
}

// Variables for scroll control
let isScrolling = false;
const scrollDelay = 1500; // 3 seconds before next scroll allowed
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.section');

// Lock scroll function
function preventScroll(e) {
  if (isScrolling && e.cancelable) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}
function setupProjectsAutoSnap() {
  const projectsSection = document.getElementById('projects');
  if (!projectsSection) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If even a small part of projects is visible and not already active
      if (entry.isIntersecting && currentSectionIndex !== 2 && entry.intersectionRatio > 0.1) {
        goToSection(2); // Index of the projects section
      }
    });
  }, {
    threshold: [0.4] // Trigger when 40% visible
  });

  observer.observe(projectsSection);
}

setupProjectsAutoSnap()
let lastScrollTime = 0;
const scrollCooldown = 1000; // Cooldown between scroll events

function setupProjectScrollHandler() {
  const container = document.getElementById('projects-2d-container');
  if (!container) return;

  const onProjectScroll = (e) => {
    const now = Date.now();
    if (now - lastScrollTime < scrollCooldown) return;
    lastScrollTime = now;

    const direction = e.deltaY > 0 ? 'down' : 'up';

    if (direction === 'up' && currentSectionIndex > 0) {
      goToSection(currentSectionIndex - 1);
    } else if (direction === 'down' && currentSectionIndex < sections.length - 1) {
      goToSection(currentSectionIndex + 1);
    }
  };

  container.addEventListener('wheel', onProjectScroll, { passive: false });

  // Store cleanup function
  container._removeScrollHandler = () => {
    container.removeEventListener('wheel', onProjectScroll);
  };
}

// Add event listeners to prevent scrolling during animations
const sectionsContainer = document.querySelector('.sections');
sectionsContainer.addEventListener('wheel', preventScroll, { passive: false });
sectionsContainer.addEventListener('touchmove', preventScroll, { passive: false });
document.addEventListener('wheel', (event) => {
  if (isInsideProjectsAndScrollable()) {
    return; // Allow normal scrolling inside project section
  }
  
  if (!isScrolling) {
    event.preventDefault();
    if (event.deltaY > 0) {
      goToSection(currentSectionIndex + 1);
    } else {
      goToSection(currentSectionIndex - 1);
    }
  }
}, { passive: false });

// Make sure touch events are set on document level too
document.addEventListener('touchstart', handleTouchStart, { passive: true });
document.addEventListener('touchend', handleTouchEnd, { passive: true });

function animateColors(sectionId) {
  let targetBgColor;
  let targetDonutColor;
  
  switch(sectionId) {
    case 'home':
      targetBgColor = new THREE.Color(0xffffff);
      targetDonutColor = new THREE.Color(0xc92900);
      break;
    case 'about':
      targetBgColor = new THREE.Color(0x020217);
      targetDonutColor = new THREE.Color(0x002f9b);
      break;
    case 'projects':
      targetBgColor = new THREE.Color(0x000020);
      targetDonutColor = new THREE.Color(0x002f9b);
      break;
  }
  
  if (targetBgColor) {
    // Ensure scene.background is initialized
    if (!scene.background) scene.background = new THREE.Color(0x000000);

    gsap.to(scene.background, {
      r: targetBgColor.r,
      g: targetBgColor.g,
      b: targetBgColor.b,
      duration: 1.5,
      ease: "power2.inOut"
    });
  }
  
  if (targetDonutColor) {
    gsap.to(donutMaterial.color, {
      r: targetDonutColor.r,
      g: targetDonutColor.g,
      b: targetDonutColor.b,
      duration: 1.5,
      ease: "power2.inOut"
    });
  }
  
  // Handle Ring Particles Visibility
  if (sectionId === 'about') {
    particlesMesh.visible = true;
    gsap.to(particlesMesh.material, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut"
    });
  } else {
    gsap.to(particlesMesh.material, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut",
      onComplete: () => {
        // Only hide if we are still not in about section (in case user switched back quickly)
        if (current_page !== 'about') {
          particlesMesh.visible = false;
        }
      }
    });
  }
}

// Handle section changes
function goToSection(index) {
  if (isScrolling || index < 0 || index >= sections.length) return;
  
  isScrolling = true;
  currentSectionIndex = index;
  
  // Update UI state - now with nav items instead of dots
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
  // Scroll to section
  sections[index].scrollIntoView({ behavior: 'smooth' });
  
  // Animate 3D scene
  const sectionId = sections[index].id;
  current_page = sectionId;
  
  animateColors(sectionId);
  
  // Only apply the door animation for home <-> about transitions
  if (previous_page !== current_page) {
    previous_page = current_page
  } 
  if (sectionId === 'projects') {
    if (states[sectionId]) {
      animateState(states[sectionId]);
    }

    setTimeout(() => {
      const projectsContainer = document.getElementById("projects-2d-container")
      if (projectsContainer) {
        projectsContainer.classList.add('visible');
        setupProjectScrollHandler();

        setTimeout(() => {
          document.getElementById('bg').style.opacity = '0';
        }, 800);
      }
    }, 1000);
  } 
  // If coming from projects section to another section
  else if (document.getElementById('projects-2d-container').classList.contains('visible')) {
    // First hide the 2D container
    document.getElementById('projects-2d-container').classList.remove('visible');
    
    // Then show the 3D scene again
    document.getElementById('bg').style.opacity = '1';
    // Animate to the new state
    if (states[sectionId]) {
      setTimeout(() => {
        animateState(states[sectionId]);
      }, 500); // Delay to let the 2D content fade out first
    }
  }
  // Normal case (non-projects section)
  else {
    if (states[sectionId]) {
      animateState(states[sectionId]);
    }
  }
  // Add continuous small animation to donut
  applyDonutIdleAnimation(sectionId);
  
  // Release scroll lock after delay
  setTimeout(() => {
    isScrolling = false;
  }, scrollDelay);
}

let donutclicked = false
// Continuous small animations for the donut based on section
let idleAnimationId = null;
function applyDonutIdleAnimation(sectionId) {
  // Clear any existing idle animation
  if (idleAnimationId) {
    cancelAnimationFrame(idleAnimationId);
  }
  
  const baseSpeed = 0.005;
  const baseAmplitude = 0.2;
  let time = 0;
  
  // Different idle animations for each section
  function idleAnimation() {
    time += 0.01;
    
    switch(sectionId) {
      case 'home':
        donut.rotation.y += baseSpeed;
        donut.position.y = Math.sin(time) * baseAmplitude;
        current_page = "home";
        break;
      case 'about':
        donut.rotation.x += baseSpeed * 0.8;
        donut.rotation.z += baseSpeed * 0.3;
        donut.position.x = Math.sin(time * 1.2) * baseAmplitude;
        current_page = "about";
        break;
      case 'projects':
        donut.rotation.z += baseSpeed * 1.2;
        donut.position.y = Math.sin(time * 0.8) * baseAmplitude * 1.5;
        donut.position.x = Math.cos(time * 0.5) * baseAmplitude;
        current_page = "projects";
        break;
    }
    
    
    idleAnimationId = requestAnimationFrame(idleAnimation);
  }
  
  idleAnimation();
}
function createNavMenu() {
  // Create navigation container
  const navContainer = document.createElement('div');
  navContainer.className = 'nav-menu';
  
  // Navigation items with their text labels
  const navItems = [
    { id: 'home', label: 'Welcome' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' }
  ];
  
  navItems.forEach((item, index) => {
    const navItem = document.createElement('div');
    navItem.className = 'nav-item';
    navItem.textContent = item.label;
    navItem.dataset.section = item.id;
    
    if (index === 0) navItem.classList.add('active');
    
    navItem.addEventListener('click', () => {
      if (!isScrolling) {
        goToSection(index);
      }
    });
    
    navContainer.appendChild(navItem);
  });
  
  document.body.appendChild(navContainer);
  
  // Add styles to the document
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    .nav-menu {
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 30px;
      z-index: 1000;
      background-color: rgba(0, 0, 0, 0.5);
      padding: 10px 20px;
      border-radius: 20px;
      backdrop-filter: blur(5px);
    }
    
    .nav-item {
      color: rgba(255, 255, 255, 0.7);
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;
      position: relative;
      padding: 5px 0;
    }
    
    .nav-item:hover {
      color: white;
    }
    
    .nav-item:hover::after {
      width: 100%;
    }
    
    .nav-item::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: white;
      transition: width 0.3s ease;
    }
    
    .nav-item.active {
      color: white;
      font-weight: bold;
    }
    
    .nav-item.active::after {
      width: 100%;
    }
    
    @media (max-width: 768px) {
      .nav-menu {
        gap: 15px;
        padding: 8px 15px;
        top: 60px;
      }
      
      .nav-item {
        font-size: 14px;
      }
    }
  `;
  
  document.head.appendChild(styleTag);
}

// Update the performDoorTransition function to change door colors
// Initialize keyboard navigation
document.addEventListener('keydown', (event) => {
  if (isIntroRunning) return;
  
  if (event.key === 'ArrowDown' || event.key === 'PageDown') {
    goToSection(currentSectionIndex + 1);
  } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    goToSection(currentSectionIndex - 1);
  }
});

// Handle mouse wheel events for controlled scrolling
sectionsContainer.addEventListener('wheel', (event) => {
  if (isIntroRunning) return;

  if (isIntroRunning) return;

  if (isInsideProjectsAndScrollable()) {
    return; // Allow normal scrolling inside project section
  }

  if (!isScrolling) {
    event.preventDefault(); // Only prevent when not in project scroll
    if (event.deltaY > 0) {
      goToSection(currentSectionIndex + 1);
    } else {
      goToSection(currentSectionIndex - 1);
    }
  }
}, { passive: false });
// Prevent scrolling when hovering over nav-menu


let touchStartY = 0;

function handleTouchStart(e) {
  touchStartY = e.changedTouches[0].clientY;
}

function handleTouchEnd(e) {
  if (isIntroRunning) return;

  const touchEndY = e.changedTouches[0].clientY;
  const deltaY = touchStartY - touchEndY;

  if (Math.abs(deltaY) > 50 && !isScrolling) {
    if (isInsideProjectsAndScrollable()) return;

    if (deltaY > 0) {
      goToSection(currentSectionIndex + 1);
    } else {
      goToSection(currentSectionIndex - 1);
    }
  }
}

function isInsideProjectsAndScrollable() {
  const container = document.getElementById('projects-2d-container');
  return current_page === 'projects' && container && container.classList.contains('visible') && container.scrollTop > 0;
}

// Attach to main container
sectionsContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
sectionsContainer.addEventListener('touchend', handleTouchEnd, { passive: false });

// Also attach to 2D projects container
const projectsContainer = document.getElementById('projects-2d-container');
if (projectsContainer) {
  projectsContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
  projectsContainer.addEventListener('touchend', handleTouchEnd, { passive: false });
}

// Update particles in the animation loop
function animateParticlesStar() {
  particlesMesh.rotation.x += 0.0005;
  particlesMesh.rotation.y += 0.0003;
}

// Animate lights
function animateLights(time) {
  const lightIntensity = 0.8 + Math.sin(time * 0.5) * 0.2;
  pointLight1.intensity = 500 + lightIntensity * 200;
  pointLight2.intensity = 300 + (1 - lightIntensity) * 200;
  
  // Move lights around slowly
  pointLight1.position.x = 20 * Math.cos(time * 0.1);
  pointLight1.position.z = 20 * Math.sin(time * 0.1);
  
  pointLight2.position.x = -20 * Math.cos(time * 0.15);
  pointLight2.position.z = -20 * Math.sin(time * 0.15);
}

const starField = createStarField();
// Handle window resize
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Add button navigation handling for all buttons with class 'btn'
document.addEventListener('DOMContentLoaded', function() {
  // Get all navigation buttons with class 'btn'
  const navButtons = document.querySelectorAll('.btn');
  
  // Add click event listener to each button
  navButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Prevent default anchor behavior
      
      // Extract the target section ID from the href attribute
      const targetId = this.getAttribute('href').substring(1); // Remove the # character
      
      // Find the index of the target section
      const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);
      
      // Navigate to that section using the existing goToSection function
      if (targetIndex !== -1) {
        goToSection(targetIndex);
      }
    });
  });
  
  // Also apply to social-link class for consistency
  const socialLinks = document.querySelectorAll('.social-link');
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Only prevent default for internal links
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetIndex = Array.from(sections).findIndex(section => section.id === targetId);
        if (targetIndex !== -1) {
          goToSection(targetIndex);
        }
      }
    });
  });
});
// Load all textures you need first
const jsTexture = textureLoader.load('JS.png'); // Transparent PNG with JS logo

function createCustomPlanets() {
  const planets = [];

  // Define a helper function to create both a planet and its point cloud
  function createPlanetWithPointCloud(planetData) {
    // Create the planet geometry based on type
    let planetGeometry;
    if (planetData.useBox) {
      planetGeometry = new THREE.BoxGeometry(planetData.size, planetData.size, planetData.size);
    } else {
      planetGeometry = new THREE.SphereGeometry(planetData.size / 2, 32, 32);
    }

    // Create the main planet material
    const planetMaterial = planetData.texture
      ? new THREE.MeshBasicMaterial({
          map: planetData.texture,
          transparent: true,
          side: THREE.DoubleSide,
        })
      : new THREE.MeshPhysicalMaterial({
          color: planetData.color || 0xffffff,
          roughness: 0.4,
          metalness: 0.7,
          side: THREE.DoubleSide,
        });

    // Create planet mesh
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    // Create outline for the planet
    const outlineGeometry = planetData.useBox 
      ? new THREE.BoxGeometry(planetData.size * 1.1, planetData.size * 1.1, planetData.size * 1.1) 
      : new THREE.SphereGeometry(planetData.size / 2 * 1.1, 32, 32);
    
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0,
    });
    
    const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
    planet.add(outlineMesh);
    planet.userData.outlineMesh = outlineMesh;
    
    // Store all the data in userData
    planet.userData = { ...planet.userData, ...planetData };

    // Create point cloud version of the planet
    // We'll create more points for better visualization
    const pointGeometry = new THREE.BufferGeometry();
    
    // Create many points for the cloud
    const particleCount = 1000;
    const positions = [];
    
    if (planetData.useBox) {
      // For box shape, create random positions within the box bounds
      const halfSize = planetData.size / 2;
      for (let i = 0; i < particleCount; i++) {
        // Start with points in a sphere for the initial state
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = planetData.size / 2 * Math.cbrt(Math.random()); // Cube root for uniform distribution
        
        positions.push(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );
      }
    } else {
      // For sphere shape, create random positions within the sphere
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = planetData.size / 2 * Math.cbrt(Math.random()); // Cube root for uniform distribution
        
        positions.push(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );
      }
    }
    
    // Create target positions (where particles will move when morphing)
    const targetPositions = [];
    
    if (planetData.useBox) {
      // For box target shape
      for (let i = 0; i < particleCount; i++) {
        const halfSize = planetData.size / 2;
        
        // Determine which face of the cube this point will be on
        const face = Math.floor(Math.random() * 6);
        let x, y, z;
        
        switch (face) {
          case 0: // +X face
            x = halfSize;
            y = (Math.random() * 2 - 1) * halfSize;
            z = (Math.random() * 2 - 1) * halfSize;
            break;
          case 1: // -X face
            x = -halfSize;
            y = (Math.random() * 2 - 1) * halfSize;
            z = (Math.random() * 2 - 1) * halfSize;
            break;
          case 2: // +Y face
            x = (Math.random() * 2 - 1) * halfSize;
            y = halfSize;
            z = (Math.random() * 2 - 1) * halfSize;
            break;
          case 3: // -Y face
            x = (Math.random() * 2 - 1) * halfSize;
            y = -halfSize;
            z = (Math.random() * 2 - 1) * halfSize;
            break;
          case 4: // +Z face
            x = (Math.random() * 2 - 1) * halfSize;
            y = (Math.random() * 2 - 1) * halfSize;
            z = halfSize;
            break;
          case 5: // -Z face
            x = (Math.random() * 2 - 1) * halfSize;
            y = (Math.random() * 2 - 1) * halfSize;
            z = -halfSize;
            break;
        }
        
        targetPositions.push(x, y, z);
      }
    } else {
      // For sphere target shape
      for (let i = 0; i < particleCount; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const radius = planetData.size / 2; // Fixed radius for the sphere surface
        
        targetPositions.push(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        );
      }
    }
    
    // Store positions and target positions in the geometry
    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    
    // Choose point material color based on planet color or a default
    const pointColor = planetData.color || (planetData.texture ? 0xffff00 : 0x00ffff);
    const pointMaterial = new THREE.PointsMaterial({
      color: pointColor,
      size: 0.15,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    
    const pointCloud = new THREE.Points(pointGeometry, pointMaterial);
    
    // Store original and target positions in userData for animation
    pointCloud.userData.originalPositions = [...positions];
    pointCloud.userData.targetPositions = targetPositions;
    pointCloud.userData.currentState = 'sphere'; // Start as sphere
    pointCloud.userData.animating = false;
    
    // Create a pivot to rotate the planet/point cloud around the center
    const pivot = new THREE.Object3D();
    planetScene.add(pivot);
    
    // Offset planet position (on orbit radius)
    const angle = planetData.orbitPhase || 0;
    const x = Math.cos(angle) * planetData.orbitRadius;
    const z = Math.sin(angle) * planetData.orbitRadius;
    
    // Set initial position
    planet.position.set(x, 0, z);
    pointCloud.position.set(x, 0, z);
    
    // Add both to pivot
    pivot.add(planet);
    pivot.add(pointCloud);
    
    // Set initial visibility
    planet.visible = false; // Start with solid planet hidden
    pointCloud.visible = true; // Start with point cloud visible
    
    // Store cross-references
    planet.userData.pointCloud = pointCloud;
    planet.userData.pivot = pivot;
    pointCloud.userData.planet = planet;
    pointCloud.userData.pivot = pivot;
    
    return planet;
  }

  // JS Planet
  const jsPlanetData = {
    name: "JS",
    size: 5,
    texture: jsTexture,
    orbitRadius: 25,
    orbitSpeed: 0.09,
    orbitPhase: 0,
    orbitTilt: 0.1,
    info: "2 Years of Javascript Working Experience",
    useBox: true
  };
  
  const jsPlanet = createPlanetWithPointCloud(jsPlanetData);
  planets.push(jsPlanet);

  // Zephyria Planet
  const zephyriaPlanetData = {
    name: "Mom Star",
    size: 3,
    color: 0x85ff8f,
    orbitRadius: 30,
    orbitSpeed: 0.13,
    orbitPhase: Math.PI / 3,
    orbitTilt: 0.2,
    info: "Farmer!!!!!",
    useBox: true
  };
  
  const zephyriaPlanet = createPlanetWithPointCloud(zephyriaPlanetData);
  planets.push(zephyriaPlanet);

  // Verdantia Planet
  const verdantiaPlanetData = {
    name: "No clue",
    size: 4,
    color: 0x90be6d,
    orbitRadius: 25,
    orbitSpeed: 0.06,
    orbitPhase: Math.PI / 2,
    orbitTilt: 3.15,
    info: "No clue",
    useBox: true
  };
  
  const verdantiaPlanet = createPlanetWithPointCloud(verdantiaPlanetData);
  planets.push(verdantiaPlanet);

  // Nautilus Planet
  const nautilusPlanetData = {
    name: "No clue",
    size: 6,
    color: 0x577590,
    orbitRadius: 40,
    orbitSpeed: 0.03,
    orbitPhase: Math.PI,
    orbitTilt: 0.3,
    info: "No clue",
    useBox: true
  };
  
  const nautilusPlanet = createPlanetWithPointCloud(nautilusPlanetData);
  planets.push(nautilusPlanet);

  // Mystara Planet
  const mystaraPlanetData = {
    name: "No clue",
    size: 3.5,
    color: 0x43aa8b,
    orbitRadius: 45,
    orbitSpeed: 0.11,
    orbitPhase: Math.PI * 1.5,
    orbitTilt: 0.25,
    info: "No clue",
    useBox: true
  };
  
  const mystaraPlanet = createPlanetWithPointCloud(mystaraPlanetData);
  planets.push(mystaraPlanet);

  return planets;
}

// Create the planets
const orbitalPlanets = createCustomPlanets();

function animatePointCloudMorph(pointCloud, targetState, duration = 1.5) {
  // Don't animate if already animating
  if (pointCloud.userData.animating) return;
  pointCloud.userData.animating = true;
  
  const positions = pointCloud.geometry.attributes.position.array;
  const originalPositions = pointCloud.userData.originalPositions;
  const targetPositions = pointCloud.userData.targetPositions;
  
  // Determine start and end positions based on current state and target state
  const startPositions = [...positions];
  const endPositions = targetState === 'shape' ? targetPositions : originalPositions;
  
  // Generate random explosion vectors with varied magnitudes for particle dispersion effect
  const explosionVectors = [];
  const maxMagnitudes = []; // Store individual max explosion distances
  
  for (let i = 0; i < positions.length; i += 3) {
    // Random max magnitude between 15 and 30 for each particle
    const maxMagnitude = Math.random() * 15 + 15;
    maxMagnitudes.push(maxMagnitude);
    
    // Random direction vector
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos((Math.random() * 2) - 1);
    
    explosionVectors.push(
      Math.sin(phi) * Math.cos(theta),
      Math.sin(phi) * Math.sin(theta),
      Math.cos(phi)
    );
  }
  
  // Animation timeline with a smoother transition between phases
  const timeline = gsap.timeline({
    onComplete: () => {
      pointCloud.userData.currentState = targetState;
      pointCloud.userData.animating = false;
      
      // Show or hide the solid planet at the end of animation
      if (pointCloud.userData.planet) {
        pointCloud.userData.planet.visible = targetState === 'shape';
        
        // If showing the solid planet, fade in for smooth transition
        if (targetState === 'shape') {
          gsap.fromTo(pointCloud.material, 
            { opacity: 0.8 }, 
            { opacity: 0, duration: 0.5 }
          );
        } else {
          gsap.fromTo(pointCloud.material, 
            { opacity: 0 }, 
            { opacity: 0.8, duration: 0.5 }
          );
        }
      }
    }
  });
  
  // Single combined phase with eased explosion and implosion
  timeline.to({}, {
    duration: duration,
    ease: "power2.inOut",
    onUpdate: function() {
      const progress = this.progress();
      
      // Custom easing for explosion and implosion phases
      // Fast initial explosion (0-40% of animation) then gradual transition to implosion
      const explosionEase = progress < 0.4 ? 
        // Remap 0-0.4 to 0-1 with an ease-out curve
        1 - Math.pow(1 - progress / 0.4, 3) : 
        // Gradually decrease explosion from 1 to 0 as progress goes from 0.4 to 1
        Math.max(0, 1 - ((progress - 0.4) / 0.6));
      
      // Implosion ease starts gradually as explosion fades
      const implosionEase = progress < 0.3 ? 0 : 
        // Remap 0.3-1 to 0-1 with an ease-in curve
        Math.pow((progress - 0.3) / 0.7, 2);
      
      // Calculate intermediate positions with overlapping explosion and implosion
      for (let i = 0; i < positions.length; i += 3) {
        // Explosion vector with individual max magnitude
        const particleExplosionX = explosionVectors[i] * maxMagnitudes[i/3] * explosionEase;
        const particleExplosionY = explosionVectors[i+1] * maxMagnitudes[i/3] * explosionEase;
        const particleExplosionZ = explosionVectors[i+2] * maxMagnitudes[i/3] * explosionEase;
        
        // Start position plus explosion vector
        const explodedX = startPositions[i] + particleExplosionX;
        const explodedY = startPositions[i+1] + particleExplosionY;
        const explodedZ = startPositions[i+2] + particleExplosionZ;
        
        // Blend with target position based on implosion ease
        positions[i] = explodedX * (1 - implosionEase) + endPositions[i] * implosionEase;
        positions[i+1] = explodedY * (1 - implosionEase) + endPositions[i+1] * implosionEase;
        positions[i+2] = explodedZ * (1 - implosionEase) + endPositions[i+2] * implosionEase;
      }
      
      pointCloud.geometry.attributes.position.needsUpdate = true;
    }
  });
  
  // Particle size animation
  timeline.to(pointCloud.material, {
    size: targetState === 'shape' ? 0.25 : 0.15,
    duration: duration,
    ease: "power2.inOut"
  }, 0);
  
  return timeline;
}
function togglePlanetView(planet) {
  if (!planet || !planet.userData.pointCloud) return;
  
  const pointCloud = planet.userData.pointCloud;
  const currentState = pointCloud.userData.currentState;
  const targetState = currentState === 'sphere' ? 'shape' : 'sphere';

  const planetIndex = orbitalPlanets.indexOf(planet);
  const boxSelector = `.sci-fi-text-box[data-id="${planetIndex}"]`;

  // Sync text box visibility with point cloud state
  if (targetState === 'shape') {
    // Show text box
    const textBox = createSciFiTextBox("", {
      x: planet.position.x,
      y: planet.position.y,
      z: planet.position.z,
      objectIndex: planetIndex
    }, false);

    const fullText = `${planet.userData.name}: ${planet.userData.info}`;
    enhancedScrambleEffect(textBox, fullText);
    planet.userData.isShowingInfo = true;
  } else {
    // Hide text box
    const textBox = document.querySelector(boxSelector);
    if (textBox) {
      textBox.classList.remove('active');
      setTimeout(() => textBox.remove(), 500);
    }
    planet.userData.isShowingInfo = false;
  }

  animatePointCloudMorph(pointCloud, targetState);
  pointCloud.userData.currentState = targetState;
}

function debugSyncPlanetTextBoxes() {
  orbitalPlanets.forEach((planet, index) => {
    if (!planet || !planet.userData || !planet.userData.pointCloud) return;

    const pointCloud = planet.userData.pointCloud;
    const state = pointCloud.userData.currentState;
    const allBoxes = Array.from(document.querySelectorAll(`.sci-fi-text-box[data-id="${index}"]`));

    const shouldHaveTextBox = state === 'shape';

    if (allBoxes.length > 1) {
      // If there are duplicates, remove all of them
      allBoxes.forEach(box => {
        box.classList.remove('active');
        setTimeout(() => box.remove(), 200);
      });
    }

    const hasTextBox = allBoxes.length === 1;

    if (shouldHaveTextBox && !hasTextBox) {
      // Create missing text box
      const fullText = `${planet.userData.name}: ${planet.userData.info}`;
      const newBox = createSciFiTextBox("", {
        x: planet.position.x,
        y: planet.position.y,
        z: planet.position.z,
        objectIndex: index
      }, false);
      enhancedScrambleEffect(newBox, fullText);
      planet.userData.isShowingInfo = true;
    }

    if (!shouldHaveTextBox && hasTextBox) {
      // Remove outdated text box
      allBoxes[0].classList.remove('active');
      setTimeout(() => allBoxes[0].remove(), 200);
      planet.userData.isShowingInfo = false;
    }
  });

  // Schedule the next check
  setTimeout(debugSyncPlanetTextBoxes, 1000);
}

// Kick off the loop
debugSyncPlanetTextBoxes();



// Make the donut clickable
donut.userData = { 
  clickable: true, 
  info: "Hi, I'm Pat. I'm a person with a passion for 3D development and interactive design. Click on the orbiting planets to learn more about me.",
  isShowingInfo: false
};

// Add a raycaster for clicking objects
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Create a div for sci-fi text boxes
const textBoxContainer = document.createElement('div');
textBoxContainer.className = 'sci-fi-text-containers';
document.body.appendChild(textBoxContainer);

// Function to create a sci-fi text box
function updateTextBoxPositions() {
  // Get all active sci-fi text boxes
  const textBoxes = document.querySelectorAll('.sci-fi-text-box');
  
  // Update each text box's position based on its associated object
  textBoxes.forEach(textBox => {
    const id = textBox.getAttribute('data-id');
    let object;
    
    // Determine which object this text box is associated with
    if (id === 'donut') {
      object = donut;
    } else {
      // Convert ID to number for planet index
      const planetIndex = parseInt(id);
      if (!isNaN(planetIndex) && planetIndex >= 0 && planetIndex < orbitalPlanets.length) {
        object = orbitalPlanets[planetIndex];
      }
    }
    // If we found the associated object, update the text box position
    if (object) {
      const position = new THREE.Vector3();
      object.getWorldPosition(position); // ⬅️ THIS LINE IS KEY
      position.project(camera);
      
      const x = (position.x * 0.5 + 0.5) * window.innerWidth;
      const y = (-(position.y * 0.5) + 0.5) * window.innerHeight;
      
      
      // Set text box position with slight offset to avoid covering the object
      // Offset more depending on if it's a donut or planet
      const yOffset = id === 'donut' ? -70 : -50;
      const xOffset = 10;  // Slight horizontal offset
      
      textBox.style.left = `${x + xOffset}px`;
      textBox.style.top = `${y + yOffset}px`;
      
      // Add depth perception - scale down text boxes for objects that are further away
      // Get the distance from camera to object
      const distance = camera.position.distanceTo(object.position);
      const baseDistance = 50; // Reference distance
      const scale = Math.max(0.6, Math.min(1, baseDistance / distance));
      
      textBox.style.transform = `translate(-50%, -50%) scale(${scale})`;
      
      // Adjust opacity based on distance for subtle depth effect
      textBox.style.opacity = Math.max(0.7, Math.min(1, scale));
    }

  });
}

// Function to create a sci-fi text box with position tracking
function createSciFiTextBox(text, position, isDonut) {
  // Create the text box container
  const textBox = document.createElement('div');
  textBox.className = 'sci-fi-text-box';
  textBox.setAttribute('data-id', isDonut ? 'donut' : position.objectIndex);
  
  // Create the text box content - remove the close button div from here
  textBox.innerHTML = `
    <div class="sci-fi-text-box-content">
      <div class="sci-fi-text-box-header"></div>
      <div class="sci-fi-text-box-body">${text}</div>
      <div class="sci-fi-text-box-footer"></div>
    </div>
  `;
  
  // Get the content div to append the button to
  const contentDiv = textBox.querySelector('.sci-fi-text-box-content');
  
  // Add close button
  const closeButton = document.createElement('button');
  closeButton.className = 'sci-fi-close-btn';
  closeButton.innerHTML = '×';
  closeButton.addEventListener('click', () => {
    textBox.classList.remove('active');
    setTimeout(() => {
      textBox.remove();
    }, 100);
    
    // Also update the isShowingInfo flag on the object
    if (isDonut) {
      donut.userData.isShowingInfo = false;
    } else if (position.objectIndex !== null && position.objectIndex >= 0 && position.objectIndex < orbitalPlanets.length) {
      orbitalPlanets[position.objectIndex].userData.isShowingInfo = false;
    }
  });
  
  // Add the button to the content div
  contentDiv.appendChild(closeButton);
  
  // Add to DOM
  document.body.appendChild(textBox);
  
  // Force a reflow to ensure the transition works
  textBox.offsetHeight;
  
  // Show with animation
  setTimeout(() => {
    textBox.classList.add('active');
  }, 10);
  
  return textBox;
}

function createClickableIndicator() {
  const indicator = document.createElement('div');
  indicator.className = 'clickable-indicator';
  document.body.appendChild(indicator);
  return indicator;
}

const clickIndicator = createClickableIndicator();

// Function to check if mouse is over a clickable object
function checkMouseOverObjects(event) {
  // Only show hover effects in the about section
  const currentSection = document.querySelector('.section:nth-child(' + (currentSectionIndex + 1) + ')');
  if (!currentSection || currentSection.id !== 'about') {
    clickIndicator.classList.remove('visible');
    // Hide all outlines
    const clickableObjects = [donut, ...orbitalPlanets];
    clickableObjects.forEach(object => {
      if (object && object.userData && object.userData.outlineMesh) {
        object.userData.outlineMesh.material.opacity = 0;
      }
    });
    return;
  }
  
  // Calculate mouse position
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Update the raycaster
  raycaster.setFromCamera(mouse, camera);
  
  // Check for intersections with clickable objects
  const clickableObjects = [donut, ...orbitalPlanets].filter(obj => obj !== undefined);
  const intersects = raycaster.intersectObjects(clickableObjects);
  
  let hoveredObject = null;
  
  if (intersects.length > 0) {
    // Mouse is over a clickable object
    const object = intersects[0].object;
    
    // Only proceed if the object is clickable
    if (object && object.userData && object.userData.clickable) {
      hoveredObject = object;
      
      // Position the indicator at mouse position
      clickIndicator.style.left = event.clientX + 'px';
      clickIndicator.style.top = event.clientY + 'px';
      clickIndicator.classList.add('visible');
      
      // Change cursor to pointer
      document.body.style.cursor = 'pointer';
      
      // Highlight the object
      if (!object.userData.isHighlighted) {
        object.userData.isHighlighted = true;
        
        // Store original emissive intensity if it exists
        if (object.material && object.material.emissive) {
          object.userData.originalEmissiveIntensity = object.material.emissiveIntensity || 0;
          
          // Increase emissive intensity for glow effect
          gsap.to(object.material, {
            emissiveIntensity: Math.max(0.8, object.userData.originalEmissiveIntensity * 2),
            duration: 0.3
          });
        }
        
        // Show the outline by animating its opacity
        if (object.userData.outlineMesh) {
          gsap.to(object.userData.outlineMesh.material, {
            opacity: 0.7, // Semi-transparent white outline
            duration: 0.3
          });
        }
        
        // Make sure originalScale exists before using it
        if (!object.userData.originalScale) {
          object.userData.originalScale = {
            x: object.scale.x,
            y: object.scale.y,
            z: object.scale.z
          };
        }
        
        // Subtle scale animation
        gsap.to(object.scale, {
          x: object.userData.originalScale.x * 1.1,
          y: object.userData.originalScale.y * 1.1,
          z: object.userData.originalScale.z * 1.1,
          duration: 0.3
        });
      }
    }
  } else {
    // Mouse is not over any clickable object
    clickIndicator.classList.remove('visible');
    document.body.style.cursor = 'default';
  }
  
  // Reset all highlighted objects
  clickableObjects.forEach(object => {
    // Skip if this is the currently hovered object or if object is undefined
    if (!object || object === hoveredObject) return;
    
    if (object.userData && object.userData.isHighlighted) {
      object.userData.isHighlighted = false;
      
      // Reset emissive intensity if it exists
      if (object.material && object.material.emissive && object.userData.originalEmissiveIntensity !== undefined) {
        gsap.to(object.material, {
          emissiveIntensity: object.userData.originalEmissiveIntensity,
          duration: 0.3
        });
      }
      
      // Hide the outline
      if (object.userData.outlineMesh) {
        gsap.to(object.userData.outlineMesh.material, {
          opacity: 0,
          duration: 0.3
        });
      }
      
      // Make sure originalScale exists before using it
      if (!object.userData.originalScale) {
        object.userData.originalScale = {
          x: object.scale.x,
          y: object.scale.y,
          z: object.scale.z
        };
      }
      
      // Reset scale
      gsap.to(object.scale, {
        x: object.userData.originalScale.x,
        y: object.userData.originalScale.y,
        z: object.userData.originalScale.z,
        duration: 0.3
      });
    }
  });
}

function addDonutOutline() {
  // Check if donut exists
  if (!donut || !donut.geometry) return;

  // Create a slightly larger geometry for the outline
  const outlineGeometry = new THREE.TorusGeometry(
    donut.geometry.parameters.radius * 1.05, 
    donut.geometry.parameters.tube * 1.05, 
    donut.geometry.parameters.radialSegments,
    donut.geometry.parameters.tubularSegments
  );
  
  const outlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0
  });
  
  const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
  donut.add(outlineMesh);
  donut.userData.outlineMesh = outlineMesh;
}

function addPlanetOutlines() {
  orbitalPlanets.forEach(planet => {
    if (!planet || !planet.geometry) return;

    let outlineGeometry;

    // Handle sphere geometry type
    if (planet.geometry.type === 'SphereGeometry') {
      outlineGeometry = new THREE.SphereGeometry(
        planet.geometry.parameters.radius * 1.05,
        planet.geometry.parameters.widthSegments,
        planet.geometry.parameters.heightSegments
      );
    }
    // Handle box geometry type
    else if (planet.geometry.type === 'BoxGeometry') {
      outlineGeometry = new THREE.BoxGeometry(
        planet.geometry.parameters.width * 1.15,
        planet.geometry.parameters.height * 1.15,
        planet.geometry.parameters.depth * 1.15
      );
    }
    // Handle other geometries if necessary (e.g., TorusGeometry, etc.)
    else {
      outlineGeometry = planet.geometry.clone();
    }

    // Create material for the outline (white and semi-transparent)
    const outlineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.BackSide, // Render the outline on the back side to avoid z-fighting
      transparent: true,
      opacity: 0 // Initially set to invisible
    });

    // Create outline mesh
    const outlineMesh = new THREE.Mesh(outlineGeometry, outlineMaterial);
    
    // Add outline mesh as a child of the planet
    planet.add(outlineMesh);
    
    // Store the reference to the outlineMesh in userData for easy access
    planet.userData.outlineMesh = outlineMesh;
  });
}


// Initialize object properties
function initializeObjectProperties() {
  // Initialize donut if it exists
  if (donut) {
    donut.userData.clickable = true;
    donut.userData.isShowingInfo = false;
    donut.userData.originalScale = {
      x: donut.scale.x,
      y: donut.scale.y,
      z: donut.scale.z
    };
  }
  
  // Initialize planets
  orbitalPlanets.forEach((planet, index) => {
    if (!planet) return;
    
    planet.userData.clickable = true;
    planet.userData.isShowingInfo = false;
    planet.userData.originalScale = {
      x: planet.scale.x,
      y: planet.scale.y,
      z: planet.scale.z
    };
  });
}

// Call this after creating your donut and planets
// This function should be called after all objects are created
function setupInteractiveObjects() {
  addDonutOutline();
  addPlanetOutlines();
  initializeObjectProperties();
}

// Add event listener for mouse movement
window.addEventListener('mousemove', checkMouseOverObjects);

// Special handling for the about section
function enhanceAboutSection() {
  const aboutSection = document.getElementById('about');
  
  // Check if we're currently on the about section
  if (aboutSection && currentSectionIndex === Array.from(sections).findIndex(section => section.id === 'about')) {
    // Make planets more visible
    orbitalPlanets.forEach(planet => {
      if (!planet) return; // Skip if planet is undefined
      
      if (!planet.userData.enhancedForAboutSection) {
        planet.userData.enhancedForAboutSection = true;
        
        // Store original values
        planet.userData.originalMaterialValues = {
          opacity: planet.material.opacity || 1
        };
        
        // Store emissive intensity only if the material supports it
        if (planet.material && planet.material.emissive) {
          planet.userData.originalMaterialValues.emissiveIntensity = planet.material.emissiveIntensity || 0;
          // Enhance visibility
          planet.material.emissiveIntensity = 0.6;
        }
        
        // Ensure full opacity
        if (planet.material && planet.material.transparent) {
          planet.material.opacity = 1;
        }
      }
    });
    
    // Make donut more prominent
    if (donut && !donut.userData.enhancedForAboutSection) {
      donut.userData.enhancedForAboutSection = true;
      
      // Store original values
      donut.userData.originalMaterialValues = {
        transmission: donut.material.transmission || 0,
        clearcoat: donut.material.clearcoat || 0
      };
      
      // Store emissive intensity only if the material supports it
      if (donut.material && donut.material.emissive) {
        donut.userData.originalMaterialValues.emissiveIntensity = donut.material.emissiveIntensity || 0;
        donut.material.emissiveIntensity = 0.15;
      }
      
      // Enhance visibility
      if (donut.material) {
        donut.material.transmission = 0.9;
        donut.material.clearcoat = 1;
      }
    }
  } else {
    // Reset enhancements if we're not on the about section
    orbitalPlanets.forEach(planet => {
      if (!planet) return; // Skip if planet is undefined
      
      if (planet.userData && planet.userData.enhancedForAboutSection) {
        planet.userData.enhancedForAboutSection = false;
        
        // Restore original values
        if (planet.userData.originalMaterialValues) {
          if (planet.material && planet.material.emissive && planet.userData.originalMaterialValues.emissiveIntensity !== undefined) {
            planet.material.emissiveIntensity = planet.userData.originalMaterialValues.emissiveIntensity;
          }
          
          if (planet.material && planet.material.transparent && planet.userData.originalMaterialValues.opacity !== undefined) {
            planet.material.opacity = planet.userData.originalMaterialValues.opacity;
          }
        }
      }
    });
    
    // Reset donut
    if (donut && donut.userData && donut.userData.enhancedForAboutSection) {
      donut.userData.enhancedForAboutSection = false;
      
      // Restore original values
      if (donut.userData.originalMaterialValues) {
        if (donut.material && donut.userData.originalMaterialValues.transmission !== undefined) {
          donut.material.transmission = donut.userData.originalMaterialValues.transmission;
        }
        
        if (donut.material && donut.userData.originalMaterialValues.clearcoat !== undefined) {
          donut.material.clearcoat = donut.userData.originalMaterialValues.clearcoat;
        }
        
        if (donut.material && donut.material.emissive && donut.userData.originalMaterialValues.emissiveIntensity !== undefined) {
          donut.material.emissiveIntensity = donut.userData.originalMaterialValues.emissiveIntensity;
        }
      }
    }
  }
}

function enhancedScrambleEffect(container, fullText) {
  container.innerHTML = "";
  
  if (!document.getElementById("cursor-blink-style")) {
    const style = document.createElement("style");
    style.id = "cursor-blink-style";
    style.innerHTML = `
      @keyframes cursor-blink {
        0% { opacity: 1; }
        50% { opacity: 0; }
        100% { opacity: 1; }
      }
      .typewriter-cursor {
        animation: cursor-blink 1.1s step-end infinite;
      }
    `;
    document.head.appendChild(style);
  }

  const scrambleChars = "!<>-_\\/[]{}—=+*^?#$%&@~`|•■□▪▫▶◀▲▼►◄★☆⚡✨⚠";
  const glitchChars = "░▒▓█▄▌▐▀■□▪▫▬▲►▼◄◊○●◘◙♠♣♥♦♪♫☼►◄↕‼¶§▬↨↑↓→←∟↔▲▼";

  let charIndex = 0;
  let isScrambling = false;
  let scrambleInterval = null;

  function getRandomChar(intensity = 1) {
    if (Math.random() < 0.3 * intensity) {
      return glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
    } else {
      return scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));
    }
  }

  function scrambleText(intensity = 1) {
    if (!isScrambling) return;

    const stableText = fullText.substring(0, charIndex);
    const scrambleLength = Math.floor(Math.random() * 5 * intensity) + 2;
    let scrambled = "";

    for (let i = 0; i < scrambleLength; i++) {
      if (Math.random() > 0.85 && intensity > 0.5) {
        scrambled += getRandomChar(intensity) + getRandomChar(intensity);
      } else {
        scrambled += getRandomChar(intensity);
      }
    }

    container.textContent = stableText + scrambled;
  }

  const typeNextChar = () => {
    if (charIndex < fullText.length) {
      // 3x faster speed range
      const speed = Math.floor(Math.random() * (200 / 3)) + (80 / 10);
      const randomValue = Math.random();

      if (randomValue > 0.55) {
        isScrambling = true;

        const isNearWordEnd = fullText.charAt(charIndex) === ' ' || 
                              fullText.charAt(charIndex + 1) === ' ' || 
                              fullText.charAt(charIndex) === '.' || 
                              fullText.charAt(charIndex + 1) === '.';

        const intensity = isNearWordEnd ? 0.8 : 0.4;

        const scrambleDuration = (Math.random() * 300 + (intensity * 200)) / 3;

        scrambleInterval = setInterval(() => scrambleText(intensity), (30 + Math.random() * 20) / 3);

        setTimeout(() => {
          clearInterval(scrambleInterval);
          isScrambling = false;
          charIndex++;
          container.textContent = fullText.substring(0, charIndex);
          setTimeout(typeNextChar, speed);
        }, scrambleDuration);
      } else if (randomValue > 0.88) {
        const current = fullText.substring(0, charIndex);
        const typoType = Math.random();

        if (typoType > 0.7) {
          const correctChar = fullText.charAt(charIndex);
          container.textContent = current + correctChar + correctChar;
        } else if (typoType > 0.3) {
          const keyboardRows = {
            'q': 'was', 'w': 'qase', 'e': 'wsdr', 'r': 'edft', 't': 'rfgy', 'y': 'tghu', 'u': 'yhji',
            'i': 'ujko', 'o': 'iklp', 'p': 'ol', 'a': 'qwsz', 's': 'awedxz', 'd': 'serfcx',
            'f': 'drtgvc', 'g': 'ftyhbv', 'h': 'gyujnb', 'j': 'huikmn', 'k': 'jiolm',
            'l': 'kop', 'z': 'asx', 'x': 'zsdc', 'c': 'xdfv', 'v': 'cfgb', 'b': 'vghn', 
            'n': 'bhjm', 'm': 'njk'
          };
          
          const correctChar = fullText.charAt(charIndex).toLowerCase();
          const adjacentKeys = keyboardRows[correctChar] || 'qwertyuiopasdfghjklzxcvbnm';
          const typoChar = adjacentKeys.charAt(Math.floor(Math.random() * adjacentKeys.length));
          container.textContent = current + typoChar;
        } else {
          const typoChar = "qwertyuiopasdfghjklzxcvbnm".charAt(Math.floor(Math.random() * 26));
          container.textContent = current + typoChar;
        }

        setTimeout(() => {
          container.textContent = current;
          setTimeout(typeNextChar, speed);
        }, 200 / 10);  // fix typo faster
      } else {
        charIndex++;
        container.textContent = fullText.substring(0, charIndex);

        const lastChar = fullText.charAt(charIndex - 1);
        const isPunctuation = ['.', ',', '!', '?', ':', ';', '-'].includes(lastChar);
        const isEndOfWord = lastChar === ' ' || charIndex === fullText.length;

        if (isPunctuation) {
          setTimeout(typeNextChar, speed * 2.5); // can keep this delay, or /3 if you want very fast
        } else if (isEndOfWord && Math.random() > 0.7) {
          setTimeout(typeNextChar, speed * 1.8);
        } else {
          setTimeout(typeNextChar, speed);
        }
      }
    }
  };

  setTimeout(typeNextChar, 100); // shortened initial delay too
}


function onMouseClick(event) {
  // Calculate normalized mouse coordinates
  const rect = renderer.domElement.getBoundingClientRect();
  mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  raycaster.setFromCamera(mouse, camera);

  // Create a list of all clickable objects - include both solid planets and point clouds
  const clickableObjects = [donut];

  orbitalPlanets.forEach(planet => {
    if (planet) {
      clickableObjects.push(planet);
      if (planet.userData.pointCloud) {
        clickableObjects.push(planet.userData.pointCloud);
      }
    }
  });

  const intersects = raycaster.intersectObjects(clickableObjects);

  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;

    let targetObject = null;
    let isDonut = false;

    if (clickedObject === donut) {
      targetObject = donut;
      isDonut = true;
    } else if (clickedObject.type === 'Points') {
      targetObject = clickedObject.userData.planet;
    } else {
      targetObject = clickedObject;
    }

    if (targetObject && targetObject.userData && targetObject.userData.clickable) {
      // Handle mobile-specific behavior
      if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Remove text boxes from other planets if a new one is clicked
        orbitalPlanets.forEach(planet => {
          if (planet.userData && planet.userData.pointCloud && planet !== targetObject) {
            const planetTextBox = document.querySelector(`.sci-fi-text-box[data-id="${planet.userData.index}"]`);
            if (planetTextBox) {
              planetTextBox.classList.remove('active');
              setTimeout(() => planetTextBox.remove(), 200);
              planet.userData.isShowingInfo = false;
            }
            // Switch other planets back to 'sphere' state
            const pointCloud = planet.userData.pointCloud;
            if (pointCloud.userData.currentState === 'shape') {
              animatePointCloudMorph(pointCloud, 'sphere');
              pointCloud.userData.currentState = 'sphere';
            }
          }
        });
      }

      // Donut-specific behavior (since it's not handled by togglePlanetView)
      if (isDonut) {
        const existingTextBox = document.querySelector(`.sci-fi-text-box[data-id="donut"]`);
        if (existingTextBox && targetObject.userData.isShowingInfo) {
          // If the text box is showing, remove it on second click
          existingTextBox.classList.remove('active');
          setTimeout(() => existingTextBox.remove(), 200);
          targetObject.userData.isShowingInfo = false;
        } else if (!existingTextBox && !targetObject.userData.isShowingInfo) {
          // If the text box doesn't exist, create it on the first click
          const fullText = "This is the central donut object of our universe. It represents the core of our system.";
          const textBox = createSciFiTextBox("", {
            x: targetObject.position.x,
            y: targetObject.position.y,
            z: targetObject.position.z,
            objectIndex: null
          }, true);

          enhancedScrambleEffect(textBox, fullText);
          targetObject.userData.isShowingInfo = true;
        }
      } else {
        // Let togglePlanetView handle both morph and text box
        togglePlanetView(targetObject);
      }

      // Click animation (still here)
      if (!targetObject.userData.originalScale) {
        targetObject.userData.originalScale = {
          x: targetObject.scale.x,
          y: targetObject.scale.y,
          z: targetObject.scale.z
        };
      }

      const originalScale = new THREE.Vector3(
        targetObject.userData.originalScale.x,
        targetObject.userData.originalScale.y,
        targetObject.userData.originalScale.z
      );

      gsap.to(targetObject.scale, {
        x: originalScale.x * 1.2,
        y: originalScale.y * 1.2,
        z: originalScale.z * 1.2,
        duration: 0.3,
        yoyo: true,
        repeat: 1,
        onComplete: () => {
          targetObject.scale.set(
            originalScale.x,
            originalScale.y,
            originalScale.z
          );
        }
      });
    }
  }
}




let hasTriggeredTypewriterEffect = false;
let typewriterInterval = null;

// Function to trigger the typewriter effect on scroll
function triggerTypewriterEffect() {
  if (hasTriggeredTypewriterEffect) return; // Check if it's already triggered

  const animatedText = document.querySelector("#animatedText");
  if (!animatedText) return; // Guard clause if element doesn't exist
  
  // Set up CSS for the container
  animatedText.style.position = "relative";
  animatedText.style.display = "inline-block";
  
  // Clear any previous content
  animatedText.innerHTML = "";
  
  // Create a text span
  const container = document.createElement("span");
  container.className = "typewriter-text";
  animatedText.appendChild(container);
  
  // Create the cursor element
  const cursorSpan = document.createElement("span");
  cursorSpan.className = "typewriter-cursor";
  cursorSpan.innerHTML = "|";
  cursorSpan.style.display = "inline-block";
  cursorSpan.style.marginLeft = "2px";
  cursorSpan.style.color = "#ffffff"; // Make sure cursor is visible (white color)
  cursorSpan.style.fontWeight = "bold"; // Make it more visible
  animatedText.appendChild(cursorSpan);
  
  // Add CSS for cursor blinking animation
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes cursor-blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
    .typewriter-cursor {
      animation: cursor-blink 1.1s step-end infinite;
    }
  `;
  document.head.appendChild(style);
  
  // Set the flag to true before animation starts
  hasTriggeredTypewriterEffect = true;
  
  // The full text to type
  const fullText = "My Projects";
  
  // Characters for scrambling effect
  const scrambleChars = "!<>-_\\/[]{}—=+*^?#________";
  
  // Initialize tracking variables
  let charIndex = 0;
  let scrambleInterval = null;
  let isScrambling = false;
  
  // Clear any existing interval
  if (typewriterInterval) {
    clearInterval(typewriterInterval);
    typewriterInterval = null;
  }
  
  // Function to get a random character from scramble chars
  function getRandomChar() {
    return scrambleChars.charAt(Math.floor(Math.random() * scrambleChars.length));
  }
  
  // Function to scramble text
  function scrambleText() {
    if (!isScrambling) return;
    
    // Get current finished text portion
    const stableText = fullText.substring(0, charIndex);
    
    // Generate scrambled portion (between 2-6 chars)
    const scrambleLength = Math.floor(Math.random() * 4) + 2;
    let scrambledPortion = "";
    
    for (let i = 0; i < scrambleLength; i++) {
      scrambledPortion += getRandomChar();
    }
    
    // Update the display
    container.textContent = stableText + scrambledPortion;
  }
  
  // Function to handle the typewriter animation
  const typeNextChar = () => {
    if (charIndex < fullText.length) {
      // Generate random typing delay (between 50-300ms) for realism
      const typingSpeed = Math.floor(Math.random() * 50) + 80;
      const randomValue = Math.random();
      
      // Occasionally show scrambling effect before adding next character
      if (randomValue > 0.7) {
        // Start scrambling
        isScrambling = true;
        
        // Create scramble effect
        scrambleInterval = setInterval(scrambleText, 50);
        
        // After a brief scramble, stop and add the next real character
        setTimeout(() => {
          // Stop scrambling
          clearInterval(scrambleInterval);
          isScrambling = false;
          
          // Add the next character
          charIndex++;
          container.textContent = fullText.substring(0, charIndex);
          
          // Continue with the next character
          setTimeout(typeNextChar, typingSpeed);
        }, Math.random() * 300 + 100);
      } 
      // Occasionally make a typo
      else if (randomValue > 0.92) {
        // Simulate a typo
        const typoChars = "qwertyuiopasdfghjklzxcvbnm";
        const randomTypo = typoChars.charAt(Math.floor(Math.random() * typoChars.length));
        
        // Insert typo
        const currentText = fullText.substring(0, charIndex);
        container.textContent = currentText + randomTypo;
        
        // Then delete it after a small delay
        setTimeout(() => {
          container.textContent = currentText;
          
          // Continue with the next character
          setTimeout(typeNextChar, typingSpeed);
        }, 200);
      }
      // Normal typing
      else {
        charIndex++;
        container.textContent = fullText.substring(0, charIndex);
        
        // Occasionally pause longer (as if thinking)
        if (randomValue > 0.85) {
          setTimeout(typeNextChar, Math.random() * 600 + 400);
        } else {
          // Regular typing speed
          setTimeout(typeNextChar, typingSpeed);
        }
      }
    } else {
      // Text is complete
      console.log("Typewriter animation completed");
      // Keep the cursor blinking after completion
    }
  };
  
  // Start everything with a 3-second delay
  setTimeout(() => {
    setTimeout(typeNextChar, 100); // Start the typewriter effect after 3 seconds
  }, 1250); // Delay before starting everything (3000ms = 3 seconds)
  
  // Set up the ScrollTrigger to start the animation
  ScrollTrigger.create({
    trigger: "#animatedText",
    start: "top 80%",
    end: "bottom top", 
    markers: false,
    onLeaveBack: () => {
      // Reset if scrolling back up
      if (charIndex < fullText.length) {
        // Clear any scrambling in progress
        if (scrambleInterval) {
          clearInterval(scrambleInterval);
          isScrambling = false;
        }
        
        // Reset text
        container.textContent = "";
        charIndex = 0;
        
        // Restart animation
        setTimeout(typeNextChar, 100);
      }
    }
  });
}


let targetCameraX = 0;
let targetCameraY = 0;

window.addEventListener('mousemove', (event) => {
  // Normalize mouse coords (-1 to 1)
  const x = (event.clientX / window.innerWidth) * 2 - 1;
  const y = -(event.clientY / window.innerHeight) * 2 + 1;

  // Multiply to set how much the camera should move
  targetCameraX = x * 6;
  targetCameraY = y * 3.6;
});
function animateParticles(delta) {
  orbitalPlanets.forEach(planet => {
    if (planet && planet.userData.pointCloud) {
      const pointCloud = planet.userData.pointCloud;
      
      // Only animate if not currently morphing
      if (!pointCloud.userData.animating) {
        // Subtle motion for particles when in sphere state
        if (pointCloud.userData.currentState === 'sphere' && pointCloud.visible) {
          const positions = pointCloud.geometry.attributes.position.array;
          const time = Date.now() * 0.0005;
          
          for (let i = 0; i < positions.length; i += 3) {
            // Get original position
            const originalX = pointCloud.userData.originalPositions[i];
            const originalY = pointCloud.userData.originalPositions[i+1];
            const originalZ = pointCloud.userData.originalPositions[i+2];
            
            // Add subtle wave motion
            positions[i] = originalX + Math.sin(time + i * 0.01) * 0.05;
            positions[i+1] = originalY + Math.cos(time + i * 0.01) * 0.05;
            positions[i+2] = originalZ + Math.sin(time + i * 0.02) * 0.05;
          }
          
          pointCloud.geometry.attributes.position.needsUpdate = true;
        }
      }
    }
  });
}
// Add click event listener
window.addEventListener('click', onMouseClick);
let idleTime = 0;
const fogElement = document.body.querySelector('.purple-fog');
const clock = new THREE.Clock();

function animate() {
  const delta = clock.getDelta();
  updateComets(delta);
  if (typeof animationFunction === 'function') {
    animationFunction();
  }

  requestAnimationFrame(animate);
  time += 0.01;
  idleTime += 0.01; // Used for idle motion

  if (controls) controls.update();

  if (typeof animateStars === 'function' && starField) {
    animateStars(starField, time);
  }

  if (orbitalPlanets && orbitalPlanets.length > 0) {
    orbitalPlanets.forEach(planet => {
      if (!planet) return;

      if (!planet.userData.rotationSpeed) {
        planet.userData.rotationSpeed = {
          x: Math.random() * (0.002 - 0.0003) + 0.0003,
          y: Math.random() * (0.002 - 0.000005) + 0.000005,
          z: Math.random() * (0.0008 - 0.0003) + 0.0003
        };
      }

      updatePlanetPosition(planet, time);

      const { x, y, z } = planet.userData.rotationSpeed;
      planet.rotation.x += x;
      planet.rotation.y += y;
      planet.rotation.z += z;
    });
  }

  updateTextBoxPositions();

  if (typeof animateParticlesStar === 'function') {
    animateParticlesStar();
  }
  if (typeof animateParticles === 'function') {
    animateParticles();
  }
  enhanceAboutSection();

  if (typeof animateLights === 'function') {
    animateLights(time);
  }
  // Smooth camera movement (lerping)
  camera.position.x += (targetCameraX - camera.position.x) * 0.05;
  camera.position.y += (targetCameraY - camera.position.y) * 0.05;

  camera.lookAt(scene.position); // Always look at the center
  renderer.autoClear = true;
  renderer.clear();
  renderer.render(scene, camera);
  
  if (current_page !== "home") {
    fogElement.style.opacity = '1'; // Full opacity (visible)
  } else {
    fogElement.style.opacity = '0'; // Fully transparent (invisible)
  }
  
  if (current_page == "about") {
    renderer.autoClear = false;
    renderer.render(planetScene, camera);
  } else {
    const textBoxes = document.getElementsByClassName('sci-fi-text-box');
    Array.from(textBoxes).forEach(textBox => {
      textBox.classList.remove('active');
      setTimeout(() => {
        textBox.remove();
      }, 100);
    });
  }

  const blackGradient = document.querySelector('.black-gradient');
  if (blackGradient) {
    if (current_page === 'projects') {
      blackGradient.classList.add('visible');
      
      // Call the typewriter effect function when on projects page
      if (!hasTriggeredTypewriterEffect) {
        triggerTypewriterEffect();
      }
    } else {
      blackGradient.classList.remove('visible');
      // Reset the flag when not on projects page
      hasTriggeredTypewriterEffect = false;
    }
  }
}

function updatePlanetPosition(planet, time) {
  if (!planet || !planet.userData || !planet.userData.pivot) return;

  // The pivot contains both the solid planet and point cloud
  const pivot = planet.userData.pivot;
  
  // Randomize tilt and spin direction only once
  if (planet.userData.orbitDirection === undefined) {
    planet.userData.orbitDirection = Math.random() < 0.5 ? 1 : -1;
  }

  const { orbitRadius, orbitSpeed, orbitPhase, orbitTilt, orbitDirection } = planet.userData;

  // Calculate current angle with direction factor
  const angle = orbitPhase + time * orbitSpeed * orbitDirection;

  // Apply rotation to the pivot instead of the planet directly
  pivot.rotation.y = angle;
  
  // Apply tilt to the pivot
  pivot.rotation.x = orbitTilt;
  
  // Position the planet along the orbit circle
  const x = orbitRadius * Math.sin(angle);
  const z = orbitRadius * Math.cos(angle);
  
  // We won't set position on planets anymore since they're children of the pivot
  // Just update the y position to create the tilt effect if needed
  const y = orbitRadius * Math.sin(angle) * orbitTilt;
  
  // Optional - if you want to modulate the y position for wobble effect
  pivot.position.x = x;
  pivot.position.z = z;
  pivot.position.y = y;
}
// Function to hide loading screen
function hideLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
    setTimeout(() => {
      loadingScreen.style.display = 'none';
    }, 500);
  }
}

// Ensure loading screen is hidden after everything is initialized
// Replace all instances of createNavDots with createNavMenu
window.addEventListener('load', () => {
  // Make sure all objects have required properties
  setupInteractiveObjects();
  
  // Hide loading after small delay to ensure Three.js scene is ready
  setTimeout(hideLoading, 1500);
  
  // Go to first section
  goToSection(0); // Start at the first section
  
  console.log(navigator.userAgent);
  // Start animation loop
  animate()
});

// Fallback: If after 8 seconds we're still loading, force hide the loading screen
setTimeout(hideLoading, 8000);

let isMobile = /Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent) || ('ontouchstart' in window || navigator.maxTouchPoints > 0);

function initializeDraggable() {
  if (isMobile) return;

  console.log("isMobile no");
  gsap.from(".project-card", {
    y: 100,
    opacity: 0,
    stagger: 0.15,
    duration: 1,
    ease: "power3.out"
  });

  document.querySelectorAll(".project-card").forEach(card => {
    Draggable.create(card, {
      type: "x,y",
      edgeResistance: 0.8,
      bounds: window,
      inertia: false,
      onPress() {
        this.startX = this.x;
        this.startY = this.y;
      },
      onRelease() {
        // Estimate velocity based on position change
        const dx = this.x - this.startX;
        const dy = this.y - this.startY;
        let vx = dx * 0.5;
        let vy = dy * 0.5;
        const friction = 0.95;

        const animate = () => {
          vx *= friction;
          vy *= friction;

          this.x += vx;
          this.y += vy;
          this.update();

          if (Math.abs(vx) > 0.5 || Math.abs(vy) > 0.5) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    });
  });
}

// Run once initially
initializeDraggable();

// Re-check device type and re-initialize if needed
setInterval(() => {
  const currentIsMobile = /Mobi|Android|iPhone|iPad|iPod|Touch/i.test(navigator.userAgent) || ('ontouchstart' in window || navigator.maxTouchPoints > 0);
  if (currentIsMobile !== isMobile) {
    isMobile = currentIsMobile;
    initializeDraggable();
  }
}, 2000)
