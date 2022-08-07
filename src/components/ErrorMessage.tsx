import React from 'react'

interface ErrorMessageProps{
    error: string;
}

export const ErrorMessage = ({error}: ErrorMessageProps) => {

  return (
<p className="error">{error}</p>
  )
}
