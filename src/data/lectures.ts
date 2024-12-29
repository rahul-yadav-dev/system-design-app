import { Lecture } from '../types';

export const lectures: Lecture[] = [
  {
    id: 'intro',
    title: 'Introduction to System Design',
    description: 'Core concepts and principles',
    difficulty: 'beginner',
    category: 'fundamentals',
    content: `System design is the process of defining components, modules, interfaces, and data for a system to satisfy specified requirements. This lecture covers fundamental concepts and their importance in modern software development.`,
    codeExample: `// Example of a basic system component
interface UserService {
  getUser(id: string): Promise<User>;
  createUser(userData: UserDTO): Promise<User>;
  updateUser(id: string, userData: Partial<UserDTO>): Promise<User>;
  deleteUser(id: string): Promise<void>;
}

// Implementation with dependency injection
class UserServiceImpl implements UserService {
  constructor(
    private readonly database: Database,
    private readonly cache: Cache,
    private readonly logger: Logger
  ) {}

  async getUser(id: string): Promise<User> {
    // Try cache first
    const cached = await this.cache.get(\`user:\${id}\`);
    if (cached) return cached;

    // Fallback to database
    const user = await this.database.users.findUnique({ where: { id } });
    if (!user) throw new NotFoundError(\`User \${id} not found\`);

    // Update cache
    await this.cache.set(\`user:\${id}\`, user);
    return user;
  }
}`,
    nextLectureId: 'requirements'
  },
  {
    id: 'requirements',
    title: 'Requirements Analysis',
    description: 'Understanding and documenting system requirements',
    difficulty: 'beginner',
    category: 'fundamentals',
    content: `Requirements analysis is crucial for successful system design. Learn how to gather, analyze, and document functional and non-functional requirements.`,
    codeExample: `// Example of requirement interfaces
interface SystemRequirement {
  id: string;
  type: 'functional' | 'non-functional';
  priority: 'low' | 'medium' | 'high';
  description: string;
  acceptance: string[];
}

// Requirements management system
class RequirementsManager {
  private requirements: Map<string, SystemRequirement> = new Map();

  addRequirement(req: SystemRequirement): void {
    this.validateRequirement(req);
    this.requirements.set(req.id, req);
  }

  private validateRequirement(req: SystemRequirement): void {
    if (!req.description || req.description.length < 10) {
      throw new Error('Requirement description too short');
    }
    if (req.acceptance.length === 0) {
      throw new Error('At least one acceptance criterion required');
    }
  }
}`,
    prevLectureId: 'intro',
    nextLectureId: 'components'
  },
  {
    id: 'singleton',
    title: 'Singleton Pattern',
    description: 'Implementation and use cases of the Singleton pattern',
    difficulty: 'intermediate',
    category: 'patterns',
    content: `The Singleton pattern ensures a class has only one instance and provides a global point of access to it. Learn when and how to implement it in TypeScript.`,
    codeExample: `// Thread-safe Singleton implementation in TypeScript
class Database {
  private static instance: Database | null = null;
  private constructor() {
    // Private constructor prevents direct construction
    this.init();
  }

  private async init(): Promise<void> {
    // Database initialization logic
  }

  public static getInstance(): Database {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async query(sql: string): Promise<any> {
    // Query implementation
  }
}

// Usage
const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true - same instance`,
    prevLectureId: 'components',
    nextLectureId: 'factory'
  }
];