import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Volume } from './volume';
import { VOLUMES } from './mock-volumes';

@Injectable()
export class VolumeService {
    getVolumes(): Observable<Volume[]> {
        return Observable.of(VOLUMES);
    }

    getVolume(name: string): Observable<Volume> {
        return this.getVolumes().map(volumes => volumes.find(volume => volume.name === name));
    }
}