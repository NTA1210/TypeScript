console.log("video 129");
const a = {
    data: "hello",
};
const b = {
    data: 123,
};
const fetchUser = async () => {
    const res = await fetch("http://localhost:8000/users");
    const dataAPI = (await res.json());
    const result = {
        status: 200,
        data: dataAPI,
    };
};
export {};
