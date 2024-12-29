import { Pattern } from '../types/patterns';

export const patterns: Pattern[] = [
  {
    id: 'singleton',
    name: 'Singleton Pattern',
    category: 'creational',
    description: 'Ensures a class has only one instance and provides a global point of access to it.',
    useCases: [
      'Database connections',
      'Configuration managers',
      'Logging services',
      'Thread pools'
    ],
    implementation: `class Singleton {
  private static instance: Singleton | null = null;
  
  private constructor() {}
  
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}`
  },
  {
    id: 'factory',
    name: 'Factory Pattern',
    category: 'creational',
    description: 'Creates objects without exposing the instantiation logic.',
    useCases: [
      'UI component creation',
      'Database connectors',
      'File format handlers',
      'Payment method creation'
    ],
    implementation: `interface Product {
  operation(): string;
}

class ConcreteProductA implements Product {
  operation(): string {
    return 'Product A';
  }
}

class ConcreteProductB implements Product {
  operation(): string {
    return 'Product B';
  }
}

class Factory {
  createProduct(type: 'A' | 'B'): Product {
    switch (type) {
      case 'A':
        return new ConcreteProductA();
      case 'B':
        return new ConcreteProductB();
      default:
        throw new Error('Invalid product type');
    }
  }
}`
  },
  {
    id: 'observer',
    name: 'Observer Pattern',
    category: 'behavioral',
    description: 'Defines a one-to-many dependency between objects.',
    useCases: [
      'Event handling systems',
      'Newsletter subscriptions',
      'Stock market data',
      'UI state updates'
    ],
    implementation: `interface Observer {
  update(data: any): void;
}

class Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notify(data: any): void {
    this.observers.forEach(observer => observer.update(data));
  }
}`
  },
  {
    id: 'strategy',
    name: 'Strategy Pattern',
    category: 'behavioral',
    description: 'Defines a family of algorithms, encapsulates each one, and makes them interchangeable.',
    useCases: [
      'Payment processing strategies',
      'Sorting algorithms',
      'Compression algorithms',
      'Authentication methods'
    ],
    implementation: `interface Strategy {
  execute(data: any): void;
}

class ConcreteStrategyA implements Strategy {
  execute(data: any): void {
    console.log('Executing strategy A');
  }
}

class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: Strategy): void {
    this.strategy = strategy;
  }

  executeStrategy(data: any): void {
    this.strategy.execute(data);
  }
}`
  },
  {
    id: 'decorator',
    name: 'Decorator Pattern',
    category: 'structural',
    description: 'Attaches additional responsibilities to an object dynamically.',
    useCases: [
      'Adding features to UI components',
      'Input/Output stream wrappers',
      'Middleware in web frameworks',
      'Adding logging/metrics'
    ],
    implementation: `interface Component {
  operation(): string;
}

class ConcreteComponent implements Component {
  operation(): string {
    return 'ConcreteComponent';
  }
}

class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  operation(): string {
    return this.component.operation();
  }
}`
  }
];