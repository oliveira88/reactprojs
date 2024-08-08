export default function Jsx() {
  const titulo = "Meu título";
  const subtitulo = "Meu nome é ABÔRN";

  function rodape() {
    return <h3>Meu Rodapé</h3>;
  }

  return (
    <div>
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>
      <hr />
      <p>{JSON.stringify({ name: "Um nome" })}</p>
      {rodape()}
    </div>
  );
}
