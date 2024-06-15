import * as THREE from "three";
import { OrbitControls } from "../libs/jsm143/controls/OrbitControls.js";
const w = window.innerWidth;
const h = window.innerHeight;
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000);
camera.position.Z = 5;
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

new OrbitControls(camera, renderer.domElement);

const loader = new THREE.TextureLoader();
const geometry = new THREE.IcosahedronGeometry(1, 12);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("./assets/"),
});

const earthMesh = new THREE.Mesh(geometry, material);
scene.add(eartMesh);

const hemiLight = new THREE.hemiLight();
scene.add(hemiLight);

function animate() {
  requestAnimationFrame(animate);

  earthMesh.rotation.x += 0.01;
  earthMesh.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
