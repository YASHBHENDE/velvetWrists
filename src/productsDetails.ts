

export interface prod_details {
    id: number;
    img: string;
    name: string;
    price: number;
    offer: number;
    productdetail: {
        CaseDiameter: string;
        BandColour: string;
        CountryOrigin: string;
    };
}

export type productdetail_array = prod_details[]  ;

export const ProductsDetails: productdetail_array = [
    {
        id: 1,
        img: "https://shorturl.at/rtQ25",
        name: "rolex GMT-2",
        price: 10000,
        offer: 30,
        productdetail: {
            CaseDiameter: "44mm",
            BandColour: "gray steel",
            CountryOrigin: "US",
        },
    },
    {
        id: 2,
        img: "https://shorturl.at/biwVW",
        name: "rolex Cosmograph Daytona",
        price: 15000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "gold-graysteel",
            CountryOrigin: "US",
        },
    },
    {
        id: 3,
        img: "https://shorturl.at/qtDG4",
        name: "rolex Sea-Dweller",
        price: 13000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "gray-whitish steel",
            CountryOrigin: "US",
        },
    },
    {
        id: 4,
        img: "https://rb.gy/dcdhcm",
        name: "jacob and co astromania",
        price: 100000,
        offer: 30,
        productdetail: {
            CaseDiameter: "4cm",
            BandColour: "dark blue",
            CountryOrigin: "US",
        },
    },
    {
        id: 5,
        img: "https://rb.gy/dhh0zr",
        name: "jacob and co astro revolution",
        price: 750000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "dark brown",
            CountryOrigin: "US",
        },
    },
    {
        id: 6,
        img: "https://shorturl.at/clAMQ",
        name: "jacob and co astro white-gold revol",
        price: 600000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "dark blue",
            CountryOrigin: "US",
        },
    },
    {
        id: 7,
        img: "https://shorturl.at/oxS18",
        name: "breitling superocean heritage",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "Brown",
            CountryOrigin: "US",
        },
    },
    {
        id: 8,
        img: "https://shorturl.at/klDY9",
        name: "breitling automatic 44",
        price: 10000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "Brwon",
            CountryOrigin: "US",
        },
    },
    {
        id: 9,
        img: "https://shorturl.at/mnxVX",
        name: "breitling automatic 44",
        price: 15000,
        offer: 30,
        productdetail: {
            CaseDiameter: "55mm",
            BandColour: "stainless steel",
            CountryOrigin: "US",
        },
    }
];
