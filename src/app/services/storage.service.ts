import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class  StorageService {

  constructor(private storage: NativeStorage,
              private platform: Platform) { }

  public setItem(key, value) {
    return this.storage.setItem(key, value);
  }
  public getItem(key) {
    return this.storage.getItem(key);
  }
  public async remove(key) {
    return this.storage.remove(key);
  }
  public clear() {
    this.storage.clear();
  }
}
