import React from 'react'
//import Menu from '../components/Menu'

export default function DiscoverPage() {
  const categories = [
    {
      name: 'Trending',
      bg: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1168,h_684,q_70,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-24 h-24 mx-auto"
        >
          <path
            fill-rule="evenodd"
            d="M15.22 6.268a.75.75 0 01.968-.432l5.942 2.28a.75.75 0 01.431.97l-2.28 5.941a.75.75 0 11-1.4-.537l1.63-4.251-1.086.483a11.2 11.2 0 00-5.45 5.174.75.75 0 01-1.199.19L9 12.31l-6.22 6.22a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l3.606 3.605a12.694 12.694 0 015.68-4.973l1.086-.484-4.251-1.631a.75.75 0 01-.432-.97z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
  ]

  const trendingSongs = [
    {
      img: require('../../assets/panda.png'),
      name: 'Beat 1',
      price: 4.99,
      duration: '4:32',
    },
    {
      img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI',
      name: 'Beat 2',
      price: 3.99,
      duration: '2:34',
    },
    {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI',
        name: 'Beat 3',
        price: 3.99,
        duration: '2:34',
    },
    {
        img: require('../../assets/panda.png'),
        name: 'Beat 1',
        price: 4.99,
        duration: '4:32',
      },
      {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI',
        name: 'Beat 2',
        price: 3.99,
        duration: '2:34',
      },
      {
          img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI',
          name: 'Beat 3',
          price: 3.99,
          duration: '2:34',
        },
        {
            img: require('../../assets/panda.png'),
            name: 'Beat 1',
            price: 4.99,
            duration: '4:32',
          },
          {
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw8w0p-b440a95d-466d-4bf4-986b-5f04700148d6.png/v1/fill/w_894,h_894,q_70,strp/grim_adoptable__limited_edition_ultra_rare__by_ceroticart_dfw8w0p-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OHcwcC1iNDQwYTk1ZC00NjZkLTRiZjQtOTg2Yi01ZjA0NzAwMTQ4ZDYucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.cTWvB_ay92dr7YVy73fI_gAWQjJNvAXSigPKXcK8itI',
            name: 'Beat 2',
            price: 3.99,
            duration: '2:34',
          },
          {
              img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f305fd5d-9181-411b-bf23-2daea267b63d/dfw9u64-1486a4e6-4453-4f08-a39d-489cd1e9b11c.png/v1/fill/w_894,h_894,q_70,strp/minerva_adoptable_by_ceroticart_dfw9u64-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzMDVmZDVkLTkxODEtNDExYi1iZjIzLTJkYWVhMjY3YjYzZFwvZGZ3OXU2NC0xNDg2YTRlNi00NDUzLTRmMDgtYTM5ZC00ODljZDFlOWIxMWMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.0hqyUEtFzp1YHMX5eP4dPqt3H4gXUwWiKJvgm7eclsI',
              name: 'Beat 3',
              price: 3.99,
              duration: '2:34',
        },

  ]
  const popularDigitalArt = [
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7cb217b1-79b0-4951-b667-cea9c82230bd/dfwl3z5-eb7b99cc-d100-4483-8294-773cc4a3d7ed.jpg/v1/fill/w_800,h_438,q_75,strp/white_moon_by_elysekh_dfwl3z5-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzdjYjIxN2IxLTc5YjAtNDk1MS1iNjY3LWNlYTljODIyMzBiZFwvZGZ3bDN6NS1lYjdiOTljYy1kMTAwLTQ0ODMtODI5NC03NzNjYzRhM2Q3ZWQuanBnIiwiaGVpZ2h0IjoiPD00MzgiLCJ3aWR0aCI6Ijw9ODAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLndhdGVybWFyayJdLCJ3bWsiOnsicGF0aCI6Ilwvd21cLzdjYjIxN2IxLTc5YjAtNDk1MS1iNjY3LWNlYTljODIyMzBiZFwvZWx5c2VraC00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.uSAXqp5SmRTJxT2nR3H2tfw6LnLPAdoK-cCyJLlvHbM',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfyuzkv-749f9cda-7e9c-4ef8-8470-5c12f0a5a8bf.jpg/v1/fill/w_1242,h_620,q_75,strp/the_whimsical_forest_by_lilkittty_dfyuzkv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnl1emt2LTc0OWY5Y2RhLTdlOWMtNGVmOC04NDcwLTVjMTJmMGE1YThiZi5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.msWrsklXl95XLCMpB8Uc0U6axzXb2M8eouTBZHmijrc',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfysb01-fa003a77-c726-4c2b-86c5-017e63d4173d.jpg/v1/fill/w_1242,h_576,q_75,strp/league_of_legend_s_demacia__in_my_mind_lol__by_lilkittty_dfysb01-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnlzYjAxLWZhMDAzYTc3LWM3MjYtNGMyYi04NmM1LTAxN2U2M2Q0MTczZC5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZyJSNev0zEeYGNzGHMy4Ft_AWVN09oB_Ic0JBeqL-H4',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d6cdfc4-1e12-4ae2-a45d-1c50c7186b1a/dfvx8sv-ee1f8040-c0c2-4bf4-94b1-60db8f761112.png/v1/fill/w_1081,h_739,q_70,strp/fantasy_landscape_2_by_aigfantasy_dfvx8sv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc1IiwicGF0aCI6IlwvZlwvN2Q2Y2RmYzQtMWUxMi00YWUyLWE0NWQtMWM1MGM3MTg2YjFhXC9kZnZ4OHN2LWVlMWY4MDQwLWMwYzItNGJmNC05NGIxLTYwZGI4Zjc2MTExMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7Jc9Pm5PnplloDv6Op2ywFu9XzPyxQ-uSFJn5FMR2-Q',
  ]

  return (
    <>
      <div className="flex bg-darkestGrey text-white h-screen overflow-scroll">
        {/* <Menu /> */}
        <div className="w-full">
          <div
            style={{
              backgroundImage: `url(${categories[0].bg})`,
              opacity: 0.85,
            }}
            className="pt-72 pb-5 mx-2 h-auto space-x-5 rounded-lg text-center flex"
          >
            <div className="my-auto pl-10">{categories[0].icon}</div>
            <h1 className="my-auto text-6xl font-bold">{categories[0].name}</h1>
          </div>

          <div className="m-10 space-y-5 h-screen">
            <p className="text-4xl font-bold">Weekly Songs</p>

            {trendingSongs.map((s, i) => {
              return (
                <div className="flex justify-between px-10">
                  <div className="flex space-x-10 my-auto">
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
              )
            })}

            <p className="text-2xl font-semibold">Popular Sceneric Art</p>
            <div className="flex space-x-5 py-10">
              <img
                src={popularDigitalArt[0]}
                className="w-8/12 h-96 object-cover"
              />
              <div className="overflow-scroll">
                <div className="flex space-x-5 mb-5">
                  {popularDigitalArt.map((i, j) => {
                    return (
                      j > 0 &&
                      j < 3 && (
                        <img src={i} className="w-36 h-36 object-cover" />
                      )
                    )
                  })}
                </div>
                <div className="flex space-x-5">
                  {popularDigitalArt.map((i, j) => {
                    return (
                      j > 2 && (
                        <img src={i} className="w-36 h-36 object-cover" />
                      )
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}