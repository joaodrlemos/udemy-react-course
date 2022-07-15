import React, { useEffect } from 'react'

const Alert = ({msg, type, removeAlert, list}) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()},1500);
    return () => {
      clearTimeout(timeout)};
  }, [list])
  return <h2 className={`alert alert-${type}`}>{msg}</h2>
}

export default Alert
