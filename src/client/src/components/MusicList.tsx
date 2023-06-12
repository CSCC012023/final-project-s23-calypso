import React from "react";

export default function MusicList(props: any) {
    const musicList = props.musicList
    return (<>
    {musicList.map((s: any, i: number) => {
        return (
          <>
            <div
              className={
                i > 0
                  ? 'border-blue-50 border-t-[1px] border-opacity-20 py-2 flex justify-between px-10 hover:bg-darkGrey'
                  : 'py-2 flex justify-between px-10 hover:bg-darkGrey'
              }
            >
              <div className="flex justify-between space-x-10 my-auto">
                <p className="my-auto font-semibold">{i + 1}</p>
                <img
                  className=" w-14 h-14 object-cover rounded-lg"
                  src={s.img}
                />
                <p className="my-auto">{s.name}</p>
              </div>
              <p className="my-auto">$ {s.price}</p>
              <div className="flex space-x-10 my-auto">
                <p>{s.duration}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </div>
            </div>
          </>
        )
      })}
      </>
    )

}