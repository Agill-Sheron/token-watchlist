# HolderScan - Frontend Assessment
**Token Watchlists**

This assessment has been designed to take no longer than a few hours to complete. Please do not spend more than 6 hours to complete this assessment. 

**Task**

Create a simple, responsive frontend application for creating a token watchlist from the available Solana tokens on HolderScan.com. 

**Requirements**
- Retrieve the available tokens via API call(s) - API key has been shared to your email
    - You may call the API in any way you see fit - with or without filter and limit params (see more in API Methods)
- Create a responsive search bar for finding specific tokens
    - Users can search by token name or ticker
    - Return the first 10 results
    - The results should contain the token name, ticker, contract address, and image
- Allow users to add tokens to a watchlist from the tokens in the search results
- Create a list or table component to display their watchlist
- Allow users to remove tokens from their watchlist
- Use state management to manage the user's token list
    - Watchlist does not need to persist on reload


**API Methods**

We have made availabe the endpoint:

**https://assessment-backend-primary-5kgrn.ondigitalocean.app/tokens**

- You may call GET /tokens to retrieve all supported tokens - or filtered results by suppling query paramters limit and filter.
- Optional parameters:
    - limit {int} - limits the response length to the given integer
    - filter {string} - applies a filter on token_name, token_ticker, and token_ca - returns all matches in any of these fields
      
Example usage:

**https://assessment-backend-primary-5kgrn.ondigitalocean.app/tokens?limit=3&filter=bonk**

Example response:

```
[
    {
        "token_ca": "B582oxHHy41ijxaGem3GksSWAVBfr2fJxNKrL7mpC1z1",
        "token_name": "Som Bonkmon Fraud",
        "token_ticker": "SBF",
        "token_icon": "https://holderscan-main.nyc3.cdn.digitaloceanspaces.com/pngs/token_icons/32/SBF32_B582oxHHy41ijxaGem3GksSWAVBfr2fJxNKrL7mpC1z1.png",
        "network": "SOL"
    },
    {
        "token_ca": "DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",
        "token_name": "Bonk",
        "token_ticker": "BONK",
        "token_icon": "https://holderscan-main.nyc3.cdn.digitaloceanspaces.com/pngs/token_icons/32/BONK32_DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263.png",
        "network": "SOL"
    },
    {
        "token_ca": "BgQ2Tj4y4YQume4guQrkK8RWB8oRQtHYtAta1tXubL1G",
        "token_name": "Bonkwifhat",
        "token_ticker": "BIF",
        "token_icon": "https://holderscan-main.nyc3.cdn.digitaloceanspaces.com/pngs/token_icons/32/BIF32_BgQ2Tj4y4YQume4guQrkK8RWB8oRQtHYtAta1tXubL1G.png",
        "network": "SOL"
    }
]
```

**Evaluation Criteria**

We will evaluate this assessment based on:
- Component design and resuability
- Code organization and maintainability
- Responsive design
- Code performance
- Visual design


**Submission**

Submit your code by pushing it to the github classroom assignment repository shared to your email. Include any steps and instructions to run your application in the README.

