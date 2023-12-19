/* eslint-disable @typescript-eslint/no-unused-vars */

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
        img: "https://m.media-amazon.com/images/I/71MTbZ7mudL._SY679_.jpg",
        name: "jacob and co",
        price: 5000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 2,
        img: "https://shorturl.at/oJOW9",
        name: "mens watch rolex",
        price: 5000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 3,
        img: "https://shorturl.at/oqAH6",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 4,
        img: "https://shorturl.at/oqAH6",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "4cm",
            BandColour: "gold",
            CountryOrigin: "pcmc",
        },
    },
    {
        id: 5,
        img: "https://m.media-amazon.com/images/I/71H50orCyIL._SX679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 6,
        img: "https://m.media-amazon.com/images/I/61ybeKQto8L._SY679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 7,
        img: "https://m.media-amazon.com/images/I/61PRynUbNBL._SX522_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 8,
        img: "https://m.media-amazon.com/images/I/71MTbZ7mudL._SY679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 9,
        img: "https://m.media-amazon.com/images/I/61wgVZBtAAL._SX679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 10,
        img: "https://m.media-amazon.com/images/I/615nnoTis0S._SX522_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 11,
        img: "https://m.media-amazon.com/images/I/61gGGV2XPyL._SX679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
    {
        id: 12,
        img: "https://m.media-amazon.com/images/I/912b-CMCfLL._SY679_.jpg",
        name: "mens watch rolex",
        price: 9000,
        offer: 30,
        productdetail: {
            CaseDiameter: "",
            BandColour: "",
            CountryOrigin: "",
        },
    },
];
