# Getting Started

## For now, if you POST to /trees, you'll get the position of 5 random trees in the lumpini park. This is just help integrating with the frontend.

# Getting Started

```
npm install
npm run dev
```

# Available endpoints _(TODO Add clean up the documentation)_

_Everything here is subjected to heavy change_

## **/trees** 

Gets all tree within a given GeoJson polygon object.

```ts
// Request
type TreesRequest = {
  coordinates: number[][]
}
// Response
type TreesResponse = {
    trees: Tree[];
}

interface Tree {
  properties?: {
    commonName?: string;
    species?: string;
    genus?: string;
    quote?: TreeQuote & {
      quote?: string;
      description?: string;
    };
    appearance?:  {
      color?: string;
      imgLink?: string;
    };
    carbonProfile?:  {
      carbonAbsorption?: {
        amount: number;
        unit: string;
        per: "year" | "month" | "day";
      };
      o2Emission?: {
        amount: number;
        unit: string;
        per: "year" | "month" | "day";
      };
    };
  };
}

```

## **/upload**

Uploads an image to the server to be stored in the database, as well as upload the data to an open database.

```ts
interface TreeUploadRequest {
  base64Image: string;
}
```

Response: void


