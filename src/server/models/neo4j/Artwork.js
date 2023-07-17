// Model file for Artwork related queries

const filters = {
    medium: ['painting', 'drawing', 'sculpture', 'digitalmedium', 'photography', 'prints'],
    material: ['acrylic', 'artpaper', 'canvas', 'digitalmaterial', 'oil', 'mixedmedia'],
    rarity: ['unique', 'limited', 'open']
};



const getArtworks = async (session, sortParam, filtersParam) => {
    let query = 'MATCH (n: Artwork) ';

    // Check if filters were given
    if (filtersParam.length > 0) {
        query += 'WHERE ';

        filtersParam.forEach((filter) => {
            for (const category in filters) {
                if (filters[category].includes(filter)) {
                    query += `n.${category} = '${filter}' OR `;
                }
            }
        });
        // Remove the trailing 'OR ' from query
        query = query.slice(0, -3);
    }

    // Check if sort parameter was given
    if (sortParam === '') {
        query += `RETURN n`;
    }
    else{
        query += `RETURN n ORDER BY n.${sortParam}`;
    }


    const result = await session.run(query);
    artworks = result.records.map(i => i.get('n').properties);
    return artworks;
}


module.exports = {
    getArtworks: getArtworks,
}