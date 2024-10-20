
type ArticleProps = {
    title: string
    article:string
    quote? : string
}



const Article:React.FC<ArticleProps>= ({title,article,quote}) =>{
    return(
        <section>
            <h3>{title}</h3>
            <p>{article}</p>
            <blockquote>{quote}</blockquote>
        </section>
    )
}

export default Article