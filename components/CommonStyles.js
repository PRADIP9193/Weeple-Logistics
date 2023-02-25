// This will be used in all the pages except pages\blog.js

// This is list of all the styles that are used in the template
export default function CommonStyles() {
  return (
    <>
      <div>
        <link href="../assets/css/bootstrap.css" rel="stylesheet" />
        <link href="../assets/css/main.css" rel="stylesheet" />
        <link href="../assets/css/responsive.css" rel="stylesheet" />
        <link
          rel="shortcut icon"
          href="../assets/images/favicon.png"
          type="image/x-icon"
        />
        <link
          rel="icon"
          href="../assets/images/favicon.png"
          type="image/x-icon"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
      </div>
    </>
  );
}
