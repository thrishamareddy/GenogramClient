export interface Node {
    id: string;        // Unique identifier for each person
    label: string;     // Name or relationship
    icon?: string;     // Icon (e.g., an avatar or symbol)
  }
  
  export interface Link {
    source: string;    // ID of the source node
    target: string;    // ID of the target node
    label: string;     // Relationship label
  }
  