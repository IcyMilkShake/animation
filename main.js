import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Function to hide loading screen from within Three.js
function hideLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

// Create scene, camera, and renderer
const scene = new THREE.Scene();
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

// Add small particles floating around
const particlesGeometry = new THREE.BufferGeometry();
const particlesCount = 200;
const posArray = new Float32Array(particlesCount * 3);

for(let i = 0; i < particlesCount * 3; i++) {
  posArray[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
const particlesMaterial = new THREE.PointsMaterial({
  size: 0.2,
  color: 0xffffff
});

const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particlesMesh);

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

// Define more dynamic animation states for each section
const states = {
  home: {
    cameraZ: 100,
    donutScale: 1,
    donutRotation: { x: 0, y: 0, z: 0 },
    donutPosition: { x: 0, y: 0, z: 0 }
  },
  about: {
    cameraZ: 40,
    donutScale: 1.5,
    donutRotation: { x: Math.PI / 4, y: Math.PI / 4, z: 0 },
    donutPosition: { x: -5, y: 3, z: 0 }
  },
  projects: {
    cameraZ: 35,
    donutScale: 1.2,
    donutRotation: { x: Math.PI / 2, y: Math.PI / 3, z: Math.PI / 6 },
    donutPosition: { x: 8, y: -2, z: 5 }
  },
  contact: {
    cameraZ: 25,
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

let stars = []; // Array to hold all stars for periodic glow updates

function addStars() {
  const geometry = new THREE.SphereGeometry(0.05, 20, 20);

  function getRandomColor() {
    const colors = [
      new THREE.Color(0x0000ff), // Blue
      new THREE.Color(0xffffff), // White
      new THREE.Color(0x831aa5), // Purple
      new THREE.Color(0xbf1b1b),
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  const material = new THREE.MeshStandardMaterial({
    color: getRandomColor(),
    emissive: getRandomColor(),
    emissiveIntensity: 3,
    metalness: 0.5,
    roughness: 0.2
  });

  const star = new THREE.Mesh(geometry, material);
  const x = THREE.MathUtils.randFloatSpread(100);  // Spread in X
  const y = THREE.MathUtils.randFloatSpread(100);  // Spread in Y
  const z = THREE.MathUtils.randFloatSpread(200);  // Spread in Z
  
  star.position.set(x, y, z);

  stars.push(star); // Store stars in array for glow effect
  
  scene.add(star);
}

// Create 800 stars
Array(800).fill().forEach(addStars);

// Update function to animate stars' emissive glow
function animateGlow() {
  const time = performance.now() * 0.001; // Get time in seconds for animation
  
  stars.forEach(star => {
    const glowIntensity = Math.sin(time * 8 + star.position.x * 0.1) * 0.5 + 0.5; // Sine wave effect for glow
    star.material.emissiveIntensity = glowIntensity;
  });

  requestAnimationFrame(animateGlow); // Keep updating the glow effect
}

// Start the periodic glow effect
animateGlow();


// Enhanced animation function
function animateState(targetState, duration = 2.5) {
  const startTime = performance.now();
  const initialCameraZ = camera.position.z;
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
const scrollDelay = 3000; // 3 seconds before next scroll allowed
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
  if (states[sectionId]) {
    animateState(states[sectionId]);
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
        break;
      case 'about':
        donut.rotation.x += baseSpeed * 0.8;
        donut.rotation.z += baseSpeed * 0.3;
        donut.position.x = Math.sin(time * 1.2) * baseAmplitude;
        scene.background = new THREE.Color(0x000020);
        donutMaterial.color = new THREE.Color(0xffffff)
        break;
      case 'projects':
        donut.rotation.z += baseSpeed * 1.2;
        donut.position.y = Math.sin(time * 0.8) * baseAmplitude * 1.5;
        donut.position.x = Math.cos(time * 0.5) * baseAmplitude;
        scene.background = new THREE.Color(0x000020);
        donutMaterial.color = new THREE.Color(0x002f9b)
        break;
      case 'contact':
        donut.rotation.y -= baseSpeed * 0.7;
        donut.rotation.x += baseSpeed * 0.3;
        donut.position.z = Math.sin(time * 0.6) * baseAmplitude;
        scene.background = new THREE.Color(0x000020);
        donutMaterial.color = new THREE.Color(0x6200ce)
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
sectionsContainer.addEventListener('touchstart', (event) => {
  touchStartY = event.touches[0].clientY;
}, { passive: true });

sectionsContainer.addEventListener('touchend', (event) => {
  if (isScrolling) return;
  
  const touchEndY = event.changedTouches[0].clientY;
  const diff = touchStartY - touchEndY;
  
  if (Math.abs(diff) > 50) { // threshold to detect swipe
    if (diff > 0) {
      // Swipe up - go down
      goToSection(currentSectionIndex + 1);
    } else {
      // Swipe down - go up
      goToSection(currentSectionIndex - 1);
    }
  }
}, { passive: false });

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

// Enhanced render loop
let time = 0;
function animate() {
  time += 0.01;
  requestAnimationFrame(animate);
  controls.update();
  
  // Animate particles
  animateParticles();
  
  // Animate lights
  animateLights(time);
  
  renderer.render(scene, camera);
}

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

// Ensure loading screen is hidden after everything is initialized
window.addEventListener('load', () => {
  // Hide loading after small delay to ensure Three.js scene is ready
  setTimeout(hideLoading, 1500);
  
  // Start rendering
  createNavDots();
  goToSection(0); // Start at the first section
  animate();
});

// Fallback: If after 8 seconds we're still loading, force hide the loading screen
setTimeout(hideLoading, 8000);