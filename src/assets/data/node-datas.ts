import { Node, Edge } from "reactflow";

export const skillNodes: Node[] = [
    {
        id: "web-dev",
        data: { label: "Web Development", visible: false },
        position: { x: 0, y: 0 }, // Start position
        type: "central-node",
    },
    {
        id: "frontend",
        data: { label: "Frontend Development", visible: false },
        position: { x: 300, y: -100 },
        type: "branch",
    },
    {
        id: "backend",
        data: { label: "Backend Development", visible: false },
        position: { x: 300, y: 40 },
        type: "branch",
    },
    {
        id: "database",
        data: { label: "Database Management", visible: false },
        position: { x: 300, y: 200 },
        type: "branch",
    },
    {
        id: "react",
        data: { label: "React", visible: false },
        position: { x: 1200, y: -250 },
        type: "branch",
    },
    {
        id: "typescript",
        data: { label: "TypeScript", visible: false },
        position: { x: 800, y: -200 },
        type: "branch",
    },
    {
        id: "express",
        data: { label: "Express", visible: false },
        position: { x: 1200, y: 120 },
        type: "branch",
    },
    {
        id: "nodejs",
        data: { label: "Node.js", visible: false },
        position: { x: 720, y: -80 },
        type: "branch",
    },
    {
        id: "php",
        data: { label: "PHP", visible: false },
        position: { x: 760, y: 130 },
        type: "branch",
    },
    {
        id: "laravel",
        data: { label: "Laravel", visible: false },
        position: { x: 1200, y: -100 },
        type: "branch",
    },
    {
        id: "mysql",
        data: { label: "MySQL", visible: false },
        position: { x: 920, y: 240 },
        type: "branch",
    },
    {
        id: "mongodb",
        data: { label: "MongoDB", visible: false },
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