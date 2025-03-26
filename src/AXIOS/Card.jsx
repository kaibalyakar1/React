import React, { useState } from "react";
import { ArrowRight, ExternalLink, Edit, Trash2 } from "lucide-react";

const Card = ({ item, onReadMore, onDelete }) => {
  const { id, title, body } = item;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border border-gray-200 overflow-hidden max-w-sm mx-auto relative">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-blue-600 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">
            ID: {id}
          </span>
          <div className="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.456 15.456 0 01-.383-.218 25.994 25.994 0 01-4.888-3.436 15.841 15.841 0 01-3.566-4.613c-.863-1.661-1.43-3.502-1.43-5.32V5.636a2.5 2.5 0 012.5-2.5h8.5a2.5 2.5 0 012.5 2.5v4.625c0 1.417-.298 2.85-.81 4.246a9.458 9.458 0 01-2.355 3.793l-.007.007-.002.002-.003.003z" />
            </svg>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h2>

        <p
          className={`text-gray-600 text-base mb-4 ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {isExpanded ? body : body}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <button
              onClick={() => {
                toggleExpand();
                onReadMore && onReadMore(item);
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center group"
            >
              {isExpanded ? "Show Less" : "Read More"}
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            {isExpanded && (
              <button
                onClick={() => window.open(`/details/${id}`, "_blank")}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center group"
              >
                Full Details
                <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
          </div>

          <span className="text-gray-400 text-sm">
            {new Date().toLocaleDateString()}
          </span>
        </div>

        {isExpanded && (
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
        )}

        <div className="flex justify-end space-x-2 mt-4">
          <button className="text-gray-500 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50">
            <Edit className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-red-600 transition-colors p-2 rounded-full hover:bg-red-50">
            <Trash2 onClick={() => onDelete(item.id)} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
