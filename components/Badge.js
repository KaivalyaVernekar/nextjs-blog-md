import Link from "next/link";

export default function Badge({ children }) {
  const colorKey = {
    JavaScript: "yellow",
    CSS: "blue",
    Python: "green",
    PHP: "purple",
    Ruby: "red",
  };

  const getColorClass = (hasHover = true) => {
    switch (children) {
      case "JavaScript":
        return `bg-yellow-600 ${hasHover ? "hover:bg-yellow-800" : ""}`;
      case "CSS":
        return `bg-blue-600 ${hasHover ? "hover:bg-blue-800" : ""}`;
      case "Python":
        return `bg-green-600 ${hasHover ? "hover:bg-green-800" : ""}`;
      case "PHP":
        return `bg-purple-600 ${hasHover ? "hover:bg-purple-800" : ""}`;
      case "Ruby":
        return `bg-red-600 ${hasHover ? "hover:bg-red-800" : ""}`;
      default:
        return `bg-pink-600 ${hasHover ? "hover:bg-pink-800" : ""}`;
    }
  };

  return (
    <div
      className={`px-2 py-1 ${getColorClass()} text-gray-100 font-bold rounded-full`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
}
