

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

const getBidProduct = async (session, id) => {
  let query = `MATCH (n: BidProduct {productId: $id}) RETURN n`;
  const result = await session.run(query, {id: id});
  if (result.records.length === 0) {
    return null; // Artwork not found
  }
  const bid = result.records[0].get('n').properties;

  return bid;
};

const postBid = async (session, bid) => {
    try {
      const query = [
        `CREATE (a: Bid {
            id: ${bid.id},
            productId: ${bid.productId},
            userId: "${bid.userId}",
            amount: ${bid.bidAmount},
            startingBid: ${bid.startingBid}
        })`,
        `RETURN a`,
      ].join("\n");
      const result = await session.run(query);
      if (result.records.length === 0) return null;
      let x = result.records[0].get('a').properties;
      return result.records[0].get('a').properties;
    } catch (error) {
      // Handle any errors that occur during the database operation
      console.error("Error posting bid:", error);
      throw { message: "Error posting bid", status: 500 };
    }
  };

// The following function should give users the ability to put their product up for auction
const postBidProduct = async (session, bidProduct) => {
    try {
        console.log("Reached bidmodel");
        const query = [
          `CREATE (a: BidProduct {
              id: ${bidProduct.id},
              startingBid: ${bidProduct.startingBid},
              endDate: "${bidProduct.endDate}"
          })`,
          `RETURN a`,
        ].join("\n");
        const result = await session.run(query);
        if (result.records.length === 0) return null;
        let x = result.records[0].get('a').properties;
        console.log("data:" + x);
        return result.records[0].get('a').properties;
      } catch (error) {
        // Handle any errors that occur during the database operation
        console.error("Error posting bid product:", error);
        throw { message: "Error posting bid product", status: 500 };
      }
    };
  

const deleteBid = async (session, id) => {
    const query = [
        `MATCH (a: Bid {id: ${id}})`,
        `DETACH DELETE a`,
        `RETURN a`
    ].join('\n');
    await session.run(query);
}


module.exports = {
    getBidById,
    getHighestBid,
    getBidByProductId,
    getBidProduct,
    postBid,
    postBidProduct,
    deleteBid
}