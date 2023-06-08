import React from "react";


export default function DiscoverPage() {

    const discoverPanel = {
        img: require("/Users/maanethdesilva/Documents/CSCC01/Calypso/final-project-s23-calypso/src/client/src/assets/panda.png"),
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
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/123f53fb-948b-4394-96a0-453c5c05d82f/de7x1qt-1ce4e01f-12aa-4f0d-b39d-932959cd2627.png/v1/fill/w_1280,h_720,q_80,strp/autumn_sunset_by_mleth_de7x1qt-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvMTIzZjUzZmItOTQ4Yi00Mzk0LTk2YTAtNDUzYzVjMDVkODJmXC9kZTd4MXF0LTFjZTRlMDFmLTEyYWEtNGYwZC1iMzlkLTkzMjk1OWNkMjYyNy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.KQLtT3Q_l3Tu5Rw_xE5EOzm5BJDIIBVRVY8iI5ZcX8o'
    ]

    return (
        <>
            <div className="flex bg-darkestGrey text-white">
                <div className="w-72">
                </div>
                <div className="w-full m-10 space-y-5">
                    <div className="flex bg-darkGrey rounded-lg">
                            <img className="h-52 w-52 object-cover" src={discoverPanel.img} />
                            <div className="p-5 w-full space-y-">
                                <p className="text-5xl font-semibold">{discoverPanel.name}</p>
                                <p>{discoverPanel.streams} streams</p>
                                <p className="text-right">4.99</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            {
                                categories.map(c => { 

                                    return (
                                    <div className="pt-10 pb-10 w-48 rounded-lg text-center space-x-2 bg-darkGrey">
                                    <h1>{c}</h1> 
                                    </div>
                                    )
                                })
                            }
                        </div>
                        <p className="text-lg font-semibold">Popular Digial Art</p>
                        <div className="flex space-x-5">
                        <img src={popularDigitalArt[0]} className="w-1/2 h-72 object-cover"/>
                        {
                            
                            popularDigitalArt.map((i,j) => { 
                                return j > 0 && <img src={i} className="w-36 h-36 object-cover"/>
                            })
                        }
                        </div>
                </div>
            </div>
        </>
        
    )
}