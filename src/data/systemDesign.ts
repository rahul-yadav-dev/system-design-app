import { SystemDesignTopic } from '../types/systemDesign';

export const systemDesignTopics: SystemDesignTopic[] = [
  {
    id: 'distributed-systems',
    title: 'Distributed Systems Architecture',
    level: 'high',
    description: 'Understanding the principles and patterns of distributed system design',
    content: `
      <h4>Key Concepts</h4>
      <ul>
        <li>Scalability and Performance</li>
        <li>Reliability and Fault Tolerance</li>
        <li>Consistency vs. Availability (CAP Theorem)</li>
        <li>Load Balancing and Service Discovery</li>
      </ul>
    `,
    components: [
      'Load Balancers',
      'Application Servers',
      'Caching Layer',
      'Database Clusters',
      'Message Queues'
    ],
    considerations: [
      'Network Partitioning',
      'Data Consistency',
      'Scalability Requirements',
      'Monitoring and Observability'
    ],
    diagram: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    level: 'high',
    description: 'Design principles and patterns for building microservices-based systems',
    content: `
      <h4>Core Principles</h4>
      <ul>
        <li>Service Independence</li>
        <li>Decentralized Data Management</li>
        <li>Domain-Driven Design</li>
        <li>API Gateway Pattern</li>
      </ul>
    `,
    components: [
      'API Gateway',
      'Service Registry',
      'Config Server',
      'Circuit Breaker',
      'Message Broker'
    ],
    considerations: [
      'Service Boundaries',
      'Data Consistency',
      'Service Discovery',
      'Monitoring and Tracing'
    ]
  },
  {
    id: 'data-structures',
    title: 'Data Structures Deep Dive',
    level: 'low',
    description: 'Understanding fundamental data structures and their implementations',
    content: `
      <h4>Essential Data Structures</h4>
      <ul>
        <li>Arrays and Linked Lists</li>
        <li>Trees and Graphs</li>
        <li>Hash Tables</li>
        <li>Heaps and Priority Queues</li>
      </ul>
    `,
    components: [
      'Memory Management',
      'Time Complexity',
      'Space Complexity',
      'Implementation Details'
    ]
  }
];