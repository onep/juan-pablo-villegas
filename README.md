Dependencies
--

- Go
- Ruby
- Node
- Hugo
- Typescript
- Gulp cli
- Bundler
- Typings
- gsutil


Installation
--

- npm install
- bundle install

Running locally
__

- http://localhost:1313

Building
__

```
cd /Users/juanpi/Documents/Web/juan-pablo-villegas
hugo server
hugo
gsutil rsync -rd /Users/juanpi/Documents/Web/juan-pablo-villegas/public/  gs://www.jpvd.xyz
```
