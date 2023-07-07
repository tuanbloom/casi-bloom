const DangerButton = ({ handler, title }: any) => {


  return (
    <>
      <button type="button" className="btn btn-danger" onClick={handler}> {title}</button>
    </>)

}


export default DangerButton