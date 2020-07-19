import { nodeKey } from "./libraryDefinitions";

export type Factory<Type> = (...args: any) => Type;

export type ComparisonResult = -1 | 0 | 1;