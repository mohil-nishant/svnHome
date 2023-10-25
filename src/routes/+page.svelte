
<body>
    <h1>Affidavit Form</h1>
    <form action="your-server-script.php" method="post">
        <fieldset>
            <legend>Personal Information</legend>
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required><br><br>

            <label for="age">Age:</label>
            <input type="text" id="age" name="age" required><br><br>

            <label for="address">Residential Address:</label>
            <textarea id="address" name="address" required></textarea><br><br>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" name="dob" required><br><br>

            <!-- Add more personal information fields as needed -->
        </fieldset>

        <fieldset>
            <legend>Dealership Details</legend>
            <label for="dealerLocation">Location of RO Dealership:</label>
            <input type="text" id="dealerLocation" name="dealerLocation" required><br><br>

            <!-- Add more dealership details fields as needed -->
        </fieldset>

        <fieldset>
            <legend>Declaration</legend>
            <label for="declaration">I hereby verify that what has been stated above is true and correct to the best of my knowledge and nothing material has been concealed therefrom:</label>
            <textarea id="declaration" name="declaration" required></textarea><br><br>

            <!-- Add more declaration fields as needed -->
        </fieldset>

        <input type="submit" value="Submit">
    </form>
  </body>
