import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';  // Import Draggable plugin

// Register the GSAP Draggable plugin
gsap.registerPlugin(Draggable);

// Function to hide loading screen from within Three.js
function hideLoading() {
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
}

function createIntroScreen() {
  // Keep existing intro setup code...
  
  // Animation variables
  let time = 0;
  let isSpiralingIn = true;
  let hasExploded = false;
  let introComplete = false;
  let readyForExplosion = false; // New flag to track if shapes are ready to explode
    const centerGeometry = new THREE.SphereGeometry(2, 32, 32);
    const centerMaterial = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.9
    });
    const centerPoint = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(centerPoint);
  // Trigger explosion function - remains the same
  function triggerExplosion() {
    hasExploded = true;
    
    // Make center point explode
    gsap.to(centerPoint.scale, {
      x: 10,
      y: 10,
      z: 10,
      duration: 0.3,
      ease: "power3.out",
      onComplete: () => {
        gsap.to(centerPoint.material, {
          opacity: 0,
          duration: 0.2
        });
      }
    });
    
    // Reset shape properties for explosion
    shapes.forEach(shape => {
      // Make sure all shapes are at the center before exploding
      shape.mesh.position.set(0, 0, 0);
      shape.mesh.scale.set(0.5, 0.5, 0.5);
      shape.mesh.material.opacity = 0.8;
      
      // Set direction for explosion
      shape.explosionDirection = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize();
      
      // Random explosion speed
      shape.explosionSpeed = 2 + Math.random() * 3;
    });
  }
  
  // Modify the animation loop
  function animate() {
    time += 0.01;
    requestAnimationFrame(animate);
    
    // Update controls
    controls.update();
    
    // Pulse the center point color
    const hue = (time * 0.1) % 1;
    centerPoint.material.color.setHSL(hue, 0.8, 0.5);
    
    // Handle pre-explosion animations
    if (isSpiralingIn && !hasExploded) {
      // Adjust sucking speed to make it faster
      const suckSpeed = 0.15;
      
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
        shape.mesh.material.opacity = Math.max(0.3, 0.7 - (1 - distanceToCenter / 100) * 0.4);
      });
      
      // Check if shapes are close enough to center to SET READY state instead of triggering explosion
      let allShapesNearCenter = true;
      shapes.forEach(shape => {
        const distanceToCenter = shape.mesh.position.length();
        if (distanceToCenter > 5) {
          allShapesNearCenter = false;
        }
      });
      
      // Set ready flag when shapes are near center instead of triggering explosion
      if (allShapesNearCenter || time > 5) {
        readyForExplosion = true;
        
        // Add a subtle visual cue that clicking will trigger explosion
        if (!hasExploded) {
          centerPoint.material.emissive = new THREE.Color(0xffffff);
          centerPoint.material.emissiveIntensity = 0.5 + Math.sin(time * 2) * 0.5;
        }
      }
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
      if (time > 12) { // Increased time to give explosion more time
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
          shape.mesh.position.x += Math.sin(time + shape.initialX) * 0.01;
          shape.mesh.position.z += Math.cos(time + shape.initialZ) * 0.01;
        }
      });
    }
    
    renderer.render(scene, camera);
  }
  
  // Modify click handler to trigger explosion only when ready
  document.getElementById('intro-screen').addEventListener('click', () => {
    // First, trigger explosion if ready but not yet exploded
    if (readyForExplosion && !hasExploded) {
      triggerExplosion();
      
      // Wait for explosion animation to complete before fading out
      setTimeout(() => {
        // Fade out the intro screen
        gsap.to('#intro-screen', {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            document.getElementById('intro-screen').style.display = 'none';
            // Make main page visible
            gsap.to('#bg', {
              opacity: 1,
              duration: 1,
              ease: "power2.inOut"
            });
            // Start main animation loop
            createNavDots();
            animate();
          }
        });
      }, 2000); // Wait 2 seconds for explosion effect
    }
  });
  
  // Start animation
  animate();
  
  // Handle window resize
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
  
  window.addEventListener('resize', onWindowResize);
}

// Preload the main scene assets before showing the intro
function preloadMainScene() {
  // Create a hidden scene for preloading
  const preloadScene = new THREE.Scene();
  const preloadCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const preloadRenderer = new THREE.WebGLRenderer();
  preloadRenderer.setSize(1, 1); // Minimal size, won't be visible
  preloadRenderer.domElement.style.display = 'none';
  document.body.appendChild(preloadRenderer.domElement);
  
  // Create all the elements from the main scene that we want to preload
  
  // Preload donut geometry and material
  const donutGeometry = new THREE.TorusGeometry(10, 3, 64, 128);
  const donutMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    transmission: 0.85,
    thickness: 3,
    roughness: 0.1,
    metalness: 0,
    ior: 1.5,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1,
    emissive: 0x000000,
    emissiveIntensity: 0.0
  });
  
  const preloadDonut = new THREE.Mesh(donutGeometry, donutMaterial);
  preloadScene.add(preloadDonut);
  
  // Preload stars/particles
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

  const preloadParticlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  preloadScene.add(preloadParticlesMesh);
  
  // Preload lights
  const ambientLight = new THREE.AmbientLight(0x404040, 2);
  preloadScene.add(ambientLight);
  
  const pointLight = new THREE.PointLight(0xc92cf5, 500);
  pointLight.position.set(20, 20, 20);
  preloadScene.add(pointLight);
  
  // Render once to force textures and geometries to load into GPU memory
  preloadRenderer.render(preloadScene, preloadCamera);
  
  // Make sure resources are loaded by waiting briefly
  return new Promise(resolve => {
    setTimeout(() => {
      document.body.removeChild(preloadRenderer.domElement);
      resolve();
    }, 500);
  });
}

// Modify the document ready function to preload assets first
document.addEventListener('DOMContentLoaded', async () => {
  // Show loading indicator
  const loadingScreen = document.getElementById('loading-screen');
  if (loadingScreen) {
    loadingScreen.classList.remove('hidden');
  }
  
  // Hide main page content initially
  document.getElementById('bg').style.opacity = '0';
  
  // Preload main scene assets
  await preloadMainScene();
  
  // Create and start intro after preloading
  createIntroScreen();
  
  // Then hide the loading screen
  if (loadingScreen) {
    loadingScreen.classList.add('hidden');
  }
});