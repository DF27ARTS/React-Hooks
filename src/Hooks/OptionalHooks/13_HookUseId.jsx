import React, { useId } from "react";

const EmailForm = () => {
  const id = useId();

  return (
    <>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />
      <br />
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} type="text" />
    </>
  );
};

const HookUseId = () => {
  return (
    <>
      <EmailForm />
      <article style={{ marginBlock: "1rem" }}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero esse
        assumenda corporis repellat earum, officia officiis, molestiae commodi
        inventore fugiat debitis vero quam ratione quas natus, ducimus pariatur
        ullam autem expedita saepe sit illo quod. Pariatur, hic! Animi, totam
        soluta nam vero possimus sapiente laboriosam, sed, aliquid tenetur quis
        pariatur ad quaerat suscipit architecto. Dignissimos repudiandae nam
        aliquid iusto debitis dolorum sit exercitationem suscipit nihil dolorem,
        impedit obcaecati adipisci minus eligendi minima ab recusandae unde in
        architecto possimus. Itaque, sit similique eius minus hic enim dolorem,
        ipsa distinctio corporis porro incidunt laudantium blanditiis alias
        accusamus! Velit ducimus voluptatem accusamus sunt, rem repellat
        incidunt consectetur numquam rerum fuga dicta hic itaque similique
        cupiditate eum perferendis aliquid? Aliquam, non iste! Atque ullam
        recusandae incidunt alias iste! Quia ex sint nostrum fuga hic odio minus
        placeat ipsum ea neque, illo consequatur ipsam nihil alias veritatis
        similique qui inventore, adipisci iusto perspiciatis assumenda dolores
        corrupti! Explicabo quos blanditiis culpa, obcaecati aperiam ipsum
        repellat cupiditate odio, harum quaerat cumque repudiandae tempora,
        nesciunt laboriosam cum. Numquam sed suscipit fugit eos ducimus
        obcaecati magni vel, provident quae neque accusantium? Nam, odio.
        Dolores atque repudiandae laudantium alias saepe dolorum hic
        reprehenderit id, dolor autem sit voluptatibus doloremque similique.s
      </article>
      <EmailForm />
    </>
  );
};

export default HookUseId;
