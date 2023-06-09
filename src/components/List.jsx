import React from "react";

function List() {
  return (
    <ul className="flex flex-col w-full">
      <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
        Product discovery and building what matters
      </li>
      <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
        Measuring to ensure updates are a success
      </li>
      <li className="mt-2 list-image-[url('src/assets/images/icon-list.svg')]">
        And much more!
      </li>
    </ul>
  );
}

export default List;
