import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';  // Import Draggable plugin

// Register the GSAP Draggable plugin
gsap.registerPlugin(Draggable);

// Initialize time variable globally
let time = 0;
let hasExploded = false;
let current_page = "home"


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
  const totalShapes = 120;
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
  const subtitleElement = document.querySelector('.intro-subtitle');
  
  gsap.to(titleElement, {
    opacity: 1,
    duration: 1.5,
    delay: 1,
    ease: "power2.out"
  });
  
  gsap.to(subtitleElement, {
    opacity: 1,
    duration: 1,
    delay: 2,
    ease: "power2.out",
    repeatDelay: 1,
    repeat: -1,
    yoyo: true
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
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
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
    const suckSpeed = 0.05; // Increase this for faster sucking
    
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
    
    // Check if shapes are close enough to center to trigger explosion
    let allShapesNearCenter = true;
    shapes.forEach(shape => {
      const distanceToCenter = shape.mesh.position.length();
      if (distanceToCenter > 5) {
        allShapesNearCenter = false;
      }
    });
    
    // Trigger explosion when all shapes are near center or after a time threshold
  }
  // Handle explosion animation
  else if (hasExploded && !introComplete) {
    // Animate the exploding shapes
    shapes.forEach(shape => {
      if (!isDragging || selectedShape !== shape.mesh) {
        // Move in explosion direction
        shape.mesh.position.x += shape.explosionDirection.x * shape.explosionSpeed;
        shape.mesh.position.y += shape.explosionDirection.y * shape.explosionSpeed;
        shape.mesh.position.z += shape.explosionDirection.z * shape.explosionSpeed;
        
        // Add some gravity effect
        shape.explosionDirection.y -= 0.01;
        
        // Slow down over time
        shape.explosionSpeed *= 0.99;
        
        // Rotate during explosion
        shape.mesh.rotation.x += shape.rotationSpeed.x * 2;
        shape.mesh.rotation.y += shape.rotationSpeed.y * 2;
        shape.mesh.rotation.z += shape.rotationSpeed.z * 2;
        
        // Fade in during explosion
        if (shape.mesh.material.opacity < 0.7) {
          shape.mesh.material.opacity += 0.02;
        }
        
        // Grow slightly during explosion
        if (shape.mesh.scale.x < 1) {
          const growFactor = 1.02;
          shape.mesh.scale.x *= growFactor;
          shape.mesh.scale.y *= growFactor;
          shape.mesh.scale.z *= growFactor;
        }
      }
    });
    
    // Mark intro as complete after all shapes have exploded
    if (introTime > 8) {
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

// Handle click to proceed to main site
document.getElementById('intro-screen').addEventListener('click', () => {
  triggerExplosion()
    // If already exploded, just proceed to main page
    gsap.to('#intro-screen', {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        document.getElementById('intro-screen').style.display = 'none';
        // Start your main page animation here
        // Make your main page visible
        gsap.to('#bg', {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut"
        });
        // Start your main animation loop
        createNavDots();
        goToSection(0);
        animate();
      }
    });
  })
function triggerExplosion() {
  hasExploded = true;
}
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
  color: 0xffffff,      // Dark gray/black tint
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

// Add scattered particles around the middle (no ring shape)
const middleStarsGeometry = new THREE.BufferGeometry();
const middleStarsCount = 1000; // Small number for subtle scattered particles around the middle

const middleStarsPosArray = new Float32Array(middleStarsCount * 3);
const middleStarsColorArray = new Float32Array(middleStarsCount * 3);

function getRandomColor() {
  const colors = [
    new THREE.Color(0x3d1e00), // Brown
    new THREE.Color(0xffffff), // White
    new THREE.Color(0x831aa5), // Purple
    new THREE.Color(0x1f6b7a), // Teal
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
  const x = radius * Math.cos(angle);
  const z = radius * Math.sin(angle);
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
  vertexColors: true
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
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
    cameraZ: 350, // Move camera far back
    cameraY: -200, // Move camera down
    cameraX: 0,
    cameraRotationY: 0,
    donutScale: 0.3, // Make the donut smaller as we move away
    donutRotation: { x: Math.PI / 2, y: Math.PI / 3, z: Math.PI / 6 },
    donutPosition: { x: 0, y: 50, z: 0 } // Move the donut up as we move down
  },
  contact: {
    cameraZ: 25,
    cameraX: 0,
    cameraY: 0,
    cameraRotationY: 0, // Camera looking straight ahead
    donutScale: 0.8,
    donutRotation: { x: Math.PI * 1.25, y: Math.PI / 2, z: Math.PI / 4 },
    donutPosition: { x: 0, y: 5, z: -5 }
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

// Use instanced mesh for better performance
function createStarField() {
  const starCount = 1000;
  
  // Use low-poly geometry for stars
  const geometry = new THREE.SphereGeometry(0.05, 8, 6);
  
  // Create a material that can handle color changes
  const starMaterial = new THREE.MeshStandardMaterial({
    emissive: 0xffffff,
    emissiveIntensity: 1,
    metalness: 0.3,
    roughness: 0.2,
    vertexColors: true,
  });
  
  // Create instanced mesh
  const instancedMesh = new THREE.InstancedMesh(
    geometry,
    starMaterial,
    starCount
  );
  
  // Define star colors
  const colors = [
    new THREE.Color(0xff0000), // Red
    new THREE.Color(0x0000ff), // Blue
    new THREE.Color(0x831aa5), // Purple
    new THREE.Color(0xffffff)  // White
  ];
  
  const dummy = new THREE.Object3D();
  
  // Create arrays to store star properties for animation
  const starProperties = [];
  
  for (let i = 0; i < starCount; i++) {
    // Set random position in a larger sphere around the camera
    const radius = 50 + Math.random() * 150; // Spread stars further out
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI;
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    dummy.position.set(x, y, z);
    
    // Random initial scale for twinkling effect
    const initialScale = 0.5 + Math.random() * 1.5;
    dummy.scale.set(initialScale, initialScale, initialScale);
    
    dummy.updateMatrix();
    instancedMesh.setMatrixAt(i, dummy.matrix);
    
    // Store properties for animation
    starProperties.push({
      position: { x, y, z },
      originalScale: initialScale,
      twinkleSpeed: 0.5 + Math.random() * 2,
      twinklePhase: Math.random() * Math.PI * 2,
      colorIndex: Math.floor(Math.random() * colors.length),
      colorTransitionSpeed: 0.2 + Math.random() * 0.8
    });
    
    // Set initial color
    instancedMesh.setColorAt(i, colors[starProperties[i].colorIndex]);
  }
  
  instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(new Float32Array(starCount * 3), 3);
  instancedMesh.geometry.setAttribute('instanceColor', instancedMesh.instanceColor);
  
  
  // Make stars persistent by adding to the scene directly
  scene.add(instancedMesh);
  
  return { mesh: instancedMesh, properties: starProperties, colors: colors };
}

createStarField()
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
const scrollDelay = 2000; // 3 seconds before next scroll allowed
let currentSectionIndex = 0;
const sections = document.querySelectorAll('.section');

// Lock scroll function
function preventScroll(e) {
  if (isScrolling) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }
}

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

// Handle section changes
function goToSection(index) {
  if (isScrolling || index < 0 || index >= sections.length) return;
  
  isScrolling = true;
  currentSectionIndex = index;
  
  // Update UI state
  document.querySelectorAll('.nav-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
  
  // Scroll to section
  sections[index].scrollIntoView({ behavior: 'smooth' });
  
  // Animate 3D scene
  const sectionId = sections[index].id;
  current_page = sectionId;

  if (sectionId === 'projects') {
    if (sectionId === 'projects') {
      if (states[sectionId]) {
        animateState(states[sectionId]);
      }
  
      setTimeout(() => {
        const projectsContainer = document.getElementById("projects-2d-container")
        if (projectsContainer) {
          projectsContainer.classList.add('visible');
          setupProjectScrollHandler(); // 👈 Enable scroll detection inside project view
  
          setTimeout(() => {
            document.getElementById('bg').style.opacity = '0';
          }, 800);
        }
      }, 1000);
    } 
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
        scene.background = new THREE.Color(0xffffff);
        donutMaterial.color = new THREE.Color(0xc92900)
        current_page == "home"
        break;
      case 'about':
        donut.rotation.x += baseSpeed * 0.8;
        donut.rotation.z += baseSpeed * 0.3;
        donut.position.x = Math.sin(time * 1.2) * baseAmplitude;
        scene.background = new THREE.Color(0x040428);
        donutMaterial.color = new THREE.Color(0xffffff)
        current_page == "about"
        break;
      case 'projects':
        donut.rotation.z += baseSpeed * 1.2;
        donut.position.y = Math.sin(time * 0.8) * baseAmplitude * 1.5;
        donut.position.x = Math.cos(time * 0.5) * baseAmplitude;
        scene.background = new THREE.Color(0x000020);
        donutMaterial.color = new THREE.Color(0x002f9b)
        current_page == "projects"
        break;
      case 'contact':
        donut.rotation.y -= baseSpeed * 0.7;
        donut.rotation.x += baseSpeed * 0.3;
        donut.position.z = Math.sin(time * 0.6) * baseAmplitude;
        scene.background = new THREE.Color(0x000020);
        donutMaterial.color = new THREE.Color(0x6200ce)
        current_page == "contact"
        break;
    }
    
    idleAnimationId = requestAnimationFrame(idleAnimation);
  }
  
  idleAnimation();
}

// Create navigation dots
function createNavDots() {
  const navContainer = document.createElement('div');
  navContainer.className = 'nav-dots';
  
  sections.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.className = 'nav-dot';
    if (index === 0) dot.classList.add('active');
    
    dot.addEventListener('click', () => {
      if (!isScrolling) {
        goToSection(index);
      }
    });
    
    navContainer.appendChild(dot);
  });
  
  document.body.appendChild(navContainer);
}

// Set up intersection observer for each section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !isScrolling) {
      const id = entry.target.id;
      const index = Array.from(sections).findIndex(section => section.id === id);
      
      if (index !== currentSectionIndex) {
        currentSectionIndex = index;
        
        // Update nav dots
        document.querySelectorAll('.nav-dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
        
        // Start animation
        isScrolling = true;
        if (states[id]) {
          animateState(states[id]);
        }
        
        // Apply section-specific idle animation
        applyDonutIdleAnimation(id);
        
        // Release scroll lock after delay
        setTimeout(() => {
          isScrolling = false;
        }, scrollDelay);
      }
    }
  });
}, { threshold: 0.5 });

// Observe each section element
sections.forEach(section => {
  observer.observe(section);
});

// Initialize keyboard navigation
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowDown' || event.key === 'PageDown') {
    goToSection(currentSectionIndex + 1);
  } else if (event.key === 'ArrowUp' || event.key === 'PageUp') {
    goToSection(currentSectionIndex - 1);
  }
});

// Handle mouse wheel events for controlled scrolling
sectionsContainer.addEventListener('wheel', (event) => {
  if (!isScrolling) {
    if (event.deltaY > 0) {
      // Scroll down
      goToSection(currentSectionIndex + 1);
    } else {
      // Scroll up
      goToSection(currentSectionIndex - 1);
    }
  }
}, { passive: false });

// Handle touch events for mobile
let touchStartY = 0;

function handleTouchStart(event) {
  touchStartY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  if (isScrolling) return;

  const touchEndY = event.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      goToSection(currentSectionIndex + 1);
    } else {
      goToSection(currentSectionIndex - 1);
    }
  }
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
function animateParticles() {
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

const textureLoader = new THREE.TextureLoader();

// Load all textures you need first
const jsTexture = textureLoader.load('JS.png'); // Transparent PNG with JS logo

function createCustomPlanets() {
  const planets = [];

  // JS Planet
  const jsPlanetData = {
    name: "JS",
    size: 5,
    texture: jsTexture,
    orbitRadius: 25,
    orbitSpeed: 0.09,
    orbitPhase: 0,
    orbitTilt: 0.1,
    info: "2 Years of Javascript Working Experience"
  };

  const jsPlanetGeometry = new THREE.BoxGeometry(jsPlanetData.size, jsPlanetData.size, jsPlanetData.size);
  const jsPlanetMaterial = jsPlanetData.texture
    ? new THREE.MeshBasicMaterial({
        map: jsPlanetData.texture,
        transparent: true,
        side: THREE.DoubleSide,
      })
    : new THREE.MeshPhysicalMaterial({
        roughness: 0.4,
        metalness: 0.7,
        side: THREE.DoubleSide,
      });
  const jsPlanet = new THREE.Mesh(jsPlanetGeometry, jsPlanetMaterial);

  const jsOutlineGeometry = new THREE.BoxGeometry(jsPlanetData.size * 1.1, jsPlanetData.size * 1.1, jsPlanetData.size * 1.1);
  const jsOutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
  });
  const jsOutlineMesh = new THREE.Mesh(jsOutlineGeometry, jsOutlineMaterial);
  jsPlanet.add(jsOutlineMesh);
  jsPlanet.userData.outlineMesh = jsOutlineMesh;
  jsPlanet.userData = { ...jsPlanet.userData, ...jsPlanetData };
  planetScene.add(jsPlanet);
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
    info: "Farmer!!!!!"
  };

  const zephyriaPlanetGeometry = new THREE.BoxGeometry(zephyriaPlanetData.size, zephyriaPlanetData.size, zephyriaPlanetData.size);
  const zephyriaPlanetMaterial = new THREE.MeshPhysicalMaterial({
    color: zephyriaPlanetData.color,
    roughness: 0.4,
    metalness: 0.7,
    side: THREE.DoubleSide,
  });
  const zephyriaPlanet = new THREE.Mesh(zephyriaPlanetGeometry, zephyriaPlanetMaterial);

  const zephyriaOutlineGeometry = new THREE.BoxGeometry(zephyriaPlanetData.size * 1.1, zephyriaPlanetData.size * 1.1, zephyriaPlanetData.size * 1.1);
  const zephyriaOutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
  });
  const zephyriaOutlineMesh = new THREE.Mesh(zephyriaOutlineGeometry, zephyriaOutlineMaterial);
  zephyriaPlanet.add(zephyriaOutlineMesh);
  zephyriaPlanet.userData.outlineMesh = zephyriaOutlineMesh;
  zephyriaPlanet.userData = { ...zephyriaPlanet.userData, ...zephyriaPlanetData };
  planetScene.add(zephyriaPlanet);
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
    info: "No clue"
  };

  const verdantiaPlanetGeometry = new THREE.BoxGeometry(verdantiaPlanetData.size, verdantiaPlanetData.size, verdantiaPlanetData.size);
  const verdantiaPlanetMaterial = new THREE.MeshPhysicalMaterial({
    color: verdantiaPlanetData.color,
    roughness: 0.4,
    metalness: 0.7,
    side: THREE.DoubleSide,
  });
  const verdantiaPlanet = new THREE.Mesh(verdantiaPlanetGeometry, verdantiaPlanetMaterial);

  const verdantiaOutlineGeometry = new THREE.BoxGeometry(verdantiaPlanetData.size * 1.1, verdantiaPlanetData.size * 1.1, verdantiaPlanetData.size * 1.1);
  const verdantiaOutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
  });
  const verdantiaOutlineMesh = new THREE.Mesh(verdantiaOutlineGeometry, verdantiaOutlineMaterial);
  verdantiaPlanet.add(verdantiaOutlineMesh);
  verdantiaPlanet.userData.outlineMesh = verdantiaOutlineMesh;
  verdantiaPlanet.userData = { ...verdantiaPlanet.userData, ...verdantiaPlanetData };
  planetScene.add(verdantiaPlanet);
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
    info: "No clue"
  };

  const nautilusPlanetGeometry = new THREE.BoxGeometry(nautilusPlanetData.size, nautilusPlanetData.size, nautilusPlanetData.size);
  const nautilusPlanetMaterial = new THREE.MeshPhysicalMaterial({
    color: nautilusPlanetData.color,
    roughness: 0.4,
    metalness: 0.7,
    side: THREE.DoubleSide,
  });
  const nautilusPlanet = new THREE.Mesh(nautilusPlanetGeometry, nautilusPlanetMaterial);

  const nautilusOutlineGeometry = new THREE.BoxGeometry(nautilusPlanetData.size * 1.1, nautilusPlanetData.size * 1.1, nautilusPlanetData.size * 1.1);
  const nautilusOutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
  });
  const nautilusOutlineMesh = new THREE.Mesh(nautilusOutlineGeometry, nautilusOutlineMaterial);
  nautilusPlanet.add(nautilusOutlineMesh);
  nautilusPlanet.userData.outlineMesh = nautilusOutlineMesh;
  nautilusPlanet.userData = { ...nautilusPlanet.userData, ...nautilusPlanetData };
  planetScene.add(nautilusPlanet);
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
    info: "No clue"
  };

  const mystaraPlanetGeometry = new THREE.BoxGeometry(mystaraPlanetData.size, mystaraPlanetData.size, mystaraPlanetData.size);
  const mystaraPlanetMaterial = new THREE.MeshPhysicalMaterial({
    color: mystaraPlanetData.color,
    roughness: 0.4,
    metalness: 0.7,
    side: THREE.DoubleSide,
  });
  const mystaraPlanet = new THREE.Mesh(mystaraPlanetGeometry, mystaraPlanetMaterial);

  const mystaraOutlineGeometry = new THREE.BoxGeometry(mystaraPlanetData.size * 1.1, mystaraPlanetData.size * 1.1, mystaraPlanetData.size * 1.1);
  const mystaraOutlineMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.BackSide,
    transparent: true,
    opacity: 0,
  });
  const mystaraOutlineMesh = new THREE.Mesh(mystaraOutlineGeometry, mystaraOutlineMaterial);
  mystaraPlanet.add(mystaraOutlineMesh);
  mystaraPlanet.userData.outlineMesh = mystaraOutlineMesh;
  mystaraPlanet.userData = { ...mystaraPlanet.userData, ...mystaraPlanetData };
  planetScene.add(mystaraPlanet);
  planets.push(mystaraPlanet);

  return planets;
}

// Create the planets
const orbitalPlanets = createCustomPlanets();



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
      // Convert 3D position to screen coordinates
      const position = new THREE.Vector3(
        object.position.x,
        object.position.y,
        object.position.z
      );
      
      // Project 3D position to 2D screen coordinates
      position.project(camera);
      
      // Convert to CSS coordinates
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
  
  // Create the text box content
  textBox.innerHTML = `
    <div class="sci-fi-text-box-content">
      <div class="sci-fi-text-box-header"></div>
      <div class="sci-fi-text-box-body">${text}</div>
      <div class="sci-fi-text-box-footer"></div>
    </div>
  `;
  
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
  
  textBox.querySelector('.sci-fi-text-box-content').appendChild(closeButton);
  
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

// Handle clicks on objects
function onMouseClick(event) {
  // Calculate mouse position
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  
  // Update the raycaster
  raycaster.setFromCamera(mouse, camera);
  
  // Check for intersections with clickable objects
  const clickableObjects = [donut, ...orbitalPlanets].filter(obj => obj !== undefined);
  const intersects = raycaster.intersectObjects(clickableObjects);
  
  if (intersects.length > 0) {
    const clickedObject = intersects[0].object;
    
    if (clickedObject && clickedObject.userData && clickedObject.userData.clickable) {
      // Check if the object is the donut
      const isDonut = clickedObject === donut;
      
      // Toggle info display
      clickedObject.userData.isShowingInfo = !clickedObject.userData.isShowingInfo;
      
      if (clickedObject.userData.isShowingInfo) {
        // Display info for the clicked object
        let info = "";
        
        if (isDonut) {
          info = "This is the central donut object of our universe. It represents the core of our system.";
        } else {
          // Check if the clicked object is in the orbitalPlanets array
          const planetIndex = orbitalPlanets.indexOf(clickedObject);
          if (planetIndex !== -1) {
            const planet = orbitalPlanets[planetIndex];
            info = `<strong>${planet.userData.name}</strong>: ${planet.userData.info}`; // Make the name bold

          }
        }
        
        // Create the info box
        createSciFiTextBox(info, {
          x: clickedObject.position.x,
          y: clickedObject.position.y,
          z: clickedObject.position.z,
          objectIndex: isDonut ? null : orbitalPlanets.indexOf(clickedObject)
        }, isDonut);
        
        // Make sure originalScale exists before using it
        if (!clickedObject.userData.originalScale) {
          clickedObject.userData.originalScale = {
            x: clickedObject.scale.x,
            y: clickedObject.scale.y,
            z: clickedObject.scale.z
          };
        }
        
        // Pulse animation
        const originalScale = new THREE.Vector3(
          clickedObject.userData.originalScale.x,
          clickedObject.userData.originalScale.y,
          clickedObject.userData.originalScale.z
        );
        
        gsap.to(clickedObject.scale, {
          x: originalScale.x * 1.2,
          y: originalScale.y * 1.2,
          z: originalScale.z * 1.2,
          duration: 0.3,
          yoyo: true,
          repeat: 1,
          onComplete: () => {
            // Reset to EXACTLY the original scale values
            clickedObject.scale.set(
              originalScale.x,
              originalScale.y,
              originalScale.z
            );
          }
        });
      } else {
        // Remove the text box if it exists
        const textBox = document.querySelector(`.sci-fi-text-box[data-id="${isDonut ? 'donut' : orbitalPlanets.indexOf(clickedObject)}"]`);
        if (textBox) {
          textBox.classList.remove('active');
          setTimeout(() => {
            textBox.remove();
          }, 500);
        }
      }
    }
  }
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

// Add click event listener
window.addEventListener('click', onMouseClick);
let idleTime = 0;
const fogElement = document.body.querySelector('.purple-fog');
// Animation loop for the main site
function animate() {
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
    } else {
      blackGradient.classList.remove('visible');
    }
  }
}

function updatePlanetPosition(planet, time) {
  if (!planet || !planet.userData) return;

  // Randomize tilt and spin direction only once
  if (planet.userData.orbitDirection === undefined) {       // Random tilt
    planet.userData.orbitDirection = Math.random() < 0.5 ? 1 : -1; // 50/50 spin
  }

  const { orbitRadius, orbitSpeed, orbitPhase, orbitTilt, orbitDirection } = planet.userData;

  // Calculate current angle with direction factor
  const angle = orbitPhase + time * orbitSpeed * orbitDirection;

  // Circular orbit
  planet.position.x = orbitRadius * Math.sin(angle);
  planet.position.z = orbitRadius * Math.cos(angle);

  // Tilted orbit
  planet.position.y = orbitRadius * Math.sin(angle) * orbitTilt;
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
function initializeProjectsContent() {
  const projectsContainer = document.getElementById('projects-2d-container');
  if (!projectsContainer) return;
  
  // Example content - replace with your own
  projectsContainer.innerHTML = `
    <div class="projects-inner">
      <h2>My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <h3>Project 1</h3>
          <p>Lorem bla bla im lazy to get the real lorem bs deal with it</p>
        </div>
        <div class="project-card">
          <h3>Project 2</h3>
          <p>haha look at me i have 0 projects hehehehaha wwwwwwwwww</p>
        </div>
        <div class="project-card">
          <h3>Project 3</h3>
          <p>nice transition? rate 1-10. rate below 10 and ill hit u with a truck</p>
        </div>
      </div>
    </div>
  `;
}

// Ensure loading screen is hidden after everything is initialized
window.addEventListener('load', () => {
  // Make sure all objects have required properties
  setupInteractiveObjects();
  initializeProjectsContent()
  // Hide loading after small delay to ensure Three.js scene is ready
  setTimeout(hideLoading, 1500);
  
  // Start rendering
  if (typeof createNavDots === 'function') {
    createNavDots();
  }
  
  // Go to first section if the function exists
  if (typeof goToSection === 'function') {
    goToSection(0); // Start at the first section
  }
  
  // Start animation loop
  animate()
});

// Fallback: If after 8 seconds we're still loading, force hide the loading screen
setTimeout(hideLoading, 8000);