# Backend for Trading Application


## Overview

This is a trading application Backend built using Spring Boot, Java, and various other technologies. The application provides a platform for users to buy and sell cryptocurrencies.

### Features

* `User management`: users can create accounts, login, and manage their profiles
* `Wallet management`: users can create and manage their wallets, including depositing and withdrawing funds
* `Order management`: users can place buy and sell orders for cryptocurrencies
* `Payment processing`: the application integrates with a payment gateway to process transactions
* `API`: the application provides a RESTful API for accessing and manipulating data

### Technologies Used

* `Spring Boot`: The application is built using Spring Boot, a popular Java framework for building web applications
* `Java`: The application is written in Java, a popular programming language
* `MySQL`: the application uses MySQL as its database management system
* `Hibernate`: the application uses Hibernate, a popular ORM (Object-Relational Mapping) tool, to interact with the database

### API's Used
* `CoinGecko` : CoinGecko api is used to obtain the details, market value and Crypto coins data.
    + The Link for CoinGecko API is `https://api.coingecko.com/api/v3/coins/{coin-name}`
* `Stripe` : Stripe API is used for International Transactions.
* `RazorPay` : RazorPay API is used for National Transactions.


### Project Structure

* `com.akhi.trading_application`: the main package for the application
* `com.akhi.trading_application.controller`: package for controllers
* `com.akhi.trading_application.service`: package for services
* `com.akhi.trading_application.repository`: package for repositories
* `com.akhi.trading_application.model`: package for models
* `com.akhi.trading_application.implementation`: package for Service implementation
<!-- ### API Documentation

The API documentation is available at [insert link to API documentation]. -->

### Getting Started

1. #### Clone the repository: `git clone https://github.com/Akhilmak/Trading-Application.git`
2. #### Build the application: `mvn clean package`
3. #### Run the application: `java -jar target/trading-application.jar`

### Contributing

Contributions are welcome! If you'd like to contribute to the project, please fork the repository and submit a pull request.

### License

The application is licensed under the [insert license name] license.

### Acknowledgments

The application was built using various open-source libraries and frameworks. I would like to acknowledge the contributions of the following projects:

* `Spring Boot`
* `Java`
* `MySQL`
* `Hibernate`
