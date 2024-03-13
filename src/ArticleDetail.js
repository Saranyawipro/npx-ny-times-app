import React from 'react'


function ArticleDetail({articles}) {
  
  return (
    <div>    
     
      <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
          {articles.map((article) => {
            const { title, abstract, byline, published_date, type, url, id } =
              article;
            return (
              <article
                key={id}
                className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"
              >
                <h2 className="font-bold text-2xl mb-2">
                  
                  <a href={url} target="_blank" rel="noreferrer">
                    {title}
                  </a>
                </h2>
                <p>{abstract}</p>

                <ul className="my-4">
                  <li>
                    <span className="font-bold">Author: {byline}</span>
                  </li>
                  <li>
                    <span className="font-bold">
                      Date of Publish: {published_date}
                    </span>
                  </li>
                  <li>
                    <span className="font-bold">Type: {type}</span>
                  </li>
                </ul>
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-sky-700 hover:decoration-blue-400"
                >
                  Web Resource
                </a>
              </article>
            );
          })}
        </section>
        
    </div>
  )
}

export default ArticleDetail
