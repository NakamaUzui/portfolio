import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export const createCompressedLoader = () => {
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('/draco/');
  
  const loader = new GLTFLoader();
  loader.setDRACOLoader(dracoLoader);
  
  return loader;
};

export const loadCompressedModel = (url) => {
  return new Promise((resolve, reject) => {
    const loader = createCompressedLoader();
    loader.load(url, resolve, undefined, reject);
  });
}; 