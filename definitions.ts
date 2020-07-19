import { nodeKey } from "./libraryDefinitions";

export type Factory<Type> = (...args: any) => Type;

export type VisitFunction = <ValueType>(key: nodeKey, value: ValueType) => any;