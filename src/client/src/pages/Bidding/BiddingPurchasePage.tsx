import React from 'react'
import Menu from '../../components/Menu'
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { formatCurrency } from '../../utils/formatCurrency';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie'
import ErrorPage from "../Error/ErrorPage"
import { format, parseISO, differenceInSeconds } from 'date-fns';
import HeaderNavBar from '../../components/common/HeaderNavBar';
import { v4 as uuidv4 } from 'uuid';


type Product = {
  id: number
  name: string,
  artist: string,
  style: string,
  price: number,
  href: string,
  imageSrc: string,
  imageAlt: string,
  date: number,
  rarity: string,
  medium: string,
  material: string,
}

type bid = {
  id: string
  productId: number
  userId: string
  bidAmount: number
}

type bidProduct = {
  id: number // Synonymous with the product id
  startingBid: number
  endDate: string
}

interface QueryParams {
  [key: string]: string[];
}

const initUser = {
  id: 0,
  username: 'username',
  description: 'description',
  pic: require('../../assets/sampleProfilePicture1.png'),
  banner: require('../../assets/sampleLargeProductImage2.jpg')
}

function BiddingPurchasePage({}: any) {
  const uniqueId = uuidv4();
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [product2, setProduct2] = useState<Product | null>(null);
  const [bidData, setBidData] = useState<bid | null>(null);
  const [bidAmount, setBidAmount] = useState<string>('');
  const [clicked, setClicked] = useState<boolean>(false);
  const [bidProduct, setBidProduct] = useState<bidProduct | null>(null);
  const [pageError, setPageError] = useState<boolean>(false);
  const [user, setUser] = useState<any>(initUser); // For determining the current user
  const [artUser, setArtUser] = useState<any>(initUser); // For determining the user owning the artwork
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const [less, setLess] = useState<boolean>(false);

  const getArtworkById = async (queryParams: QueryParams) => {
    axios.get(`http://localhost:8080/api/v0/artworks/id/${id}`, {
        params: queryParams
    })
        .then(response => {
            const data = response.data;
            setProduct(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
        console.log(product);
  };

  
  function getUserByID(id: string) {
    axios.get(`http://localhost:8080/api/v0/users/${id}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setUser(data);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  function getUserByUsername(username: string | undefined) {
    axios.get(`http://localhost:8080/api/v0/users/user/${username}`)
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setArtUser(data);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

  function getBidProduct(queryParams: QueryParams) {
    axios.get(`http://localhost:8080/api/v0/bid/bidProduct/${id}`, { params: queryParams })
      .then(response => {
        if (response.status === 200) {
          const data = response.data;
          setBidProduct(data);
        } else {
          setPageError(true);
        }
      })
      .catch(err => setPageError(true));
  }

    // New useEffect to fetch the current user's data
    useEffect(() => {
      const fetchUserData = async () => {
        if (!cookies.token) {
          console.log("No token found. User is not authenticated.");
          return;
        }
    
        try {
          const { data } = await axios.post(
            '/api/users/verify',
            {}
          );
    
          const { status, id } = data;
          if (status) {
            setIsLoggedIn(true);
            getUserByID(id); // Fetch the current user's data
          } else {
            console.log("Token is invalid. User is not authenticated.");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
          setPageError(true); // Set an error state in case of an error
        }
      };
    
      fetchUserData();
    }, [cookies.token, setIsLoggedIn]);
  

  useEffect(() => {
    const postBid = async () => {
      if (bidData == null) {
        return;
      }

      try {
        const response = await axios.post(
          "http://localhost:8080/api/v0/bid/post",
          bidData,
          {
            headers: {
              "Content-Type": "application/json", // Set the Content-Type header to indicate JSON data
            },
          }
        );
        const data = response.data;
        // setProduct(data);
      } catch (error: any) {
        console.error("Error fetching data:", error.response.data);
      }
    };

    if (bidData !== null) {
      postBid();
      setLess(false);
    }
  }, [bidData]);

  const handleBid = (productId: number, userId: string, bidAmount: string, startingBid: number) => {
    const parsedBidAmount = parseInt(bidAmount);
    if (parsedBidAmount < 20) { //TODO: Change this to the current bid amount instead of 20
      setLess(true);
      return;
    } else {
      setLess(false); // Reset the error message when the bid amount is valid
    }

    const uniqueId = uuidv4();

    if (bidAmount !== "") {
      const updatedBidData = {
        id: uniqueId,
        productId: productId,
        userId: userId,
        bidAmount: parseInt(bidAmount),
      };
      setBidData(updatedBidData); // Update state, if needed for other purposes
    } else {
      console.error('Invalid bid amount');
    }
  };

  // Fetch artwork details when the component mounts
  useEffect(() => {
    const queryParams: QueryParams = {};
    // Add any query parameters if needed
    getArtworkById(queryParams);
  }, []);

  // Fetch bid product data
  useEffect(() => {
    if (!product) {
      return;
    }
    const queryParams: QueryParams = {};
    getBidProduct(queryParams);
  }, [product]);



  const previewArtPanel = {
    img: require("../../assets/previewArt.jpg"),
    name: 'Preview Art',
  }

  const creatorPanel = {
    img: require("../../assets/sampleProfilePicture1.png"),
  }

  const descriptionPanel = {
    description: 'Description:',
    price: 'Current Price:'
  }

  // Render loading state or error state if product is still loading or not found

  if (!product) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (!bidProduct ) {
    return (
    <div> 
      {/* Bid Item does not exist */}
      {/* <ErrorPage /> */}
    </div>);
  }
  

  return (
    <div className="flex bg-darkestGrey text-white h-screen overflow-clip">
      <Menu />
      <div className="bg-darkestGrey text-white h-screen w-full px-10 mx-auto py-10 space-y-5 overflow-scroll">
        <div>
          <button className="bg-darkGrey text-white text-center font rounded-lg text-2xl px-3 py-2 space-y-5" onClick={() => navigate('/bidding/' + product.id)}>{"<"}</button>
        </div>
        <div className="ml-6 space-y-3">
          <h1 className="text-4xl font-semibold">{product.name}</h1>
          <div className="flex items-center">
            <img className="h-1/12 w-1/12 rounded-full" src={creatorPanel.img} alt="Creator" />
            <p className="text-2xl font-semibold mx-8"> {product.artist} </p>
            <p className="text-2xl font-semibold flex-grow"> Bid Until: {bidProduct?.endDate} </p>
          </div>
          <div className="flex justify-center">
            <img className="w-1/2 object-cover rounded-lg" src={product.imageSrc} alt="Preview Art" />
            <div className="bg-darkGrey rounded-lg p-5 space-y-5">
              <p className="text-2xl font-semibold">
                Description:
              </p>
              <p className="text-md opacity">
                Product Rarity: {product.rarity} <br/>
                Product Medium: {product.medium} <br/>
                Product Material: {product.material}
              </p>
              <p className="text-xl font-semibold">Original Price: {formatCurrency(product.price)}</p>
              <p className="text-xl font-semibold">Starting Price: {formatCurrency(bidProduct?.startingBid)} </p>
            </div>
          </div>
          <div className="rounded-lg p-4 space-y-3">
            <p className="text-xl font-semibold ml-16  text-xl">Bid Amount</p>
            {less && <p className="text-red-500 text-sm ml-12">* Bid amount must be greater than 20</p>}
            <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-4 mr-24">
              <input
                className="text-black rounded-xl p-4 ml-16 text-md"
                type="text"
                placeholder="Enter Bid Amount"
                pattern="[0-9]+"
                value={bidAmount}
                onChange={(e) => setBidAmount(e.target.value)}
              />
              <button className="bg-white text-black text-center rounded-xl p-4 text-md" onClick = {(e) => handleBid(product.id, user.id, bidAmount, 20)} >Place Bid</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BiddingPurchasePage
