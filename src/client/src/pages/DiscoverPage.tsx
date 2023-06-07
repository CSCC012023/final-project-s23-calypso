import React from "react";


export default function DiscoverPage() {

    const discoverPanel = {
        img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d926881-6ec9-460c-83c6-2d13a9bf27c0/dfylwhr-309bdfde-0e18-4015-82ef-24d8966c21a0.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRkOTI2ODgxLTZlYzktNDYwYy04M2M2LTJkMTNhOWJmMjdjMFwvZGZ5bHdoci0zMDliZGZkZS0wZTE4LTQwMTUtODJlZi0yNGQ4OTY2YzIxYTAucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.2YsVbwDBt8o1nh6s9Znul9019wSDg8lOH1lyNHOCNaI',
        name: 'Prodaye X Shadman Bundle',
        streams: 5123123
    }
    
    const categories = [
        'Trending',
        'Deals',
        'Beats',
        'Scenery',
        'New',
        'Orchestra',
        'Classical',
        'Portraits'
    ]

    const popularDigitalArt = [
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bca5ab6d-3c49-43ee-afbf-890918073516/dfwnwr2-c1eead6d-2361-4f13-9bdd-cee0f0e007f6.png/v1/fill/w_1280,h_750,q_80,strp/magic_forest___monday_by_darkmaster777_dfwnwr2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzUwIiwicGF0aCI6IlwvZlwvYmNhNWFiNmQtM2M0OS00M2VlLWFmYmYtODkwOTE4MDczNTE2XC9kZndud3IyLWMxZWVhZDZkLTIzNjEtNGYxMy05YmRkLWNlZTBmMGUwMDdmNi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.t8gi8iY6g52oQ0cYfJTQdTk5PQMW2WMcFyRn9k9EDBg',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o'
    ]

    return (
        <>
            Hello World
            {
                (<>
                    <img src={discoverPanel.img} />
                    <p>{discoverPanel.name}</p>
                    <p>{discoverPanel.streams} streams</p>
                </>)
            }
            {
                categories.map(c => { 
                    return <h1>{c}</h1> 
                })
            }
            {
                popularDigitalArt.map(i => { 
                    return <img src={i} />
                })
            }
        </>
        
    )
}