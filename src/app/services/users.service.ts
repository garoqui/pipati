import { Injectable } from '@angular/core';
import { DB } from '../constants/database';
import { UserModel } from '../model/userModel';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  request = indexedDB.open(DB);


  constructor() { }

  getUser = (userName: string) : Promise<UserModel> => {       
     const resu : Promise<UserModel> = new Promise((resolve, reject) => {
        const db = this.request.result;
        const tx = db.transaction("users", "readonly");
        const store = tx.objectStore("users");
        const index = store.index("by_nickname");
        const request = index.get(userName.toUpperCase());
        request.onsuccess = function () {
          const matching = request.result;
          if (matching !== undefined && userName.length) {                        
            resolve(matching);
          } else {          
            reject(false);
          }
        };
      })     
    return resu;    
  }


  createUser = (user: UserModel) => {
    user.nickname = user.nickname.toUpperCase()
    const createPromise = new Promise ((resolve, reject)=>{
    const db = this.request.result;
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");
    const req = store.add(user);
    tx.oncomplete = ()=> {
      resolve(user)
    };
    tx.onerror = ()=>{
      reject("No se pudo insertar")
    }
    })
    return createPromise
  } 

  updateUser = (user: UserModel) => {
    const updatePromise = new Promise ((resolve, reject)=>{
    const db = this.request.result;
    const tx = db.transaction("users", "readwrite");
    const store = tx.objectStore("users");
    const req = store.put(user);
    tx.oncomplete = ()=> {
      resolve(user)
    };
    tx.onerror = ()=>{
      reject("No se pudo insertar")
    }
    })
    return updatePromise
  } 
}
