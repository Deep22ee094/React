import { useState, useEffect } from "react";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(resInfo);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5788&lng=91.8933&restaurantId=787772"
      );
      const json = await data.json();
      console.log(json);

      // You'll need to adjust this based on actual structure
      const restaurantDetails = json?.data?.cards?.find(
        (card) => card?.card?.card?.info
      );

      setResInfo(restaurantDetails?.card?.card?.info);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) return <h2>Loading...</h2>;

  const { name, cuisines, costForTwoMessage } = resInfo;

  return (
    <div className="menu">
      <h1>Hotel Empire</h1>
      <h3>{cuisines?.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burgers</li>
        <li>Diet Coke</li>
      </ul>
    </div>
  );
};

export default ResturantMenu;
