import * as TE from "fp-ts/TaskEither";
import {Book} from "../entities/book/book";

export const emulateBooksGetting = () =>
    TE.tryCatch<string, Array<Book>>(
        () =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (Math.random() > 0.5) {
                        const books = [
                            {
                                id: 1,
                                title: "Harry Potter and the Sorcerer's Stone",
                                coverSrc:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvKVsBfyOTanxaUqkOFifs7PdIz3AkEbmxSa6gH7L6bnYINSkxDhgu316_6dGUeziEbs&usqp=CAU",
                            },
                            {
                                id: 2,
                                title: "Harry Potter and the Chamber of Secrets",
                                coverSrc:
                                    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/91OINeHnJGL._AC_UF1000,1000_QL80_.jpg",
                            },
                            {
                                id: 3,
                                title: "Harry Potter and the Prisoner of Azkaban",
                                coverSrc:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3VobTiJ7AanV6JemiPiKaNVQhCL7RSNKcQHuvxFfjFOYLUSOXUStHIvlXcOWsu9_RSj8&usqp=CAU",
                            },
                            {
                                id: 4,
                                title: "Harry Potter and the Goblet of Fire",
                                coverSrc:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGky5EAuNeffzKGPH7ae1hEaESGj5hwfV1lIYq1RYYySMWkOMYU39E1sLBvSxOWNi0gD4&usqp=CAU",
                            },
                            {
                                id: 5,
                                title: "Harry Potter and the Order of the Phoenix",
                                coverSrc:
                                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3CUQ5V5Gy9anaVVPGzeoq9349EqaPcJoFzx_FNEQQAodijIQ356OomeJePUt2fKxLHg&usqp=CAU",
                            },
                            {
                                id: 6,
                                title: "Harry Potter and the Half-Blood Prince",
                                coverSrc:
                                    "https://m.media-amazon.com/images/I/51uO1pQc5oL._SY445_SX342_.jpg",
                            },
                            {
                                id: 7,
                                title: "Harry Potter and the Deathly Hallows",
                                coverSrc:
                                    "https://m.media-amazon.com/images/I/61ItOr+01UL._AC_SY300_SX300_.jpg",
                            },
                        ];
                        const emptyBooks: Array<Book> = [];

                        resolve(Math.random() > 0.5 ? books : emptyBooks);
                    } else {
                        reject("Error while receiving books");
                    }
                }, 1100);
            }),
        (error) =>
            typeof error === "string" ? error : "Unknown error while receiving books"
    );
