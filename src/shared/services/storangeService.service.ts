import { Injectable } from "@angular/core";
import { STORAGE_KEYS } from "../../config";
import { Usuario } from "../models";


@Injectable()
export class StorangeService {

  getLocalUser(): Usuario {
    let usr = localStorage.getItem(STORAGE_KEYS.localUser)

    if (usr == null){
      return null
    }

    return JSON.parse(usr)
  }

  setLocalUser(obj: Usuario) {
    if(obj == null){
      localStorage.removeItem(STORAGE_KEYS.localUser)
      return
    }

    localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj))
  }
}
