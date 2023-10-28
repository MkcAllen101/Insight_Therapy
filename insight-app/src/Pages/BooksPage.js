import React, { useState } from "react";
import BCards from "../components/booksCard";
import bookItems from '../components/data'

export default function Books(){
    
    const [books, setBooks] = useState(bookItems);
    return(
        <>
        <div style={{display:"flex", flexDirection:"column"}}>
        <h1 style={{textAlign:"center", marginTop:"2rem", marginBottom:"4rem"}}>Get better, one page at a time</h1>
        <div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", alignContent:"center", marginTop:"1rem"}}>
            {books.map((singleBook)=>{
                return <BCards key={singleBook.id} {...singleBook} />
            })}
        </div>
        </div>
        </>
    );
}