const notFound = (req, res) => {
  res.status(404).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>404 - Not Found</title>
        <link rel="stylesheet" href="/css/404.css">
      </head>
      <body>
        <div class="not-found">
          <h1>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>We can't seem to find the page you're looking for.</p>
          <a href="/">Go to Homepage</a>
        </div>
      </body>
    </html>
  `)
}

export default notFound;
