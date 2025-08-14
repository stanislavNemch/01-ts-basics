// Задача 3. Типізація масивів (файл task-3.ts)
// У цьому коді є три масиви з різними типами даних: рядки, числа та об’єкти.

console.log("Задача 3. Типізація масивів (файл task-3.ts)");

// 1. Додайте тип для масиву рядків usernames, використовуючи синтаксис [].
const usernames: string[] = ["alice", "bob", "charlie"];
// const usernames = ["alice", "bob", "charlie"]; // Це не типізовано

// 2. Додайте тип для масиву чисел ratings, використовуючи синтаксис [].
const ratings: number[] = [4.5, 3.8, 5];
// const ratings = [4.5, 3.8, 5]; // Це не типізовано

// 3. Для масиву products:
interface Product {
    id: number;
    title: string;
}

const products: Product[] = [
    { id: 1, title: "Phone" },
    { id: 2, title: "Laptop" },
];

console.log(`Usernames: ${JSON.stringify(usernames)}`);
console.log(`Ratings: ${JSON.stringify(ratings)}`);
console.log(`Products: ${JSON.stringify(products)}`);

// Завдання:
// 1. Додай тип для масиву рядків usernames, використовуючи синтаксис [].
// 2. Додай тип для масиву чисел ratings, використовуючи синтаксис [].
// 3. Для масиву products:
//    Створи окремий інтерфейс Product для елементів масиву.
//    Типізуй сам масив за допомогою цього інтерфейсу.
// 4. Залиш елементи масиву products без змін.
