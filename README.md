# Task Title: CRUD App with Database

Create a simple express application that:

1. Connects to a database
2. Creates the payload:

   ```
    {
           message: String,
           data: Object
    }
   ```

   This means you are to return an object containing a message that tells the client if the request is successful or not, and data object containing your result.
   If there's an error in the request, the response should return the error message instead.

3. Gets the data created
4. Updates the data created
5. Deletes the data created

The data you are required to create should contain `name`, `email` and `country`

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

## Documentation

**BASE URL**

`https://zuri-crud.herokuapp.com/api/v1`

**Methods**:

`GET | POST | DELETE | PUT`

### Register User

Creates user with sample payload below:

```JSON
Content-Type: application/json

{
    "name": "Broke John",
    "email": "me@email.com",
    "country": "Nigeria"
}
```

- **URL**: `/register`

- **Method**: `POST`

- **Data Params**

  **Required:**

  `name=[String]`

  `email=[String]`

  `country=[String]`

- **Success Response:**

  - **Code:** 201

    **Content:**

    ```JSON
    {
    "success": true,
    "message": "Account created",
    "data": {
    "_id": "6092b62d4332014f9ef4122e",
    "name": "Broke John",
    "email": "me@email.com",
    "country": "Nigeria",
    "createdAt": "2021-05-05T15:13:49.344Z",
    "updatedAt": "2021-05-05T15:13:49.344Z",
    }
    ```

- **Error Response:**

  - **Code:** 422

  - **Content:**

    ```JSON
    {
        "success": false,
        "error": "\"name\" is required"
        }
    ```

- Sample Call:

  ```bash
  curl --location --request POST '/register' \
  --data-raw '{
  "nam": "Jermaine Lamarr Cole",
  "email": "cole@email.com",
  "country": "USA"
  }'
  ```

### Get User

Return json data about all users.

- **URL**: `/user`

- **Method**: `GET`

- **Data Params**

  None

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```JSON
    {
    "success": true,
    "data": [
        {
            "_id": "6092b62d4332014f9ef4122e",
            "name": "Broke John",
            "email": "me@email.com",
            "country": "Nigeria",
            "createdAt": "2021-05-05T15:13:49.344Z",
            "updatedAt": "2021-05-05T15:13:49.344Z",
        }
    ]
    ```

- **Error Response:**

  - **Code:** 500

  - **Content:**

    ```JSON
    {
        "success": false,
        "error": "server error"
        }
    ```

- Sample Call:

  ```bash
  curl --location --request GET '/user \
  ```

### Update User Details

Update user details with sample payload below:

```JSON
Content-Type: application/json

{
    "name": "Broke John",
    "email": "me@email.com",
    "country": "Nigeria"
}
```

- **URL**: `/user`

- **Method**: `PUT`

- **Data Params**

  **Required:**

  `name=[String]`

  `email=[String]`

  `country=[String]`

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```JSON
    {
    "success": true,
    "message": "Account updated",
    "data": {
    "_id": "6092b62d4332014f9ef4122e",
    "name": "Broke John",
    "email": "me@email.com",
    "country": "Nigeria",
    "createdAt": "2021-05-05T15:13:49.344Z",
    "updatedAt": "2021-05-05T15:13:49.344Z",
    }
    ```

- **Error Response:**

  - **Code:** 422

  - **Content:**

    ```JSON
    {
        "success": false,
        "error": "\"name\" is required"
        }
    ```

- Sample Call:

  ```bash
  curl --location --request PUT '/user' \
  --data-raw '{
  "nam": "Jermaine Lamarr Cole",
  "email": "cole@email.com",
  "country": "USA"
  }'
  ```



### Delete User

Delete user data

- **URL**: `/user/:id`

- **Method**: `DELETE`

- **URL Params**

  `id=[string]`

- **Success Response:**

  - **Code:** 200

    **Content:**

    ```JSON
    {
    "success": true,
    "message": "user removed" 
    ```

- **Error Response:**

  - **Code:** 404

  - **Content:**

    ```JSON
    {
        "success": false,
        "message": "user not found"
        }
    ```

- Sample Call:

  ```bash
  curl --location --request DELETE '/user/:id \
  ```
