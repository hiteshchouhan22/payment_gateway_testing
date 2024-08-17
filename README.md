# PhonePe Payment Integration test in Next.js

### Prerequisites

-   Basic understanding of React.js.
-   Node.js and npm (Node Package Manager) installed on your machine.
-   PhonePe Merchant Account (Sign up on the PhonePe Business platform).

### Step 1: Setting Up the Server

1.  **Navigate to Project:**

    bash

    ```
    cd payment_gateway_testing
    ```

3.  **Run  Next.js project:**

    bash

    ```
    npm install crypto axios body-parse uuid
    ```


4.  **Create a `.env` file in the root directory and add your environment variables:**

    env
    
    ```
    PORT=8000
    SALT_KEY=your_salt_key
    MERCHANT_ID=your_merchant_id
    ```
    


