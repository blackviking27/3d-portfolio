import { useEffect, useRef } from "react";
import * as THREE from "three";

// canvas
// perspective camera

const City = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // renderer
    let canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
    }

    // camera
    const camera = new THREE.PerspectiveCamera(
      30,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 6, 12);

    // scene
    const scene = new THREE.Scene();

    // objects
    var city = new THREE.Object3D();
    var smoke = new THREE.Object3D();
    var town = new THREE.Object3D();
    var uSpeed = 0.001;

    // FOG
    var setcolor = 0xf02050;
    scene.background = new THREE.Color(setcolor);
    scene.fog = new THREE.Fog(setcolor, 10, 16);

    // random function
    function mathRandom(num = 8) {
      var numValue = -Math.random() * num + Math.random() * num;
      return numValue;
    }

    // change building colors
    function setTintColor() {
      return 0x000000;
    }

    // city
    function init() {
      let segments = 2;
      for (let i = 1; i < 120; i++) {
        let geometry = new THREE.BoxGeometry(
          1,
          1,
          1,
          segments,
          segments,
          segments
        );
        let material = new THREE.MeshStandardMaterial({
          color: setTintColor(),
          wireframe: false,
          side: THREE.DoubleSide,
        });

        let cube = new THREE.Mesh(geometry, material);
        let floor = new THREE.Mesh(geometry, material);
        let wfloor = new THREE.Mesh(geometry, material);

        cube.add(wfloor);
        cube.castShadow = true;
        cube.receiveShadow = true;
        floor.scale.y = 0.05;
        cube.scale.y = 0.1 + Math.abs(mathRandom(8));

        let cubeWidth = 0.9;
        cube.scale.x = cube.scale.z = cubeWidth + mathRandom(1 - cubeWidth);
        cube.position.x = Math.round(mathRandom());
        cube.position.z = Math.round(mathRandom());

        floor.position.set(cube.position.x, 0, cube.position.z);

        town.add(floor);
        town.add(cube);
      }

      let gmaterial = new THREE.MeshToonMaterial({
        color: 0xffff00,
        side: THREE.DoubleSide,
      });
      let gparticular = new THREE.CircleGeometry(0.01, 3);
      let aparticular = 5;

      for (let h = 1; h < 400; h++) {
        let particualr = new THREE.Mesh(gparticular, gmaterial);
        particualr.position.set(
          mathRandom(aparticular),
          mathRandom(aparticular),
          mathRandom(aparticular)
        );
        particualr.rotation.set(mathRandom(), mathRandom(), mathRandom());
        smoke.add(particualr);
      }

      let pmaterail = new THREE.MeshPhongMaterial({
        color: 0x000000,
        side: THREE.DoubleSide,
        roughness: 10,
        metalness: 0.6,
        opacity: 0.9,
        transparent: true,
      });

      let pgeometry = new THREE.PlaneGeometry(60, 60);
      let pelement = new THREE.Mesh(pgeometry, pmaterail);
      pelement.rotation.x = (-90 * Math.PI) / 180;
      pelement.position.y = -0.001;
      pelement.receiveShadow = true;
      city.add(pelement);
    }

    var mouse = new THREE.Vector2();

    function onMouseMove(e) {
      e.preventDefault();
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    }

    window.addEventListener("mousemove", onMouseMove, false);

    // Lights
    var ambientLight = new THREE.AmbientLight(0xffffff, 4);
    var lightFront = new THREE.SpotLight(0xffffff, 20, 10);
    var lightBack = new THREE.PointLight(0xffffff, 0.5);

    lightFront.rotation.x = (45 * Math.PI) / 180;
    lightFront.rotation.z = (-45 * Math.PI) / 180;
    lightFront.position.set(5, 5, 5);
    lightFront.castShadow = true;
    lightFront.shadow.mapSize.width = 6000;
    lightFront.shadow.mapSize.height = lightFront.shadow.mapSize.width;
    lightFront.penumbra = 0.1;
    lightBack.position.set(0, 6, 0);

    smoke.position.y = 2;

    scene.add(ambientLight);
    city.add(lightFront);
    scene.add(lightBack);
    scene.add(city);
    city.add(smoke);
    city.add(town);

    //animate function
    var animate = function () {
      requestAnimationFrame(animate);

      city.rotation.y -= (mouse.x * 8 - camera.rotation.y) * uSpeed;
      city.rotation.x += (-(mouse.y * 2) - camera.rotation.x) * uSpeed;

      if (city.rotation.x < -0.05) {
        city.rotation.x = -0.05;
      } else if (city.rotation.x > 1) {
        city.rotation.x = 1;
      }

      smoke.rotation.y += 0.01;
      smoke.rotation.x += 0.01;

      camera.lookAt(city.position);
      renderer.render(scene, camera);
    };

    // resize
    window.addEventListener(
      "resize",
      () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      },
      false
    );

    //calling functions
    init();
    animate();
  }, []);

  return (
    <>
      <canvas ref={canvasRef} />
    </>
  );
};

export default City;
