export {};

console.log("lab07");

interface IBlog {
  id: number;
  title: string;
  author: string;
  content: string;
}
const table = document.getElementById("blogs") as HTMLTableElement;

const fetchBlogs = async () => {
  const res = await fetch("http://localhost:8000/blogs");
  const data = (await res.json()) as IBlog[];
  //check lại hình thù data (joi,zod...)

  console.log(data);

  data.length &&
    data.map((blog) => {
      const newRow = table.insertRow();

      const idCell = newRow.insertCell();
      const titleCell = newRow.insertCell();
      const authorCell = newRow.insertCell();
      const contentCell = newRow.insertCell();

      idCell.innerHTML = blog.id.toString();
      titleCell.innerHTML = blog.title;
      authorCell.innerHTML = blog.author;
      contentCell.innerHTML = blog.content;
    });
};

fetchBlogs();
