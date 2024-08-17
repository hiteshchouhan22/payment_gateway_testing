# PhonePe Payment Integration test in Next.js

### Prerequisites

-   Basic understanding of React.js.
-   Node.js and npm (Node Package Manager) installed on your machine.
-   PhonePe Merchant Account (Sign up on the PhonePe Business platform).

### Step 1: Setting Up the Server

1.  **Create a new directory for your project and navigate into it:**

    bash

    ```
    mkdir phonepe-payment-server cd phonepe-payment-server
    ```

3.  **Initialize a new Node.js project:**

    bash

    ```
    npm init -y
    ```

5.  **Install required dependencies:**

    bash

    ```
    npm install express cors crypto axios body-parser dotenv
    ```

7.  **Create a `.env` file in the root directory and add your environment variables:**

    env
    
    ```
    PORT=8000 SALT_KEY=your_salt_key MERCHANT_ID=your_merchant_id
    ```
    


