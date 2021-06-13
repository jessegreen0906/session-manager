# session-manager

## Purpose

session-manager is a simple microservice to allow a client to create a session 
that other clients can easily join.

Once a client joins a session they are placed in a lobby. Allowing clients to have 
multiple iterations of a session.

The use case that most people will be familiar will be online party/quiz style games.

## Setup

TODO:

## Implementation

session-manager has two major suites of functionality.

### Session management
CRUD operations to the session are made by HTTP POST requests.

### Session events
Beyond the logic of managing the session, session-manager simply acts as an event bus
for other microservices to interact with clients through event based architecture.