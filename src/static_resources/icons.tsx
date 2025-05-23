const icons: Map<string, React.ReactNode> = new Map<string, React.ReactNode>();
icons.set(
  "logo",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>alpha-a-circle-outline</title>
    <path
      fill="white"
      d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"
    />
  </svg>
);
icons.set(
  "logo black",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="max-w-16"
  >
    <title>A blogs</title>
    <path d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
  </svg>
);
icons.set(
  "overview",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>dashboard</title>
    <path
      fill="white"
      d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z"
    />
  </svg>
);
icons.set(
  "overview black",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>dashboard</title>
    <path d="M19,5V7H15V5H19M9,5V11H5V5H9M19,13V19H15V13H19M9,17V19H5V17H9M21,3H13V9H21V3M11,3H3V13H11V3M21,11H13V21H21V11M11,15H3V21H11V15Z" />
  </svg>
);
icons.set(
  "post",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>post</title>
    <path
      fill="white"
      d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z"
    />
  </svg>
);
icons.set(
  "post black",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>post</title>
    <path d="M3 3V21H21V3H3M18 18H6V17H18V18M18 16H6V15H18V16M18 12H6V6H18V12Z" />
  </svg>
);
icons.set(
  "comment",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>comment</title>
    <path
      fill="white"
      d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
    />
  </svg>
);
icons.set(
  "comment black",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>comment</title>
    <path d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z" />
  </svg>
);
icons.set(
  "comment gray",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>comment</title>
    <path
      fill="gray"
      d="M12,23A1,1 0 0,1 11,22V19H7A2,2 0 0,1 5,17V7A2,2 0 0,1 7,5H21A2,2 0 0,1 23,7V17A2,2 0 0,1 21,19H16.9L13.2,22.71C13,22.89 12.76,23 12.5,23H12M13,17V20.08L16.08,17H21V7H7V17H13M3,15H1V3A2,2 0 0,1 3,1H19V3H3V15M9,9H19V11H9V9M9,13H17V15H9V13Z"
    />
  </svg>
);
icons.set(
  "user",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>users</title>
    <path
      fill="white"
      d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"
    />
  </svg>
);
icons.set(
  "user gray",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>users</title>
    <path
      fill="gray"
      d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z"
    />
  </svg>
);
icons.set(
  "user black",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>users</title>
    <path d="M16 17V19H2V17S2 13 9 13 16 17 16 17M12.5 7.5A3.5 3.5 0 1 0 9 11A3.5 3.5 0 0 0 12.5 7.5M15.94 13A5.32 5.32 0 0 1 18 17V19H22V17S22 13.37 15.94 13M15 4A3.39 3.39 0 0 0 13.07 4.59A5 5 0 0 1 13.07 10.41A3.39 3.39 0 0 0 15 11A3.5 3.5 0 0 0 15 4Z" />
  </svg>
);
icons.set(
  "new window",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="max-w-8"
  >
    <title>open-in-new</title>
    <path
      fill="white"
      d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z"
    />
  </svg>
);
icons.set(
  "new window black",
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="max-w-8"
  >
    <title>open-in-new</title>
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  </svg>
);

icons.set(
  "magnify",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>search</title>
    <path
      fill="gray"
      d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
    />
  </svg>
);

icons.set(
  "logout",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>logout</title>
    <path
      fill="white"
      d="M14.08,15.59L16.67,13H7V11H16.67L14.08,8.41L15.5,7L20.5,12L15.5,17L14.08,15.59M19,3A2,2 0 0,1 21,5V9.67L19,7.67V5H5V19H19V16.33L21,14.33V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3H19Z"
    />
  </svg>
);
icons.set(
  "plus",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>add</title>
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="white" />
  </svg>
);
icons.set(
  "close",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>close</title>
    <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
  </svg>
);
icons.set(
  "view",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>view</title>
    <path
      fill="gray"
      d="M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M12,4.5C17,4.5 21.27,7.61 23,12C21.27,16.39 17,19.5 12,19.5C7,19.5 2.73,16.39 1,12C2.73,7.61 7,4.5 12,4.5M3.18,12C4.83,15.36 8.24,17.5 12,17.5C15.76,17.5 19.17,15.36 20.82,12C19.17,8.64 15.76,6.5 12,6.5C8.24,6.5 4.83,8.64 3.18,12Z"
    />
  </svg>
);
icons.set(
  "edit",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>edit</title>
    <path
      fill="blue"
      d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
    />
  </svg>
);

icons.set(
  "delete",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>delete</title>
    <path
      fill="red"
      d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z"
    />
  </svg>
);

icons.set(
  "file",
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>file</title>
    <path
      fill="gray"
      d="M6,2A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6M6,4H13V9H18V20H6V4M8,12V14H16V12H8M8,16V18H13V16H8Z"
    />
  </svg>
);
export default icons;
