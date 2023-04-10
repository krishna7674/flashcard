import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { deleteFlashCardById } from "../../utils/localStorage.js";
import { useSelector } from "react-redux";
import { selectUserCards } from "../../features/appSlice.js";

const DisplayCards = () => {
  const navigate = useNavigate();

  //Fetching user cards data from redux store
  const userCards = useSelector(selectUserCards);

  //numcards state for displaying the required number of cards
  const [numCards, setNumCards] = useState(6);

  //Function to Show all Hidden Cards
  const showAllCards = () => {
    setNumCards(userCards.length);
  };

  //The slice method is used to display the required number of cards.
  const slicedFlashCards = userCards.slice(0, numCards);

  //Function to delete flashcard with unique id from local storage
  const deletecard = (id) => {
    deleteFlashCardById(id);
  };

  //Function to navigate to card detail page with the help of unique card id
  const viewCard = (id) => {
    navigate(`/card/details/${id}`);
  };

  return (
    <>
      {userCards.length > 0 ? (
        <div className="mx-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 sm:mx-12 md:mx-20 lg:mx-24 mt-6 gap-4 ">
          {slicedFlashCards.map((card, index) => {
            return (
              <div
                key={index}
                className="capitalize bg-white border border-gray-400 rounded-md h-52 "
              >
                <div className="flex items-center px-3 pt-3 overflow-hidden text-ellipsis">
                  <span className="flex items-center justify-center text-center leading-3 text-gray-400  bg-red-100 h-12 w-12 rounded-full text-xs">
                    No <br /> Image
                  </span>

                  <div className=" ml-3 truncate">
                    <h1
                      data-testid="cardname"
                      className="w-14 lg:w-auto font-bold overflow-hidden text-ellipsis "
                    >
                      {card.groupName}
                    </h1>

                    <p className="text-base">{card.cardTerms.length} cards</p>
                  </div>
                </div>

                <div className="px-4 my-1.5 h-24 text-sm overflow-hidden">
                  <p className=" break-all ">{card.description}</p>
                </div>
                <div className="flex items-center justify-between overflow-hidden">
                  <div className="flex ml-4  text-yellow-700 font-semibold text-xs">
                    <button
                      onClick={() => viewCard(card.id)}
                      className="px-2 py-2 border-2 border-red-600 text-red-500 bg-slate-50 leading-none"
                    >
                      View Cards
                    </button>
                  </div>
                  <div className="flex align-middle-center justify-center">
                    <button
                      type="button"
                      className="mr-4"
                      onClick={() => {
                        deletecard(card.id);
                      }}
                    >
                      <MdDeleteOutline className="w-5 h-7 text-red-600" />
                    </button>
                    <button type="button"></button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="mx-24 my-10 bg-pink-300">
          <h3 className="text-red-600 text-xl">
            Your Flashcard is empty.Please add a new one.
            <br />
          </h3>
        </div>
      )}
      {userCards.length > 6 && (
        <div className="flex flex-wrap justify-end mx-24 h-32 ">
          <button
            onClick={() => showAllCards()}
            className="text-yellow-700 font-semibold text-md"
            href="/"
          >
            See all
          </button>
        </div>
      )}
    </>
  );
};

export default DisplayCards;
