import Link from "next/link";
import { usePathname,useRouter } from "next/navigation";
const NAvbar = () => {
  const pathaname = usePathname();
  const router = useRouter();
  return (
    <nav className="flex bg-gray-800 py-2 px- justify-between">
      <div className="flex">
        <h1 className="text-white">Navbar</h1>
        <ul className="flex ml-5">
          <Link href="/">
            <li
              className={`mr-3 ${
                pathaname === "/" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Home
            </li>
          </Link>
          <Link href="/about">
            <li
              className={`mr-3 ${
                pathaname === "/about" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              About
            </li>
          </Link>
          <Link href="/about/profile">
            <li
              className={`mr-3 ${
                pathaname === "/about/profile" ? "text-blue-300" : "text-white"
              } cursor-pointer`}
            >
              Profile
            </li>
          </Link>
        </ul>
      </div>
      <div>
        <button className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
        onClick={()=>router.push("/login")}>Login</button>
      </div>
    </nav>
  );
};

export default NAvbar;
