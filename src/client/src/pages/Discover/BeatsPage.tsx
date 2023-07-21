import React, { useEffect, useState } from 'react'
import Menu from '../../components/Menu'
import MusicList from '../../components/MusicList'
//import Menu from '../components/Menu'

export default function BeatsPage() {
  const categories = [
    {
      name: 'Beats',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/der4s0l-a25aa7c7-2c57-43a2-885d-e6a26c71faaf.jpg/v1/fill/w_1192,h_670,q_70,strp/chasing_a_dream_by_bisbiswas_der4s0l-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXI0czBsLWEyNWFhN2M3LTJjNTctNDNhMi04ODVkLWU2YTI2YzcxZmFhZi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4ZIPQ0voxSL5e5VC5DLhxMWxYzWzOB8pgGV2wYZT3UY',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 mx-auto"
        >
          <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
        </svg>
      ),
    },
  ]

  const [trendingSongs, setTrendingSongs] = useState([])
    
  const popularDigitalArt = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cb217b1-79b0-4951-b667-cea9c82230bd/dfwl3z5-eb7b99cc-d100-4483-8294-773cc4a3d7ed.jpg/v1/fill/w_800,h_438,q_75,strp/white_moon_by_elysekh_dfwl3z5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjYjIxN2IxLTc5YjAtNDk1MS1iNjY3LWNlYTljODIyMzBiZFwvZGZ3bDN6NS1lYjdiOTljYy1kMTAwLTQ0ODMtODI5NC03NzNjYzRhM2Q3ZWQuanBnIiwiaGVpZ2h0IjoiPD00MzgiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzdjYjIxN2IxLTc5YjAtNDk1MS1iNjY3LWNlYTljODIyMzBiZFwvZWx5c2VraC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.uSAXqp5SmRTJxT2nR3H2tfw6LnLPAdoK-cCyJLlvHbM',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfyuzkv-749f9cda-7e9c-4ef8-8470-5c12f0a5a8bf.jpg/v1/fill/w_1242,h_620,q_75,strp/the_whimsical_forest_by_lilkittty_dfyuzkv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnl1emt2LTc0OWY5Y2RhLTdlOWMtNGVmOC04NDcwLTVjMTJmMGE1YThiZi5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.msWrsklXl95XLCMpB8Uc0U6axzXb2M8eouTBZHmijrc',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfysb01-fa003a77-c726-4c2b-86c5-017e63d4173d.jpg/v1/fill/w_1242,h_576,q_75,strp/league_of_legend_s_demacia__in_my_mind_lol__by_lilkittty_dfysb01-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnlzYjAxLWZhMDAzYTc3LWM3MjYtNGMyYi04NmM1LTAxN2U2M2Q0MTczZC5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZyJSNev0zEeYGNzGHMy4Ft_AWVN09oB_Ic0JBeqL-H4',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d6cdfc4-1e12-4ae2-a45d-1c50c7186b1a/dfvx8sv-ee1f8040-c0c2-4bf4-94b1-60db8f761112.png/v1/fill/w_1081,h_739,q_70,strp/fantasy_landscape_2_by_aigfantasy_dfvx8sv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc1IiwicGF0aCI6IlwvZlwvN2Q2Y2RmYzQtMWUxMi00YWUyLWE0NWQtMWM1MGM3MTg2YjFhXC9kZnZ4OHN2LWVlMWY4MDQwLWMwYzItNGJmNC05NGIxLTYwZGI4Zjc2MTExMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7Jc9Pm5PnplloDv6Op2ywFu9XzPyxQ-uSFJn5FMR2-Q',
  ]

  useEffect(() => {
    fetch(`http://localhost:8080/api/music`)
    .then(async response => {
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setTrendingSongs(data);
      } else {
        window.alert('something went wrong');
      }
    });
  }, [])

  return (
    <>
      <div className="flex bg-darkestGrey text-white h-screen overflow-clip">
        <Menu />
        <div className="w-full overflow-scroll">
          <div
            style={{
              backgroundImage: `url(${categories[0].bg})`,
              opacity: 0.85,
            }}
            className="pt-72 pb-5 h-auto space-x-5 rounded-lg text-center flex"
          >
            <div className="my-auto pl-10">{categories[0].icon}</div>
            <h1 className="my-auto text-6xl font-bold">{categories[0].name}</h1>
          </div>

          <div className="m-10 h-screen">
            <p className="text-4xl pb-5 font-bold">Lofi beats</p>
            <MusicList musicList={trendingSongs}/>
            <p className="text-4xl pb-5 pt-10 font-bold">Freestyle beats</p>
            <MusicList musicList={trendingSongs}/>
            
          </div>
        </div>
      </div>
    </>
  )
}
