import { FilterType } from "../../utils";
import "./Filter.scss";

interface FilterProps {
  filterType: string;
  toggleFilterType(type: FilterType): void;
}
const Filter = ({ toggleFilterType }: FilterProps) => {
  return (
    <div className="filter">
      <label
        className="filter__type"
        onClick={() => toggleFilterType(FilterType.Hot)}
      >
        <svg>
          <path d="M10.31.61a.5.5,0,0,0-.61,0C9.41.83,2.75,6.07,2.75,11.47a8.77,8.77,0,0,0,3.14,6.91.5.5,0,0,0,.75-.64,3.84,3.84,0,0,1-.55-2A7.2,7.2,0,0,1,10,9.56a7.2,7.2,0,0,1,3.91,6.23,3.84,3.84,0,0,1-.55,2,.5.5,0,0,0,.75.64,8.77,8.77,0,0,0,3.14-6.91C17.25,6.07,10.59.83,10.31.61Z"></path>
        </svg>
        Hot
      </label>
      <label
        className="filter__type"
        onClick={() => toggleFilterType(FilterType.New)}
      >
        <svg>
          <polygon
            fill="inherit"
            points="17.16 10 19.07 12.936 15.799 14.188 15.619 17.686 12.237 16.776 10.035 19.5 7.833 16.776 4.451 17.686 4.271 14.188 1 12.936 2.91 10 1 7.065 4.271 5.812 4.451 2.315 7.833 3.224 10.035 .5 12.237 3.224 15.619 2.315 15.799 5.812 19.07 7.065"
          ></polygon>
        </svg>
        New
      </label>
      <label
        className="filter__type"
        onClick={() => toggleFilterType(FilterType.Top)}
      >
        <svg>
          <path
            fill="inherit"
            d="M1.25,17.5 L1.25,7.5 L6.25,7.5 L6.25,17.5 L1.25,17.5 Z M12.49995,17.5001 L7.49995,17.5001 L7.49995,5.0001 L4.99995,5.0001 L9.99995,0.0006 L14.99995,5.0001 L12.49995,5.0001 L12.49995,17.5001 Z M13.75,17.5 L13.75,12.5 L18.75,12.5 L18.75,17.5 L13.75,17.5 Z"
          ></path>
        </svg>
        Top
      </label>
      <label
        className="filter__type"
        onClick={() => toggleFilterType(FilterType.Rising)}
      >
        <svg>
          <path
            fill="inherit"
            d="M18.5 4h-6a.5.5 0 0 0-.35.85l1.64 1.65-3.29 3.29L8.21 7.5a1 1 0 0 0-1.41 0L.65 13.65a.5.5 0 0 0 0 .71l2 2a.5.5 0 0 0 .71 0l4.14-4.15 2.29 2.29a1 1 0 0 0 1.41 0l5.3-5.29 1.65 1.65a.5.5 0 0 0 .85-.36v-6a.5.5 0 0 0-.5-.5z"
          ></path>
        </svg>
        Rising
      </label>
    </div>
  );
};

export default Filter;
