# Access Modifiers in TypeScript OOP – Public, Private, Protected, and Readonly Explained

Object-Oriented Programming is a way to organizes code using objects and classes. In TypeScript, classes allow to define properties, methods, constructors, and relationships between objects. It provides public, private, and protected access modifiers to control the accessibility. It also provides readonly to prevent reassignment of properties after initialization.

## Public
It is the default access modifier in TypeScript classes. It allows a property or method to be accessed from anywhere.
**When to use: ** If a property or method need access from anywhere or outside the class.
## Private
It is the default access modifier in TypeScript classes. It allows a property or method to be accessed from anywhere.
**When to use: ** If a property or method need access from anywhere or outside the class.
## Protected
It is the default access modifier in TypeScript classes. It allows a property or method to be accessed from anywhere.
**When to use: ** If a property or method need access from anywhere or outside the class.
## Readonly
It is the default access modifier in TypeScript classes. It allows a property or method to be accessed from anywhere.
**When to use: ** If a property or method need access from anywhere or outside the class.

```ts
class Employee {
    constructor(
        public name: string;
        private readonly joiningDate: string;
        protected department: string;
    ) {}
}
```

### Comparison Table

| Feature | Type Alias | Interface |
|---|---|---|
| Define object structures | Yes | Yes |
| Primitive types | Yes | No |
| Union types | Yes | No |
| Intersection types | Yes, using `&` | Through multiple `extends` or other type compositions |
| Tuple types | Yes | No, not directly |
| Function types | Yes | Yes, using call signatures |
| Declaration merging | No | Yes |
| Extend existing structures | Using `&` | Using `extends` |
| Conditional and mapped types | Yes | No, not directly |