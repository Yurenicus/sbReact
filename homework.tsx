import * as React from 'react';

// 1 
function concat(a: string, b: string): string {
    let c = '';
    return c = a + b;
}
concat('Hello ', 'World') // -> Hello World;

// 2
interface MyInterface {
    howIDoIt: string;
    simeArray: (string | number)[];
    withData: {
        howIDoIt: string;
        simeArray: (string | number)[];
    }[];
}

const MyHometask: MyInterface = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// 3
interface MyArray<T> {
    [N: number]: T;
    reduce<U>(callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}
const myArray: MyArray<number> = [1, 2, 3];
const initialValue = 0;
const myReducedArray = myArray.reduce((accumulator, value) => accumulator + value, initialValue);

// 4

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}
const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}

//5
function HomeComponent(props: IProps) {
    return (
        <div>
            { [props.firstProp, props.secondProp] }
        </div>
    )
}

type IProps = {
    firstProp: string,
    secondProp: number
}

type TMyType<T> = T extends React.ComponentType<infer R> ? R : never;
type t = TMyType<typeof HomeComponent>;

//6
// type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> = {
//     [N in keyof JSX.IntrinsicElements[T]] : T[N]
// };
type TGetJSXPropsProp<T extends keyof JSX.IntrinsicElements> =
  JSX.IntrinsicElements[T] extends React.DetailedHTMLProps<infer P, any> ? P : never

type TDivProps = TGetJSXPropsProp<'div'>
const props: TDivProps = {
    some: '1233', // throw error потому что не содержится в атрибутах div
    className: 'handler' // не выкидывает ошибку так как валидно для div элемента
}
