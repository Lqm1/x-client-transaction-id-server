# X-Client-Transaction-ID Server

A simple API server built with Elysia and Bun runtime that generates transaction IDs for client requests. This service provides a single endpoint that returns a unique transaction ID based on HTTP method and pathname parameters.

## Features

- Generates unique transaction IDs for client requests
- Built with Elysia framework and Bun runtime
- Includes Swagger documentation for API exploration

## Prerequisites

- [Bun](https://bun.sh) installed on your system

## Installation

Clone this repository and install dependencies:

```bash
# Clone the repository
git clone https://github.com/Lqm1/x-client-transaction-id-server.git
cd x-client-transaction-id-server

# Install dependencies
bun install
```

## Development

Start the development server with hot reloading:

```bash
bun run dev
```

The server will be available at http://localhost:3000/

## API Usage

### Generate a Transaction ID

```
GET /x-client-transaction-id?method=METHOD&pathname=PATHNAME
```

#### Query Parameters

- `method`: HTTP method (e.g., GET, POST)
- `pathname`: URL pathname (e.g., /graphql/UserTweets)

#### Example Request

```
GET /x-client-transaction-id?method=GET&pathname=/graphql/UserByScreenName
```

#### Example Response

```json
{
  "x-client-transaction-id": "generated-transaction-id-here"
}
```

## API Documentation

Swagger documentation is available at http://localhost:3000/swagger when the server is running.

## Docker Deployment

You can easily deploy this service using Docker with the pre-built image from GitHub Container Registry (ghcr.io).

### Pull and Run the Docker Image

```bash
# Pull the latest image
docker pull ghcr.io/lqm1/x-client-transaction-id-server:master

# Run the container
docker run -d --name x-client-transaction-id-server -p 3000:3000 ghcr.io/lqm1/x-client-transaction-id-server:master
```

The server will be available at http://localhost:3000/

### Build Your Own Docker Image

Alternatively, you can build the Docker image yourself:

```bash
# Build the Docker image
docker build -t x-client-transaction-id-server .

# Run the container
docker run -d --name x-client-transaction-id-server -p 3000:3000 x-client-transaction-id-server
```

## License

MIT
