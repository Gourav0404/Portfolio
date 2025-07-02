import "./styles.scss";


const PageHeaderContent = (props) => {
  const { HeadersText, Icons } = props;
  return (
    <div className="wrapper">
      <h2>{HeadersText}</h2>
      <span>{Icons}</span>

    </div>
  );
}


export default PageHeaderContent;