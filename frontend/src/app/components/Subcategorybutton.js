
export default function SubcategoryButton({ subcategory, onClick }) {
    return (
      <button
        onClick={() => onClick(subcategory)}
        className="m-2 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {subcategory}
      </button>
    );
  }
  