import "./Main.css";
export default function Main(page) {
  return (
    <>
      <main className={page.page}>{page.children}</main>
    </>
  );
}
