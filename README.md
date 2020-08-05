# Product_details
MountainCrow is a full stack application that displays various products with their details, descriptions, and reviews. The goal of the application was to focus on deployment and scalability. Each component of the application was separately scaled and load-balanced using AWS EC2 instances and NGINX.

This repository holds the product details component of the MountainCrow application. This module was scaled and stress tested at 10,000 request per second. The average latency was 65.4ms with a .001% error margin. 

## Related Projects

  - https://github.com/MountainCrow/Product-description-service
  - https://github.com/MountainCrow/reviews
  - https://github.com/teamName/repo

## Table of Contents

1. [Requirements](#requirements)
1. [Development](#development)


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- npm 
- Postgres

### Installing Dependencies

From within the root directory:

```sh
npm install 
```
## Development

To Run Server

```sh
npm start
```

To run dev enviroment/webpack

```sh
npm run react-dev
```

To run test

```sh
npm test
```
