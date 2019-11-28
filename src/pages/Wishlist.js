import React from "react";
import Wish from "./Wish";

function Wishlist() {
  const [wishes, setWishes] = React.useState([]);

  async function fetchWishes() {
    const response = await fetch("http://localhost:8888/wishes");
    const newWishes = await response.json();
    setWishes(newWishes);
  }

  React.useEffect(() => {
    fetchWishes();
  }, []);

  return (
    <div>
      {wishes.map(wish => (
        <Wish key={wish.id} title={wish.title} priority={wish.priority} />
      ))}
    </div>
  );
}

export default Wishlist;
