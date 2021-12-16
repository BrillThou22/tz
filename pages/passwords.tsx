import Link from "next/link";

const Passwords = ({ passwords }) => {
  return (
    <div>
      <h1>Страница сгенерированных паролей</h1>
      <Link href="/">Назад</Link>

      {/* Я сразу вытаскиваю дату и пароль из пропсов, ибо только они и могут прийти */}
      {passwords.map(({ date, password }, key: number) => {
        return (
          <div key={key}>
            <p>
              {/* Не забываем, что на сервере дата с типом string, поэтому конвертируем в int */}
              <b>Дата</b>: {new Date(parseInt(date)).toLocaleString()}
            </p>
            <p>
              <b>Пароль</b>: {password}.
            </p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("http://localhost:8000/passwords");
  const passwords = await response.json();

  return {
    props: { passwords },
  };
}

export default Passwords;
