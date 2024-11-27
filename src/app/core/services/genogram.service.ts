import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Edge, Node } from '@swimlane/ngx-graph';  // Import types for Node and Edge

@Injectable({
  providedIn: 'root'
})
export class GenogramService {

  constructor(private http: HttpClient) {}

  // Fetch child details
  getChildDetails(): Observable<any> {
    return this.http.get('/api/Home/ChildDetails');
  }

  // Fetch guardian details
  getGuardianDetails(): Observable<any> {
    return this.http.get('/api/Guardian/GuardianDetails');
  }

  getGenogramData(): Observable<any> {
    return new Observable(observer => {
      this.getChildDetails().subscribe(childData => {
        this.getGuardianDetails().subscribe(guardianData => {
          
          const nodes: Node[] = [];  
          const links: Edge[] = [];  

          nodes.push({
            id: childData.id,
            label: childData.name
          });

          guardianData.forEach((guardian: { id: any; firstName: any; lastName: any; relationship: any; }) => {
            nodes.push({
              id: guardian.id,
              label: `${guardian.firstName} ${guardian.lastName}`
            });
            links.push({
              source: childData.id,
              target: guardian.id,
              label: guardian.relationship
            });
          });

          // Emit the structured data
          observer.next({ nodes, links });
          observer.complete();
        });
      });
    });
  }
}
