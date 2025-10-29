export type ClassPrimitive = string | number | null | undefined | false;

export type ClassDictionary = Record<string, ClassPrimitive | boolean>;

export type ClassValue = ClassPrimitive | ClassDictionary | ClassValue[];
