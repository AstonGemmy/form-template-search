const errorProcessor = (error) => {
  const message = error?.response?.data?.message || error?.message || error?.toString()
  const data = error?.response?.data
  const errorObject = { message, data }
  return errorObject
}

export { errorProcessor }