import React from 'react'

const Page = ({ children, name, ...rest }) => <div id={`page-${name}`} {...rest}>{children}</div>

export default Page