# Access Modifiers in TypeScript OOP – Public, Private, Protected, and Readonly Explained

Object oriented programming is a way to organizes code using objects and classes. In typescript, classes allow us to define properties, methods, constructors, and relationships between objects.

Typescript provides three main access modifiers: `public`, `private`, and `protected`. They control the accessibility of class properties and methods. It also provides the `readonly` keyword, which prevents a property from being reassigned after initialization.

## Public

This is the default access modifier in typescript classes. It allows a property or method to be accessed from anywhere, including inside the class, subclasses, and outside the class.

**When to use:** When a property or method needs to be accessible from anywhere, including outside the class.

## Private

It restricts access to a property or method to the class in which it is declared. Neither subclasses nor external code can directly access it.

**Important:** typescript's `private` modifier provides a compile-time restriction. It does not provide the same runtime privacy as javascript's `#privateField` syntax.

**When to use:** When a property or method should only be accessed directly within its declaring class, protecting its internal implementation from external access.

## Protected

This allows a property or method to be accessed inside the class in which it is declared and inside subclasses that inherit from that class. However, it cannot be accessed directly from outside the class hierarchy.

**When to use:** When a property or method needs to be accessible within the declaring class and its subclasses, but not directly from outside the class hierarchy.

## Readonly

`readonly` prevents a property from being reassigned after initialization. A readonly property can be initialized when it is declared or assigned a value inside the constructor.

Unlike `public`, `private`, and `protected`, `readonly` does not control accessibility. It only controls whether a property can be reassigned.

**When to use:** When a property should be readable but should not be reassigned after initialization, such as an employee's ID or email address.

## Practical Example

```ts
class Employee {
    constructor(
        public name: string,
        private readonly email: string,
        protected department: string
    ) {}

    public getEmail(): string {
        return this.email;
    }
}

class Manager extends Employee {
    public introduce(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", "alice@gmail.com", "HR");

console.log(manager.introduce());
console.log(manager.getEmail());
console.log(manager.name);
```

In this example:

- `name` is public, so it can be accessed from anywhere.
- `email` is private, so it can only be accessed directly inside the `Employee` class. It is also readonly, so it cannot be reassigned after initialization.
- `department` is protected, so it can be accessed inside `Employee` and its subclasses, such as `Manager`.
- `getEmail()` provides controlled access to the private `email` property.

## Comparison Table

| Modifier | Inside Declaring Class | Subclass | Outside Class |
|---|---|---|---|
| `public` | Yes | Yes | Yes |
| `private` | Yes | No | No |
| `protected` | Yes | Yes | No |
| `readonly` | Depends on access modifier | Depends on access modifier | Depends on access modifier |

**Note:** `readonly` is not an access modifier. It prevents reassignment, while accessibility is determined by `public`, `private`, or `protected`.

## Conclusion

Access modifiers are essential for implementing encapsulation in typescript's object-oriented programming.

The main concepts are:

- **public:** Accessible everywhere.
- **private:** Accessible only within the declaring class.
- **protected:** Accessible within the declaring class and its subclasses.
- **readonly:** Prevents a property from being reassigned after initialization.