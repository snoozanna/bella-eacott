import Main from "../../components/Structure/Main/Main";

export const Book = () => {
  return (
    <>
      <Main>
        <h2>Book me</h2>
        <p>
          I do home visits across most parts of London, and also see clients in
          Brixton. Click here to{" "}
          <a
            href="https://acuityscheduling.com/"
            target="_blank"
            rel="noreferrer"
          >
            book
          </a>
          . Find out more about how I work and what to expect
          <a href="/what-to-expect"> here</a>, the type of
          <a href="/expect"> treatments</a> and <a href="/pricing">costs</a>.
        </p>
      </Main>
    </>
  );
};

export default Book;
