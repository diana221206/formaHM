<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Форма регистрации</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            width: 400px;
            margin: 0 auto;
        }
        input, select, textarea {
            width: 100%;
            margin: 5px 0;
            padding: 5px;
        }
        .radio-group, .checkbox-group {
            display: flex;
            gap: 10px;
        }
        .submit-btn {
            width: auto;
            padding: 5px 15px;
            display: block;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <form id="registrationForm">
            <label>User id [5 to 7 characters]:</label>
            <input type="text" id="userId" minlength="5" maxlength="7" required>

            <label>Password [7 to 12 characters]:</label>
            <input type="password" id="password" minlength="7" maxlength="12" required>

            <label>Name [Alphabets characters]:</label>
            <input type="text" id="name" pattern="[A-Za-zА-Яа-я]+" required>

            <label>Address [alphanumeric characters]:</label>
            <input type="text" id="address" pattern="[A-Za-zА-Яа-я0-9\s]+" required>

            <label>Country [Must select a country]:</label>
            <select id="country" required>
                <option value="">(Please select a country)</option>
                <option value="ru">Russia</option>
                <option value="us">USA</option>
                <option value="uk">UK</option>
                <option value="de">Germany</option>
            </select>

            <label>ZIP Code [alphanumeric characters]:</label>
            <input type="text" id="zipCode" pattern="[A-Za-z0-9]+" required>

            <label>Email [Valid email]:</label>
            <input type="email" id="email" required>

            <label>Sex [Select Male or Female]:</label>
            <div class="radio-group">
                <input type="radio" id="male" name="sex" value="Male" required>
                <label for="male">Male</label>
                <input type="radio" id="female" name="sex" value="Female" required>
                <label for="female">Female</label>
            </div>

            <label>Language [Optional]:</label>
            <div class="checkbox-group">
                <input type="checkbox" id="english" name="language" value="English">
                <label for="english">English</label>
                <input type="checkbox" id="nonEnglish" name="language" value="Non English">
                <label for="nonEnglish">Non English</label>
            </div>

            <label>About [Optional]:</label>
            <textarea id="about"></textarea>

            <button type="submit" class="submit-btn">Submit</button>
        </form>
    </div>

    <script>
        document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            const userId = document.getElementById('userId').value;
            const password = document.getElementById('password').value;
            const name = document.getElementById('name').value;
            const address = document.getElementById('address').value;
            const country = document.getElementById('country').value;
            const zipCode = document.getElementById('zipCode').value;
            const email = document.getElementById('email').value;
            const sex = document.querySelector('input[name="sex"]:checked')?.value;
            const languages = [...document.querySelectorAll('input[name="language"]:checked')].map(el => el.value);
            const about = document.getElementById('about').value;

            if (!userId
            
            !password
                !name
                  !address
                    !country
                      !zipCode
                        !email
                         || !sex)
                        
                    
                        {
                alert("Please fill all required fields.");
                return;
            }

            console.log({
                userId,
                password,
                name,
                address,
                country,
                zipCode,
                email,
                sex,
                languages,
                about
            });

            alert("Form submitted successfully!");
    
    });
    </script>
</body>
</html>
