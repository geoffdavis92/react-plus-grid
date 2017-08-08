import React from 'react'

const SubPage = ({ children, name, ...rest }) => <div id={`subpage-${name}`} {...rest}>{children}</div>

export default SubPage