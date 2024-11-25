// genogram.service.ts
import { Injectable } from '@angular/core';
import { Link, Node } from '../models/genogram.model';

@Injectable({
  providedIn: 'root'
})
export class GenogramService {
  getNodes(): Node[] {
    return [
      { id: '1', label: 'Alina Hug' },
      { id: '2', label: 'Anna Hug-Meier', icon: 'mother-icon' },
      { id: '3', label: 'Herbert Hug', icon: 'father-icon' },
      { id: '4', label: 'Kevin Hug', icon: 'brother-icon' },
      { id: '5', label: 'Hilde Meier', icon: 'grandmother-icon' },
      { id: '6', label: 'Petra Sturzenegger', icon: 'guardian-icon' },
    ];
  }

  getLinks(): Link[] {
    return [
      { source: '1', target: '2', label: 'Mutter' },
      { source: '1', target: '3', label: 'Vater' },
      { source: '1', target: '4', label: 'Bruder' },
      { source: '1', target: '5', label: 'Grossmutter' },
      { source: '1', target: '6', label: 'Kita Leiterin' },
    ];
  }
}
