import React from "react";


export default function DiscoverPage() {

    const discoverPanel = {
        img: require("/Users/maanethdesilva/Documents/CSCC01/Calypso/final-project-s23-calypso/src/client/src/assets/panda.png"),
        name: 'Prodaye X Shadman Bundle',
        streams: 5123123
    }
    
    const categories = [
        {
            name: 'Trending',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1168,h_684,q_70,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg",
            icon: "https://www.nicepng.com/png/full/52-527751_pics-for-chart-icon-black-and-white-png.png"
        },
        {
            name: 'Deals',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/dc31quf-64f7a3e1-4d3b-4c66-a025-bac7a926a8a0.jpg/v1/fill/w_1024,h_576,q_75,strp/aurora_by_bisbiswas_dc31quf-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kYzMxcXVmLTY0ZjdhM2UxLTRkM2ItNGM2Ni1hMDI1LWJhYzdhOTI2YThhMC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.GE_Joa4rNBM2YwtaqPsC9oxnz3t6E35Fdk4YURP1K7o",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png"
        },
        {
            name: 'Beats',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/der4s0l-a25aa7c7-2c57-43a2-885d-e6a26c71faaf.jpg/v1/fill/w_1192,h_670,q_70,strp/chasing_a_dream_by_bisbiswas_der4s0l-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXI0czBsLWEyNWFhN2M3LTJjNTctNDNhMi04ODVkLWU2YTI2YzcxZmFhZi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.4ZIPQ0voxSL5e5VC5DLhxMWxYzWzOB8pgGV2wYZT3UY",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        },
        {
            name: 'Scenery',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/dfwosp2-2a06ece4-fc69-44c8-a57d-681cef63e3f0.jpg/v1/fill/w_1192,h_670,q_70,strp/magical_meteor_night1_by_bisbiswas_dfwosp2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZndvc3AyLTJhMDZlY2U0LWZjNjktNDRjOC1hNTdkLTY4MWNlZjYzZTNmMC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7ZyTw7_43gRWYj_VwtYphTB-O4lGa18btaXylr6fF4I",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        },
        {
            name: 'New',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/derrop5-0e313434-78a9-46b7-876e-15008d7ca3f2.jpg/v1/fill/w_1192,h_670,q_70,strp/flowing__by_bisbiswas_derrop5-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXJyb3A1LTBlMzEzNDM0LTc4YTktNDZiNy04NzZlLTE1MDA4ZDdjYTNmMi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.rX9u-SwZHSyaW_CuvribV7KhXPd_7KZ1Y0FQ5wr3Xh0",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        },
        {
            name: 'Orchestra',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1168,h_684,q_70,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        },
        {
            name: 'Classical',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3be1dae-3caa-4d45-be6c-3de586ba95e2/deybf0e-3de7365e-6c7f-4e6c-a593-0bf743398d6f.jpg/v1/fill/w_1192,h_670,q_70,strp/on_a_trip_by_bisbiswas_deybf0e-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYjNiZTFkYWUtM2NhYS00ZDQ1LWJlNmMtM2RlNTg2YmE5NWUyXC9kZXliZjBlLTNkZTczNjVlLTZjN2YtNGU2Yy1hNTkzLTBiZjc0MzM5OGQ2Zi5qcGciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.j5zCWocNaXLpXpRDSIMyd41b7p1QjaAe8TUVDDRugJE",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        },
        {
            name: 'Portraits',
            bg: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1a24fc03-0d51-42dc-90fa-8abcb6b1e76a/dc5f9lo-81e72082-ad35-43fd-b34b-9975a65d4861.png/v1/fill/w_1024,h_576/dreamer_by_aenami_dc5f9lo-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvMWEyNGZjMDMtMGQ1MS00MmRjLTkwZmEtOGFiY2I2YjFlNzZhXC9kYzVmOWxvLTgxZTcyMDgyLWFkMzUtNDNmZC1iMzRiLTk5NzVhNjVkNDg2MS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.RULd7ncHTJG1tRaJFXd4PJUiiFr1vf-BQXKi2zNnbCU",
            icon: "https://www.nicepng.com/png/full/30-300142_dollar-sign-white-png.png" 
        }
    ]

    const popularDigitalArt = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1280,h_750,q_80,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfyuzkv-749f9cda-7e9c-4ef8-8470-5c12f0a5a8bf.jpg/v1/fill/w_1242,h_620,q_75,strp/the_whimsical_forest_by_lilkittty_dfyuzkv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjIwIiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnl1emt2LTc0OWY5Y2RhLTdlOWMtNGVmOC04NDcwLTVjMTJmMGE1YThiZi5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.msWrsklXl95XLCMpB8Uc0U6axzXb2M8eouTBZHmijrc',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ef38c767-6440-4c56-a99c-e59378b931cd/dfysb01-fa003a77-c726-4c2b-86c5-017e63d4173d.jpg/v1/fill/w_1242,h_576,q_75,strp/league_of_legend_s_demacia__in_my_mind_lol__by_lilkittty_dfysb01-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvZWYzOGM3NjctNjQ0MC00YzU2LWE5OWMtZTU5Mzc4YjkzMWNkXC9kZnlzYjAxLWZhMDAzYTc3LWM3MjYtNGMyYi04NmM1LTAxN2U2M2Q0MTczZC5qcGciLCJ3aWR0aCI6Ijw9MTI0MiJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ZyJSNev0zEeYGNzGHMy4Ft_AWVN09oB_Ic0JBeqL-H4',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7d6cdfc4-1e12-4ae2-a45d-1c50c7186b1a/dfvx8sv-ee1f8040-c0c2-4bf4-94b1-60db8f761112.png/v1/fill/w_1081,h_739,q_70,strp/fantasy_landscape_2_by_aigfantasy_dfvx8sv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODc1IiwicGF0aCI6IlwvZlwvN2Q2Y2RmYzQtMWUxMi00YWUyLWE0NWQtMWM1MGM3MTg2YjFhXC9kZnZ4OHN2LWVlMWY4MDQwLWMwYzItNGJmNC05NGIxLTYwZGI4Zjc2MTExMi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7Jc9Pm5PnplloDv6Op2ywFu9XzPyxQ-uSFJn5FMR2-Q'
    ]

    return (
        <>
            <div className="flex bg-darkestGrey text-white">
                <div className="w-3/12">
                </div>
                <div className="m-10 space-y-5 w-9/12">
                    <p className="text-4xl font-bold">Featured Products</p>
                    <p className="text-2xl font-semibold">Popular Beats</p>
                    <div className="flex bg-darkGrey rounded-lg">
                        <img className="h-52 w-52 object-cover" src={discoverPanel.img} />
                        <div className="p-5 space-y-5">
                            <p className="text-5xl font-semibold">{discoverPanel.name}</p>
                            <p>{discoverPanel.streams} streams</p>
                            <p className="text-right">4.99</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                    {
                            categories.map((c,i) => { 

                                return i < 4 && (
                                    <div style={{backgroundImage: `url(${c.bg})`}} className="py-5 w-60 rounded-lg text-center">
                                    <img src={c.icon} className="mx-auto h-10"/>
                                    <h1 className="text-center pt-2">{c.name}</h1> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="flex justify-between">
                        {
                            categories.map((c,i) => { 

                                return i > 3 && (
                                    <div style={{backgroundImage: `url(${c.bg})`}} className="py-5 w-60 rounded-lg text-center">
                                    <img src={c.icon} className="mx-auto h-10"/>
                                    <h1 className="text-center pt-2">{c.name}</h1> 
                                    </div>
                                )
                            })
                        }
                    </div>
                    <p className="text-2xl font-semibold">Popular Sceneric Art</p>
                    <div className="flex space-x-5">
                        <img src={popularDigitalArt[0]} className="w-8/12 h-96 object-cover"/>
                        <div className="w-1/4">
                            <div className="flex space-x-5 mb-5">
                            {
                                
                                popularDigitalArt.map((i,j) => { 
                                    return j > 0 && j < 3 && <img src={i} className="w-36 h-36 object-cover"/>
                                })
                            }
                            </div>
                            <div className="flex space-x-5">
                            {
                                
                                popularDigitalArt.map((i,j) => { 
                                    return j > 2 && <img src={i} className="w-36 h-36 object-cover"/>
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        
    )
}