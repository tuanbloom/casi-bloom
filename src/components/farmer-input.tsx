const FarmerInput = (props: { title: string, updateName: any, shouldShow: boolean, farmerIndex: number }) => {
  const { title, updateName, shouldShow, farmerIndex } = props

  console.log(shouldShow)

  if (!shouldShow) {
    return null
  }


  return (
    <>
      <div className='col-md-6'>{title}</div>
      <div className='col-md-6'>
        <input type='text' onBlur={(event) => { updateName(event, farmerIndex) }} />
      </div>
    </>
  )
}

export default FarmerInput