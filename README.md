# http-server-auth: a command-line http server with basic auth

`http-server-auth` is a simple, zero-configuration command-line http server.  It is powerful enough for production usage, but it's simple and hackable enough to be used for testing, local development, and learning.

# Installing globally:

Installation via `npm`:

     npm install http-server-auth -g

This will install `http-server-auth` globally so that it may be run from the command line.

## Usage:

     http-server-auth [options]

## Exemple using auth : 

N.B : If you use special chars and passing it using arguments, you must mind to escape them. 

    http-server-auth --username admin --password password -p 1234

# Installing as a node app

     mkdir myapp
     cd myapp/
     npm install http-server-auth

## Usage

### Starting http-server locally

     node lib/http-server-auth

## Available Options:

`-p` Port to use (defaults to 3000)
 
`--username` Username for basic authentication (defaults to 'admin')

`--password` Password for basic authentication (defaults to 'password')

`--path` Path to static page (defaults '/')

`-h` or `--help` Print this list and exit.
