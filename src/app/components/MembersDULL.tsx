import SingleCard from "./SingleCard";
import membersInfo from "../data/MembersInfo.json";
import formerMembers from "../data/FormerMembers.json"

export default function MembersDULL() {


  function cardInfo(members: any[]) {
    const cards = members
      .map((card, index) => (
        <SingleCard
          key={index}
          name={card.name}
          designation={card.designation}
          place={card.place}
          email={card.email}
          edu={card.edu}
          session={card.session}
          experience={card.experience}
          profile={card.profile}
          scholar={card.scholar}
          linkedin={card.linkedin}
          domainOfInterest={card.domainOfInterest}
          image={card.image}
        />
      ));
    return cards;
  }

  return (
    <div id="Members" className="flex flex-col items-center py-8 mx-8 lg:px-12">
      <h1 className="text-center mt-8 mb-2 text-2xl md:text-4xl">
        Members of DULL
      </h1>

      {/* Current Members Section */}
      <h1 className="text-center mt-8 mb-2 text-2xl md:text-4xl">
        Current Members
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12"> 
        {cardInfo(membersInfo)}
      </div>

      {/* Former Members Section */}
      <h1 className="text-center mt-8 mb-2 text-2xl md:text-4xl">
        Former Members
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {cardInfo(formerMembers)}
      </div>
    </div>
  );
}
