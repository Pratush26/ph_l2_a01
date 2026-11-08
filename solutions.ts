function multiplyValue(value: number, multiplier?: number): number {
    return multiplier == undefined ? value*2 : value*multiplier;
}

function processInput(val: string | number | boolean): number | string {
    if(typeof val === "string") return val.trim().toLowerCase();
    else if(typeof val === "number") return val * 10;
    else return val === true ? "Active" : "Inactive";
}

function formatCoordinate(val: readonly [number, number, string]): string {
    const [latitude, longitude, locationName] = val;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

function concatenateArrays <T> (...arrays: T[][]): T[] {
    return arrays.flatMap((e: T[]) => e);
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
function getPopularCourses (courses: Course[], minStudents: number): Course[] {
    return courses.filter((e: Course) => e.isPublished && e.students >= minStudents);
}

function pluckValues <T, K extends keyof T> (items: T[], key: K): T[K][] {
    return items.map((e) => e[key]);
}

class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ) {}

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary);
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

async function validateAgeAsync(age: number): Promise<string> {
    return new Promise((resolve, reject) => {
        if (age < 18) reject(new Error("Access Denied: Must be 18 or older"));
        else setTimeout(() => resolve("Access Granted"), 1000);
    });
}