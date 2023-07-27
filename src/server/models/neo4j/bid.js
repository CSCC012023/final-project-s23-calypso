

const getBidById = async (session, bidId) => {
    let query = `MATCH (n: Bid {id: $bidId}) RETURN n`;
    const result = await session.run(query, { bidId: bidId });

    if (result.records.length === 0) {
        return null; // Artwork not found
    }

    const bid = result.records[0].get('n').properties;
    return bid;
};

const getBidByProductId = async (session, productId) => {
    let query = `MATCH (n: Bid {id: $productId}) RETURN n`;
    const result = await session.run(query, { productId: productId });

    if (result.records.length === 0) {
        return null; // Artwork not found
    }

    const bid = result.records[0].get('n').properties;
    return bid;
};

const getHighestBid = async (session, productId) => {
    let query = `MATCH (n: Bid {productId: $productId}) RETURN n order by n.amount DESC LIMIT 1`;
    const result = await session.run(query, {productId: productId});

    if (result.records.length === 0) {
        return null; // Artwork not found
    }

    const bid = result.records[0].get('n').properties;
    return bid;
};

const postBid = async (session, bid) => {
    console.log("Reached bidmodel")
    const query = [
        `CREATE (a: Bid {
            id: ${bid.id},
            productId: ${bid.productId},
            userId: ${bid.userId},
            amount: ${bid.amount},
            startingPrice: ${bid.startingPrice}
        })`,
        `RETURN a`
    ].join('\n');
    const result = await session.run(query);
    if (result.records.length === 0) return null;
    return result.records[0].get('a').properties;
}

const deleteBid = async (session, id) => {
    const query = [
        `MATCH (a: Bid {id: '${id}'})`,
        `DETACH DELETE a`,
        `RETURN a`
    ].join('\n');
    await session.run(query);
    //return {};
}


module.exports = {
    getBidById,
    getHighestBid,
    getBidByProductId,
    postBid,
    deleteBid
}