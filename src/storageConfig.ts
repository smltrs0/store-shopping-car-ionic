import { Storage } from '@ionic/storage';

const ionicStorage = new Storage();
await ionicStorage.create();


const storage = {
  setItem: (key: string, value: any) => {
    return ionicStorage.set(key, value);
  },
  getItem: (key: string) => {
    return ionicStorage.get(key);
  },
  removeItem: (key: string) => {
    return ionicStorage.remove(key);
  }
};

export default storage;
