import birthday from "../assets/birthday.jpg";
import anniversary from "../assets/anniversary.jpg";
import festival from "../assets/festival.jpg";

const templates = [
  {
    id: 1,
    category: "Birthday",
    image: birthday,
    premium: false,
  },
  {
    id: 2,
    category: "Anniversary",
    image: anniversary,
    premium: true,
  },
  {
    id: 3,
    category: "Festival",
    image: festival,
    premium: false,
  },
];

export default templates;