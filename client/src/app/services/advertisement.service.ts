import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Advertisement } from '../models/Advertisement';

const AdvertisementUrl = {
  getRandomUrl : "/api/advertisements/random"
}

@Injectable()
export class AdvertisementService {

  constructor(private http : HttpClient) { }

  getRandom(){
    return this.http.get<Advertisement>(AdvertisementUrl.getRandomUrl);
  }

}
