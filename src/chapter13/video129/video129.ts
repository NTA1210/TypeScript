export {};

console.log("video 129");

interface IDataString {
  data: string;
}
interface IDataNumber {
  data: number;
}
interface IData<T> {
  data: T;
}

const a: IData<string> = {
  data: "hello",
};

const b: IData<number> = {
  data: 123,
};

interface IAPIResponse<T> {
  status: number;
  data: T;
}

interface IUser {
  id: number;
  name: string;
  email: string;
}

const fetchUser = async () => {
  const res = await fetch("http://localhost:8000/users");
  const dataAPI = (await res.json()) as IUser[];

  const result: IAPIResponse<IUser[]> = {
    status: 200,
    data: dataAPI,
  };
};
