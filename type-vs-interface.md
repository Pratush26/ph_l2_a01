# What are the core differences between Type Aliases and Interfaces in TypeScript? When should you choose one over the other?

Typescript provides two ways to define custom types: **Type Aliases** and **Interfaces**. Both have their own use cases. They allow developers to define the structure of data and enforce type safety.

Below is a quick example of how both approaches can define the same object structure.

```ts
interface IUser {
    name: string;
    email: string;
}
type TUser = {
    name: string;
    email: string;
};

const user1: IUser = {
    name: "Sadia",
    email: "sadia@example.com"
};
const user2: TUser = {
    name: "Rakib",
    email: "rakib@example.com"
};
```

### Interface

An interface is commonly used to define the structure of objects. It is particularly useful in OOP, class implementation, extending existing structures, and declaration merging.

**Example:**

```ts
interface User {
    name: string;
}

interface User {
    email: string;
    role: string;
}

interface Admin extends User {
    permissions: string[];
}
```

Here, two interfaces with the same name are automatically merged into one interface. This feature is known as **Declaration Merging**.

The `Admin` interface also extends `User`, meaning it inherits the properties of `User` and adds its own properties.

### Type Aliases

A type alias allows developers to create a custom name for any valid TypeScript type.

Unlike interfaces, type aliases are not limited to object structures. They can represent primitive types, unions, intersections, tuples, functions, and more.

**Example:**

```ts
type Role = "admin" | "user" | "manager";

type Address = [string, string, number];    // thana, district, postal code

type User = {
    name: string;
    email: string;
    role: Role;
    address: Address;
};
type Admin = User & {
    permissions: string[];
};
```

Here, `Role` represents a union type, while `Address` represents a tuple containing two strings and one number.

Type aliases can also combine multiple object types using the intersection (`&`) operator.


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

### When Should You Choose One Over the Other?

There is no strict rule that says one is always better than the other. It depends on the requirements and the type of structure you want to define.

**Choose Type Aliases when:**

- You need union or intersection types.
- You need primitive type aliases.
- You are defining tuples.
- You are defining complex conditional or mapped types.
- You want to create reusable type expressions.

**Choose Interfaces when:**

- You are defining the structure of objects.
- You are defining contracts for classes.
- You need declaration merging.
- You expect other developers or libraries to extend the structure.
- You are working with object-oriented programming.

### Conclusion

Both Type Aliases and Interfaces are powerful features of TypeScript's type system. However, they have different capabilities and use cases. Therefore, choosing between them depends on the requirements of your application and which approach provides the most useful and maintainable solution.