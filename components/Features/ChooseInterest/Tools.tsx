import React from 'react'
type toolItems = {
    keyword: string,
    title:string,
    description:string
    

}
const Tools:React.FC<toolItems> = ({title, description}) => {
return (
    <div>
        <h1>
            {title}
        </h1>
        <h4>
            {description}
        </h4>
    </div>
  )
}

export default Tools