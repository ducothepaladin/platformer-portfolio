import { Node, Edge } from "reactflow";

export const skillNodes: Node[] = [
  {
      id: "web-dev",
      data: {
          label: "Web Development",
          visible: false,
          description: "The art of building modern websites and applications that are both functional and beautiful."
      },
      position: { x: 0, y: 0 },
      type: "central-node",
  },
  {
      id: "frontend",
      data: {
          label: "Frontend Development",
          visible: false,
          level: 7,
          exp: "1yr",
          description: "Love to think and implement frontend logic and UX design for seamless user interaction."
      },
      position: { x: 300, y: -100 },
      type: "branch",
  },
  {
      id: "backend",
      data: {
          label: "Backend Development",
          visible: false,
          level: 5,
          exp: "6 months",
          description: "Born to master backend logic, REST APIs, and server-side problem solving."
      },
      position: { x: 300, y: 40 },
      type: "branch",
  },
  {
      id: "database",
      data: {
          label: "Database Management",
          visible: false,
          level: 5,
          exp: "6 months",
          description: "Storing, querying, and managing data efficiently using relational and NoSQL systems."
      },
      position: { x: 300, y: 200 },
      type: "branch",
  },
  {
      id: "react",
      data: {
          label: "React",
          visible: false,
          level: 8,
          exp: "9 months",
          description: "My favorite frontend library for building dynamic UIs with reusable components and hooks."
      },
      position: { x: 1200, y: -250 },
      type: "branch",
  },
  {
      id: "typescript",
      data: {
          label: "TypeScript",
          visible: false,
          level: 6,
          exp: "3 months",
          description: "A strongly typed superset of JavaScript that boosts code safety and project scalability."
      },
      position: { x: 800, y: -200 },
      type: "branch",
  },
  {
      id: "express",
      data: {
          label: "Express",
          visible: false,
          level: 5,
          exp: "5 months",
          description: "A minimalist Node.js framework for building scalable APIs and backend logic fast."
      },
      position: { x: 1200, y: 120 },
      type: "branch",
  },
  {
      id: "nodejs",
      data: {
          label: "Node.js",
          visible: false,
          level: 5,
          exp: "5 months",
          description: "JavaScript runtime for server-side development, runs my backend like a charm."
      },
      position: { x: 720, y: -80 },
      type: "branch",
  },
  {
      id: "php",
      data: {
          label: "PHP",
          visible: false,
          level: 4,
          exp: "4 months",
          description: "Old but gold, used it to handle backend logic and templating with simplicity."
      },
      position: { x: 760, y: 130 },
      type: "branch",
  },
  {
      id: "laravel",
      data: {
          label: "Laravel",
          visible: false,
          level: 3,
          exp: "4 months",
          description: "A PHP framework with elegant syntax and powerful features for rapid backend development."
      },
      position: { x: 1200, y: -100 },
      type: "branch",
  },
  {
      id: "mysql",
      data: {
          label: "MySQL",
          visible: false,
          level: 6,
          exp: "6 months",
          description: "Structured data storage using SQL, reliable and battle-tested relational database."
      },
      position: { x: 920, y: 240 },
      type: "branch",
  },
  {
      id: "mongodb",
      data: {
          label: "MongoDB",
          visible: false,
          level: 7,
          exp: "5 months",
          description: "Schema-less NoSQL database I love for its flexibility and JSON-like document structure."
      },
      position: { x: 800, y: 360 },
      type: "branch",
  },
];


export const skillEdges: Edge[] = [
    {
      id: "e1-1",
      source: "web-dev",
      target: "frontend",
      animated: true,
    },
    {
      id: "e1-2",
      source: "web-dev",
      target: "backend",
      animated: true,
    },
    {
      id: "e1-3",
      source: "web-dev",
      target: "database",
      animated: true,
    },
    {
      id: "e2-1",
      source: "typescript",
      target: "react",
      animated: true,
    },
    {
      id: "e2-2",
      source: "frontend",
      target: "typescript",
      animated: true,
    },
    {
      id: "e3-1",
      source: "backend",
      target: "nodejs",
      animated: true,
    },
    {
      id: "e3-2",
      source: "php",
      target: "laravel",
      animated: true,
    },
    {
      id: "e3-3",
      source: "nodejs",
      target: "express",
      animated: true,
    },
    {
        id: "e3-4",
        source: "backend",
        target: "php",
        animated: true,
    },
    {
      id: "e5-1",
      source: "database",
      target: "mysql",
      animated: true,
    },
    {
      id: "e5-2",
      source: "database",
      target: "mongodb",
      animated: true,
    },
  ];