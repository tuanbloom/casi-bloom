const PrimaryButton = ({ addRecord, title }: any) => {


  return (
    <>
      <button type="button" className="btn btn-primary" onClick={addRecord}> {title}</button>
    </>)

}


export default PrimaryButton