import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[90lvh]">
      <h1 className="text-8xl">404</h1>
      <p>Uh-oh! You seem lost, traveler.</p>
      <Link to={"/"}>
        <Button className="mt-7">Teleport to Home</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
