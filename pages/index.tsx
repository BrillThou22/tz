import Link from "next/link";
import { useState } from "react";

/* В данном ТЗ не стал использовать Redux, с ним здесь только возни больше. */

const Index = () => {
  const [password, setPassword] = useState(null);

  // Генерация пароля.
  const handleGenPassword = async () => {
    await fetch("http://localhost:8000/passwords", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((genered_pass) => {
        // Устанавливаем результат на фронте
        setPassword(genered_pass.password);
      });
  };

  // Рендеринг
  return (
    <div>
      <h1>Генерация пароля</h1>
      <button onClick={handleGenPassword}>Сгенерировать пароль</button>

      {/* Ничего не выводим, пока новый пароль не сгенерирован */}
      {password !== null ? (
        <>
          <hr />
          <input
            style={{ width: "100%" }}
            type="text"
            placeholder=""
            value={password}
            onChange={() => {}}
          />
          <Link href="/passwords">
            <a>Посмотреть сгенерированные пароли</a>
          </Link>
        </>
      ) : null}
    </div>
  );
};

export default Index;
