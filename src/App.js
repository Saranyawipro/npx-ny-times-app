import React from 'react'
import ArticleList from './ArticleList';
import { Suspense } from 'react';
import { Skeleton } from 'antd';

//Root component
const App=()=>{
  
  //Rendering the ArticleList component
  return (
    <>
    <Suspense fallback={ <Skeleton active />}>
         <ArticleList/>
    </Suspense>
        
    </>
  )
  }
export default App;