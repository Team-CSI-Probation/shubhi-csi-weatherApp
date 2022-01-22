import React, {useState} from 'react'
import { news } from './News'
import Newscard from './Newscard';


export default function Content() {
    const [newsData, setNewsData] = useState(news);
    // console.log(newsData);

    return (
        <>
        <Newscard newsData={newsData}/>
        </>
    )
}
