import { Component, OnInit } from '@angular/core';
// import { THREE } from 'three.js';
import {
  AmbientLight,
  DirectionalLight,
  FogExp2,
  Mesh,
  MeshLambertMaterial,
  PerspectiveCamera,
  PointLight,
  PlaneBufferGeometry,
  Scene,
  TextureLoader,
  WebGLRenderer
} from 'three';
// import * as POSTPROCESSING from 'postprocessing';
import {
  BloomEffect,
  BlendFunction,
  EffectComposer,
  EffectPass,
  KernelSize,
  RenderPass,
  TextureEffect
} from 'postprocessing';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public scene = new Scene();
  public camera = new PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
  public renderer;
  public cloudGeo;
  public cloudMaterial;
  public composer;
  public textureEffect;
  public displayContent = false;
  public displayAbout = false;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => this.displayContent = true, 1000);
    this.renderNebula('nebula');
    // this.renderNebula('nebula2');

    const typed = new Typed('#subtitle', {
      strings: [`Software Engineer.`, `Front End Developer.`, `Guitar Player.`, `Mountain Hiker.`],
      typeSpeed: 50,
      backDelay: 1000,
      backSpeed: 10,
      loop: true
    });
  }

  public renderNebula(id) {
    let composer;
    this.camera.position.z = 1;
    this.camera.rotation.x = 1.16;
    this.camera.rotation.y = -0.12;
    this.camera.rotation.z = 0.27;
    const ambient = new AmbientLight(0x5c3b73);
    this.scene.add(ambient);

    const directionalLight = new DirectionalLight(0x000000);
    directionalLight.position.set(0, 0, 1);
    this.scene.add(directionalLight);

    const orangeLight = new PointLight(0xcc6600, 50, 450, 1.7);
    orangeLight.position.set(200, 300, 100);
    this.scene.add(orangeLight);

    const redLight = new PointLight(0xd8547e, 50, 450, 1.7);
    redLight.position.set(100, 300, 100);
    this.scene.add(redLight);

    const blueLight = new PointLight(0x3677ac, 50, 450, 1.7);
    blueLight.position.set(300, 300, 200);
    this.scene.add(blueLight);

    this.renderer = new WebGLRenderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // this.scene.fog = new THREE.FogExp2(0x000000, 0.001);
    this.scene.fog = new FogExp2(0x00c8cf, 0.001);
    this.renderer.setClearColor(this.scene.fog);
    document.getElementById(id).appendChild(this.renderer.domElement);

    const loader = new TextureLoader();
    loader.load('assets/smoke.png', (texture) => {
      this.cloudGeo = new PlaneBufferGeometry(500, 500);
      this.cloudMaterial = new MeshLambertMaterial({
        map: texture,
        transparent: true
      });


      const cloudParticles = [];

      for (let p = 0; p < 75; p++) {
        const cloud = new Mesh(this.cloudGeo, this.cloudMaterial);
        cloud.position.set(
          Math.random() * 900 - 400,
          500,
          Math.random() * 500 - 500
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material['opacity'] = 0.25;
        cloudParticles.push(cloud);
        this.scene.add(cloud);
      }

      const renderer = this.renderer;
      const camera = this.camera;
      const scene = this.scene;

      loader.load('assets/stars-4k.jpg', (texture) => {
        const textureEffect = new TextureEffect({
          blendFunction: BlendFunction.COLOR_DODGE,
          texture
        });
        textureEffect.blendMode.opacity.value = 0.33;
        this.textureEffect = textureEffect;

        const bloomEffect = new BloomEffect({
          blendFunction: BlendFunction.COLOR_DODGE,
          kernelSize: KernelSize.SMALL,
          useLuminanceFilter: true,
          luminanceThreshold: 0.3,
          luminanceSmoothing: 0.75
        });
        bloomEffect.blendMode.opacity.value = 1.5;

        const effectPass = new EffectPass(
          camera,
          bloomEffect,
          textureEffect
        );

        effectPass.renderToScreen = true;

        composer = new EffectComposer(renderer);
        composer.addPass(new RenderPass(scene, camera));
        composer.addPass(effectPass);

        window.addEventListener('resize', onWindowResize, false);
        render();
      });

      function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      }

      function render() {
        cloudParticles.forEach(p => {
          p.rotation.z -= 0.0007;
        });
        composer.render(0.1);
        requestAnimationFrame(render);
      }
    });
  }


  public scrollTo(page) {
    switch (page) {
      case 'home':
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
        break;
      case 'about':
        window.scroll({
          top: window.innerHeight,
          left: 0,
          behavior: 'smooth'
        });
        break;
      default:
        break;
    }
  }

  public showAbout() {
    this.displayAbout = true;
  }

  public goToAboutMe() {
    window.scroll({
      top: window.innerHeight,
      left: 100,
      behavior: 'smooth'
    });
  }

}
