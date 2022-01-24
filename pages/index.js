
function Titulo(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
    </>
  );
}




//Componente React 
function HomePage() {
  //JS
  return (
    <div>
     <Titulo tag="h1">Boa vindas de volta!</Titulo> 
     <h2>Discord - Alura Matrix</h2>
    </div>
  )

}

export default HomePage;
