import { useNavigation } from "react-router-dom";

const Loader = ({ size = "medium", color = "blue" }) => {
  const navigation = useNavigation();

  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-10 h-10",
    large: "w-16 h-16",
  };

  const colorClasses = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    purple: "border-purple-500",
    gray: "border-gray-500",
  };

  const sizeClass = sizeClasses[size] || sizeClasses.medium;
  const colorClass = colorClasses[color] || colorClasses.blue;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-200 bg-opacity-50 z-50">
      {navigation.state === "loading" && (
        <div
          className={`border-4 rounded-full animate-spin ${sizeClass} ${colorClass}`}
        ></div>
      )}
    </div>
  );
};

export default Loader;
