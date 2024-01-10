import * as TE from "fp-ts/TaskEither";
import {Book} from "../entities/book/book";
import {BookReview} from "../entities/bookReview/bookReview";

const reviews: Partial<Record<number, BookReview[]>> = {
    1: [
        {
            id: "65403ef33ad921498b5ea9ce",
            author: "Leblanc Franks",
            text:
                "Voluptate id sunt nisi do occaecat tempor ullamco incididunt eiusmod do. Voluptate fugiat sunt esse ut duis occaecat anim. Mollit minim deserunt in mollit elit culpa adipisicing. Id cillum fugiat enim commodo laborum incididunt est. Occaecat adipisicing eu labore ipsum duis aliqua ullamco eiusmod officia cupidatat irure Lorem tempor esse."
        },
        {
            id: "65403ef3e92f4f22c1ba8fb1",
            author: "Ewing Page",
            text:
                "Nisi commodo qui anim duis labore pariatur. Nostrud irure ad officia ex veniam dolor. Est aliquip cupidatat ad voluptate anim quis culpa enim pariatur qui commodo consequat elit. Laborum officia occaecat id proident ipsum laboris exercitation dolor exercitation consequat nisi enim. Ipsum reprehenderit ea excepteur ipsum officia laborum laboris incididunt eiusmod nulla consectetur reprehenderit."
        },
        {
            id: "65403ef3b1ff0971a2076324",
            author: "Barnett Logan",
            text:
                "Minim est Lorem nulla ad ipsum minim. Sunt amet minim dolor sunt culpa labore. Culpa qui commodo aliquip cupidatat labore ea excepteur non sint aliquip minim irure esse commodo. Ut veniam sunt ipsum laborum id eiusmod eiusmod culpa fugiat aliquip. Tempor sunt incididunt adipisicing ad mollit enim."
        },
        {
            id: "65403ef33831e7c3556a8369",
            author: "Josephine Heath",
            text:
                "Dolor eu officia id do mollit et id veniam velit irure. Esse duis ipsum enim pariatur eiusmod laboris cillum cupidatat officia mollit aliqua officia ad commodo. Excepteur eu consectetur aute ut ex laboris nulla irure et nostrud cupidatat. Consectetur voluptate cupidatat fugiat in pariatur enim esse in nulla. Officia proident cillum cupidatat nisi id voluptate velit dolor exercitation sint ut amet deserunt."
        },
        {
            id: "65403ef3687ce5603376a958",
            author: "Anastasia Hurley",
            text:
                "Pariatur minim eu quis duis culpa aliquip. Consectetur nulla occaecat nulla sunt qui nisi irure occaecat veniam aliquip. Nulla ad ad culpa sint deserunt et irure tempor. Magna nisi sit adipisicing ex nisi fugiat. Commodo nulla excepteur eu minim ad sunt nostrud labore laboris consequat nulla anim Lorem."
        }
    ],
    2: [
        {
            id: "65403f097f374c3a5d4cf3e0",
            author: "Vanessa Cantu",
            text:
                "Id labore ex eiusmod anim irure eu anim aute magna laboris tempor ea. Consectetur irure ullamco officia culpa commodo do dolore eiusmod."
        },
        {
            id: "65403f09f2144856fa630816",
            author: "Adela Welch",
            text:
                "Proident ea laborum nulla sint. Ipsum dolore excepteur ipsum adipisicing incididunt dolor anim nulla id non voluptate."
        },
        {
            id: "65403f09d2b119ef1f194a5e",
            author: "Johns Reeves",
            text:
                "Ut consequat magna nisi adipisicing qui labore sint magna quis consectetur minim. Officia velit irure exercitation ea ipsum non fugiat aliqua dolore eu."
        },
        {
            id: "65403f094057cd37ee74baf6",
            author: "Simmons Mcintyre",
            text:
                "Nisi non amet deserunt consequat do ullamco magna sint commodo. Eu eiusmod aute anim consectetur."
        },
        {
            id: "65403f091cc2abf126fc5eb5",
            author: "Higgins Beck",
            text:
                "Nisi sint Lorem eiusmod enim exercitation enim incididunt sit sunt excepteur aute eu cupidatat ea. Sunt nisi irure fugiat laboris quis eu sit irure incididunt qui."
        },
        {
            id: "65403f09155ba747395cdbeb",
            author: "Logan Pugh",
            text:
                "Eiusmod nisi tempor veniam adipisicing officia amet aliquip. Do duis magna minim officia aliquip."
        },
        {
            id: "65403f092e43ff210d3ec049",
            author: "Frances Sawyer",
            text:
                "Nisi dolor aute anim Lorem velit nulla. In sint proident irure duis pariatur est irure voluptate ut pariatur aliqua dolor non tempor."
        }
    ],
    3: [
        {
            id: "65403f14f7d87d710c60fde7",
            author: "Walton Gilbert",
            text: "Nisi dolor non pariatur proident mollit nostrud sunt consequat."
        },
        {
            id: "65403f14a6cc741eb2310a15",
            author: "Elinor Merrill",
            text:
                "Nisi cillum fugiat voluptate cupidatat occaecat eu anim duis culpa irure non irure id."
        },
        {
            id: "65403f14396478fd355a338a",
            author: "Bullock Bright",
            text:
                "Et anim incididunt in est qui est ullamco deserunt ipsum ipsum nostrud laboris culpa fugiat."
        },
        {
            id: "65403f14ca8e47783b454286",
            author: "Justine Valenzuela",
            text: "Quis esse ut ipsum minim consequat dolore ut."
        },
        {
            id: "65403f14f4fc92d677aecfae",
            author: "Celia Jefferson",
            text: "Officia anim cillum ad nulla anim dolore dolor fugiat."
        },
        {
            id: "65403f141f46ae242498da56",
            author: "Mari Ward",
            text:
                "Magna labore ipsum ad culpa ipsum tempor ea in officia voluptate do velit."
        }
    ],
    4: [],
    5: [
        {
            id: "65403f2bed925ba58a3edd43",
            author: "Alba Christian",
            text:
                "Dolore nisi aliqua aliquip laboris velit dolore pariatur irure nulla et. Velit cillum proident incididunt eiusmod occaecat laborum ipsum labore non in sint quis proident. Elit consectetur cupidatat id fugiat sit aliquip pariatur."
        },
        {
            id: "65403f2bd2c04e8d176db9ab",
            author: "Melanie Bass",
            text:
                "Commodo dolor do voluptate adipisicing do veniam ex exercitation ad consectetur anim. Ullamco irure cillum cillum nisi do est est. Ad proident nulla dolor Lorem exercitation veniam enim enim fugiat consequat laboris."
        },
        {
            id: "65403f2ba957b1bf97eca898",
            author: "Brandi Bates",
            text:
                "Ipsum nostrud officia consectetur quis pariatur excepteur elit ad fugiat duis deserunt incididunt ipsum. Aute est culpa ut aliqua. Adipisicing ad duis culpa nostrud commodo quis nulla dolor pariatur laborum."
        },
        {
            id: "65403f2bab45e34f44bf361e",
            author: "Meyers Dickson",
            text:
                "Eiusmod sint quis proident culpa dolore irure excepteur consequat non consectetur eu consequat officia proident. Non proident nostrud fugiat nostrud enim amet laboris veniam mollit reprehenderit incididunt ex ipsum et. Voluptate culpa aute ad quis nisi in."
        },
        {
            id: "65403f2b89b4e3115570e7c8",
            author: "Diana Molina",
            text:
                "Ipsum reprehenderit consectetur amet nisi voluptate pariatur ipsum. Aliqua commodo pariatur anim nostrud cupidatat elit in adipisicing. Minim mollit duis pariatur nostrud tempor."
        },
        {
            id: "65403f2b33d55c576228449a",
            author: "Willis Allen",
            text:
                "Cillum minim nulla duis aliqua non. Officia voluptate laborum quis proident tempor consectetur consectetur ea. Eu consequat deserunt magna magna exercitation occaecat consectetur nulla dolore reprehenderit non duis sunt minim."
        },
        {
            id: "65403f2bdd13f7715b5b082b",
            author: "Coleen Atkins",
            text:
                "Nisi do nostrud veniam officia. Veniam velit non commodo culpa adipisicing magna in officia esse consequat ipsum. Ex exercitation ex mollit nulla."
        }
    ],
    6: [
        {
            id: "65403f3634162bf422be5afe",
            author: "Boone Martin",
            text: "Aute esse incididunt aliquip consequat nostrud nostrud irure amet."
        },
        {
            id: "65403f369d86ba3a7d3f7bd3",
            author: "Jeanette Bolton",
            text: "Dolor excepteur esse adipisicing sunt quis id voluptate."
        },
        {
            id: "65403f36301b4d8ddc05555a",
            author: "Jarvis Decker",
            text:
                "Laborum aute dolor duis qui id exercitation ullamco non excepteur sint Lorem sunt nisi aute."
        },
        {
            id: "65403f369a4f29f0cf0e48b1",
            author: "Franco Obrien",
            text:
                "Cillum ut tempor officia sit sit nulla Lorem amet proident enim sint pariatur."
        },
        {
            id: "65403f363f57a6e6fa22bbd7",
            author: "Cummings Moss",
            text:
                "Ullamco minim pariatur nulla dolore nostrud sit consequat veniam ut incididunt minim."
        },
        {
            id: "65403f36c7c368957d984485",
            author: "Debra Holmes",
            text: "Pariatur id quis pariatur voluptate ea nisi cupidatat quis."
        },
        {
            id: "65403f362c05205a062457ef",
            author: "Gilda Bryant",
            text:
                "Incididunt ullamco exercitation voluptate ipsum nisi et magna excepteur magna."
        }
    ],
    7: [
        {
            id: "65403f43475cf8c5c7ecfa53",
            author: "Connie Everett",
            text:
                "Cupidatat dolor amet qui Lorem incididunt mollit incididunt quis ad tempor Lorem. Id sit laborum anim do ex commodo enim."
        },
        {
            id: "65403f43ec224e6568d53943",
            author: "Jacqueline Hodges",
            text:
                "Occaecat duis mollit do labore pariatur quis commodo velit dolore sunt fugiat. Id pariatur occaecat consectetur esse ea."
        },
        {
            id: "65403f43bb3dc68431399c54",
            author: "Rebekah Jacobson",
            text:
                "Cillum aute nisi mollit exercitation proident culpa commodo reprehenderit ex sint eiusmod voluptate. Velit mollit dolore deserunt exercitation tempor occaecat."
        },
        {
            id: "65403f4364c4b1f378757717",
            author: "Caldwell Moreno",
            text:
                "Aliqua nisi mollit incididunt labore irure ad labore. Magna consequat aliquip proident aute sunt eiusmod fugiat."
        },
        {
            id: "65403f4305338b06ea7c9fdc",
            author: "Vinson Mooney",
            text:
                "Eiusmod laboris aute commodo et elit aute et est. Ex commodo officia sunt ipsum reprehenderit."
        },
        {
            id: "65403f4326fb20dcd0f3c12b",
            author: "Shari Cohen",
            text:
                "Occaecat qui ipsum nostrud ipsum occaecat. Lorem laborum eiusmod non culpa officia nisi nisi."
        }
    ]
};

export const emulateBookReviewsGetting = ({id, title}: Pick<Book, "id" | 'title'>) =>
    TE.tryCatch<string, Array<BookReview>>(
        () =>
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    const reviewsById = reviews[id];
                    if (reviewsById) {
                        if (Math.random() > 0.5) {
                            resolve(Math.random() > 0.5 ? reviewsById : []);
                        } else {
                            reject("Error while receiving reviews");
                        }
                    } else {
                        reject(`No review for "${title}"`);
                    }
                }, 1250);
            }),
        (error) => typeof error === 'string'
            ? error
            : "Something went wrong"
    );
