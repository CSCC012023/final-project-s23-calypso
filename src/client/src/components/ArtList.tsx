import React from "react";

export default function ArtList(props: any) {
    const artList = props.artList
    return (<>
    {artList.map((s: any, i: number) => {
        return (
          <>
            <div
              className={
                i > 0
                  ? 'border-blue-950 border-t-[1px] border-opacity-20 py-5 flex hover:bg-gray-100'
                  : 'py-5 flex hover:bg-gray-100'
              }
            >
              <div className="flex space-x-10 my-auto">
                <p className="my-auto font-semibold">{i + 1}</p>
                <img
                  className="h-72 object-cover rounded-lg"
                  src={s.imageSrc}
                />
              </div>
              <div>
              <div className="px-5 space-y-3 my-auto">
              <p className="pt-2 text-3xl font-medium">{s.name}</p>
                  
                <p className="text-lg font-medium text-gray-400">{s.artistName}</p>
                <p className="text-md font-medium text-gray-600">$ {s.price}</p>
    
                </div> 
              </div>
              </div>
          </>
        )
      })}
      </>
    )

}