import { Link } from "react-router-dom";
import { Details } from "./BlogDetails";

export default function BlogList() {
    return (  
        <div className="blog-list">
            {
                Details.map((detail, index)=> (
                    <section key={index} className="w-full px-32 ">
                        <div className="inner w-full flex flex-row mt-6 border-b-2">
                            <img className="w-2/5 rounded-2xl" src={detail.imgSrc} alt= "location" />
                            
                            <div className="inner1 w-3/6 flex flex-col ">
                                <div className="inner2 w-3/4 flex flex-row mb-4">
                                    <h6 className="text-lg font-normal uppercase">{detail.title}</h6>
                                    <Link to={detail.mapLink} className="underline">View on Google Maps</Link>
                                </div>


                                <div className="w-full">
                                    <h2 className="mb-2 capitalize text-4xl font-bold">{detail.title1}</h2>
                                    <p className="mb-2 text-lg font-semibold">{detail.first}</p>
                                    <p className="mb-2">{detail.second}</p>
                                </div>
                                
                            </div>
                        </div>
                    </section>
                    
                ))
            }

        </div>
    );
}