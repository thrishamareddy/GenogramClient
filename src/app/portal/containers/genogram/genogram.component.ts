import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxGraphModule } from '@swimlane/ngx-graph'; // Import required module
import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';
import { GenogramService } from '../../../core/services/genogram.service';

@Component({
  selector: 'app-genogram',
  standalone: true,
  imports: [NgxGraphModule],
  templateUrl: './genogram.component.html',
  styleUrls: ['./genogram.component.scss']
})
export class GenogramComponent implements OnInit {
  nodes: any[] = [];
  links: any[] = [];
  layout = 'ForceDirected';

  constructor(private genogramService: GenogramService) {}

  ngOnInit() {
    this.genogramService.getGenogramData().subscribe(data => {
      this.nodes = data.nodes;
      this.links = data.links;
    });
  }

  close() {
    
  }
}
