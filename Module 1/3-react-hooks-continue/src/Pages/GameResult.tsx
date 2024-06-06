import React from "react";
import withBorder from "../components/WithBorder";
import UserAvatar from "../components/UserAvatar";

const UserWithBorder = withBorder(UserAvatar);
const GameResult = () => {
  return (
    <div>
      <UserAvatar imageUrl="https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png" />
      <UserWithBorder imageUrl="https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png" />
      <UserAvatar imageUrl="https://cdn.vox-cdn.com/thumbor/2E78dg_Cpbdh3nv6z0KKhOhYs6c=/0x0:1100x580/1200x800/filters:focal(520x151:696x327)/cdn.vox-cdn.com/uploads/chorus_image/image/71921482/bkq6gtrpcnw43vsm5zm62q3z.0.png" />
    </div>
  );
};

export default GameResult;
