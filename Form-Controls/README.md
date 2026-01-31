<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>T-Shirt Order Form</title>
</head>
<body>
  <header>
    <h1>T-Shirt Order Form</h1>
    <p>Please confirm your details and choose your t-shirt colour and size.</p>
  </header>

  <main>
    <form aria-label="T-Shirt Order Form">
      <!-- Customer Name -->
      <fieldset>
        <legend>Customer Details</legend>

        <label for="name">Full Name:</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          minlength="2" 
          required 
          aria-required="true"
          aria-describedby="nameHelp"
        >
        <p id="nameHelp">Enter at least 2 characters.</p>

        <label for="email">Email Address:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required 
          aria-required="true"
          aria-describedby="emailHelp"
        >
        <p id="emailHelp">Enter a valid email address (e.g., name@example.com).</p>
      </fieldset>

      <!-- T-Shirt Colour -->
      <fieldset>
        <legend>Choose Your T-Shirt Colour</legend>

        <p>Pick one of the available colours below:</p>

        <label for="colour">T-Shirt Colour:</label>
        <select id="colour" name="colour" required aria-required="true">
          <option value="" disabled selected>-- Select Colour --</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="blue">Blue</option>
        </select>
      </fieldset>

      <!-- T-Shirt Size -->
      <fieldset>
        <legend>Select Your Size</legend>

        <p>Please choose one size:</p>

        <label for="size">Size:</label>
        <select id="size" name="size" required aria-required="true">
          <option value="" disabled selected>-- Select Size --</option>
          <option value="XS">Extra Small (XS)</option>
          <option value="S">Small (S)</option>
          <option value="M">Medium (M)</option>
          <option value="L">Large (L)</option>
          <option value="XL">Extra Large (XL)</option>
          <option value="XXL">Double Extra Large (XXL)</option>
        </select>
      </fieldset>

      <!-- Submit -->
      <button type="submit">Submit Order</button>
    </form>
  </main>

  <footer>
    <p>© 2025 T-Shirt Store</p>
  </footer>
</body>
</html>





